/* Part 107 Prep — app engine */
"use strict";

const TOPICS = {
  regulations: { name: "Regulations", examN: 12 },
  airspace:    { name: "Airspace & Requirements", examN: 12 },
  weather:     { name: "Weather", examN: 8 },
  loading:     { name: "Loading & Performance", examN: 5 },
  operations:  { name: "Operations", examN: 23 },
};
const EXAM_TOTAL = 60, PASS_PCT = 70, EXAM_SECONDS = 2 * 60 * 60;

const TRAP_INFO = {
  "msl-agl":        "MSL vs AGL — charted airspace/obstacle altitudes are MSL unless in parentheses; don't pick the one that 'sounds right'",
  "true-magnetic":  "True vs magnetic north — written winds (METAR/TAF) are TRUE; spoken (tower/ATIS) and runways are MAGNETIC",
  "units":          "Units — knots vs mph, METAR cloud heights in hundreds of feet, statute vs nautical miles",
  "stable-unstable":"Stable vs unstable air — stable: smooth/stratus/steady/poor visibility; unstable: cumulus/turbulence/showers/good visibility",
  "who-responsible":"'Who is responsible?' — under part 107 the answer is almost always the Remote PIC",
  "chart-reading":  "Sectional chart mechanics — data blocks, airspace colors, obstacle numbers, legends",
  "lat-long":       "Latitude/longitude plotting — lat is flat (N-S of equator); count tick marks as minutes",
  "traffic-pattern":"Traffic pattern visualization — draw the runway, fly downwind opposite the number, offset to pattern side",
  "metar":          "METAR/TAF decoding — practice raw text until it reads like a sentence",
  "read-carefully": "Wording traps — thresholds, exclusions ('other than the UA'), and purpose-of-flight details",
  "before-vs-after":"Sequence traps — authorization happens BEFORE flight, never during or after",
};

const STUDY_PLAN = {
  regulations: "Re-read 14 CFR part 107 itself (it's short) plus Study Guide intro chapters. Drill the numbers: 400ft/87kt/3SM/500-2000, 8hr/0.04, 10-day report/$500, 24 cal months, 30-day address, 3-yr registration, Cat 1-4 limits.",
  airspace:    "Study Guide airspace chapter + sectional legend. Drill: dashed blue=D, dashed magenta=surface E (needs auth!), vignette=E@700, solid magenta=C, solid blue=B. All charted altitudes MSL. Practice with figures 20-26 in this app.",
  weather:     "Study Guide weather chapters. Master the stable/unstable table, density altitude (hot-high-humid), fog types, thunderstorm stages, and decode 10 raw METARs until it's automatic.",
  loading:     "Small chapter, easy points: load factor anchors (30°=1.15, 45°=1.41, 60°=2.0), stalls = critical AOA always, aft CG = unstable, LiPo safety.",
  operations:  "Biggest exam slice (35-45%)! Hazardous attitudes + antidotes verbatim, IMSAFE/PAVE/DECIDE, traffic pattern legs, runway numbers = magnetic, CTAF discipline, night vision (30 min, off-center), lost-link planning, maintenance logs.",
};

/* ---------- state ---------- */
const SKEY = "p107_state_v2";
const DEMO = new URLSearchParams(location.search).has("demo"); // ?demo=1 → synthetic, non-persisted data (for screenshots)
let S = load();
function load() {
  if (DEMO) return demoState();
  try { const s = JSON.parse(localStorage.getItem(SKEY)); if (s && s.events) return s; } catch (e) {}
  return { events: [], exams: [] };
}
function save() { if (!DEMO) localStorage.setItem(SKEY, JSON.stringify(S)); }

function demoState() {
  const rates = { regulations: 0.85, airspace: 0.55, weather: 0.62, loading: 0.9, operations: 0.72 };
  const ev = [];
  let seed = 42;
  const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
  for (const q of (window.QBANK || [])) {
    ev.push({ q: q.id, ok: rnd() < rates[q.topic] ? 1 : 0, m: "exam", t: Date.now() - 86400000 * (1 + rnd() * 5) });
  }
  const mkExam = (daysAgo, sc) => ({ ts: Date.now() - daysAgo * 86400000, score: sc, total: 60, durationSec: 4900,
    byTopic: { regulations: { c: Math.round(12 * rates.regulations), t: 12 }, airspace: { c: Math.round(12 * rates.airspace), t: 12 },
      weather: { c: Math.round(8 * rates.weather), t: 8 }, loading: { c: Math.round(5 * rates.loading), t: 5 },
      operations: { c: Math.round(23 * rates.operations), t: 23 } } });
  return { events: ev, exams: [mkExam(6, 38), mkExam(3, 41)] };
}

function record(qid, ok, mode) {
  S.events.push({ q: qid, ok: ok ? 1 : 0, m: mode, t: Date.now() });
  if (S.events.length > 20000) S.events = S.events.slice(-15000);
  save();
}

/* ---------- helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const QB = window.QBANK || [];
const byId = Object.fromEntries(QB.map(q => [q.id, q]));
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function pct(c, t) { return t ? Math.round(100 * c / t) : null; }

function qStats() {
  const st = {};
  for (const e of S.events) {
    if (!st[e.q]) st[e.q] = { seen: 0, ok: 0, lastOk: null, lastT: 0 };
    const s = st[e.q]; s.seen++; s.ok += e.ok; s.lastOk = e.ok; s.lastT = e.t;
  }
  return st;
}
function topicStats() {
  const ts = {}; for (const k in TOPICS) ts[k] = { c: 0, t: 0 };
  for (const e of S.events) { const q = byId[e.q]; if (!q) continue; ts[q.topic].t++; ts[q.topic].c += e.ok; }
  return ts;
}
function trapStats() {
  const tr = {};
  for (const e of S.events) {
    const q = byId[e.q]; if (!q || !q.traps) continue;
    for (const tag of q.traps) { if (!tr[tag]) tr[tag] = { c: 0, t: 0 }; tr[tag].t++; tr[tag].c += e.ok; }
  }
  return tr;
}
function subStats() {
  const ss = {};
  for (const e of S.events) {
    const q = byId[e.q]; if (!q) continue;
    const key = TOPICS[q.topic].name + " › " + q.sub;
    if (!ss[key]) ss[key] = { c: 0, t: 0, topic: q.topic };
    ss[key].t++; ss[key].c += e.ok;
  }
  return ss;
}

/* ---------- views ---------- */
let session = null; // current quiz session
let timerInt = null;

function show(view) {
  document.querySelectorAll("nav button").forEach(b => b.classList.toggle("active", b.dataset.v === view));
  if (view !== "quiz" && timerInt) { clearInterval(timerInt); timerInt = null; }
  if (view === "home") renderHome();
  if (view === "study") renderStudySetup();
  if (view === "exam") startExam();
  if (view === "drill") startDrill();
  if (view === "charts") renderChartSchool();
  if (view === "reference") renderReference();
}

/* ---------- home / analytics ---------- */
function renderHome() {
  const ts = topicStats();
  const total = Object.values(ts).reduce((a, x) => a + x.t, 0);
  let h = "";

  // Readiness
  if (total >= 20) {
    let proj = 0, wsum = 0;
    for (const k in TOPICS) {
      const w = TOPICS[k].examN / EXAM_TOTAL;
      const acc = ts[k].t >= 3 ? ts[k].c / ts[k].t : 0.5; // unknown topics count as coin-flip
      proj += w * acc; wsum += w;
    }
    const projPct = Math.round(100 * proj / wsum);
    const cls = projPct >= 80 ? "good" : projPct >= 70 ? "warn" : "bad";
    h += `<div class="card"><h2>Exam readiness</h2>
      <div class="bigstat ${cls}">${projPct}%</div>
      <p>Projected score on a weighted 60-question exam (pass = 70%). ${projPct >= 80 ? "You're ready — book the test while you're hot." : projPct >= 70 ? "On the bubble. A 70% projection means a coin-flip on test day — push weak areas above 80% first." : "Below the pass line. The diagnosis below shows exactly where the points are leaking."}</p></div>`;
  } else {
    h += `<div class="card"><h2>Welcome</h2><p>Answer at least 20 questions (any mode) to unlock your readiness score and failure diagnosis. <b>Start with a full practice exam</b> to get an honest baseline of where you stand.</p></div>`;
  }

  // Exam history
  if (S.exams.length) {
    h += `<div class="card"><h2>Practice exam history</h2><table><tr><th>Date</th><th>Score</th><th>Result</th>${Object.keys(TOPICS).map(k => `<th>${TOPICS[k].name.split(" ")[0]}</th>`).join("")}</tr>`;
    for (const ex of S.exams.slice(-10).reverse()) {
      const p = pct(ex.score, ex.total);
      h += `<tr><td>${new Date(ex.ts).toLocaleDateString()} ${new Date(ex.ts).toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}</td>
        <td><b>${p}%</b> (${ex.score}/${ex.total})</td>
        <td class="${p >= PASS_PCT ? "good" : "bad"}">${p >= PASS_PCT ? "PASS" : "FAIL"}</td>`;
      for (const k in TOPICS) { const bt = ex.byTopic[k] || { c: 0, t: 0 }; h += `<td>${bt.t ? pct(bt.c, bt.t) + "%" : "—"}</td>`; }
      h += "</tr>";
    }
    h += "</table></div>";
  }

  // Topic mastery
  h += `<div class="card"><h2>Mastery by ACS area</h2>`;
  for (const k in TOPICS) {
    const s = ts[k], p = pct(s.c, s.t);
    const w = Math.round(100 * TOPICS[k].examN / EXAM_TOTAL);
    h += `<div class="barrow"><span class="barlabel">${TOPICS[k].name} <small>(~${w}% of exam)</small></span>
      <div class="bar"><div class="fill ${p === null ? "" : p >= 80 ? "good" : p >= 70 ? "warn" : "bad"}" style="width:${p ?? 0}%"></div></div>
      <span class="barpct">${p === null ? "no data" : p + "% (" + s.c + "/" + s.t + ")"}</span></div>`;
  }
  h += `</div>`;

  // Diagnosis
  if (total >= 20) h += renderDiagnosis(ts);

  h += `<div class="card"><h2>Data</h2><p>
    <button onclick="exportData()">Export progress</button>
    <button class="danger" onclick="if(confirm('Erase all progress?')){localStorage.removeItem('${SKEY}');location.reload()}">Reset all progress</button>
    <small>${QB.length} questions in bank · ${total} answers recorded · progress saved locally in this browser</small></p></div>`;

  $("#main").innerHTML = h;
}

function renderDiagnosis(ts) {
  let h = `<div class="card diag"><h2>🔍 Why you're failing — diagnosis</h2>`;

  // 1. points lost by topic
  const losses = [];
  for (const k in TOPICS) {
    const s = ts[k]; if (s.t < 3) { losses.push({ k, unknown: true }); continue; }
    const acc = s.c / s.t;
    losses.push({ k, lost: TOPICS[k].examN * (1 - acc), acc });
  }
  losses.sort((a, b) => (b.lost ?? 99) - (a.lost ?? 99));
  h += `<h3>1. Where the points go</h3><p>Out of 60 exam questions you can only miss 18. Estimated misses by area at your current accuracy:</p><ul>`;
  let totLost = 0;
  for (const L of losses) {
    if (L.unknown) { h += `<li><b>${TOPICS[L.k].name}:</b> not enough data — study this area, it's a blind spot.</li>`; continue; }
    totLost += L.lost;
    h += `<li><b>${TOPICS[L.k].name}:</b> ~${L.lost.toFixed(1)} questions missed (${Math.round(L.acc * 100)}% accuracy on ${TOPICS[L.k].examN} exam questions)</li>`;
  }
  h += `</ul><p><b>Estimated total: ~${Math.round(totLost)} missed → ${Math.round(100 * (EXAM_TOTAL - totLost) / EXAM_TOTAL)}%.</b> ${totLost > 18 ? "That's " + Math.ceil(totLost - 18) + " questions past the failure line — recover them from the areas at the top of this list." : "That clears the bar — keep drilling to build margin."}</p>`;

  // 2. trap patterns
  const tr = trapStats();
  const overall = (() => { let c = 0, t = 0; for (const k in ts) { c += ts[k].c; t += ts[k].t; } return t ? c / t : 0; })();
  const bad = Object.entries(tr).filter(([tag, s]) => s.t >= 3 && (s.c / s.t) < Math.min(overall - 0.10, 0.7))
    .sort((a, b) => (a[1].c / a[1].t) - (b[1].c / b[1].t));
  h += `<h3>2. Your trap patterns</h3>`;
  if (bad.length) {
    h += `<p>These recurring exam traps are hitting you well below your overall ${Math.round(overall * 100)}% accuracy:</p><ul>`;
    for (const [tag, s] of bad) h += `<li><b>${pct(s.c, s.t)}%</b> on <b>${tag}</b> questions (${s.t} tries) — ${TRAP_INFO[tag] || ""}</li>`;
    h += `</ul>`;
  } else {
    h += `<p>No specific trap pattern stands out yet${Object.keys(tr).length ? " — misses look spread across topics rather than concentrated on a trick" : ""}. (Patterns appear after ~3 attempts per trap type.)</p>`;
  }

  // 3. weakest subtopics
  const ss = subStats();
  const weak = Object.entries(ss).filter(([_, s]) => s.t >= 3 && s.c / s.t < 0.75).sort((a, b) => (a[1].c / a[1].t) - (b[1].c / b[1].t)).slice(0, 6);
  h += `<h3>3. Weakest subtopics</h3>`;
  h += weak.length
    ? "<ul>" + weak.map(([k, s]) => `<li><b>${pct(s.c, s.t)}%</b> — ${k} (${s.c}/${s.t})</li>`).join("") + "</ul>"
    : "<p>No subtopic below 75% with enough data. Good sign.</p>";

  // 4. prescription
  const worst = losses.find(l => !l.unknown);
  h += `<h3>4. Prescription</h3><ol>`;
  const unknowns = losses.filter(l => l.unknown);
  if (unknowns.length) h += `<li>Cover your blind spots first: <b>${unknowns.map(u => TOPICS[u.k].name).join(", ")}</b> — run Study Mode on them today.</li>`;
  if (worst) h += `<li><b>${TOPICS[worst.k].name}</b> is your biggest leak. ${STUDY_PLAN[worst.k]}</li>`;
  h += `<li>Run the <b>Weak-spot drill</b> daily — it re-serves every question you've missed until you beat it twice in a row.</li>`;
  h += `<li>Take a full timed exam every 2-3 days. Book the real test after two consecutive practice scores ≥ 80%.</li></ol></div>`;
  return h;
}

function exportData() {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "part107_progress_" + new Date().toISOString().slice(0, 10) + ".json";
  a.click();
}

/* ---------- study mode ---------- */
function renderStudySetup() {
  let h = `<div class="card"><h2>Study mode</h2><p>Untimed, instant feedback with full explanations. Pick an area:</p><div class="btnrow">`;
  h += `<button class="primary" onclick="startStudy('all')">All areas</button>`;
  for (const k in TOPICS) h += `<button onclick="startStudy('${k}')">${TOPICS[k].name}</button>`;
  h += `<button onclick="startStudy('figures')">Chart/figure questions only</button></div></div>`;
  $("#main").innerHTML = h;
}
function startStudy(topic) {
  let pool = topic === "all" ? QB : topic === "figures" ? QB.filter(q => q.figure) : QB.filter(q => q.topic === topic);
  const st = qStats();
  // least-seen first, then shuffle within
  pool = shuffle(pool).sort((a, b) => ((st[a.id]?.seen) || 0) - ((st[b.id]?.seen) || 0));
  session = { mode: "study", qs: pool, i: 0, answers: {}, instant: true };
  renderQuiz();
}

/* ---------- drill mode ---------- */
function startDrill() {
  const st = qStats();
  // weak = ever missed and not since answered correctly twice in a row
  const weak = [];
  const streak = {}; // consecutive correct at tail
  for (const e of S.events) {
    if (e.ok) streak[e.q] = (streak[e.q] || 0) + 1; else streak[e.q] = 0;
  }
  for (const qid in st) {
    const s = st[qid];
    if (s.ok < s.seen && (streak[qid] || 0) < 2 && byId[qid]) weak.push(byId[qid]);
  }
  if (!weak.length) {
    $("#main").innerHTML = `<div class="card"><h2>Weak-spot drill</h2><p>Nothing to drill — you have no missed questions outstanding. Take an exam or study a new area to feed the drill.</p></div>`;
    return;
  }
  session = { mode: "drill", qs: shuffle(weak), i: 0, answers: {}, instant: true };
  renderQuiz();
}

/* ---------- exam mode ---------- */
function startExam() {
  const picks = [];
  for (const k in TOPICS) {
    const pool = shuffle(QB.filter(q => q.topic === k));
    picks.push(...pool.slice(0, TOPICS[k].examN));
  }
  session = { mode: "exam", qs: shuffle(picks), i: 0, answers: {}, instant: false, deadline: Date.now() + EXAM_SECONDS * 1000, flags: {} };
  renderQuiz();
  timerInt = setInterval(() => {
    const left = Math.max(0, session.deadline - Date.now());
    const el = $("#timer");
    if (el) {
      const hh = Math.floor(left / 3600000), mm = Math.floor(left / 60000) % 60, ss = Math.floor(left / 1000) % 60;
      el.textContent = `${hh}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
      el.className = left < 15 * 60000 ? "bad" : "";
    }
    if (left <= 0) { clearInterval(timerInt); timerInt = null; finishExam(); }
  }, 500);
}

function finishExam() {
  const byTopic = {}; for (const k in TOPICS) byTopic[k] = { c: 0, t: 0 };
  let score = 0;
  for (const q of session.qs) {
    const a = session.answers[q.id];
    const ok = a !== undefined && a === q.answer;
    byTopic[q.topic].t++; if (ok) { byTopic[q.topic].c++; score++; }
    record(q.id, ok, "exam");
  }
  S.exams.push({ ts: Date.now(), score, total: session.qs.length, byTopic, durationSec: Math.round((EXAM_SECONDS * 1000 - (session.deadline - Date.now())) / 1000) });
  save();
  if (timerInt) { clearInterval(timerInt); timerInt = null; }
  renderExamResult(score, byTopic);
}

function renderExamResult(score, byTopic) {
  const p = pct(score, session.qs.length);
  let h = `<div class="card"><h2>Exam result</h2>
    <div class="bigstat ${p >= PASS_PCT ? "good" : "bad"}">${p}% — ${p >= PASS_PCT ? "PASS" : "FAIL"}</div>
    <p>${score} of ${session.qs.length} correct. Real exam passing score: 70% (42/60).</p><table><tr><th>Area</th><th>Score</th></tr>`;
  for (const k in TOPICS) { const s = byTopic[k]; h += `<tr><td>${TOPICS[k].name}</td><td class="${pct(s.c,s.t)>=70?"good":"bad"}">${s.c}/${s.t} (${pct(s.c, s.t)}%)</td></tr>`; }
  h += `</table><div class="btnrow"><button class="primary" onclick="reviewExam(true)">Review missed questions</button>
    <button onclick="reviewExam(false)">Review all 60</button>
    <button onclick="show('home')">Dashboard & diagnosis</button></div></div>`;
  $("#main").innerHTML = h;
  window.scrollTo(0, 0);
}

function reviewExam(missedOnly) {
  let h = `<div class="card"><h2>Exam review ${missedOnly ? "— missed questions" : ""}</h2></div>`;
  let n = 0;
  session.qs.forEach((q, idx) => {
    const a = session.answers[q.id];
    const ok = a === q.answer;
    if (missedOnly && ok) return;
    n++;
    h += `<div class="card q-review ${ok ? "okq" : "missq"}">
      <p class="qtext"><b>Q${idx + 1}.</b> ${esc(q.q)} ${q.figure ? figBtn(q.figure) : ""}</p>
      <ul class="choices">` + q.choices.map((c, i) =>
        `<li class="${i === q.answer ? "correct" : ""} ${i === a && i !== q.answer ? "wrong" : ""}">${"ABC"[i]}. ${esc(c)} ${i === q.answer ? "✓" : ""}${i === a && i !== q.answer ? " ✗ (your answer)" : ""}${a === undefined && i === q.answer ? " (you left this blank)" : ""}</li>`).join("") +
      `</ul><p class="expl">${esc(q.explanation)}</p><p class="meta">${TOPICS[q.topic].name} › ${q.sub} · ACS ${q.acs} · ${q.id}</p></div>`;
  });
  if (missedOnly && !n) h += `<div class="card"><p>Perfect — nothing missed!</p></div>`;
  h += `<div class="card"><button onclick="show('home')">Back to dashboard</button></div>`;
  $("#main").innerHTML = h;
  window.scrollTo(0, 0);
}

/* ---------- quiz renderer (shared) ---------- */
function figBtn(f) { return `<button class="figbtn" onclick="showFig(${f})">📄 View Figure ${f}</button>`; }
function showFig(f) {
  $("#figmodal").style.display = "flex";
  $("#figimg").src = "figures/figure_" + f + ".png";
  $("#figimg").className = "";
}

function renderQuiz() {
  const q = session.qs[session.i];
  if (!q) { // out of questions (study/drill exhausted)
    $("#main").innerHTML = `<div class="card"><h2>Done!</h2><p>You finished this ${session.mode} set.</p><button class="primary" onclick="show('home')">See dashboard</button></div>`;
    return;
  }
  const answered = session.answers[q.id] !== undefined;
  let h = `<div class="card quizhead"><span>${session.mode === "exam" ? "EXAM" : session.mode === "drill" ? "WEAK-SPOT DRILL" : "STUDY"} — Question ${session.i + 1} of ${session.qs.length}</span>
    ${session.mode === "exam" ? `<span>⏱ <b id="timer"></b></span>` : ""}
    <span class="meta">${TOPICS[q.topic].name}${session.instant ? " › " + q.sub : ""}</span></div>`;

  h += `<div class="card"><p class="qtext">${esc(q.q)}</p>${q.figure ? figBtn(q.figure) : ""}<div class="choices-btns">`;
  q.choices.forEach((c, i) => {
    let cls = "choice";
    if (session.instant && answered) {
      if (i === q.answer) cls += " correct";
      else if (i === session.answers[q.id]) cls += " wrong";
      h += `<button class="${cls}" disabled>${"ABC"[i]}. ${esc(c)}</button>`;
    } else {
      if (session.answers[q.id] === i) cls += " selected";
      h += `<button class="${cls}" onclick="answer(${i})">${"ABC"[i]}. ${esc(c)}</button>`;
    }
  });
  h += `</div>`;
  if (session.instant && answered) {
    const ok = session.answers[q.id] === q.answer;
    h += `<div class="feedback ${ok ? "okq" : "missq"}"><b>${ok ? "✓ Correct." : "✗ Incorrect."}</b> ${esc(q.explanation)}</div>`;
  }
  h += `</div>`;

  // nav
  h += `<div class="card btnrow">`;
  if (session.i > 0) h += `<button onclick="nav(-1)">← Prev</button>`;
  if (session.instant) {
    if (answered && session.i < session.qs.length - 1) h += `<button class="primary" onclick="nav(1)">Next →</button>`;
    if (answered && session.i === session.qs.length - 1) h += `<button class="primary" onclick="session.i++;renderQuiz()">Finish</button>`;
    h += `<button onclick="show('home')">End session</button>`;
  } else {
    if (session.i < session.qs.length - 1) h += `<button class="primary" onclick="nav(1)">Next →</button>`;
    h += `<button onclick="session.flags['${q.id}']=!session.flags['${q.id}'];renderQuiz()">${session.flags[q.id] ? "🚩 Unflag" : "⚐ Flag for review"}</button>`;
    h += `<button class="danger" onclick="confirmSubmit()">Submit exam</button>`;
  }
  h += `</div>`;

  // exam question grid
  if (session.mode === "exam") {
    h += `<div class="card grid">` + session.qs.map((qq, i) =>
      `<span class="cell ${session.answers[qq.id] !== undefined ? "done" : ""} ${session.flags[qq.id] ? "flagged" : ""} ${i === session.i ? "cur" : ""}" onclick="session.i=${i};renderQuiz()">${i + 1}</span>`).join("") + `</div>`;
  }
  $("#main").innerHTML = h;
  window.scrollTo(0, 0);
}

function answer(i) {
  const q = session.qs[session.i];
  if (session.instant && session.answers[q.id] !== undefined) return;
  session.answers[q.id] = i;
  if (session.instant) record(q.id, i === q.answer, session.mode);
  renderQuiz();
}
function nav(d) { session.i = Math.max(0, Math.min(session.qs.length - 1, session.i + d)); renderQuiz(); }
function confirmSubmit() {
  const un = session.qs.filter(q => session.answers[q.id] === undefined).length;
  if (confirm(un ? `You have ${un} unanswered question(s) — they count as wrong. Submit anyway?` : "Submit exam for grading?")) finishExam();
}

/* keyboard */
document.addEventListener("keydown", (e) => {
  if (!session || !$(".choices-btns")) return;
  if (e.key >= "1" && e.key <= "3") answer(Number(e.key) - 1);
  if (e.key === "Enter" || e.key === "ArrowRight") { const q = session.qs[session.i]; if (!session.instant || session.answers[q.id] !== undefined) nav(1); }
  if (e.key === "ArrowLeft") nav(-1);
});

/* ---------- chart school ---------- */
function chartLessonStats() {
  const st = qStats();
  return (window.LESSONS || []).map(L => {
    let c = 0, t = 0;
    for (const id of L.drill) { const s = st[id]; if (s) { t += s.seen; c += s.ok; } }
    return { c, t };
  });
}
function renderChartSchool() {
  const stats = chartLessonStats();
  let h = `<div class="card"><h2>🗺 Chart School</h2><p>How to actually read sectional charts and METARs — the visual skills behind roughly a third of the exam. Each lesson pairs a diagram with spotlights cropped from the <b>real FAA testing-supplement figures</b> you'll get at the test center, then drills you on the matching questions.</p></div>`;
  (window.LESSONS || []).forEach((L, i) => {
    const s = stats[i];
    const p = s.t ? pct(s.c, s.t) : null;
    h += `<div class="card lessonrow" onclick="renderLesson(${i})">
      <div><b>${i + 1}. ${L.title}</b><br><small>${L.tagline}</small></div>
      <div class="lessonstat ${p === null ? "" : p >= 80 ? "good" : p >= 70 ? "warn" : "bad"}">${p === null ? "not drilled" : p + "%"}</div>
    </div>`;
  });
  $("#main").innerHTML = h;
  window.scrollTo(0, 0);
}
function renderLesson(i) {
  const L = window.LESSONS[i];
  let h = `<div class="card"><h2>${i + 1}. ${L.title}</h2><p class="meta">${L.tagline}</p></div>
    <div class="card lesson">${L.html}</div>
    <div class="card btnrow">
      <button class="primary" onclick="startLessonDrill(${i})">Drill this lesson (${L.drill.length} questions)</button>
      ${i > 0 ? `<button onclick="renderLesson(${i - 1})">← Lesson ${i}</button>` : ""}
      ${i < window.LESSONS.length - 1 ? `<button onclick="renderLesson(${i + 1})">Lesson ${i + 2} →</button>` : ""}
      <button onclick="renderChartSchool()">All lessons</button>
    </div>`;
  $("#main").innerHTML = h;
  const line = $("#metarline");
  if (line && window.METAR_TOKENS) {
    line.innerHTML = window.METAR_TOKENS.map(([tok], j) => `<span class="metar-token" data-j="${j}">${esc(tok)}</span>`).join(" ");
    line.addEventListener("click", (e) => {
      const el = e.target.closest(".metar-token"); if (!el) return;
      line.querySelectorAll(".metar-token").forEach(x => x.classList.toggle("sel", x === el));
      const [tok, expl] = window.METAR_TOKENS[Number(el.dataset.j)];
      const box = $("#metarExplain"); box.style.display = "block";
      box.className = "feedback okq"; box.innerHTML = `<b>${esc(tok)}</b> — ${esc(expl)}`;
    });
  }
  window.scrollTo(0, 0);
}
function startLessonDrill(i) {
  const L = window.LESSONS[i];
  const qs = L.drill.map(id => byId[id]).filter(Boolean);
  session = { mode: "study", qs: shuffle(qs), i: 0, answers: {}, instant: true };
  renderQuiz();
}
function showSpot(name) {
  $("#figmodal").style.display = "flex";
  $("#figimg").src = "figures/" + name + ".png";
  $("#figimg").className = "";
}

/* ---------- reference ---------- */
function renderReference() {
  $("#main").innerHTML = `<div class="card"><h2>Reference library (local copies)</h2><ul class="reflist">
    <li><a href="faa_docs/remote_pilot_study_guide.pdf" target="_blank">FAA Remote Pilot Study Guide</a> — the primary study text; the exam is written from this.</li>
    <li><a href="faa_docs/akts_supplement.pdf" target="_blank">FAA-CT-8080-2H Testing Supplement</a> — every figure the real exam can show you (you get this exact book at the testing center).</li>
    <li><a href="faa_docs/uag_questions.pdf" target="_blank">Official FAA UAG sample questions</a> — all 46 are in this app's bank.</li>
  </ul>
  <h2>Online</h2><ul class="reflist">
    <li><a href="https://faa.psiexams.com/FAA/login" target="_blank">PSI practice test</a> — the official testing vendor's free practice exam. Take it once before booking; it's the closest thing to the real interface.</li>
    <li><a href="https://www.faa.gov/uas/commercial_operators" target="_blank">FAA Part 107 hub</a> · <a href="https://tfr.faa.gov" target="_blank">TFR list</a> · <a href="https://www.1800wxbrief.com" target="_blank">1800WXBrief</a></li>
  </ul>
  <h2>The exam itself</h2>
  <p>60 questions · 2 hours · 70% (42 correct) to pass · $175 at a PSI testing center · bring government ID. You get the printed 8080-2H figure book, scratch paper, and an on-screen calculator. Wrong answers aren't penalized — <b>never leave a blank</b>. Flag and return to time-sinks like lat/long plots.</p>
  <h2>Figures in this app</h2>
  <div class="btnrow">${[2, 12, 20, 21, 22, 23, 26, 59].map(f => `<button onclick="showFig(${f})">Figure ${f}</button>`).join("")}</div></div>`;
}

/* ---------- boot ---------- */
window.addEventListener("DOMContentLoaded", () => {
  if (DEMO) { const b = document.createElement("span"); b.className = "sub"; b.style.color = "var(--warn)"; b.textContent = "· DEMO DATA"; document.querySelector("header .sub").after(b); }
  document.querySelectorAll("nav button").forEach(b => b.addEventListener("click", () => {
    if (session && session.mode === "exam" && timerInt && b.dataset.v !== "quiz") {
      if (!confirm("Leave the exam? Progress on this attempt will be lost.")) return;
      clearInterval(timerInt); timerInt = null; session = null;
    }
    show(b.dataset.v);
  }));
  $("#figmodal").addEventListener("click", (e) => { if (e.target.id === "figmodal" || e.target.id === "figclose") $("#figmodal").style.display = "none"; });
  $("#figimg").addEventListener("click", function () { this.classList.toggle("zoomed"); });
  const m = location.hash.match(/^#lesson-(\d+)$/);
  if (m && window.LESSONS[Number(m[1])]) { show("charts"); renderLesson(Number(m[1])); }
  else if (location.hash === "#charts") show("charts");
  else show("home");
});
