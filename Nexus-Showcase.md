<p align="center">
  <img src="static/nexus/Screenshot_20260923_152013.png" width="760" alt="Nexus 7-inch touchscreen dashboard in Polaris II mode, showing -180°C temperature, 60% level, a live data log and alarm status tiles" />
</p>

<h1 align="center">Nexus</h1>

<p align="center">
  <b>A black-box edge device for cryogenic equipment — a Rust-powered Tauri app on a LattePanda SBC that an engineer connects to on-site hardware, links to CryoHub with a one-off activation code, and leaves running.</b>
</p>

<div align="center">

![Status](https://img.shields.io/badge/Status-Deployed-2ea44f?style=for-the-badge)
![Rust](https://img.shields.io/badge/Back--end-Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-v1-24C8DB?style=for-the-badge&logo=tauri&logoColor=white)
![Vue](https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Display](https://img.shields.io/badge/Display-7%E2%80%B3%20Touchscreen-6f42c1?style=for-the-badge)

</div>

<p align="center">
  <a href="#the-problem">The Problem</a> ·
  <a href="#the-solution">The Solution</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#visuals">Visuals</a> ·
  <a href="#design">Design</a>
</p>

<br>

<a name="the-problem"></a>
<h2 align="center"><img src="static/nexus/telescope.svg" alt="Telescope icon" width="24"> The Problem</h2>

Cryogenic storage sites run a mix of equipment — dewar controllers, oxygen monitors, valves — that was never designed to talk to the cloud. Bringing each one into CryoHub needs something physical on-site that is cheap, reliable, and simple enough for a field engineer to install without a developer on the phone.

<table width="100%">
  <tr>
    <td width="33%" valign="top">
      <h3 align="center"><img src="static/nexus/plug-zap.svg" alt="Plug icon" width="20"> Mixed hardware</h3>
      <p align="center">Every site pairs different devices, from single temperature-and-level controllers to four-channel oxygen panels with valve state.</p>
    </td>
    <td width="33%" valign="top">
      <h3 align="center"><img src="static/nexus/key-round.svg" alt="Key icon" width="20"> Painful onboarding</h3>
      <p align="center">Typing server addresses and credentials on a small screen in a cold room is slow and error-prone.</p>
    </td>
    <td width="33%" valign="top">
      <h3 align="center"><img src="static/nexus/feather.svg" alt="Feather icon" width="20"> Limited hardware</h3>
      <p align="center">A compact single-board computer has to stay responsive around the clock, with no room for a heavy runtime.</p>
    </td>
  </tr>
</table>

<br>

<a name="the-solution"></a>
<h2 align="center"><img src="static/nexus/cpu.svg" alt="Processor icon" width="24"> The Solution</h2>

Nexus is a self-contained **black box**: a LattePanda SBC with a 7-inch touchscreen, running a Tauri v1 application. All device communication, state and cloud sync live in a **Rust back-end** for a minimal resource footprint, while a **Vue.js 3** interface gives the engineer and on-site staff a clear, touch-first view of the equipment.

### How it works

```mermaid
flowchart LR
    subgraph box["Nexus · LattePanda SBC"]
        rust["Rust back-end<br/>device I/O, state, sync"]
        ui["Vue.js 3 UI<br/>7-inch touchscreen"]
        rust <-->|"Tauri commands + events"| ui
    end

    hw["On-site hardware<br/>QAR controller · CP4 oxygen panel"] <--> rust
    engineer["Field engineer"] -->|"set mode + activation code"| ui
    rust -->|"one-off registration"| cryohub["CryoHub Cloud"]
    rust -->|"live readings"| cryohub
```

1. **Install:** the engineer mounts the box on-site and connects it to the equipment it will monitor.
2. **Configure:** from the touchscreen Actions menu, they select the hardware profile (for example **Set QAR** or **Set OXY**) and save the configuration.
3. **Link:** **Register to CryoHub** takes an activation code generated in CryoHub — a single, one-off step that ties the device to the right account without typing any credentials.
4. **Run:** the Rust back-end reads the hardware, shows live values and alarm states on screen, and forwards readings to CryoHub, logging each step in the on-screen feed.

<table width="100%">
  <tr>
    <td width="33%" valign="top">
      <h3 align="center"><img src="static/nexus/key-round.svg" alt="Key icon" width="20"> One-off linking</h3>
      <p align="center">CryoHub activation codes replace manual server and credential setup.</p>
    </td>
    <td width="33%" valign="top">
      <h3 align="center"><img src="static/nexus/feather.svg" alt="Feather icon" width="20"> Tiny footprint</h3>
      <p align="center">Rust back-end and Tauri's native webview instead of a bundled browser runtime.</p>
    </td>
    <td width="33%" valign="top">
      <h3 align="center"><img src="static/nexus/pointer.svg" alt="Pointer icon" width="20"> Touch-first</h3>
      <p align="center">Large targets, glanceable gauges and status tiles sized for a 7-inch display.</p>
    </td>
  </tr>
</table>

<br>

<a name="tech-stack"></a>
<h2 align="center"><img src="static/nexus/layers.svg" alt="Layers icon" width="24"> Tech Stack</h2>

| **Component** | **Technology** | **Description** |
| :--- | :--- | :--- |
| **Back-end** | <img src="https://skillicons.dev/icons?i=rust" height="40" valign="middle" /> | All business logic — hardware communication, device state, configuration and CryoHub sync — in Rust for a very low CPU and memory footprint. |
| **App shell** | <img src="https://skillicons.dev/icons?i=tauri" height="40" valign="middle" /> | Tauri v1 packages the Rust core and web UI into one native application using the system webview. |
| **Front-end** | <img src="https://skillicons.dev/icons?i=vue" height="40" valign="middle" /> | Vue.js 3 interface optimised for a 7-inch touchscreen. |
| **Hardware** | **LattePanda SBC** | Compact single-board computer that turns Nexus into a self-contained box installed on-site. |
| **UI & artwork** | <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/midjourney.png"><img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/midjourney.png" width="40" valign="middle" alt="Midjourney" /></picture> | Midjourney used heavily for UI concepts, backgrounds and in-app artwork. |

<br>

<a name="visuals"></a>
<h2 align="center"><img src="static/nexus/images.svg" alt="Images icon" width="24"> Visuals</h2>

| Polaris II — Temperature & Level | CP4 — Oxygen Monitoring |
| :---: | :---: |
| <img src="static/nexus/Screenshot_20260923_152013.png" width="100%" alt="Nexus in Polaris II mode showing -180°C, 60% level, live log and alarm tiles" /> | <img src="static/nexus/nexus-cp4-showcase.png" width="100%" alt="Nexus in CP4 oxygen mode showing four channel gauges, valve state and a live log" /> |
| One large gauge for temperature and level, a live log, and tiles for lid, valve, service, level, temperature, defog and filling states. | Four oxygen channels as gauges, raw values and valve state side by side, with unused channels clearly marked. |
| **On-site Setup** | **Built-in Guidance** |
| <img src="static/nexus/Screenshot_20260923_152140.png" width="100%" alt="Nexus Actions menu with Get LID, Save Config, Set QAR, Set OXY and Register to CryoHub buttons" /> | <img src="static/nexus/Screenshot_20260923_152104.png" width="100%" alt="Nexus Service alarm explanation dialog with Midjourney-generated artwork" /> |
| Everything an engineer needs during installation, reachable in one tap: hardware profile, saved configuration and CryoHub registration. | Tapping an alarm tile explains what it means and who to contact, illustrated with Midjourney-generated artwork. |

<br>

<a name="design"></a>
<h2 align="center"><img src="static/nexus/sparkles.svg" alt="Sparkles icon" width="24"> Design</h2>

- **Black-box by intent:** once linked, Nexus needs no keyboard, mouse or remote session — the touchscreen covers setup, monitoring and diagnosis.
- **Low footprint:** keeping all logic in Rust and using Tauri's native webview lets a small SBC run the full UI and sync loop continuously.
- **One device, many profiles:** the same box serves temperature/level controllers and multi-channel oxygen panels by switching its hardware profile, not its software.
- **Glanceable status:** readings, connectivity and the time since the last update stay visible at all times, and the live log shows every reading and upload as it happens.
- **AI-assisted visual design:** Midjourney drove the UI concepts and artwork, delivering a polished, consistent look without a dedicated design budget.

<br>

<p align="center">
  <sub>
    Curious how the Rust back-end talks to the hardware, or how activation codes link a box to CryoHub
    in one step? That's exactly what I'd love to walk you through.
  </sub>
</p>

<p align="center">
  <a href="README.md">← Back to all projects</a>
</p>
