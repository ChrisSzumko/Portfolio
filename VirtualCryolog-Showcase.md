<p align="center">
  <img src="static/virtual-cryolog/execution-flow.svg" width="760" alt="VirtualCryolog synchronising local Cryolog SQL telemetry with CryoHub Cloud through a checkpointed edge worker" />
</p>

<h1 align="center">VirtualCryolog</h1>

<p align="center">
  <b>A replay-safe edge worker I built solo that brings legacy cryogenic monitoring data into CryoHub Cloud —
  without exposing the local database.</b>
</p>

<div align="center">

![Status](https://img.shields.io/badge/Status-Deployed-2ea44f?style=for-the-badge)
![Role](https://img.shields.io/badge/Role-Sole%20Developer-6f42c1?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.12%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-Cryolog-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-105%20Passing-16A34A?style=for-the-badge)

</div>

<p align="center">
  <a href="#purpose">Purpose</a> ·
  <a href="#architecture">Architecture</a> ·
  <a href="#engineering">Engineering</a> ·
  <a href="#quality">Quality</a>
</p>

<br>

Cryolog installations record operationally critical temperature, level and alarm data in a local SQL Server database. I built VirtualCryolog to translate that hardware-specific telemetry into CryoHub Cloud v2 payloads, deliver it reliably, and resume from durable checkpoints after interruptions.

**My role: Sole developer · architecture, implementation, testing, packaging and maintenance**

I designed and built the complete worker: its synchronisation lifecycle, device-family translations, local checkpoint store, HTTP and SQL failure handling, AWS integrations, automated tests and single-file Windows distribution.

<table width="100%">
  <tr>
    <td width="25%" valign="top">
      <h3 align="center"><img src="static/virtual-cryolog/history.svg" alt="History icon" width="20"> Resume safely</h3>
      <p align="center">Reconcile local and cloud log IDs before every bounded query.</p>
    </td>
    <td width="25%" valign="top">
      <h3 align="center"><img src="static/virtual-cryolog/shuffle.svg" alt="Shuffle icon" width="20"> Translate hardware</h3>
      <p align="center">Convert distinct device records and event flags into consistent cloud channels.</p>
    </td>
    <td width="25%" valign="top">
      <h3 align="center"><img src="static/virtual-cryolog/shield-check.svg" alt="Shield icon" width="20"> Contain failures</h3>
      <p align="center">Keep one faulty device from blocking the rest of the fleet.</p>
    </td>
    <td width="25%" valign="top">
      <h3 align="center"><img src="static/virtual-cryolog/package.svg" alt="Package icon" width="20"> Deploy simply</h3>
      <p align="center">Ship the Python worker as a single Windows executable.</p>
    </td>
  </tr>
</table>

<!--
OPERATIONAL VIEW — successful synchronisation cycle

Capture an anonymised terminal or log view showing several device families completing one cycle, checkpoint persistence and the CloudWatch heartbeat. The image should demonstrate quiet, observable operation rather than expose real device identifiers.
-->

<br>

<a name="purpose"></a>
<h2 align="center"><img src="static/virtual-cryolog/telescope.svg" alt="Telescope icon" width="24"> Purpose</h2>

VirtualCryolog runs beside a local Cryolog installation. It reads newer `DeviceRecord` rows from Microsoft SQL Server, converts them into CryoHub's channel-oriented data model, posts them over authenticated HTTP and records the latest accepted log ID in `devices.csv`.

The worker supports multiple generations of cryogenic equipment through explicit aliases and event vocabularies, including QAR, MVE, temperature and level gauges, Mowden devices, legacy multi-channel CryoPanel-4 records, and newer independently recorded CP4 probes and valve events.

| Operational need | VirtualCryolog behaviour |
| :--- | :--- |
| **Preserve continuity across restarts** | Starts after the greater of the local CSV checkpoint and CryoHub's latest log ID. |
| **Catch up without unbounded requests** | Reads at most 100 newer records per device and cycle. |
| **Keep mixed hardware understandable** | Maps device-specific readings, channels and terse event flags into stable CryoHub payloads. |
| **Avoid fleet-wide blockage** | Logs ordinary per-device errors and continues with the next configured device. |
| **Retain completed progress** | Writes all in-memory checkpoints once at the end of the cycle, including during an interrupted cycle. |

<br>

<a name="architecture"></a>
<h2 align="center"><img src="static/virtual-cryolog/layers.svg" alt="Layers icon" width="24"> Architecture</h2>

The design is intentionally small and sequential: one process, one shared database connection, one authenticated HTTP session and one local registry. That makes ordering and checkpoint behaviour explicit while keeping deployment practical on existing Windows hosts.

```mermaid
flowchart LR
    subgraph edge["Local Windows host"]
        sql[("Cryolog SQL Server<br/>DeviceRecord")]
        worker["VirtualCryolog<br/>sequential sync worker"]
        csv[("devices.csv<br/>device registry + checkpoints")]
        sql -->|"up to 100 newer rows"| worker
        csv <-->|"load + atomic cycle write"| worker
    end

    secrets["AWS Secrets Manager<br/>optional credentials"] -.-> worker
    worker -->|"GET remote checkpoint<br/>POST translated batches"| cloud["CryoHub Cloud v2"]
    worker -->|"cycle heartbeat"| metrics["AWS CloudWatch"]
```

| **Component** | **Technology** | **Description** |
| :--- | :--- | :--- |
| **Runtime** | <img src="https://skillicons.dev/icons?i=python" height="40" valign="middle" /> | Python 3.12+ worker using `requests` / `urllib3` with pooled, retrying HTTP sessions. |
| **Source data** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" width="40" valign="middle" /> | Cryolog's local SQL Server database, read through `pyodbc`. |
| **Cloud services** | <img src="https://skillicons.dev/icons?i=aws" height="40" valign="middle" /> | Secrets Manager for credentials and CloudWatch for per-cycle heartbeats. |
| **Distribution** | <img src="https://skillicons.dev/icons?i=windows" height="40" valign="middle" /> | PyInstaller one-file executable, run as a Windows service. |

<br>

<a name="engineering"></a>
<h2 align="center"><img src="static/virtual-cryolog/cpu.svg" alt="Processor icon" width="24"> Engineering</h2>

<details open>
<summary><strong>Recovery — reconcile before reading, checkpoint after acceptance</strong></summary>

<br>

The local CSV is durable state, but it is not treated as the only source of truth. Before querying Cryolog, the worker asks CryoHub for its latest log ID and resumes after the greater local or remote value. This prevents stale local state from replaying an entire history and lets the cloud checkpoint recover progress that was accepted remotely but not yet written locally.

The checkpoint advances only after every prepared channel batch for a device is accepted. A smaller-than-limit batch then triggers cloud alarm evaluation; a full batch defers that check so backlog processing can continue first.

| Challenge | Decision | Result |
| :--- | :--- | :--- |
| Local state can lag the cloud after interruption. | Resume from `max(local_log_id, remote_log_id)`. | Recovery follows the furthest confirmed checkpoint. |
| One Cryolog record can produce several channel posts. | Advance only when all prepared batches succeed. | Partial delivery does not silently skip unsent channels. |
| A replay may meet data already stored remotely. | Treat the API's duplicate-record response as accepted, while rejecting validation errors. | Retried cycles remain safe without masking malformed payloads. |

</details>

<details>
<summary><strong>Persistence — one explicit commit boundary per cycle</strong></summary>

<br>

Successful devices update checkpoints in memory. At the end of the cycle, the complete registry is written to a temporary file, flushed and `fsync`ed; the previous primary is copied to `.bak`; and `os.replace` atomically installs the new file. This avoids repeated writes inside the device loop and prevents a partially written CSV from becoming the next startup state.

If the primary file is missing at startup, VirtualCryolog validates the backup's headers and row widths before recovery. A malformed backup is ignored rather than promoted into live state.

</details>

<details>
<summary><strong>Failure handling — distinguish local faults from shared outages</strong></summary>

<br>

Device preparation or delivery failures are isolated so later devices still run. HTTP connections are pooled and transient `429` and `5xx` responses use bounded retries with backoff. Checkpoint-write and heartbeat failures are logged without discarding the current process's in-memory progress.

A lost SQL Server connection is different: it affects every remaining device. The connector attempts recovery, then raises a dedicated database-unavailable error. The cycle persists any earlier successes and the process exits non-zero, allowing the Windows service manager to restart it instead of repeatedly failing every configured device.

</details>

<details>
<summary><strong>Translation — one cloud contract across different hardware generations</strong></summary>

<br>

Device aliases select focused preparation paths for QAR, MVE, gauges, Mowden and CryoPanel-4 variants. Each path extracts the relevant readings, assigns CryoHub channel identifiers, translates compact Cryolog event flags into readable events and preserves whether an alarm is critical.

The same model handles both legacy CP4 rows containing several channel readings and newer installations where the panel and its probes appear as independent Cryolog device names. That compatibility lives at the translation boundary rather than leaking hardware-specific branches into the cloud API.

</details>

<details>
<summary><strong>Delivery — package the edge integration as an appliance</strong></summary>

<br>

Runtime behaviour comes from `config.yaml` and the external `devices.csv` registry. Dependencies are locked with `uv`; Ruff and Make targets standardise local checks; and PyInstaller produces a one-file Windows executable so deployed hosts do not need a separate Python installation.

The worker supports local CryoHub credentials or retrieval through AWS Secrets Manager. It publishes a CloudWatch heartbeat after each completed cycle, giving operations a signal that the whole loop — not merely the process — is still progressing.

</details>

<br>

<a name="quality"></a>
<h2 align="center"><img src="static/virtual-cryolog/snowflake.svg" alt="Snowflake icon" width="24"> Quality</h2>

- **Testing:** 105 automated tests pass, with black-box coverage across SQL, HTTP, AWS, configuration and logging boundaries. The tests verify complete synchronisation flows, payload translation, failure isolation, checkpoint recovery and process lifecycle behaviour.
- **Coverage:** the verified `make test-full` run reports **86% statement coverage for `main.py`** and **79% across the measured runtime modules**.
- **Reliability:** bounded queries, local/cloud checkpoint reconciliation, replay-safe delivery, per-device isolation, atomic CSV replacement and validated backup recovery protect data continuity.
- **Security:** the local SQL database remains behind the edge worker; cloud calls use HTTP Basic Auth; credentials may be sourced from AWS Secrets Manager rather than stored in local configuration.
- **Developer experience:** `uv.lock`, Make targets, pytest, Ruff and PyInstaller provide repeatable dependency setup, checking and Windows packaging.

<!--
Evidence capture preparation

VirtualCryolog is a background worker rather than a graphical product. Use anonymised operational evidence with consistent terminal styling; keep timestamps and status messages legible, and never include credentials, customer names or real device identifiers.

| Planned asset | Capture brief |
| :--- | :--- |
| `static/virtual-cryolog/virtualcryolog-cycle-log.png` | A complete successful cycle showing different anonymised device types, checkpoint persistence and the heartbeat result. Approximately 1440 × 900. |
| `static/virtual-cryolog/virtualcryolog-checkpoints.png` | Side-by-side or sequential view of an anonymised `devices.csv` checkpoint before and after accepted uploads, preserving all eight canonical columns. |
| `static/virtual-cryolog/virtualcryolog-service.png` | Windows Services or NSSM view showing VirtualCryolog running with restart behaviour configured; crop unrelated services and machine details. |
-->

<br>

<p align="center">
  <sub>
    Curious how the checkpoint reconciliation, the atomic registry write or the CryoPanel-4
    translation actually work under the hood? That's exactly what I'd love to walk you through.
  </sub>
</p>

<p align="center">
  <a href="README.md">← Back to all projects</a>
</p>
