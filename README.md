# Part 107 Prep

Study/test trainer for the FAA Remote Pilot (Part 107 / UAG) knowledge exam, with
failure-pattern analysis.

**▶ Live app: https://mikedopp.github.io/Part107Prep/** — runs in any browser, phone or
desktop, no install. Progress saves locally in that browser.

![Dashboard with readiness score, exam history, mastery bars, and failure diagnosis](docs/screenshot.png)

## Run it — three ways

1. **Web (any device):** open the **[live app](https://mikedopp.github.io/Part107Prep/)**. No install; works on your phone.
2. **Desktop app (Windows):** double-click **`Build-App.cmd`** once to compile, then run
   `app\bin\Release\net8.0-windows\Part107Prep.exe` (a real .exe you can pin to the
   taskbar). It's a WinForms + WebView2 shell that runs the whole trainer **offline** —
   no server, no browser tab. Needs the free .NET 8 SDK to build and the Edge WebView2
   runtime to run (both already standard on Windows 10/11).
3. **Local browser:** double-click `Start-Part107Prep.cmd` (serves on port 8107), or just
   open `index.html` in Edge/Chrome.

![The Part 107 Prep desktop app running as a native Windows window](docs/app-screenshot.png)

Progress is stored in localStorage per app/browser, so pick one home and stick with it
(the desktop app keeps its own persistent store). `Export progress` on the Dashboard
downloads a JSON backup.

## What's inside

- **167 questions**: all 46 official FAA UAG sample questions (answers verified against
  published keys) + 121 original questions written from the FAA Remote Pilot Study
  Guide / 14 CFR 107. Every question has an explanation, ACS code, topic, subtopic,
  and "trap" tags (MSL-vs-AGL, true-vs-magnetic, units, stable-vs-unstable, etc.).
- **Practice Exam**: 60 questions drawn with real exam weighting (Regs 12, Airspace 12,
  Weather 8, Loading 5, Operations 23), 2-hour countdown, flagging, question grid,
  auto-submit at time-out, full review with explanations.
- **Study Mode**: untimed, instant feedback, by topic or figures-only.
- **Weak-Spot Drill**: re-serves every question you've missed until you answer it
  correctly twice in a row.
- **Dashboard**: projected exam score, per-area mastery bars, exam history, and the
  "Why you're failing" diagnosis — points lost per area, trap-pattern detection,
  weakest subtopics, and a study prescription.
- **Chart School**: 10 visual lessons on reading sectional charts and weather — airspace
  colors, data blocks, MSL vs AGL, obstacles/MEF, special-use airspace, lat/long
  plotting, traffic patterns, a **full METAR & TAF walkthrough with a code glossary**,
  plus two hands-on chart tools:
  - **Chart Detective** — an animated guided tour that steps through the real Savannah
    Class C chart one symbol at a time, a pulsing highlight gliding to each feature.
  - **Interactive sectional** — **five real exam charts** (Coeur d'Alene data blocks,
    Savannah Class C, Jamestown Class E surface, a Devils Lake MOA, and Deshler military
    routes) you can **drag to pan, scroll/pinch to zoom, and tap any numbered symbol** to
    highlight and decode it. Works with mouse and touch.

  Lessons use animated diagrams (respecting `prefers-reduced-motion`) plus spotlight
  crops from the real FAA testing-supplement figures, and drill you on the matching
  questions. Chart facts were cross-checked against FAA sources.

![Interactive sectional: pick a chart, then tap a numbered symbol to highlight and decode it](docs/interactive.png)

![METAR & TAF walkthrough with glossary](docs/metar.png)
- **Figures**: the 8 testing-supplement figures the FAA questions reference
  (sectionals, METAR block, load-factor chart) rendered at 200 DPI in `figures/`,
  shown in a click-to-zoom viewer.
- `faa_docs/`: local copies of the FAA Study Guide and the official sample-question
  PDF. The full CT-8080-2H testing supplement (176 MB) exceeds GitHub's file-size
  limit — run `faa_docs/Get-Supplement.cmd` to download it from faa.gov.

All FAA source documents are U.S. government works (public domain).

## Question bank files

`qbank_faa.js` (official), `qbank_reg.js`, `qbank_air.js`, `qbank_wx.js`,
`qbank_load.js`, `qbank_ops.js`, `qbank_charts.js`. Add questions by appending
objects with the same shape; `id` must be unique. Chart School lessons (and the
Chart Detective tour hotspots) live in `charts.js`; the desktop shell is in `app/`.

## Real exam logistics

60 questions · 2 hours · 70% to pass · $175 at a PSI testing center
(faa.psiexams.com) · government photo ID · you receive the printed CT-8080-2H figure
book at the center. Unanswered = wrong, so never leave blanks. After passing, complete
FAA Form 8710-13 in IACRA to get the certificate; TSA vetting follows.
