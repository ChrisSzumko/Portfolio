<h1 align="center">Krzysztof Szumko</h1>

<p align="center"><b>Senior Software Engineer</b></p>

<p align="center">A portfolio of production systems I've designed, built, and shipped — not toy demos.</p>

<div align="center">

![Projects](https://img.shields.io/badge/Projects-6-1f6feb?style=for-the-badge)
![In Production](https://img.shields.io/badge/In%20Production-6-2ea44f?style=for-the-badge)

</div>

<p align="center">
  <a href="https://github.com/ChrisSzumko">GitHub (Personal)</a> ·
  <a href="https://github.com/kszumko">GitHub (Work)</a> ·
  <a href="https://www.linkedin.com/in/kszumko/">LinkedIn</a> ·
  <a href="mailto:kszumko@gmail.com">Email</a>
</p>

<br>

<h2 align="center">Projects</h2>

Each project below has its own deep-dive showcase — the problem it solved, the decisions behind it, and how it actually works.

<table align="center" width="680">
<tr><td colspan="2" align="center">

<h3 align="center">🟢 <a href="Polaris-Vector-Showcase.md">Polaris Vector</a></h3>

<p align="center">
  <a href="Polaris-Vector-Showcase.md">
    <img src="static/pv/PolarisVector-showcase-main.gif" width="640" alt="Polaris Vector touchscreen dashboard, showing a cryogenic vessel render, live temperature and vessel state" />
  </a>
</p>

<p align="center">
  A production touchscreen control system I designed and built end-to-end — deployed and running unattended across <b>100+ devices</b> in the field, 24/7.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Deployed-2ea44f?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20Vue%203%20%7C%20Celery%20%7C%20PostgreSQL-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Compliance-Annex%2011-blueviolet?style=flat-square" />
</p>

<p align="center"><a href="Polaris-Vector-Showcase.md"><b>Read the full showcase →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">🟢 <a href="CryoHub-Cloud-Showcase.md">CryoHub Cloud</a></h3>

<p align="center">
  <a href="CryoHub-Cloud-Showcase.md">
    <img src="static/cryohub-cloud/CryoHub-Cloud-Main-Showcase.gif" width="640" alt="CryoHub Cloud dashboard, showing a live sensor grid across multiple client sites with status-coded cards" />
  </a>
</p>

<p align="center">
  A multi-tenant cryogenics SaaS platform I architected and own end-to-end — a real-time alarm and escalation pipeline that pages the right person, in the right order, until someone acknowledges the problem.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-2ea44f?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20Vue%203%20%7C%20Flutter%20%7C%20Celery-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Tenancy-Multi--Tenant-blueviolet?style=flat-square" />
</p>

<p align="center"><a href="CryoHub-Cloud-Showcase.md"><b>Read the full showcase →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">🟢 <a href="AviorBridge-Showcase.md">AviorBridge</a></h3>

<p align="center">
  <a href="AviorBridge-Showcase.md">
    <img src="static/aviorbridge/Screenshot_20260923_141633.png" width="640" alt="AviorBridge admin panel, showing Avior devices, data, event logs and scheduled periodic tasks" />
  </a>
</p>

<p align="center">
  An integration service I built solo that connects AviorGSM loggers to CryoHub — polling each device on its own schedule, translating its data and forwarding fresh readings without manual imports.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Deployed-2ea44f?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20DRF%20%7C%20Celery%20%7C%20PostgreSQL-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Role-Sole%20Engineer-blueviolet?style=flat-square" />
</p>

<p align="center"><a href="AviorBridge-Showcase.md"><b>Read the full showcase →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">🟢 <a href="Nexus-Showcase.md">Nexus</a></h3>

<p align="center">
  <a href="Nexus-Showcase.md">
    <img src="static/nexus/Screenshot_20260923_152013.png" width="640" alt="Nexus 7-inch touchscreen dashboard in Polaris II mode, showing temperature, level, a live data log and alarm status tiles" />
  </a>
</p>

<p align="center">
  A black-box edge device for cryogenic equipment — a Rust-powered Tauri app on a LattePanda SBC with a 7-inch touchscreen, set up on-site by an engineer and linked to CryoHub with a one-off activation code.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Deployed-2ea44f?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Rust%20%7C%20Tauri%20v1%20%7C%20Vue%203-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Hardware-LattePanda%20SBC-blueviolet?style=flat-square" />
</p>

<p align="center"><a href="Nexus-Showcase.md"><b>Read the full showcase →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">🟢 <a href="VirtualCryolog-Showcase.md">VirtualCryolog</a></h3>

<p align="center">
  <a href="VirtualCryolog-Showcase.md">
    <img src="static/virtual-cryolog/execution-flow.svg" width="640" alt="VirtualCryolog synchronising local Cryolog SQL telemetry with CryoHub Cloud through a checkpointed edge worker" />
  </a>
</p>

<p align="center">
  A replay-safe edge worker I built solo that brings legacy Cryolog monitoring data into CryoHub Cloud — resuming from durable checkpoints after any interruption, without exposing the local database.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Deployed-2ea44f?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Python%20%7C%20SQL%20Server%20%7C%20AWS%20%7C%20PyInstaller-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Role-Sole%20Developer-blueviolet?style=flat-square" />
</p>

<p align="center"><a href="VirtualCryolog-Showcase.md"><b>Read the full showcase →</b></a></p>

</td></tr>
<tr><td colspan="2" align="center"><br></td></tr>
<tr><td colspan="2" align="center">

<h3 align="center">🟢 <a href="QuantumAPI-Showcase.md">QuantumAPI</a></h3>

<p align="center">
  <a href="QuantumAPI-Showcase.md">
    <img src="static/quantum-api/q-api-main-menu.png" width="640" alt="QuantumAPI main menu, showing data views, label tools, device and label entry, QR scanner and admin panel" />
  </a>
</p>

<p align="center">
  A manufacturing data warehouse I took over before launch, deployed to production and later refactored as Lead Engineer — keeping device records, QR-labelled boxes and a European partner API in sync.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Deployed-2ea44f?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-Django%20%7C%20Tastypie%20%7C%20MySQL%20%7C%20REST-1f6feb?style=flat-square" />
  <img src="https://img.shields.io/badge/Role-Lead%20Engineer-blueviolet?style=flat-square" />
</p>

<p align="center"><a href="QuantumAPI-Showcase.md"><b>Read the full showcase →</b></a></p>

</td></tr>
</table>

<br>

<p align="center">
  <sub>More showcases are on their way — check back soon, or reach out above.</sub>
</p>
