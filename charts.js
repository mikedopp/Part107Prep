/* Chart School — visual lessons on reading sectional charts, with spotlights
   cropped from the actual FAA-CT-8080-2H figures used on the exam. */
"use strict";

const SVG_COLORS = { blue: "#6aa3d8", magenta: "#d268a8", gold: "#d4a942", text: "#e8e6e0", dim: "#9a978f", good: "#5dbb63", bad: "#e06055", panel: "#2a2d35" };

function spot(name, caption) {
  return `<figure class="spotfig"><img src="figures/${name}.png" alt="${caption}" onclick="showSpot('${name}')">
    <figcaption>${caption} <small>(click to enlarge)</small></figcaption></figure>`;
}

window.LESSONS = [

/* ------------------------------------------------ 1 · Airspace stack */
{
  title: "The airspace stack & chart colors",
  tagline: "Which chunks of sky need permission, and how each is drawn",
  drill: ["air-01","air-02","air-04","air-05","air-16","air-19","faa-03"],
  html: `
<svg viewBox="0 0 960 500" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="0" y="30" width="960" height="42" fill="#9a978f22" stroke="#9a978f" stroke-dasharray="none"/>
  <text x="480" y="57" fill="#9a978f" font-size="17" text-anchor="middle">CLASS A — 18,000 ft MSL and up · IFR only · a drone can never get here</text>

  <!-- Class E background -->
  <rect x="0" y="72" width="960" height="358" fill="#6aa3d80c"/>
  <text x="945" y="95" fill="#9a978f" font-size="14" text-anchor="end">CLASS E — everywhere above the floors below (no auth needed unless it touches the surface)</text>

  <!-- Class B wedding cake -->
  <g stroke="#6aa3d8" stroke-width="2.5" fill="#6aa3d81f">
    <rect x="45"  y="120" width="250" height="95"/>
    <rect x="90"  y="215" width="160" height="105"/>
    <rect x="130" y="320" width="80"  height="110"/>
  </g>
  <text x="170" y="148" fill="#6aa3d8" font-size="16" font-weight="bold" text-anchor="middle">CLASS B</text>
  <text x="170" y="168" fill="#9a978f" font-size="13" text-anchor="middle">solid BLUE rings</text>
  <text x="170" y="410" fill="#e8e6e0" font-size="13" text-anchor="middle">big hub airport</text>

  <!-- Class C -->
  <g stroke="#d268a8" stroke-width="2.5" fill="#d268a81f">
    <rect x="360" y="215" width="220" height="80"/>
    <rect x="425" y="295" width="90"  height="135"/>
  </g>
  <text x="470" y="243" fill="#d268a8" font-size="16" font-weight="bold" text-anchor="middle">CLASS C</text>
  <text x="470" y="263" fill="#9a978f" font-size="13" text-anchor="middle">solid MAGENTA rings</text>
  <text x="470" y="410" fill="#e8e6e0" font-size="13" text-anchor="middle">mid-size towered</text>

  <!-- Class D -->
  <g stroke="#6aa3d8" stroke-width="2.5" stroke-dasharray="8 5" fill="#6aa3d81f">
    <rect x="650" y="310" width="110" height="120"/>
  </g>
  <text x="705" y="338" fill="#6aa3d8" font-size="16" font-weight="bold" text-anchor="middle">CLASS D</text>
  <text x="705" y="358" fill="#9a978f" font-size="13" text-anchor="middle">DASHED blue</text>

  <!-- Class E surface -->
  <g stroke="#d268a8" stroke-width="2.5" stroke-dasharray="8 5" fill="#d268a81f">
    <rect x="810" y="310" width="110" height="120"/>
  </g>
  <text x="865" y="338" fill="#d268a8" font-size="15" font-weight="bold" text-anchor="middle">E to SFC</text>
  <text x="865" y="358" fill="#9a978f" font-size="13" text-anchor="middle">DASHED magenta</text>

  <!-- E @ 700 vignette floor -->
  <line x1="225" y1="378" x2="415" y2="378" stroke="#d268a8" stroke-width="7" opacity="0.30"/>
  <text x="320" y="368" fill="#d268a8" font-size="12" text-anchor="middle">E floor at 700 AGL (vignette)</text>

  <!-- 400 ft line + drone -->
  <line x1="0" y1="398" x2="960" y2="398" stroke="#d4a942" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="8" y="392" fill="#d4a942" font-size="13">← your world: 400 ft AGL</text>
  <text x="330" y="392" fill="#d4a942" font-size="16">🛸</text>

  <!-- ground -->
  <rect x="0" y="430" width="960" height="40" fill="#5dbb6322" stroke="#5dbb63"/>
  <text x="480" y="456" fill="#5dbb63" font-size="15" text-anchor="middle">CLASS G — uncontrolled, surface up to the E floor · NO authorization needed</text>

  <!-- auth badges -->
  <g font-size="12" fill="#e06055" font-weight="bold">
    <text x="170" y="345" text-anchor="middle">AUTH REQUIRED</text>
    <text x="470" y="320" text-anchor="middle">AUTH REQUIRED</text>
    <text x="705" y="378" text-anchor="middle">AUTH REQUIRED</text>
    <text x="865" y="378" text-anchor="middle">AUTH REQUIRED</text>
  </g>
</svg>
<p><b>The whole game in one rule:</b> 14 CFR 107.41 — you need ATC authorization (LAANC) in Class <b>B, C, D, and E-that-touches-the-surface</b>. Class G and Class E with a 700/1,200-ft floor need nothing, because at ≤400 ft you're underneath E anyway.</p>
<ul>
  <li><b>Solid blue rings</b> = Class B · <b>Solid magenta rings</b> = Class C → authorization.</li>
  <li><b>Dashed blue</b> = Class D · <b>Dashed magenta</b> = Class E starting at the SURFACE → authorization. The dashed magenta line is the most-missed symbol on the exam — it looks harmless and isn't.</li>
  <li><b>Faded magenta band (vignette)</b> = Class E starts at 700 AGL. You fly under it in Class G — no authorization. Same for areas with no marking (E at 1,200 AGL).</li>
</ul>
${spot("spot_jamestown", "Real chart (Fig 26, Jamestown): DASHED BLUE ring = Class D around the airport; the DASHED MAGENTA shape around it = Class E surface extensions. Both need authorization at any altitude.")}
`},

/* ------------------------------------------------ 2 · Data blocks */
{
  title: "Airport data blocks, decoded",
  tagline: "Every airport's cheat-sheet, printed right on the chart",
  drill: ["faa-05","ops-24","cht-07","cht-08","cht-09","faa-11"],
  html: `
<svg viewBox="0 0 960 400" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="255" y="130" width="450" height="130" rx="6" fill="#2a2d35" stroke="#d268a8"/>
  <g font-family="Consolas, monospace" fill="#d268a8" text-anchor="middle" font-weight="bold">
    <text x="480" y="163" font-size="21">COEUR D'ALENE-BOYINGTON (COE)</text>
    <text x="480" y="192" font-size="19">AWOS-3 135.075</text>
    <text x="480" y="221" font-size="19">2320 *L 74 122.8 Ⓒ</text>
    <text x="480" y="248" font-size="19">RP 11</text>
  </g>
  <g stroke="#d4a942" stroke-width="1.3" fill="none">
    <path d="M355 155 L 180 90"/><path d="M660 155 L 800 90"/>
    <path d="M420 183 L 170 210"/>
    <path d="M385 214 L 240 320"/><path d="M432 214 L 400 320"/><path d="M470 214 L 520 320"/><path d="M535 214 L 700 300"/>
    <path d="M505 242 L 790 250"/>
  </g>
  <g font-size="14" fill="#e8e6e0">
    <text x="175" y="78" text-anchor="middle">Airport name</text>
    <text x="800" y="78" text-anchor="middle">Identifier — use it in LAANC</text>
    <text x="165" y="232" text-anchor="end">Automated weather you can<tspan x="165" dy="16">call/listen to before launch</tspan></text>
    <text x="240" y="340" text-anchor="middle">Field elevation:<tspan x="240" dy="16" fill="#e06055">2,320 ft MSL</tspan></text>
    <text x="400" y="340" text-anchor="middle">*L = lighting<tspan x="400" dy="16">(* = part-time)</tspan></text>
    <text x="520" y="340" text-anchor="middle">Longest runway<tspan x="520" dy="16">74 = 7,400 ft</tspan></text>
    <text x="712" y="318" text-anchor="middle">Ⓒ = CTAF — monitor<tspan x="712" dy="16">this while you fly</tspan></text>
    <text x="795" y="270" text-anchor="start">RP = RIGHT pattern rwy 11</text>
  </g>
</svg>
<p>Read them in order — the layout never changes: <b>name (ID) → weather frequency → elevation · lighting · runway length (hundreds of feet) · CTAF Ⓒ → remarks</b> (RP = right pattern; a ✱ after CT means part-time tower).</p>
<p><b>Why you care as a drone pilot:</b> the CTAF tells you where to listen for inbound traffic, the field elevation converts chart MSL numbers into height above the airport, and RP tells you which side of the field the pattern flows on.</p>
<div class="spotrow">
${spot("spot_coe", "Fig 22: the real COE block — AWOS 135.075, elevation 2320, runway 7,400 ft, CTAF 122.8Ⓒ. This exact block answers exam question 5.")}
${spot("spot_garrison", "Fig 21: Garrison (D05) — tiny non-towered field: elevation 1937, lighted, 3,700-ft runway, CTAF 122.9Ⓒ.")}
${spot("spot_cooperstown", "Fig 26: Cooperstown (S32) — the exam's favorite: CTAF 122.9Ⓒ, 3,500-ft runway. MAGENTA symbol = no tower.")}
</div>
`},

/* ------------------------------------------------ 3 · Altitudes: MSL vs AGL */
{
  title: "Airspace altitudes: everything is MSL",
  tagline: "The 41/13 notation, and the trap that fails more drone pilots than any other",
  drill: ["faa-08","air-03","air-11","faa-13","cht-11"],
  html: `
<svg viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg" role="img">
  <!-- sea level & ground -->
  <line x1="0" y1="395" x2="960" y2="395" stroke="#6aa3d8" stroke-width="2"/>
  <text x="10" y="412" fill="#6aa3d8" font-size="13">sea level (0 MSL)</text>
  <rect x="0" y="360" width="960" height="35" fill="#5dbb6318"/>
  <line x1="0" y1="360" x2="960" y2="360" stroke="#5dbb63" stroke-width="2"/>
  <text x="950" y="378" fill="#5dbb63" font-size="13" text-anchor="end">ground (~50 ft MSL at Savannah)</text>

  <!-- Class C core -->
  <g stroke="#d268a8" stroke-width="2.5" fill="#d268a81f">
    <rect x="380" y="60" width="200" height="300"/>
    <rect x="180" y="60" width="200" height="205"/>
    <rect x="580" y="60" width="200" height="205"/>
  </g>
  <line x1="180" y1="265" x2="780" y2="265" stroke="#d268a8" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="480" y="48" fill="#d268a8" font-size="15" font-weight="bold" text-anchor="middle">SAVANNAH CLASS C — chart says 41/13 on the shelf, 41/SFC in the core</text>
  <text x="480" y="90" fill="#e8e6e0" font-size="14" text-anchor="middle">ceiling 4,100 MSL (the "41")</text>
  <text x="480" y="345" fill="#e8e6e0" font-size="14" text-anchor="middle">core: surface → 4,100</text>
  <text x="255" y="288" fill="#e8e6e0" font-size="14" text-anchor="middle">shelf floor: 1,300 MSL (the "13")</text>

  <!-- drones -->
  <text x="255" y="352" font-size="18" text-anchor="middle">🛸</text>
  <text x="255" y="330" fill="#5dbb63" font-size="13" font-weight="bold" text-anchor="middle">UNDER the shelf at 400 AGL:</text>
  <text x="255" y="313" fill="#5dbb63" font-size="13" text-anchor="middle">outside Class C — no auth needed</text>
  <text x="520" y="330" font-size="18" text-anchor="middle">🛸</text>
  <text x="530" y="310" fill="#e06055" font-size="13" font-weight="bold" text-anchor="middle">inside the core ring: AUTH REQUIRED</text>
</svg>
<p><b>Rule:</b> every altitude printed on a sectional — Class C shelves (41/13), Class D ceilings ([24] = 2,400), MEF figures, obstacle bold numbers — is <b>MSL</b>, height above sea level. The ONLY AGL numbers are the ones in <b>(parentheses)</b> on obstacles and the E-floor conventions (700/1,200 AGL).</p>
<p><b>The trap:</b> the exam offers "1,300 feet AGL" and "1,300 feet MSL" as separate answers. Chart altitudes are MSL. Same with the Elizabeth City balloon: the caution box literally prints "3008' MSL" — read what's on the chart, not what sounds right.</p>
<div class="spotrow">
${spot("spot_savannah", "Fig 23: find both 41/13 shelf labels and the 41/SFC core. This is exam question 8: the shelf floor is 1,300 MSL.")}
${spot("spot_ecg", "Fig 20: the ECG caution box — 'UNMARKED BALLOON ON CABLE TO 3008' MSL. CHECK NOTAMS.' Exam question 9, answered verbatim by the chart.")}
</div>
`},

/* ------------------------------------------------ 4 · Obstacles & MEF */
{
  title: "Obstacles, towers & the MEF",
  tagline: "The two-number code on every tower, and the big number in every grid square",
  drill: ["air-12","cht-04","cht-05","cht-06","air-11","faa-09"],
  html: `
<svg viewBox="0 0 960 400" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="0" y1="330" x2="960" y2="330" stroke="#5dbb63" stroke-width="2"/>
  <!-- single tower -->
  <g stroke="#6aa3d8" stroke-width="2" fill="none">
    <path d="M150 330 L163 200 L176 330 Z"/><line x1="163" y1="200" x2="163" y2="185"/>
  </g>
  <text x="163" y="170" fill="#6aa3d8" font-size="16" font-weight="bold" text-anchor="middle">1549</text>
  <text x="163" y="152" fill="#d4a942" font-size="15" text-anchor="middle">(405)</text>
  <text x="163" y="360" fill="#e8e6e0" font-size="13" text-anchor="middle">tower</text>
  <path d="M200 158 L 300 120" stroke="#d4a942" stroke-width="1.2" fill="none"/>
  <text x="305" y="115" fill="#e8e6e0" font-size="14">(parentheses) = <tspan fill="#d4a942" font-weight="bold">405 ft AGL</tspan> — compare to YOUR 400-ft ceiling</text>
  <path d="M195 195 L 300 165" stroke="#6aa3d8" stroke-width="1.2" fill="none"/>
  <text x="305" y="162" fill="#e8e6e0" font-size="14">bold = <tspan fill="#6aa3d8" font-weight="bold">1,549 ft MSL</tspan> — tip's altitude above the sea</text>

  <!-- lighted group -->
  <g stroke="#6aa3d8" stroke-width="2" fill="none">
    <path d="M520 330 L531 225 L542 330 Z"/><path d="M542 330 L553 225 L564 330 Z"/>
  </g>
  <g stroke="#d4a942" stroke-width="2">
    <path d="M531 225 l-8 -14 M531 225 l8 -14 M553 225 l-8 -14 M553 225 l8 -14"/>
  </g>
  <text x="542" y="360" fill="#e8e6e0" font-size="13" text-anchor="middle">group obstacle, lightning bolts = LIGHTED</text>

  <!-- MEF -->
  <text x="800" y="240" fill="#6aa3d8" font-size="64" font-weight="bold" text-anchor="middle">2<tspan font-size="40" dy="-22">5</tspan></text>
  <text x="800" y="290" fill="#e8e6e0" font-size="14" text-anchor="middle">MEF — Maximum Elevation Figure</text>
  <text x="800" y="310" fill="#9a978f" font-size="13" text-anchor="middle">highest terrain/obstacle in the grid square:</text>
  <text x="800" y="328" fill="#d4a942" font-size="14" font-weight="bold" text-anchor="middle">2,500 ft MSL (yes, MSL again)</text>
</svg>
<p><b>Reading a tower:</b> bold number = top of the obstacle in MSL; (parenthesized) = its height AGL. The AGL number is your number: a (405) tower out-climbs your 400-ft ceiling — but 107.51's structure rule lets you inspect it up to 400 ft <i>above its top</i> within a 400-ft radius.</p>
<ul>
  <li><b>Lightning bolts</b> = lighted (verify with NOTAMs — 'tower light out' is common).</li>
  <li><b>UC</b> = under construction: assume it's taller than charted and unlit.</li>
  <li>Charts only show obstacles above ~200 ft AGL — short towers, power lines, and NEW towers are invisible. The chart is a floor for your vigilance, not a ceiling.</li>
  <li><b>Guy wires</b> extend hundreds of feet diagonally from tall masts and are never charted individually. Give lattice towers a wide berth.</li>
</ul>
${spot("spot_garrison", "Fig 21 practice: find 2216 (265), 2295 (356), 2206 (259). Tops around 2,200-2,300 MSL but only ~260-360 ft AGL — the ground here is ~1,940 MSL. MSL minus AGL ≈ terrain elevation.")}
`},

/* ------------------------------------------------ 5 · Special use airspace */
{
  title: "Special use airspace & military routes",
  tagline: "Hatched borders, gray lines, and who to ask before flying near them",
  drill: ["air-06","air-07","air-08","cht-12","faa-30","faa-10","faa-46","air-09"],
  html: `
<svg viewBox="0 0 960 430" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <pattern id="hatchB" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <rect width="8" height="8" fill="none"/><line x1="0" y1="0" x2="0" y2="8" stroke="#6aa3d8" stroke-width="2.5"/>
    </pattern>
    <pattern id="hatchM" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <rect width="8" height="8" fill="none"/><line x1="0" y1="0" x2="0" y2="8" stroke="#d268a8" stroke-width="2.5"/>
    </pattern>
  </defs>
  <g font-size="15" fill="#e8e6e0">
    <rect x="30" y="30"  width="130" height="26" fill="url(#hatchB)" stroke="#6aa3d8"/>
    <text x="180" y="49"><tspan font-weight="bold" fill="#6aa3d8">P-40 · Prohibited</tspan> — never. National-security sites (Camp David, DC). Criminal exposure.</text>
    <rect x="30" y="80"  width="130" height="26" fill="url(#hatchB)" stroke="#6aa3d8"/>
    <text x="180" y="99"><tspan font-weight="bold" fill="#6aa3d8">R-5401 · Restricted</tspan> — invisible hazards (artillery, missiles). Permission from the controlling agency when ACTIVE.</text>
    <rect x="30" y="130" width="130" height="26" fill="url(#hatchB)" stroke="#6aa3d8"/>
    <text x="180" y="149"><tspan font-weight="bold" fill="#6aa3d8">W-50 · Warning</tspan> — same hazards, offshore beyond 3 NM.</text>
    <rect x="30" y="180" width="130" height="26" fill="url(#hatchM)" stroke="#d268a8"/>
    <text x="180" y="199"><tspan font-weight="bold" fill="#d268a8">A-211 · Alert</tspan> — heavy training activity. No permission needed; everyone shares see-and-avoid.</text>
    <rect x="30" y="230" width="130" height="26" fill="url(#hatchM)" stroke="#d268a8"/>
    <text x="180" y="249"><tspan font-weight="bold" fill="#d268a8">MOA</tspan> — military training, separated from IFR only. Check hours in the chart legend; status from FSS.</text>
    <line x1="30" y1="293" x2="160" y2="293" stroke="#9a978f" stroke-width="3"/>
    <text x="70" y="285" fill="#9a978f" font-size="13">VR1667</text>
    <text x="180" y="299"><tspan font-weight="bold" fill="#9a978f">MTR · Military Training Route</tspan> — gray line. IR = instrument, VR = visual.</text>
    <text x="180" y="322" fill="#d4a942" font-weight="bold">4-digit number (VR1667) = entire route at or BELOW 1,500 AGL — your altitude, their 400+ knots.</text>
    <text x="180" y="345" fill="#9a978f">3-digit (VR166) = has segments above 1,500 AGL. Route line is a CENTERLINE — traffic ranges miles either side.</text>
    <text x="30" y="395" fill="#e8e6e0"><tspan font-weight="bold" fill="#d4a942">TFRs never appear on the printed chart</tspan> — they're temporary. Check tfr.faa.gov / a briefing before every flight.</text>
  </g>
</svg>
<div class="spotrow">
${spot("spot_restricted", "Fig 26: R-5401/R-5402/R-5403 blue-hatched rings — note 'excludes airspace when active' notes and the phone number box.")}
${spot("spot_moa", "Fig 21: DEVILS LAKE WEST MOA magenta hatched boundary — exam question 10: its hours live in the chart legend's special-use panel. The arrow crossing it is IR644-649, an instrument MTR.")}
${spot("spot_mtr", "Fig 59: the gray MTR stack VR1667·VR1617·VR1638·VR1668 near Deshler — 4 digits each, so at/below 1,500 AGL. Exam question 30.")}
</div>
`},

/* ------------------------------------------------ 6 · Lat/long */
{
  title: "Latitude & longitude plotting",
  tagline: "Free exam points once your fingers know the tick marks",
  drill: ["faa-24","faa-31","cht-10"],
  html: `
<svg viewBox="0 0 960 480" xmlns="http://www.w3.org/2000/svg" role="img">
  <!-- grid frame -->
  <g stroke="#6aa3d8" stroke-width="2">
    <line x1="150" y1="80" x2="150" y2="420"/><line x1="810" y1="80" x2="810" y2="420"/>
    <line x1="150" y1="80" x2="810" y2="80"/><line x1="150" y1="420" x2="810" y2="420"/>
  </g>
  <text x="140" y="75" fill="#6aa3d8" font-size="16" text-anchor="end">102°W</text>
  <text x="820" y="75" fill="#6aa3d8" font-size="16">101°W</text>
  <text x="480" y="70" fill="#6aa3d8" font-size="16" text-anchor="middle">48°N</text>
  <text x="480" y="445" fill="#6aa3d8" font-size="16" text-anchor="middle">47°N</text>
  <!-- ticks: minutes along top (60 per degree, draw every 10') -->
  <g stroke="#6aa3d8" stroke-width="1.5">
    <line x1="260" y1="80" x2="260" y2="92"/><line x1="370" y1="80" x2="370" y2="92"/><line x1="480" y1="80" x2="480" y2="98"/><line x1="590" y1="80" x2="590" y2="92"/><line x1="700" y1="80" x2="700" y2="92"/>
    <line x1="150" y1="137" x2="162" y2="137"/><line x1="150" y1="193" x2="162" y2="193"/><line x1="150" y1="250" x2="168" y2="250"/><line x1="150" y1="307" x2="162" y2="307"/><line x1="150" y1="363" x2="162" y2="363"/>
  </g>
  <text x="480" y="112" fill="#9a978f" font-size="12" text-anchor="middle">30' (bold tick)</text>
  <text x="175" y="254" fill="#9a978f" font-size="12">30'</text>
  <!-- target point: 47°40'N = 20' south of 48 → y = 80+ (20/60)*340 = 193; 101°26'W = 26' west(left) of 101° → x = 810 - (26/60)*660 = 524 -->
  <circle cx="524" cy="193" r="7" fill="#d4a942"/>
  <g stroke="#d4a942" stroke-width="1.3" stroke-dasharray="5 4">
    <line x1="524" y1="193" x2="524" y2="80"/><line x1="524" y1="193" x2="810" y2="193"/>
  </g>
  <text x="540" y="185" fill="#d4a942" font-size="15" font-weight="bold">47°40'N 101°26'W  (≈ Garrison)</text>
  <text x="672" y="210" fill="#e8e6e0" font-size="13" text-anchor="middle">← count 26 tick marks west from 101°</text>
  <text x="524" y="145" fill="#e8e6e0" font-size="13" text-anchor="middle" transform="rotate(-90 524 145)"></text>
  <text x="330" y="210" fill="#e8e6e0" font-size="13">40' north of 47° = 20' below 48° ↑</text>
  <!-- mnemonic -->
  <text x="480" y="470" fill="#d4a942" font-size="15" text-anchor="middle" font-weight="bold">LAT is FLAT (runs sideways, measures N-S of the equator) · LONGitude lines are LONG (pole to pole, measure E-W of Greenwich)</text>
</svg>
<p><b>Mechanics:</b> find the printed degree lines, then count tick marks — <b>each small tick = 1 minute</b> (60 per degree), bold tick every 10 or 30 minutes. In the US you're always N latitude / W longitude: latitude increases going UP, longitude increases going LEFT (west).</p>
<p><b>Speed tip for the exam:</b> the answer choices are airports miles apart. You rarely need precision — get within ~5 minutes and only one candidate airport is close. Flag these questions and do them last; they eat clock time.</p>
${spot("spot_garrison", "Fig 21: Garrison sits just south of the 48°N line — the vertical line at right edge with tick marks is 101°W. Practice: put your finger at 47°40'N 101°26'W.")}
`},

/* ------------------------------------------------ 7 · Traffic patterns */
{
  title: "Traffic patterns & runway numbers",
  tagline: "Turning radio calls into a picture of where the airplane is",
  drill: ["faa-18","ops-06","ops-07","ops-09","cht-07","cht-01","cht-02","cht-03"],
  html: `
<svg viewBox="0 0 960 470" xmlns="http://www.w3.org/2000/svg" role="img">
  <!-- compass -->
  <g transform="translate(70,70)">
    <circle r="34" fill="none" stroke="#9a978f"/><path d="M0 -30 L8 8 L0 2 L-8 8 Z" fill="#d4a942"/>
    <text y="-42" fill="#d4a942" font-size="15" text-anchor="middle" font-weight="bold">N</text>
  </g>
  <!-- runway (east-west) -->
  <rect x="330" y="300" width="300" height="26" fill="#4a4d55" stroke="#9a978f"/>
  <text x="345" y="319" fill="#e8e6e0" font-size="15" font-weight="bold">9</text>
  <text x="600" y="319" fill="#e8e6e0" font-size="15" font-weight="bold">27</text>
  <text x="480" y="350" fill="#9a978f" font-size="13" text-anchor="middle">RWY 9 points 090° magnetic (east) — number × 10, magnetic</text>
  <!-- left pattern: rectangle ABOVE (north of) runway -->
  <g stroke="#6aa3d8" stroke-width="2.5" fill="none">
    <path d="M175 313 L322 313" marker-end="url(#arr)"/> <!-- final, from the west -->
    <path d="M634 313 L755 313" marker-end="url(#arr)"/> <!-- upwind/departure -->
    <path d="M760 300 L760 160" marker-end="url(#arr)"/> <!-- crosswind -->
    <path d="M760 160 L300 160" marker-end="url(#arr)"/> <!-- downwind -->
    <path d="M300 160 L300 300" marker-end="url(#arr)"/> <!-- base -->
  </g>
  <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#6aa3d8"/></marker></defs>
  <g font-size="14" fill="#6aa3d8">
    <text x="530" y="150" text-anchor="middle" font-weight="bold">DOWNWIND — heading 270, runway off the pilot's LEFT ✈</text>
    <text x="778" y="235">CROSSWIND</text>
    <text x="240" y="235" text-anchor="end">BASE</text>
    <text x="248" y="296" text-anchor="middle">FINAL — in from the west</text>
    <text x="695" y="296" text-anchor="middle">UPWIND / departure</text>
  </g>
  <text x="530" y="128" font-size="18" text-anchor="middle">✈</text>
  <text x="480" y="395" fill="#e8e6e0" font-size="14" text-anchor="middle">"Midfield left downwind, runway 9" → the plane is NORTH of the field, heading west, about to turn base then final.</text>
  <text x="480" y="425" fill="#d4a942" font-size="14" text-anchor="middle" font-weight="bold">Exam version: RWY 13 (points southeast) + left downwind → pattern is on the NE side → the aircraft is EAST of the runway.</text>
  <text x="480" y="450" fill="#9a978f" font-size="13" text-anchor="middle">Method: draw the runway from its number · downwind = opposite heading · "left" = runway on pilot's left · place the plane.</text>
</svg>
<p><b>Standard patterns turn LEFT</b> (RP in the data block or the segmented circle mark the exceptions). Pattern altitude is usually ~1,000 ft AGL, but aircraft on base and final descend right through YOUR altitude — final approach is the danger zone to stay clear of.</p>
<p><b>Radio decoding drill:</b> every position report names <i>leg + runway</i>. Sketch the runway heading, fly the legs backward (final ← base ← downwind), and you know where to look. This is exactly exam question 18 (Cooperstown, RWY 13).</p>
${spot("spot_cooperstown", "Fig 26: Cooperstown — a magenta (non-towered) field where the exam plays out. RWY 13/31 runs NW-SE; left downwind for 13 puts traffic northeast of the field.")}
`},

/* ------------------------------------------------ 8 · METAR decoder */
{
  title: "METAR decoder (interactive)",
  tagline: "Click each chunk of the raw text — the exam shows you exactly this",
  drill: ["faa-25","faa-26","wx-10","wx-18","wx-11"],
  html: `
<p>This is Chicago Midway from the exam's Figure 12 (question 25). <b>Click each token:</b></p>
<div class="metar" id="metarline"></div>
<div class="feedback" id="metarExplain" style="display:none"></div>
<p style="margin-top:18px"><b>The three traps the exam sets:</b></p>
<ul>
  <li><b>Cloud heights are hundreds of feet AGL:</b> OVC007 = 700 ft, OVC070 = 7,000 ft. Count the digits carefully.</li>
  <li><b>Written wind is TRUE north</b> (spoken tower/ATIS wind is magnetic): 18004KT = from 180° true at 4 kt — don't split it as 040° at 18.</li>
  <li><b>No sign on RA means moderate:</b> -RA light, RA moderate, +RA heavy. 'Rain' alone in an answer = moderate rain.</li>
</ul>
<p>A <b>TAF</b> is the same code as a forecast: valid within 5 SM of the airport for 24-30 hours; date/time groups like 0512/0618 = from the 5th 12Z to the 6th 18Z.</p>
<button class="primary" onclick="showFig(12)">Open the full Figure 12 METAR page</button>
`},
];

/* METAR interactive data */
window.METAR_TOKENS = [
  ["METAR", "Report type: a routine observation (SPECI = special, something changed fast)."],
  ["KMDW", "Station: K + airport ID = Chicago Midway."],
  ["121856Z", "Day 12 of the month, 1856 Zulu (UTC). Subtract your UTC offset for local time."],
  ["32005KT", "Wind FROM 320° TRUE at 5 knots. Written = true north; gusts would appear as G-notation, e.g. 32015G25KT."],
  ["1 1/2SM", "Visibility: 1½ statute miles. Part 107 needs 3 SM at your location — this airport is below drone minimums."],
  ["RA", "Moderate rain. -RA = light, +RA = heavy. Other codes: BR mist, HZ haze, FG fog, TS thunderstorm, SN snow."],
  ["OVC007", "Ceiling: OVerCast at 007 → 700 feet AGL (hundreds of feet!). You must stay 500 ft below clouds — 700-500 = flying at 200 ft max. Effectively grounded."],
  ["17/16", "Temperature 17°C / dew point 16°C. A 1° spread = air nearly saturated — expect fog/low cloud to form or persist."],
  ["A2980", "Altimeter 29.80 inHg. Low pressure; manned traffic will be flying lower true altitudes than their altimeters show."]
];
