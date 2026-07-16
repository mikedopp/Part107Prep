/* Part 107 Prep — Go / No-Go builder.
   Walks the preflight decision sequence in the same order the scenarios teach:
   pilot, aircraft, airspace & land, weather, site. Legal permission and pilot
   judgment are scored separately on purpose: the FAA can say yes to a flight that
   is still a bad idea. Training aid — it never replaces LAANC, B4UFLY, a TFR check,
   or a real weather briefing. */
"use strict";

/* Every item is phrased so YES = good. severity: "stop" = a legal/hard blocker,
   "caution" = judgment call that downgrades a GO to MODIFY. */
window.GONOGO_GROUPS = [
  {
    key: "pilot", legend: "1 · Pilot", hint: "Are you airworthy?",
    items: [
      { id: "cert", severity: "stop", rule: "107.12 / 107.65",
        q: "Remote pilot certificate in your possession, with recurrent training completed in the last 24 calendar months?",
        fail: "You may not act as remote PIC. Recurrent training is the free online FAASTeam course (ALC-515) — do it before you fly.",
        pass: "Certificate current." },
      { id: "imsafe", severity: "stop", rule: "107.17 / 107.27",
        q: "IMSAFE clear — no Illness, Medication, Stress, Alcohol (8 hrs and under 0.04%), Fatigue, or Emotion affecting you?",
        fail: "You are the impaired component. Fatigue and OTC medication are the two that pilots talk themselves past — don't.",
        pass: "Pilot fit to fly." }
    ]
  },
  {
    key: "aircraft", legend: "2 · Aircraft", hint: "Is the machine legal and sound?",
    items: [
      { id: "reg", severity: "stop", rule: "14 CFR part 48 / 107.13",
        q: "Aircraft under 55 lb, registered, and the registration number marked on an external surface?",
        fail: "Register at FAADroneZone ($5, 3 years) and mark the number externally. Under part 107 even a sub-250 g aircraft must be registered.",
        pass: "Registered and marked." },
      { id: "rid", severity: "stop", rule: "Remote ID rule",
        q: "Remote ID satisfied — standard RID built in, a broadcast module (kept within VLOS), or flying inside a FRIA?",
        fail: "No RID and not in a FRIA is not a legal flight. Confirm the serial number is on your Certificate of Aircraft Registration.",
        pass: "Remote ID compliant." },
      { id: "preflight", severity: "stop", rule: "107.15 / 107.49",
        q: "Preflight inspection done — props uncracked, batteries healthy (not swollen), control link solid, compass calibrated away from steel?",
        fail: "The remote PIC must determine the aircraft is in a condition for safe operation before EACH flight. A cracked prop is a grounding item.",
        pass: "Aircraft airworthy." }
    ]
  },
  {
    key: "airspace", legend: "3 · Airspace & land", hint: "Two rulebooks: the FAA owns the air, someone else owns the ground.",
    items: [
      { id: "class", severity: "stop", rule: "107.41",
        q: "Either you're in Class G, or you hold ATC authorization (LAANC/DroneZone) for this exact grid and altitude?",
        fail: "Class B, C, D and surface-E all require authorization before flight. A 0 ft grid means LAANC has no altitude to grant — that's a no, not a maybe.",
        pass: "Airspace cleared." },
      { id: "tfr", severity: "stop", rule: "107.47 / NOTAMs",
        q: "TFRs checked at tfr.faa.gov (or in your LAANC app) and your site is clear — including stadium and VIP pop-ups?",
        fail: "A TFR overrides a LAANC authorization. Stadium TFRs are 3 NM / 3,000 ft AGL from 1 hr before to 1 hr after the event.",
        pass: "No TFR conflict." },
      { id: "land", severity: "stop", rule: "Non-FAA land rules",
        q: "Land rules OK where you launch, land, and operate — not a national park or wildlife refuge, and you hold any required permit?",
        fail: "The FAA controls the air, not the ground. National Parks ban drones outright; refuges ban takeoff/landing; state parks vary by season and permit.",
        pass: "Land use permitted." }
    ]
  },
  {
    key: "weather", legend: "4 · Weather", hint: "Decode the METAR into consequences, not vocabulary.",
    items: [
      { id: "vis", severity: "stop", rule: "107.51(c)",
        q: "Flight visibility at the control station is 3 statute miles or better?",
        fail: "Below 3 SM you are grounded, full stop — no waiver in your pocket, no exceptions.",
        pass: "Visibility legal." },
      { id: "cloud", severity: "stop", rule: "107.51(d)",
        q: "At your planned altitude you can stay 500 ft below and 2,000 ft horizontally from all clouds?",
        fail: "Do the subtraction: a 700-ft ceiling leaves 200 ft of usable air; a 400-ft ceiling leaves none.",
        pass: "Cloud clearance workable." },
      { id: "ts", severity: "stop", rule: "Safety / 107.19",
        q: "Clear of thunderstorms, CB/TCU buildups, and gust fronts — nothing convective within about 20 miles?",
        fail: "A gust front runs 15-20 miles ahead of the cell and microburst downdrafts hit 6,000 ft/min. TS anywhere in the report or the sky means put it away.",
        pass: "No convective threat." },
      { id: "ice", severity: "stop", rule: "Safety",
        q: "No freezing precipitation or icing conditions (no FZRA/FZDZ, no visible moisture at or below 0°C)?",
        fail: "Freezing rain builds ice on a spinning prop in minutes — weight, imbalance, and lift loss. 'Light' FZRA is still a hard no.",
        pass: "No icing threat." },
      { id: "night", severity: "stop", rule: "107.29",
        q: "Daytime — or if night/civil twilight, anti-collision lights visible for 3 statute miles are fitted and flashing?",
        fail: "Night and the 30-minute civil twilight windows require 3 SM anti-collision lighting with a flash rate sufficient to avoid a collision.",
        pass: "Lighting requirement met." },
      { id: "wind", severity: "caution", rule: "Judgment",
        q: "Wind and gusts comfortably inside your aircraft's limit, with margin for terrain rotor and building wake?",
        fail: "Gusts near your limit leave nothing for the return leg into wind. Add margin near canyons, ridges, and building edges.",
        pass: "Wind manageable." },
      { id: "density", severity: "caution", rule: "Judgment",
        q: "Battery and performance margin accounted for — cold sag, heat, and density altitude at your field elevation?",
        fail: "Cold packs sag and trigger early failsafes; hot/high thins the air and weakens climb. Warm the batteries, land at 40%, plan shorter legs.",
        pass: "Performance margin planned." }
    ]
  },
  {
    key: "site", legend: "5 · Site & people", hint: "Where the aircraft can hurt someone.",
    items: [
      { id: "vlos", severity: "stop", rule: "107.31",
        q: "You can keep the aircraft in sight unaided (glasses/contacts only) for the entire flight, or a VO can with effective comms?",
        fail: "FPV goggles, binoculars and the camera feed do not satisfy VLOS. Terrain and buildings shadow both your eyes and your link.",
        pass: "VLOS maintainable." },
      { id: "people", severity: "stop", rule: "107.39 / 107.145",
        q: "No sustained flight over people who aren't participating, or over moving vehicles — unless your aircraft meets Category 1-4?",
        fail: "Transiting is not loitering. Freeway traffic and gathered crowds are the classic violations — and the classic injuries.",
        pass: "People/vehicle rule satisfied." },
      { id: "obstacles", severity: "caution", rule: "107.51(b) / Judgment",
        q: "Obstacles handled — 400 ft AGL measured under the aircraft, towers and uncharted guy wires cleared, RTH altitude set above everything?",
        fail: "Flying off a bench over falling terrain climbs your AGL without touching the stick. Guy wires are never charted. Set RTH above the tallest thing on the return path.",
        pass: "Obstacle plan set." }
    ]
  }
];

window.GONOGO_STATE = {};

function renderGoNoGo() {
  const G = window.GONOGO_GROUPS;
  const groups = G.map(g => `
    <fieldset class="gng-group">
      <legend>${esc(g.legend)} <span class="gng-hint">${esc(g.hint)}</span></legend>
      ${g.items.map(it => {
        const v = window.GONOGO_STATE[it.id];
        return `<div class="gng-item">
          <p class="gng-q" id="lbl-${it.id}">${esc(it.q)}
            <span class="gng-tag ${it.severity}">${it.severity === "stop" ? "legal" : "judgment"} · ${esc(it.rule)}</span></p>
          <div class="gng-opts" role="radiogroup" aria-labelledby="lbl-${it.id}">
            <button type="button" role="radio" aria-checked="${v === "yes"}" class="gng-opt ${v === "yes" ? "sel yes" : ""}" onclick="gngAnswer('${it.id}','yes')">Yes</button>
            <button type="button" role="radio" aria-checked="${v === "no"}" class="gng-opt ${v === "no" ? "sel no" : ""}" onclick="gngAnswer('${it.id}','no')">No</button>
          </div>
        </div>`;
      }).join("")}
    </fieldset>`).join("");

  $("#main").innerHTML = `
    <div class="card">
      <p class="eyebrow">Preflight</p>
      <h2>Go / No-Go builder</h2>
      <p class="lede">Answer in the order you'd actually walk a site: pilot, aircraft, airspace, weather, people. <b>Legal permission and pilot judgment are scored separately</b> — the FAA can say yes to a flight that's still a bad idea.</p>
      <div class="plain-note">Training aid. It does not check anything for you — you still owe a real <b>LAANC/B4UFLY</b> look, a <b>tfr.faa.gov</b> check, and a <b>1800wxbrief.com</b> briefing.</div>
    </div>
    <div id="gngVerdict" role="status" aria-live="polite"></div>
    <div class="card">
      ${groups}
      <div class="btnrow" style="margin-top:14px">
        <button onclick="gngAll('yes')">Mark all Yes</button>
        <button onclick="gngReset()">Reset</button>
      </div>
    </div>`;
  gngPaint();
  window.scrollTo(0, 0);
}

function gngAnswer(id, val) {
  window.GONOGO_STATE[id] = window.GONOGO_STATE[id] === val ? undefined : val;
  renderGoNoGo();
  const el = document.getElementById("gngVerdict");
  if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
function gngAll(val) { window.GONOGO_GROUPS.forEach(g => g.items.forEach(i => window.GONOGO_STATE[i.id] = val)); renderGoNoGo(); }
function gngReset() { window.GONOGO_STATE = {}; renderGoNoGo(); }

function gngPaint() {
  const all = window.GONOGO_GROUPS.flatMap(g => g.items);
  const answered = all.filter(i => window.GONOGO_STATE[i.id]);
  const stops = all.filter(i => i.severity === "stop" && window.GONOGO_STATE[i.id] === "no");
  const cautions = all.filter(i => i.severity === "caution" && window.GONOGO_STATE[i.id] === "no");
  const remaining = all.length - answered.length;

  let cls, word, sub;
  if (stops.length) { cls = "nogo"; word = "NO-GO"; sub = `${stops.length} legal blocker${stops.length > 1 ? "s" : ""} — this flight is not permitted as planned.`; }
  else if (remaining) { cls = "modify"; word = "INCOMPLETE"; sub = `${remaining} item${remaining > 1 ? "s" : ""} unanswered. An unchecked item is an unknown, not a pass.`; }
  else if (cautions.length) { cls = "modify"; word = "MODIFY"; sub = `Legal to fly, but ${cautions.length} judgment item${cautions.length > 1 ? "s" : ""} need mitigating first.`; }
  else { cls = "go"; word = "GO"; sub = "Legal and sensible. Brief your crew, then fly the plan you just built."; }

  const list = (arr, kind) => arr.length ? `
    <h3>${kind === "stop" ? "Legal blockers — fix or don't fly" : "Judgment items — mitigate"}</h3>
    <ul class="briefchecks">${arr.map(i => `<li><b>${esc(i.rule)}</b> — ${esc(i.fail)}</li>`).join("")}</ul>` : "";

  document.getElementById("gngVerdict").innerHTML = `
    <div class="card verdict ${cls}">
      <div class="systemhead">
        <div><h2>${word}</h2><p class="meta">${esc(sub)}</p></div>
        <span class="statuspill ${cls === "go" ? "ok" : cls === "nogo" ? "fail" : "info"}">${word}</span>
      </div>
      <div class="tablewrap"><table><tbody>
        <tr><th scope="row">Legal permission</th><td>${stops.length ? `<b class="bad">BLOCKED</b> — ${stops.length} of ${all.filter(i => i.severity === "stop").length} legal checks failed` : remaining ? "Not yet established" : `<b class="good">CLEARED</b> — every legal check passed`}</td></tr>
        <tr><th scope="row">Pilot judgment</th><td>${cautions.length ? `<b class="warn">MITIGATE</b> — ${cautions.length} concern${cautions.length > 1 ? "s" : ""}` : remaining ? "Not yet established" : `<b class="good">CLEAR</b>`}</td></tr>
        <tr><th scope="row">Progress</th><td>${answered.length} of ${all.length} answered</td></tr>
      </tbody></table></div>
      ${list(stops, "stop")}
      ${list(cautions, "caution")}
    </div>`;
}
