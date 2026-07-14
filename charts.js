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
<svg viewBox="0 0 960 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The airspace stack diagram">
  <!-- Class A band -->
  <rect x="0" y="16" width="960" height="34" fill="#9a978f22" stroke="#9a978f"/>
  <text x="480" y="38" fill="#9a978f" font-size="16" text-anchor="middle">CLASS A — 18,000 ft MSL and up · IFR only · a drone can never get here</text>

  <!-- Class E background -->
  <rect x="0" y="58" width="960" height="412" fill="#6aa3d80c"/>
  <text x="950" y="76" fill="#9a978f" font-size="13" text-anchor="end">CLASS E — controlled airspace filling the sky above the floors below</text>

  <!-- 400 ft ceiling line -->
  <line x1="0" y1="438" x2="960" y2="438" stroke="#d4a942" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="10" y="431" fill="#d4a942" font-size="12">← 400 ft AGL</text>

  <!-- ground / Class G -->
  <rect x="0" y="470" width="960" height="46" fill="#5dbb6322" stroke="#5dbb63"/>
  <text x="480" y="497" fill="#5dbb63" font-size="14" text-anchor="middle" font-weight="bold">CLASS G — uncontrolled · surface up to the Class E floor · NO authorization needed</text>

  <!-- CLASS B wedding cake -->
  <g stroke="#6aa3d8" stroke-width="2.5" fill="#6aa3d81f">
    <rect x="55" y="112" width="190" height="54"/>
    <rect x="85" y="166" width="130" height="94"/>
    <rect x="115" y="260" width="70" height="210"/>
  </g>
  <text x="150" y="137" fill="#6aa3d8" font-size="15" font-weight="bold" text-anchor="middle">CLASS B</text>
  <text x="150" y="156" fill="#cfd6de" font-size="12" text-anchor="middle">solid BLUE rings</text>
  <g class="p107-auth"><rect x="120" y="395" width="60" height="33" rx="5" fill="#e0605533" stroke="#e06055"/>
    <text x="150" y="409" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">AUTH</text>
    <text x="150" y="422" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">REQ'D</text></g>

  <!-- CLASS C -->
  <g stroke="#d268a8" stroke-width="2.5" fill="#d268a81f">
    <rect x="305" y="212" width="150" height="72"/>
    <rect x="345" y="284" width="70" height="186"/>
  </g>
  <text x="380" y="241" fill="#d268a8" font-size="15" font-weight="bold" text-anchor="middle">CLASS C</text>
  <text x="380" y="260" fill="#cfd6de" font-size="12" text-anchor="middle">solid MAGENTA rings</text>
  <g class="p107-auth"><rect x="350" y="395" width="60" height="33" rx="5" fill="#e0605533" stroke="#e06055"/>
    <text x="380" y="409" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">AUTH</text>
    <text x="380" y="422" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">REQ'D</text></g>

  <!-- vignette gap + drone flying in Class G (OK) -->
  <rect class="p107-vig" x="432" y="410" width="118" height="9" fill="#d268a8"/>
  <text x="491" y="403" fill="#d268a8" font-size="11" text-anchor="middle">E floor 700 AGL (vignette)</text>
  <g class="p107-drone"><text x="491" y="452" font-size="20" text-anchor="middle">🛸</text></g>
  <text x="491" y="466" fill="#5dbb63" font-size="10" text-anchor="middle" font-weight="bold">✓ under vignette = Class G</text>

  <!-- CLASS D -->
  <g stroke="#6aa3d8" stroke-width="2.5" stroke-dasharray="8 5" fill="#6aa3d81f">
    <rect x="600" y="330" width="105" height="140"/>
  </g>
  <text x="652" y="356" fill="#6aa3d8" font-size="15" font-weight="bold" text-anchor="middle">CLASS D</text>
  <text x="652" y="374" fill="#cfd6de" font-size="12" text-anchor="middle">DASHED blue</text>
  <g class="p107-auth"><rect x="618" y="395" width="68" height="33" rx="5" fill="#e0605533" stroke="#e06055"/>
    <text x="652" y="409" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">AUTH</text>
    <text x="652" y="422" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">REQ'D</text></g>

  <!-- CLASS E to surface -->
  <g stroke="#d268a8" stroke-width="2.5" stroke-dasharray="8 5" fill="#d268a81f">
    <rect x="775" y="330" width="130" height="140"/>
  </g>
  <text x="840" y="356" fill="#d268a8" font-size="15" font-weight="bold" text-anchor="middle">E to SURFACE</text>
  <text x="840" y="374" fill="#cfd6de" font-size="12" text-anchor="middle">DASHED magenta</text>
  <g class="p107-auth"><rect x="806" y="395" width="68" height="33" rx="5" fill="#e0605533" stroke="#e06055"/>
    <text x="840" y="409" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">AUTH</text>
    <text x="840" y="422" fill="#e06055" font-size="10" font-weight="bold" text-anchor="middle">REQ'D</text></g>
</svg>
<p><b>The whole game in one rule:</b> 14 CFR 107.41 — you need ATC authorization (LAANC) in Class <b>B, C, D, and E-that-touches-the-surface</b>. Class G and Class E with a 700/1,200-ft floor need nothing, because at ≤400 ft you're underneath E anyway.</p>
<ul>
  <li><b>Solid blue rings</b> = Class B · <b>Solid magenta rings</b> = Class C → authorization.</li>
  <li><b>Dashed blue</b> = Class D · <b>Dashed magenta</b> = Class E starting at the SURFACE → authorization. The dashed magenta line is the most-missed symbol on the exam — it looks harmless and isn't.</li>
  <li><b>Faded magenta band (vignette)</b> = Class E starts at 700 AGL. You fly under it in Class G — no authorization. Same for areas with no marking (E at 1,200 AGL).</li>
</ul>
${spot("spot_jamestown", "Real chart (Fig 26, Jamestown): the DASHED MAGENTA line = Class E starting at the SURFACE — authorization required, and the symbol pilots miss most. The soft brown band is Class E at 700 AGL (you fly under it in Class G at 400 ft). Jamestown has no tower, so no Class D here.")}
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
  <g class="p107-drone"><text x="255" y="352" font-size="18" text-anchor="middle">🛸</text></g>
  <text x="255" y="330" fill="#5dbb63" font-size="13" font-weight="bold" text-anchor="middle">UNDER the shelf at 400 AGL:</text>
  <text x="255" y="313" fill="#5dbb63" font-size="13" text-anchor="middle">outside Class C — no auth needed</text>
  <g class="p107-auth"><text x="520" y="330" font-size="18" text-anchor="middle">🛸</text></g>
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

/* ------------------------------------------------ 8 · METAR & TAF walkthrough + glossary */
{
  title: "METAR & TAF — full walkthrough + glossary",
  tagline: "Decode any weather report cold: tap each chunk, read it in order, look up every code",
  drill: ["faa-25","faa-26","wx-10","wx-18","wx-11"],
  html: `
<p><b>1 · Tap-to-decode.</b> This is Chicago Midway (the exam's Figure 12). Click any chunk to see what it means:</p>
<div class="metar" id="metarline"></div>
<div class="feedback" id="metarExplain" style="display:none"></div>

<h3>2 · Read it in order — every METAR follows the same 9 slots</h3>
<div style="overflow-x:auto"><table>
<tr><th>#</th><th>Slot</th><th>Example</th><th>What it means</th></tr>
<tr><td>1</td><td>Report type</td><td><code>METAR</code></td><td>Routine hourly ob. <code>SPECI</code> = special (issued when something changed fast).</td></tr>
<tr><td>2</td><td>Station</td><td><code>KMDW</code></td><td>ICAO id. In the lower 48 it's <b>K</b> + the 3-letter airport code.</td></tr>
<tr><td>3</td><td>Date/time</td><td><code>121856Z</code></td><td>Day 12, 1856 <b>Zulu (UTC)</b> — always Zulu. Convert to local yourself.</td></tr>
<tr><td>4</td><td>Wind</td><td><code>32005KT</code></td><td>FROM 320° <b>true</b> at 5 kt. <code>G</code> adds gusts; <code>VRB</code> = variable; <code>00000KT</code> = calm.</td></tr>
<tr><td>5</td><td>Visibility</td><td><code>1 1/2SM</code></td><td>1½ <b>statute</b> miles. <code>10SM</code> = 10+; <code>M1/4SM</code> = less than ¼.</td></tr>
<tr><td>6</td><td>Weather</td><td><code>RA</code></td><td>Present weather (rain). Built from intensity + descriptor + phenomenon — see glossary.</td></tr>
<tr><td>7</td><td>Sky cover</td><td><code>OVC007</code></td><td>Overcast at <b>700 ft AGL</b> (heights in hundreds of feet). Ceiling = lowest BKN/OVC.</td></tr>
<tr><td>8</td><td>Temp/dewpoint</td><td><code>17/16</code></td><td>17°C / dewpoint 16°C. <code>M</code> = minus (<code>M06</code> = -6°C). 1° spread ⇒ fog likely.</td></tr>
<tr><td>9</td><td>Altimeter</td><td><code>A2980</code></td><td>29.80 inHg (decimal implied). A <code>RMK</code> section may follow.</td></tr>
</table></div>

<h3>3 · Glossary — look up any code</h3>
<p><b>Wind</b></p>
<div style="overflow-x:auto"><table>
<tr><td><code>32005KT</code></td><td>from 320° true, 5 kt</td><td><code>32015G25KT</code></td><td>320°, 15 kt gusting 25</td></tr>
<tr><td><code>VRB03KT</code></td><td>variable direction, 3 kt</td><td><code>180V240</code></td><td>direction varying 180°–240°</td></tr>
<tr><td><code>00000KT</code></td><td>calm</td><td colspan="2">written winds = TRUE north; spoken (ATIS/tower) = magnetic</td></tr>
</table></div>
<p><b>Weather = [intensity][descriptor][phenomenon]</b></p>
<div style="overflow-x:auto"><table>
<tr><th>Intensity</th><td><code>-</code> light</td><td>(none) moderate</td><td><code>+</code> heavy</td><td><code>VC</code> vicinity</td></tr>
<tr><th>Descriptor</th><td><code>SH</code> showers</td><td><code>TS</code> t-storm</td><td><code>FZ</code> freezing</td><td><code>MI</code> shallow · <code>BC</code> patchy · <code>BL</code> blowing · <code>DR</code> drifting</td></tr>
<tr><th>Precip</th><td><code>RA</code> rain · <code>DZ</code> drizzle</td><td><code>SN</code> snow · <code>SG</code> grains</td><td><code>PL</code> ice pellets · <code>GR</code> hail · <code>GS</code> small hail</td><td><code>IC</code> ice crystals · <code>UP</code> unknown</td></tr>
<tr><th>Obscuration</th><td><code>BR</code> mist (⅝–6 SM)</td><td><code>FG</code> fog (&lt;⅝ SM)</td><td><code>HZ</code> haze · <code>FU</code> smoke</td><td><code>DU/SA</code> dust/sand · <code>VA</code> ash</td></tr>
<tr><th>Other</th><td><code>PO</code> dust whirls</td><td><code>SQ</code> squall</td><td><code>FC</code> funnel · <code>+FC</code> tornado</td><td><code>SS/DS</code> sand/dust storm</td></tr>
</table></div>
<p style="margin-top:6px"><small>Combine them: <code>+TSRA</code> = heavy thunderstorm w/ rain · <code>-SHSN</code> = light snow showers · <code>FZRA</code> = freezing rain (icing!) · <code>VCTS</code> = thunderstorm nearby.</small></p>
<p><b>Sky cover</b> (eighths of sky = "oktas"; heights in hundreds of ft AGL)</p>
<div style="overflow-x:auto"><table>
<tr><td><code>SKC/CLR</code> clear</td><td><code>FEW</code> 1–2/8</td><td><code>SCT</code> 3–4/8</td><td><code>BKN</code> 5–7/8</td><td><code>OVC</code> 8/8</td><td><code>VV004</code> obscured, 400 ft vert vis</td></tr>
</table></div>
<p style="margin-top:6px"><small><b>Ceiling</b> = lowest <code>BKN</code> or <code>OVC</code> layer. <code>CB</code>/<code>TCU</code> after a layer = cumulonimbus / towering cumulus — convection, avoid.</small></p>
<p><b>Remarks (<code>RMK</code>)</b></p>
<div style="overflow-x:auto"><table>
<tr><td><code>AO2</code> auto w/ precip sensor (<code>AO1</code> without)</td><td><code>SLP132</code> sea-level press. 1013.2 hPa</td><td><code>RAB35</code> rain began :35 (<code>RAE</code> ended)</td></tr>
<tr><td><code>PK WND 28045/56</code> peak wind 280°/45 kt at :56</td><td><code>T01720161</code> precise temp 17.2 / dewpt 16.1</td><td><code>$</code> station needs maintenance</td></tr>
</table></div>

<h3>4 · TAF — the forecast (same codes + change groups)</h3>
<p>A <b>TAF</b> forecasts weather within <b>5 SM</b> of the airport, issued 4×/day, valid 24–30 hrs. Validity like <code>1512/1618</code> = the 15th 12Z through the 16th 18Z. Extra keywords:</p>
<div style="overflow-x:auto"><table>
<tr><td><code>FM1500</code></td><td><b>From</b> 1500Z — a rapid, lasting change; everything after is the new picture</td></tr>
<tr><td><code>BECMG 1618</code></td><td><b>Becoming</b> — gradual change over 16Z–18Z</td></tr>
<tr><td><code>TEMPO 2024</code></td><td><b>Temporary</b> (&lt;1 hr each, on/off) between 20Z–24Z</td></tr>
<tr><td><code>PROB30</code></td><td>30% <b>probability</b> of the conditions that follow</td></tr>
</table></div>

<h3>5 · The three traps the exam sets</h3>
<ul>
  <li><b>Cloud heights are hundreds of feet AGL:</b> <code>OVC007</code> = 700 ft, <code>OVC070</code> = 7,000 ft. Count the digits.</li>
  <li><b>Written wind is TRUE north</b> (spoken tower/ATIS is magnetic): <code>18004KT</code> = from 180° true at 4 kt — not 040° at 18.</li>
  <li><b>No sign = moderate:</b> <code>-RA</code> light, <code>RA</code> moderate, <code>+RA</code> heavy. "Rain" alone in an answer = moderate.</li>
</ul>
<button class="primary" onclick="showFig(12)">Open the full Figure 12 (real METAR/TAF page)</button>
`},

/* ------------------------------------------------ 9 · Chart Detective (guided tour) */
{
  title: "Chart Detective — guided tour of a real sectional",
  tagline: "Step through the exact Savannah Class C chart, one symbol at a time",
  drill: ["faa-08","air-02","air-03","cht-08","faa-05","ops-24"],
  html: `
<p>Below is the real Savannah Class C excerpt from the exam's Figure 23. Step through it and the highlight glides to each feature with a plain-English read-out — this is exactly what the exam expects you to decode.</p>
<div id="charttour"></div>
<p style="margin-top:14px"><b>Once this clicks, three exam questions (8, and any Class C shelf/CTAF question) become automatic.</b> The whole skill is: find the two magenta rings, read the fraction as ceiling-over-floor in MSL, and locate the CTAF in the data block.</p>
`,
  tour: {
    fig: "spot_savannah",
    steps: [
      { x: 14, y: 28, w: 50, h: 60, title: "The two magenta rings = Class C",
        text: "Solid magenta rings drawn as a bullseye: an inner CORE circle over the airport and an outer SHELF ring. Any operation inside either ring needs ATC authorization (LAANC). Everything you decode next hangs off these two rings." },
      { x: 50, y: 11, w: 17, h: 9, title: "The airspace label",
        text: "'SAVANNAH CLASS C' printed on the chart confirms the class. The class tells you the rule; the numbers inside tell you the shape. Towered Class C always sits over a blue-symbol airport." },
      { x: 15, y: 44, w: 11, h: 14, title: "The shelf fraction: 41 / 13",
        text: "Read it as a fraction: ceiling OVER floor, both in hundreds of feet MSL. 41/13 = top 4,100 MSL, floor 1,300 MSL. This is exam question 8 — the shelf floor is 1,300 MSL, not AGL. Charted altitudes are ALWAYS MSL unless in parentheses." },
      { x: 24, y: 55, w: 13, h: 13, title: "The core fraction: 41 / SFC",
        text: "Over the airport the inner ring reads 41/SFC — 4,100 MSL down to the SURFACE. No shelf here: you need authorization from the ground up. That's why you can't launch a drone at the field itself without LAANC." },
      { x: 30, y: 64, w: 13, h: 13, title: "The airport the Class C protects",
        text: "The blue airport symbol (Savannah/Hilton Head Intl, SAV) is what all this airspace exists to protect — blue = towered. Class C wraps busy towered fields; that traffic is why you coordinate before flying nearby." },
      { x: 63, y: 69, w: 18, h: 8, title: "The CTAF / tower frequency",
        text: "In the airport data block, the frequency by the solid Ⓒ is the CTAF (here the control tower doubles as it). Monitor it with a scanner so you hear inbound traffic — the same skill as the data-block lesson, now on a live chart." }
    ]
  }
},

/* ------------------------------------------------ 10 · Interactive sectional (tap & zoom) */
{
  title: "Interactive sectional — tap any symbol",
  tagline: "The real Coeur d'Alene chart: drag to pan, scroll to zoom, tap a dot to decode it",
  drill: ["faa-05","cht-08","cht-09","air-05","cht-06","cht-10"],
  html: `
<p><b>Five real exam charts you can explore.</b> Pick a chart, then drag to pan, scroll or use the ± buttons to zoom, and <b>tap any numbered dot</b> to highlight that symbol and read what it means. Works with mouse or touch.</p>
<div id="chartexplore"></div>
<p style="margin-top:14px"><b>Switch charts</b> with the buttons up top: data blocks & navaids (COE), the Class C bullseye (Savannah), Class E to the surface (Jamestown), a Military Operations Area (Devils Lake), and military training routes (Deshler). Every symbol has one fixed meaning — once these are automatic, the airspace questions are just reading.</p>
`,
  explore: {
    charts: [
    { name: "Coeur d'Alene — data blocks & navaids", fig: "spot_coe", hotspots: [
      { x: 10, y: 5, w: 35, h: 15, title: "Private airport — Ranch Aero (Pvt)",
        text: "A magenta airport symbol with the circled 'R' and '(Pvt)' = a PRIVATE field, no public use without permission. It's charted because its low, slow traffic still matters to you. It sits in Class G here, so no airspace authorization is tied to it — but keep eyes out." },
      { x: 24, y: 21, w: 37, h: 17, title: "Class E (sfc) — check the NOTAMs",
        text: "'See NOTAMs/Directory for Class E (sfc) eff hrs.' The dashed magenta line nearby is Class E that starts at the SURFACE — but only part-time. During its effective hours you need ATC authorization; outside them it reverts to Class G. Always check the times before you fly here." },
      { x: 17, y: 38, w: 40, h: 26, title: "Airport data block (COE)",
        text: "Coeur d'Alene-Boyington, read top-down: AWOS weather 135.075 · field elevation 2320 ft MSL · *L = part-time lighting · 74 = longest runway 7,400 ft · 122.8 by the solid Ⓒ = CTAF (monitor this) · RP 2 = right-hand traffic pattern for runway 2." },
      { x: 4, y: 37, w: 16, h: 16, title: "VOR-DME compass rose",
        text: "The magenta compass rose centered on a VOR-DME navaid. Manned aircraft navigate along its radials, so traffic funnels toward it. The rose is aligned to MAGNETIC north — which is why bearings read off a sectional need no variation correction." },
      { x: 25, y: 66, w: 37, h: 22, title: "VOR-DME identification box",
        text: "The navaid's ident box: name (Coeur d'Alene), frequency 108.8, channel 25, and Morse code 'COE'. It's the tune-and-identify data for the VOR-DME — good awareness for where IFR traffic tracks through your area." },
      { x: 0, y: 60, w: 19, h: 10, title: "Victor airway V120-448",
        text: "A Victor airway — a low-altitude 'highway' between VORs that IFR and VFR traffic follows. An airway crossing your operating area is a traffic-density flag: more manned aircraft, more vigilance." },
      { x: 76, y: 17, w: 20, h: 16, title: "Obstacle — 3888 (216)",
        text: "An obstacle: bold 3888 = the top is 3,888 ft MSL; (216) = 216 ft AGL. The AGL number is yours — 216 ft is under your 400-ft ceiling, but always give towers wide margin (and their unseen guy wires, which are never charted)." },
      { x: 55, y: 28, w: 15, h: 12, title: "Spot elevation — 5038",
        text: "A dot with 5038 marks a spot elevation: the highest terrain at that point, 5,038 ft MSL. Terrain and MEF figures are MSL — over rising ground, subtract the local elevation to know your true height AGL before trusting the 400-ft limit." }
    ] },
    { name: "Savannah — Class C bullseye", fig: "spot_savannah", hotspots: [
      { x: 14, y: 28, w: 50, h: 60, title: "The two magenta rings = Class C",
        text: "An inner CORE circle over the airport plus an outer SHELF ring, both solid magenta. Inside either ring you need ATC authorization (LAANC)." },
      { x: 50, y: 11, w: 17, h: 9, title: "'SAVANNAH CLASS C' label",
        text: "The printed class name. The class sets the rule; the fractions inside give the altitudes." },
      { x: 15, y: 44, w: 11, h: 14, title: "Shelf fraction 41/13",
        text: "Ceiling over floor in hundreds of ft MSL: 4,100 MSL top, 1,300 MSL floor. Charted altitudes are MSL unless in parentheses — this is exam Q8." },
      { x: 24, y: 55, w: 13, h: 13, title: "Core fraction 41/SFC",
        text: "Over the airport: 4,100 MSL down to the SURFACE. No shelf here — authorization needed from the ground up." },
      { x: 30, y: 64, w: 13, h: 13, title: "The primary airport (SAV)",
        text: "Blue airport symbol = towered (Savannah/Hilton Head). Class C exists to protect this busy field's traffic." },
      { x: 63, y: 69, w: 18, h: 8, title: "CTAF / tower frequency",
        text: "The frequency by the solid Ⓒ in the data block — monitor it to hear inbound traffic." }
    ] },
    { name: "Jamestown — Class E surface & 700", fig: "spot_jamestown", hotspots: [
      { x: 45, y: 66, w: 17, h: 12, title: "Class E to the SURFACE — dashed MAGENTA",
        text: "The dashed magenta line = Class E that starts at the SURFACE. It needs ATC authorization just like B/C/D, and it's the symbol drone pilots miss most. Jamestown has no control tower, so it's Class E — not Class D." },
      { x: 32, y: 79, w: 20, h: 11, title: "Class E floor at 700 AGL — brown vignette",
        text: "The soft brown gradient band lowers Class E's floor to 700 ft AGL. At 400 ft you're UNDER it, in Class G — no authorization needed. Only the dashed-magenta surface part requires it." },
      { x: 38, y: 36, w: 36, h: 13, title: "Jamestown Rgnl (JMS) data block",
        text: "ASOS weather 118.425 · field elevation 1500 ft MSL · *L part-time lighting · 65 = 6,500-ft runway · 123.0 by the Ⓒ = CTAF." },
      { x: 44, y: 50, w: 13, h: 13, title: "The airport it protects",
        text: "The field the Class E surface area exists for. Class-E-to-surface wraps non-towered fields that have instrument approaches, so IFR traffic is protected to the ground — monitor the CTAF and get authorization for the surface area." },
      { x: 1, y: 72, w: 38, h: 15, title: "Jamestown VOR-DME navaid box",
        text: "The navaid ident box: name, frequency, channel 92, Morse ident 'JMS'. The blue tick-marked compass rose on the chart is centered on it — IFR traffic tracks along its radials." },
      { x: 79, y: 8, w: 19, h: 13, title: "Private airport (Pvt)",
        text: "Mutschler (Pvt) with a circled R = private, permission-only. Charted for its low traffic; sits in Class G." }
    ] },
    { name: "Devils Lake — MOA & special use", fig: "spot_moa", hotspots: [
      { x: 13, y: 22, w: 11, h: 22, title: "MOA boundary — magenta HATCHED line",
        text: "A magenta line with hatching on the inside marks Special-Use Airspace — here a Military Operations Area. VFR/drone flight isn't barred, but expect fast military traffic." },
      { x: 30, y: 52, w: 40, h: 11, title: "'DEVILS LAKE WEST MOA' label",
        text: "The MOA's name. Its active hours, altitudes, and controlling agency live in the chart's Special-Use Airspace panel (the legend) — check status before flying." },
      { x: 24, y: 40, w: 20, h: 13, title: "Military Training Route IR644-649",
        text: "A gray line with an IR number = an Instrument military training route crossing the MOA. Military jets, often low and fast." },
      { x: 42, y: 72, w: 16, h: 13, title: "Obstacle 2361 (260)",
        text: "Tower: top 2,361 ft MSL; (260) = 260 ft AGL. The AGL number is yours — under 400 ft, but give it margin." },
      { x: 1, y: 78, w: 22, h: 13, title: "Private airport (Pvt)",
        text: "OKeefe (Pvt), circled R = private/permission-only. Charted for traffic awareness." }
    ] },
    { name: "Deshler — military routes & obstacles", fig: "spot_mtr", hotspots: [
      { x: 26, y: 24, w: 15, h: 32, title: "Military Training Routes — VR stack",
        text: "Gray lines labeled VR1667/VR1617/VR1638/VR1668. FOUR-digit VR routes are flown at or BELOW 1,500 ft AGL — your altitude, at 250+ knots. This is exam Q30." },
      { x: 66, y: 15, w: 28, h: 17, title: "Deshler (6D7) data block",
        text: "Non-towered field: elevation, lighting, and 122.9 by the Ⓒ = CTAF. The magenta airport symbol confirms there's no control tower." },
      { x: 70, y: 39, w: 18, h: 12, title: "Tall obstacle 1817 (1090)",
        text: "Top 1,817 ft MSL, and (1090) = 1,090 ft AGL — WAY above your 400-ft ceiling. Route around towers like this, and mind their unseen guy wires." },
      { x: 1, y: 45, w: 23, h: 13, title: "Private airport (Pvt)",
        text: "Hiltner (Pvt), circled R = private. Low traffic, Class G." },
      { x: 46, y: 80, w: 36, h: 13, title: "Putnam Co (OWX) data block",
        text: "AWOS 120.525 · field elevation 764 MSL · *L 45 = 4,500-ft runway. Read every data block the same way." }
    ] }
    ]
  }
},
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
