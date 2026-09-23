<h1 align="center">Krzysztof Szumko</h1>

<p align="center"><b>Senior Software Engineer — Python / Django / Vue</b></p>

<p align="center">
  8+ years designing and shipping high-stakes production software in healthcare and IoT: multi-tenant SaaS platforms, distributed background systems, industrial touchscreen applications and hardware integrations.
</p>

<p align="center">
  <b>Python · Django · Vue 3 · PostgreSQL · Celery · AWS · Linux · Rust</b>
</p>

<div align="center">

![Experience](https://img.shields.io/badge/Experience-8%2B%20Years-6f42c1?style=for-the-badge)
![Production systems](https://img.shields.io/badge/Production%20Systems-6-1f6feb?style=for-the-badge)
![Field fleet](https://img.shields.io/badge/Field%20Devices-100%2B%2C%2024%2F7-2ea44f?style=for-the-badge)

</div>

<p align="center">
  <a href="static/KSzumko-SeniorSoftwareEngineer%28BasicResume%29.pdf"><b>Download CV</b></a> ·
  <a href="https://www.linkedin.com/in/kszumko/">LinkedIn</a> ·
  <a href="https://github.com/ChrisSzumko">GitHub (Personal)</a> ·
  <a href="https://github.com/kszumko">GitHub (Work)</a> ·
  <a href="mailto:kszumko@gmail.com">Email</a>
</p>

<br>

<h2 align="center">What I bring</h2>

- **End-to-end ownership** — architecture, backend, frontend, infrastructure and production support.
- **Production scale** — software running unattended on 100+ connected devices, 24/7; APIs cut from 30s to 300ms; services scaled to 3K requests/second.
- **Backend depth** — multi-tenant Django platforms, Celery/RabbitMQ workflows, EU GMP Annex 11 audit trails and reliability engineering.
- **Technical leadership** — led an 8-person cross-functional team to production in 8 months, managed a 3-person software team, and mentored developers.
- **Operations background** — 10 years in IT support before software engineering, so I design systems that stay supportable once they reach the field.

<br>

<h2 align="center">Built by someone who used to support it</h2>

Before writing software, I spent a decade on the other side of it: diagnosing failures, talking users through problems and keeping systems running that I didn't build. That shapes every product in this portfolio. I design for the person who has to install it, run it and fix it at 3 a.m.

- **Remote support planned from day one.** Polaris Vector's 100+ field devices are reachable remotely under one licence that covers the whole fleet, so a fault doesn't mean a site visit.
- **Setup that can't be mistyped.** Nexus links to CryoHub with a one-off activation code instead of server addresses and credentials typed on a small screen in a cold room. Tapping an alarm tile explains what it means and who to contact.
- **Failures that explain themselves.** AviorBridge records persistent event logs, runs task health checks and sends Teams and email alerts. QuantumAPI shows operators why a record was skipped, not just that it failed.
- **Recovery without a human.** VirtualCryolog resumes from durable checkpoints after any interruption and ships as a single Windows executable. CloudWatch heartbeats flag silent failures before a customer does.
- **Onboarding in one command.** CryoHub Cloud's `Makefile` takes a fresh checkout to a running environment, so new developers are productive on day one.

<br>

<table align="center" width="680">
<tr><td colspan="2" align="center">

<h2 align="center">Featured work</h2>

</td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">01 — <a href="CryoHub-Cloud-Showcase.md">CryoHub Cloud</a></h3>

<p align="center">
  <a href="CryoHub-Cloud-Showcase.md">
    <img src="static/cryohub-cloud/CryoHub-Cloud-Main-Showcase.gif" width="640" alt="CryoHub Cloud dashboard, showing a live sensor grid across multiple client sites with status-coded cards" />
  </a>
</p>

<p align="center">
  <b>Multi-tenant Django SaaS for cryogenic monitoring and alarm escalation.</b><br>
  Architected from greenfield and own V2 end-to-end: tenant isolation, sub-second alerting, and an escalation engine that keeps contacting responders until an alarm is acknowledged. Cut critical API latency 100× (30s → 300ms).
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Role-Architect%20%26%20V2%20Owner-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20Vue%203%20%7C%20Celery%20%7C%20AWS-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Tests-80%25%2B%20backend%20%C2%B7%2090%25%2B%20frontend-2ea44f?style=flat-square" />
</p>

<p align="center"><a href="CryoHub-Cloud-Showcase.md"><b>Architecture & case study →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">02 — <a href="Polaris-Vector-Showcase.md">Polaris Vector</a></h3>

<p align="center">
  <a href="Polaris-Vector-Showcase.md">
    <img src="static/pv/PolarisVector-showcase-main.gif" width="640" alt="Polaris Vector touchscreen dashboard, showing a cryogenic vessel render, live temperature and vessel state" />
  </a>
</p>

<p align="center">
  <b>Industrial touchscreen control platform running unattended on 100+ devices, 24/7.</b><br>
  Architected the platform and led an 8-person cross-functional team to production rollout in 8 months — across Django, Vue, Linux and physical hardware, with the hardware, not the UI, always the source of truth.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Role-Architect%20%26%20Team%20Lead-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20Vue%203%20%7C%20Celery%20%7C%20PostgreSQL-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Compliance-Annex%2011-2ea44f?style=flat-square" />
</p>

<p align="center"><a href="Polaris-Vector-Showcase.md"><b>Architecture & case study →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">03 — <a href="Nexus-Showcase.md">Nexus</a></h3>

<p align="center">
  <a href="Nexus-Showcase.md">
    <img src="static/nexus/Screenshot_20260923_152013.png" width="640" alt="Nexus 7-inch touchscreen dashboard in Polaris II mode, showing temperature, level, a live data log and alarm status tiles" />
  </a>
</p>

<p align="center">
  <b>Black-box edge gateway that connects on-site cryogenic equipment to CryoHub.</b><br>
  A Rust-powered Tauri app on a LattePanda SBC with a 7-inch touchscreen, delivering a 10× memory optimisation on resource-constrained hardware — installed by a field engineer and linked to the cloud with a one-off activation code.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Role-Sole%20Engineer%2C%20Idea%20to%20Production-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Rust%20%7C%20Tauri%20%7C%20Vue%203-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Hardware-LattePanda%20SBC-orange?style=flat-square" />
</p>

<p align="center"><a href="Nexus-Showcase.md"><b>Architecture & case study →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h2 align="center">More production systems</h2>

<p align="center">
  CryoHub Cloud, Polaris Vector, Nexus, VirtualCryolog and AviorBridge form one <b>CryoHub ecosystem</b> — each is an independently deployed production application, integrated through the CryoHub Cloud API. QuantumAPI is a separate manufacturing and logistics platform.
</p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center"><a href="VirtualCryolog-Showcase.md">VirtualCryolog</a></h3>

<p align="center">
  <a href="VirtualCryolog-Showcase.md">
    <img src="static/virtual-cryolog/execution-flow.svg" width="640" alt="VirtualCryolog synchronising local Cryolog SQL telemetry with CryoHub Cloud through a checkpointed edge worker" />
  </a>
</p>

<p align="center">
  <b>Replay-safe edge worker bringing legacy Cryolog telemetry into CryoHub Cloud.</b><br>
  Syncs local SQL Server data without exposing the database, resuming from durable checkpoints after any interruption.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Role-Sole%20Developer-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Python%20%7C%20SQL%20Server%20%7C%20AWS%20%7C%20PyInstaller-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Tests-105%20Passing-2ea44f?style=flat-square" />
</p>

<p align="center"><a href="VirtualCryolog-Showcase.md"><b>Architecture & case study →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center"><a href="AviorBridge-Showcase.md">AviorBridge</a></h3>

<p align="center">
  <a href="AviorBridge-Showcase.md">
    <img src="static/aviorbridge/Screenshot_20260923_141633.png" width="640" alt="AviorBridge admin panel, showing Avior devices, data, event logs and scheduled periodic tasks" />
  </a>
</p>

<p align="center">
  <b>Integration service connecting AviorGSM loggers to CryoHub.</b><br>
  Polls each device on its own schedule, translates its data and forwards fresh readings without manual imports.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Role-Sole%20Engineer-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20DRF%20%7C%20Celery%20%7C%20PostgreSQL-1f6feb?style=flat-square" />
</p>

<p align="center"><a href="AviorBridge-Showcase.md"><b>Architecture & case study →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center"><a href="QuantumAPI-Showcase.md">QuantumAPI</a></h3>

<p align="center">
  <a href="QuantumAPI-Showcase.md">
    <img src="static/quantum-api/q-api-main-menu.png" width="640" alt="QuantumAPI main menu, showing data views, label tools, device and label entry, QR scanner and admin panel" />
  </a>
</p>

<p align="center">
  <b>Traceable ATEX device management for 10,000+ devices.</b><br>
  Taken over before launch, shipped to production and later refactored as Lead Engineer — syncing device records and QR-labelled boxes with a European partner API.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Role-Lead%20Engineer-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20Tastypie%20%7C%20MySQL%20%7C%20REST-1f6feb?style=flat-square" />
</p>

<p align="center"><a href="QuantumAPI-Showcase.md"><b>Architecture & case study →</b></a></p>

</td></tr>
</table>

<br>

<table align="center" width="680">
<tr><td colspan="2" align="center">

<h2 align="center">Enterprise healthcare data — EMIS / Optum UK</h2>

<p align="center">
  <b>Senior Software Engineer → Acting Team Lead · July 2024 – November 2025</b><br>
  Backend, data platform and team leadership on the core healthcare data lake that serves time-sensitive clinical queries.
</p>

</td></tr>
<tr><td width="50%" valign="top">

<h3 align="center">Data Out Team</h3>
<p align="center"><sub>Senior Software Engineer · Jul 2024 – Jan 2025</sub></p>

- Maintained and developed the core data lake platform: Starburst/Trino cluster, auth-routing proxy and Apache Superset, the customer-facing SQL interface.
- **Rebuilt the data lake auth proxy to handle 3K requests/second** (up from 1K) at the same cost, a 3× throughput improvement that cut latency for time-sensitive clinical queries.

<p align="center">
  <img src="https://img.shields.io/badge/Stack-Flask%20%7C%20Gunicorn%20%7C%20Starburst%2FTrino-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Ops-Docker%20%7C%20AWS%20%7C%20Datadog-orange?style=flat-square" />
</p>

</td><td width="50%" valign="top">

<h3 align="center">Data Management</h3>
<p align="center"><sub>Acting Team Lead · Jan 2025 – Nov 2025</sub></p>

- **Led 9 engineers** through sprint planning, quarterly goals and stakeholder demos, improving sprint throughput by ~60%.
- **Cut Airflow cluster costs by 44–66%** by right-sizing to 80th-percentile peak usage, switching environments off out of hours and introducing smarter auto-scaling.
- Led the Airflow v2 upgrade and prototyped the v3 migration.
- Steered the move from Datadog to Dynatrace, consolidating dashboards and alerting on critical platform metrics.

<p align="center">
  <img src="https://img.shields.io/badge/Stack-FastAPI%20%7C%20Flask%20%7C%20Airflow-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Ops-Docker%20%7C%20AWS%20%7C%20Dynatrace-orange?style=flat-square" />
</p>

</td></tr>
<tr><td width="50%" align="center" valign="top">

<img src="static/other/emis-optum-contributions2.png" width="100%" alt="GitHub contribution graph for 2024, showing 753 contributions from July onwards across EMIS group repositories" />
<p align="center"><sub><b>753 contributions</b> in the second half of 2024</sub></p>

</td><td width="50%" align="center" valign="top">

<img src="static/other/emis-optum-contributions1.png" width="100%" alt="GitHub contribution graph from November 2024 to November 2025, showing 1,505 contributions, 42% of them code review" />
<p align="center"><sub><b>1,505 contributions</b> Nov 2024 – Nov 2025, with 42% of them code reviews</sub></p>

</td></tr>
</table>

<br>

<h2 align="center">Let's talk</h2>

<p align="center">
  I'm particularly interested in Senior / Lead Python engineering roles involving architecture, complex backend systems and end-to-end product ownership.
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/kszumko/"><b>LinkedIn</b></a> ·
  <a href="mailto:kszumko@gmail.com"><b>Email</b></a> ·
  <a href="static/KSzumko-SeniorSoftwareEngineer%28BasicResume%29.pdf"><b>Download CV</b></a>
</p>
