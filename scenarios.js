/* Real-world mission scenarios — location briefings on the ACTUAL FAA Salt Lake City
   sectional (July 2026 edition, public domain). Each scenario: interactive real chart
   (drag/zoom/tap), decoded local METAR with drone impact, airspace class, who to
   contact, hazards, go/no-go. Facts cross-checked against FAA / Utah State Parks /
   USFWS sources. Grid altitudes & TFRs change — verify in LAANC/B4UFLY every flight. */
"use strict";

const SCEN_WARN = `<div class="scenwarn"><b>Study briefing, not an authorization.</b> The maps and METARs teach the decision process. Airspace grids, TFRs, NOTAMs, weather, and land rules change — verify the live picture before every flight.</div>`;

window.SCENARIOS = [

/* ============================================================ 1 · Layton */
{
  id: "layton",
  name: "Layton — Hill AFB corridor",
  explore: { charts: [ { name: "Layton corridor — real sectional", fig: "sec_layton", hotspots: [
    { x: 51, y: 58, w: 12, h: 8, title: "YOU — Layton",
      text: "Your launch point, in the bench corridor between the Great Salt Lake and the Wasatch. Look at what surrounds you on the real chart: Hill AFB's Class D dashed-blue ring is directly overhead, Ogden's is just north, and the SLC Class B shelf covers everything above." },
    { x: 57, y: 40, w: 19, h: 15, title: "Hill AFB (HIF) data block",
      text: "HILL AFB (HIF): tower CT-127.15, ATIS 134.925/397.9, field elevation 4,789 MSL, lighted 13,500-ft runway. A ★ after CT = part-time tower. This is an active fighter base — F-35 traffic, fast and low on departure and arrival." },
    { x: 49, y: 32, w: 7, h: 10, title: "Class D ceiling: [-78]",
      text: "The dashed-blue ring around Hill AFB with [-78] in a dashed box = Class D from the surface up to (but not including) 7,800 ft MSL — about 3,000 ft above the ground here. Any drone flight inside the ring needs authorization, and Hill's LAANC grids are mostly 0 ft." },
    { x: 47, y: 8, w: 21, h: 17, title: "Ogden-Hinckley (OGD)",
      text: "OGDEN-HINCKLEY (OGD): CT-118.7 (the Ⓒ marks it as CTAF after hours), ATIS 125.55, elevation 4,473 MSL, 8,100-ft lighted runway, RP 17/21 = RIGHT traffic for runways 17 and 21. Its own Class D ring abuts Hill AFB's — the corridor is wall-to-wall controlled airspace." },
    { x: 53, y: 47, w: 6, h: 11, title: "Class B shelf: 120/78",
      text: "Salt Lake City's Class B shelf over this area: ceiling 12,000 MSL, floor 7,800 MSL. Stacked airspace: Class D (surface-7,800) with Class B on top (7,800-12,000). At 400 ft AGL the Class D is what stops you — but this fraction shows how the big picture stacks." },
    { x: 14, y: 34, w: 21, h: 10, title: "'See NOTAMs/Supplement for Class D eff hrs'",
      text: "The chart itself tells you the Class D is PART-TIME: check the Chart Supplement or NOTAMs for effective hours. Outside those hours it typically reverts to Class E/G — a legally different picture at 2 a.m. than 2 p.m. This is exactly how the exam words it." },
    { x: 6, y: 88, w: 15, h: 11, title: "Antelope Island (SW)",
      text: "Utah State Park: drones banned March-November (eagle/bison protection); December-February by permit only. The airspace above it is mostly Class G under the B shelf — legal air, prohibited ground. Airspace law and land rules are separate hurdles; you need both." },
    { x: 77, y: 24, w: 22, h: 26, title: "Wasatch terrain — 9,284 & 9,570 MSL",
      text: "Peaks east of the corridor top 9,500 MSL — nearly a mile above the bench. Downslope wind, rotor turbulence, and rapidly rising terrain that eats your AGL margin. The 400-ft limit follows the ground UNDER the aircraft (107.51)." }
  ] } ] },
  html: `
${"" /* SCEN_WARN inserted by renderer */}
<h3>The situation</h3>
<p>You're in <b>Layton</b>, in the narrow benchland corridor between the <b>Great Salt Lake</b> and the <b>Wasatch Range</b>, with <b>Hill AFB (KHIF)</b> directly overhead and <b>Ogden-Hinckley (KOGD)</b> just north. Below is the <b>real sectional</b> — drag, zoom, and tap the numbered dots to read the actual chart the way you would before this flight.</p>
<div id="chartexplore"></div>

<h3>1 · Read the METAR — <code>KHIF</code> (example)</h3>
<div class="metar" style="font-size:16px">KHIF 151856Z 32017G27KT 10SM FEW080 SCT150 07/M06 A3005 RMK AO2A</div>
<div style="overflow-x:auto"><table>
<tr><th>Group</th><th>Decode</th><th>So what for your drone</th></tr>
<tr><td><code>32017G27KT</code></td><td>Wind from 320° true, 17 kt gusting 27</td><td>Gusty NW downslope wind off the mountains. Under your 87-kt limit, but a light quad will get tossed — and gusts near terrain mean rotor/wave turbulence.</td></tr>
<tr><td><code>10SM</code></td><td>Visibility 10+ statute miles</td><td>Meets the 3 SM minimum with room to spare. Good day for VLOS.</td></tr>
<tr><td><code>FEW080 SCT150</code></td><td>Few at 8,000 ft, scattered 15,000 ft AGL</td><td>No ceiling issue — both layers are far above you and above the 500-ft cloud clearance.</td></tr>
<tr><td><code>07/M06</code></td><td>Temp 7°C, dewpoint −6°C</td><td>Cold: LiPo voltage sags — warm packs, expect shorter flights and abrupt low-voltage cutoffs. Big spread ⇒ dry air, no fog.</td></tr>
<tr><td><code>A3005</code></td><td>Altimeter 30.05 inHg</td><td>High pressure; but at ~4,300-4,800 ft field elevation you're already at high density altitude — props bite less, climb is weaker.</td></tr>
</table></div>

<h3>2 · What airspace am I in?</h3>
<ul>
<li><b>Hill AFB Class D</b> — surface up to (but not including) <b>7,800 MSL</b> (the [-78] on the chart), 4.6 NM radius, part-time (check hours). Layton is inside it → <b>authorization required</b> (107.41).</li>
<li><b>Ogden (KOGD) Class D</b> just north — its ring abuts Hill's.</li>
<li><b>SLC Class B shelf (120/78)</b> stacked above everything at 7,800 MSL.</li>
<li><b>Class G</b> only west over the flats away from both rings — but that's toward the lake restrictions.</li>
</ul>

<h3>3 · Who do I contact / can I even get clearance?</h3>
<p><b>Class D authorization normally comes through LAANC</b> (Aloft, Avision, AutoPylot) — near-instant, up to the grid's published ceiling. <b>But Hill AFB is military:</b> its UAS Facility Map grids are mostly <b>0 ft</b>, meaning LAANC has no altitude to grant. When the grid is 0 ft you must request authorization through <b>FAA DroneZone</b> (can take ~30-90 days) and, in practice near an active AFB, coordinate with the base — most civil drone flight in the immediate Hill AFB area is effectively a <b>no-go</b> without special arrangement.</p>
<p class="scengo bad">Bottom line for central Layton: treat it as <b>NO-GO</b> until LAANC/B4UFLY shows a non-zero ceiling for your exact spot. Move to a Class G area with a real ceiling, away from the base and the lake.</p>

<h3>4 · Local hazards checklist</h3>
<ul>
<li><b>West (lake):</b> Antelope Island bans drones <b>Mar-Nov</b> (permits Dec-Feb); Bear River Migratory Bird Refuge <b>prohibits takeoff/landing</b>. Open water = few visual references, stronger wind.</li>
<li><b>East (mountains):</b> terrain past 9,500 MSL — wave, rotor, and high density altitude sapping performance; AGL is measured under the aircraft.</li>
<li><b>Overhead:</b> F-35s and heavy military traffic, low and fast — yield to all aircraft (107.37).</li>
</ul>
<p class="scensrc">Sources: <a href="https://www.federalregister.gov/documents/2015/08/13/2015-19140/establishment-of-class-e-airspace-and-amendment-of-class-d-airspace-ogden-hill-afb-ut" target="_blank">FAA Class D rule (Ogden/Hill AFB)</a> · <a href="https://www.airnav.com/airport/KHIF" target="_blank">KHIF (AirNav)</a> · <a href="https://stateparks.utah.gov/parks/antelope-island/drone-guidelines/" target="_blank">Antelope Island drone rules</a> · <a href="https://www.fws.gov/refuge/bear-river-migratory-bird/visit-us/rules-policies" target="_blank">Bear River Refuge</a> · <a href="https://www.faa.gov/uas/getting_started/laanc" target="_blank">FAA LAANC</a></p>
`
},

/* ============================================================ 2 · Salt Lake City */
{
  id: "slc",
  name: "Salt Lake City — downtown & KSLC",
  explore: { charts: [ { name: "SLC & downtown — real sectional", fig: "sec_slc", hotspots: [
    { x: 50, y: 27, w: 17, h: 9, title: "YOU — downtown Salt Lake City",
      text: "Downtown, ~4 NM east of the KSLC runways. On the real chart you can see you're under the Class B and surrounded by obstacles, terrain, and the stadium flag. Everything you need to know before launch is printed within an inch of this spot." },
    { x: 44, y: 11, w: 27, h: 14, title: "KSLC data block",
      text: "SALT LAKE CITY INTL (SLC): tower 118.3/119.05/132.65, ATIS 124.75/125.625, elevation 4,231 MSL, lighted 12,000-ft runway. A Class B primary airport moving airliners all day — the reason the whole valley is layered with rings." },
    { x: 33, y: 42, w: 8, h: 10, title: "Class B to the SURFACE: 120/SFC",
      text: "120/SFC = Class B from the ground to 12,000 MSL. In this sector there is NO altitude — not 10 feet — without authorization, and the LAANC grids at/near the field are 0 ft. South and east of the field the fractions change (120/65, 120/60): shelves whose floors are above you." },
    { x: 46, y: 35, w: 10, h: 9, title: "STADIUM — Rice-Eccles",
      text: "The magenta stadium flag near the university: on event days a standing TFR covers 3 NM up to 3,000 ft AGL, 1 hr before to 1 hr after. The flag on the chart is your reminder that this changes by schedule, not geography — check tfr.faa.gov." },
    { x: 41, y: 43, w: 9, h: 9, title: "Obstacle: 4656 (408)",
      text: "A tower topping 4,656 MSL — (408) ft AGL, taller than your 400-ft ceiling. You may only out-climb it within 400 ft of the structure itself (107.51). Downtown is full of these; the chart only shows ones above ~200 AGL." },
    { x: 15, y: 54, w: 7, h: 10, title: "Class B shelf: 120/65",
      text: "Southwest valley shelf: 12,000 ceiling / 6,500 MSL floor — about 2,200 ft above the ground there. Under the shelf you're in Class G/E and may fly at 400 AGL without B authorization — but check which grid you're in; the LAANC map draws the exact line." },
    { x: 76, y: 16, w: 14, h: 11, title: "MEF: 11,800 MSL",
      text: "The big 11⁸ is the Maximum Elevation Figure: the highest terrain/obstacle in this half-degree quadrangle is ~11,800 MSL — the Wasatch. One number tells you the valley's eastern wall out-climbs everything." },
    { x: 5, y: 23, w: 11, h: 8, title: "KSL antenna farm",
      text: "Broadcast antennas on the lake shore — tall masts with guy wires that are NOT individually charted. Antenna farms also mean strong RF: expect GPS/compass interference and control-link noise if you operate close." }
  ] } ] },
  html: `
<h3>The situation</h3>
<p>You're in <b>downtown Salt Lake City</b>: <b>KSLC</b> and its <b>Class B</b> to the west, the <b>Wasatch</b> walling off the east, hospitals and towers around you, and freeways below. The <b>real sectional</b> — drag, zoom, tap:</p>
<div id="chartexplore"></div>

<h3>1 · Read the METAR — <code>KSLC</code> (winter-inversion example)</h3>
<div class="metar" style="font-size:16px">KSLC 151853Z 15005KT 3SM HZ BR BKN004 OVC010 M01/M02 A3042</div>
<div style="overflow-x:auto"><table>
<tr><th>Group</th><th>Decode</th><th>So what for your drone</th></tr>
<tr><td><code>15005KT</code></td><td>Wind 150° true at 5 kt</td><td>Light and steady — classic trapped-inversion calm. Flyable wind, but the rest of the report is the problem.</td></tr>
<tr><td><code>3SM HZ BR</code></td><td>Visibility 3 SM in haze and mist</td><td>Right at the Part 107 <b>3 SM minimum</b> — any worse and you're grounded. Trapped valley smog; VLOS is degraded.</td></tr>
<tr><td><code>BKN004 OVC010</code></td><td>Broken 400 ft, overcast 1,000 ft AGL</td><td><b>Ceiling 400 ft.</b> You must stay 500 ft below clouds → effectively no legal altitude. This is a <b>no-fly</b> ceiling.</td></tr>
<tr><td><code>M01/M02</code></td><td>Temp −1°C / dewpoint −2°C</td><td>Freezing with a 1° spread — saturated, sub-zero: <b>icing risk</b> and persistent fog/low stratus. (See the "Nasty weather" lesson for FZRA.)</td></tr>
<tr><td><code>A3042</code></td><td>Altimeter 30.42 inHg</td><td>Strong high pressure = the inversion cap holding the smog down. It won't lift until a front scours it out.</td></tr>
</table></div>
<p class="scengo bad">METAR verdict: <b>NO-GO.</b> A 400-ft ceiling plus 3 SM haze plus freezing/near-saturated air is a triple stop. Wait for a clear post-frontal day.</p>

<h3>2 · What airspace am I in?</h3>
<ul>
<li><b>Class B</b> from KSLC. Downtown sits under low B shelves — and the sectors marked <b>120/SFC</b> are Class B to the ground. The UAS Facility Map grids around downtown/KSLC are largely <b>0 ft</b>.</li>
<li>Farther from the field the shelf floors step up (120/65, 120/60 on the chart) — grids there may offer a real ceiling. The LAANC map draws the exact boundary; the chart fractions explain <i>why</i> it's drawn there.</li>
</ul>

<h3>3 · Who do I contact / how do I get clearance?</h3>
<p><b>Request LAANC authorization</b> through an approved app for your specific grid, up to its published ceiling — near-instant when the grid is non-zero. Where it's <b>0 ft</b>, LAANC can't help; that leaves <b>FAADroneZone</b> (slow) or choosing a site farther out. Salt Lake Approach/Tower is the controlling facility, but you coordinate through LAANC/DroneZone — you do not call the tower.</p>

<h3>4 · Local hazards checklist</h3>
<ul>
<li><b>Hospitals:</b> University of Utah, Intermountain Medical and others run <b>medical-helicopter</b> traffic low and fast — yield (107.37), stay clear of helipads.</li>
<li><b>Tall buildings:</b> the 400-ft limit lifts only within 400 ft of the structure (107.51); expect GPS multipath, compass errors, and building-edge rotor. Calibrate away from steel.</li>
<li><b>Freeways (I-15 / I-80):</b> no <b>sustained flight over moving vehicles</b> (107.145) — transit only.</li>
<li><b>Stadium TFRs (Rice-Eccles / Delta Center events):</b> 3 NM / 3,000 ft AGL, 1 hr before to 1 hr after. tfr.faa.gov.</li>
<li><b>East bench:</b> canyon winds and Wasatch wave — turbulence increases toward the mountains.</li>
</ul>
<p class="scensrc">Sources: <a href="https://www.faa.gov/uas/commercial_operators/uas_facility_maps" target="_blank">FAA UAS Facility Maps</a> · <a href="https://www.faa.gov/uas/getting_started/laanc" target="_blank">FAA LAANC</a> · <a href="https://tfr.faa.gov" target="_blank">FAA TFR list</a></p>
`
},

/* ============================================================ 3 · Ogden Canyon */
{
  id: "ogden",
  name: "Ogden Canyon & Pineview",
  explore: { charts: [ { name: "Ogden Canyon — real sectional", fig: "sec_ogden", hotspots: [
    { x: 21, y: 44, w: 10, h: 11, title: "YOU — Ogden Canyon mouth",
      text: "The canyon climbs east from Ogden's bench to Pineview Reservoir — steep walls, a road, a river, and wind that funnels hard. Note how close the Class D ring's eastern edge is: the boundary crosses near the canyon mouth. A hundred yards can be the difference between 'authorization required' and Class G." },
    { x: 15, y: 20, w: 26, h: 26, title: "Ogden-Hinckley (OGD) block",
      text: "CT-118.7 with the star = part-time tower; Ⓒ = it's the CTAF after hours; ATIS 125.55; elevation 4,473; 8,100-ft runway; RP 17,21 = right pattern for those runways. Monitor 118.7 while you fly the bench — pattern traffic turns over the neighborhoods." },
    { x: 17, y: 61, w: 8, h: 12, title: "Class D ceiling [-78]",
      text: "Ogden's Class D: surface up to (not including) 7,800 MSL inside the dashed-blue ring. Inside = LAANC authorization (Ogden's grids are mostly non-zero, unlike Hill AFB's). Outside the ring, up-canyon = Class G under the 120/78 B shelf." },
    { x: 40, y: 7, w: 22, h: 18, title: "Pineview Reservoir & Huntsville",
      text: "The mountain valley east of the canyon: Class G at your altitudes (the B shelf is far above). Legal airspace — but a busy recreation area: paragliders off the peaks, boats, seaplanes occasionally, and USFS land rules for launch sites. Airspace ≠ the only rule." },
    { x: 88, y: 11, w: 12, h: 17, title: "Magnetic disturbance warning",
      text: "The chart warns: magnetic disturbance of as much as 6° exists at ground level in this vicinity. Your drone's compass lives on ground-level magnetism — calibrate somewhere clean, expect heading errors, and be ready for attitude mode. The chart literally predicts compass trouble here." },
    { x: 82, y: 60, w: 17, h: 30, title: "Mode C / ADS-B 30 NM ring",
      text: "The maroon band is SLC's 30-NM Mode C veil — manned aircraft inside it need transponders/ADS-B. It does NOT restrict your drone, but it tells you you're inside the big terminal area's surveillance umbrella: dense traffic environment." }
  ] } ] },
  html: `
<h3>The situation</h3>
<p>Shooting the fall colors up <b>Ogden Canyon</b> to <b>Pineview Reservoir</b>. The airspace gets simpler as you climb east — the terrain and wind get meaner. Real chart:</p>
<div id="chartexplore"></div>

<h3>1 · Read the METAR — <code>KOGD</code> (gap-wind example)</h3>
<div class="metar" style="font-size:16px">KOGD 152153Z 09018G35KT 10SM SKC 12/M08 A2992</div>
<div style="overflow-x:auto"><table>
<tr><th>Group</th><th>Decode</th><th>So what for your drone</th></tr>
<tr><td><code>09018G35KT</code></td><td>Wind from 090° true, 18 gusting 35 kt</td><td><b>East wind at Ogden = canyon gap wind.</b> The canyon squeezes and accelerates it — 35-kt gusts at the airport can be 45+ in the canyon throat, with violent rotor behind every ridge and building.</td></tr>
<tr><td><code>10SM SKC</code></td><td>10+ miles, sky clear</td><td>Beautiful and deceptive: gap-wind days are often crystal clear. Visibility is not the hazard today.</td></tr>
<tr><td><code>12/M08</code></td><td>12°C / dewpoint −8°C</td><td>Bone dry (20° spread) — no cloud/fog concern; moderate temps fine for batteries.</td></tr>
<tr><td><code>A2992</code></td><td>Altimeter 29.92</td><td>Standard pressure — but the wind is being driven by a pressure gradient across the mountains; expect it to persist all day.</td></tr>
</table></div>
<p class="scengo bad">Verdict: <b>NO-GO in the canyon</b> (gusting 35 with rotor in a slot you can't escape sideways). The open bench west of the mouth, or the wide Pineview basin in the lee morning hours, may be workable — reassess on site with a wind meter.</p>

<h3>2 · Airspace & who to contact</h3>
<ul>
<li><b>Ogden Class D</b> (surface-7,800 MSL) covers the bench and clips the canyon mouth — <b>LAANC</b> for anything inside the ring (grids here generally have real ceilings).</li>
<li>Up-canyon and over Pineview: <b>Class G</b> to 700/1,200 AGL — no authorization needed. Monitor OGD's 118.7 anyway; pattern and helicopter traffic uses the canyon.</li>
</ul>

<h3>3 · Local hazards</h3>
<ul>
<li><b>Gap winds & rotor</b> — the defining hazard; the METAR's east wind is your warning.</li>
<li><b>Compass:</b> charted magnetic disturbance up to 6° — calibrate clean, expect toilet-bowling.</li>
<li><b>People:</b> paragliders, boats, anglers — 107.39 over-people rules still apply in the backcountry.</li>
<li><b>VLOS in a canyon:</b> terrain shadows your control link and your line of sight — fly the reach you can actually see.</li>
</ul>
`
},

/* ============================================================ 4 · Provo */
{
  id: "provo",
  name: "Provo — KPVU & Utah Lake",
  explore: { charts: [ { name: "Provo — real sectional", fig: "sec_provo", hotspots: [
    { x: 72, y: 58, w: 12, h: 8, title: "YOU — Provo bench",
      text: "Between Utah Lake and the Wasatch again — the same corridor squeeze as up north, with a Class D airport in the middle and 11,000-ft peaks to the east." },
    { x: 38, y: 45, w: 21, h: 19, title: "Provo Muni (PVU) data block",
      text: "PROVO MUNI (PVU): tower CT-125.3★ (part-time; Ⓒ = CTAF after hours), ATIS 135.175, elevation 4,497 MSL, lighted 8,600-ft runway, RP 13,18 = right pattern for those runways. A genuinely busy GA/training field plus airline service." },
    { x: 59, y: 62, w: 8, h: 10, title: "Class D ceiling [70]",
      text: "Provo's Class D: surface up to 7,000 MSL (the [70] box) — about 2,500 ft above the valley floor. Inside the dashed-blue ring = LAANC authorization; Provo's grids generally have usable ceilings away from the final approach paths." },
    { x: 69, y: 39, w: 15, h: 8, title: "BYU Stadium",
      text: "LaVell Edwards Stadium, charted by name: on game days the standing stadium TFR (3 NM, 3,000 ft AGL, 1 hr before to 1 hr after) covers most of Provo. Football Saturdays are no-drone days across town — tfr.faa.gov." },
    { x: 74, y: 52, w: 25, h: 10, title: "'See NOTAMs/Supplement for Class D eff hrs'",
      text: "Provo's D is part-time too — same drill as Ogden: the Chart Supplement lists tower hours; after hours the area typically reverts to E/G and the CTAF takes over. The chart note is your cue to look it up, not assume." },
    { x: 41, y: 28, w: 11, h: 12, title: "MEF: 12,100 MSL",
      text: "The quadrangle's Maximum Elevation Figure is 12¹ = 12,100 ft MSL — Timpanogos and friends. The highest MEFs on the whole Wasatch Front are right here; terrain rules this neighborhood." },
    { x: 50, y: 15, w: 18, h: 9, title: "Mt Timpanogos Wilderness",
      text: "Congressionally designated Wilderness: the FAA controls the AIR, but land managers control launch/land/operate-from — and drone takeoff/landing inside Wilderness is prohibited. Same lesson as Antelope Island: two rulebooks, you need both." },
    { x: 32, y: 60, w: 13, h: 22, title: "Utah Lake",
      text: "Big, shallow, windy. Afternoon lake breeze kicks up fast; open water gives no VLOS references and no dry place to force-land. Morning flights over the shoreline are the calm window." }
  ] } ] },
  html: `
<h3>The situation</h3>
<p>Real-estate shoot on the <b>Provo bench</b>: <b>KPVU</b> and its Class D to the southwest, <b>BYU stadium</b> in town, <b>Timpanogos</b> (11,749 MSL) to the north, <b>Utah Lake</b> to the west. Real chart:</p>
<div id="chartexplore"></div>

<h3>1 · Read the METAR — <code>KPVU</code> (summer-afternoon example)</h3>
<div class="metar" style="font-size:16px">KPVU 152053Z 33012G22KT 10SM SCT070TCU 29/10 A3007</div>
<div style="overflow-x:auto"><table>
<tr><th>Group</th><th>Decode</th><th>So what for your drone</th></tr>
<tr><td><code>33012G22KT</code></td><td>Wind 330° true, 12 gusting 22 kt</td><td>The afternoon lake-breeze/valley wind is up. Gusts to 22 = flyable for a capable aircraft, bumpy for a light one.</td></tr>
<tr><td><code>SCT070TCU</code></td><td>Scattered 7,000 AGL, <b>towering cumulus</b></td><td><b>TCU is the warning flag:</b> convection is building over the mountains. TCU this afternoon is often +TSRA by evening — fly now, done by mid-afternoon, and watch the buildups.</td></tr>
<tr><td><code>29/10</code></td><td>29°C / dewpoint 10°C</td><td>Hot: with a 4,500-ft field elevation, density altitude is ~7,000+ ft — noticeably weaker climb and shorter hover endurance.</td></tr>
<tr><td><code>A3007</code></td><td>Altimeter 30.07</td><td>No red flag by itself — the story today is heat and building convection.</td></tr>
</table></div>
<p class="scengo bad">Verdict: <b>GO — early, with an exit plan.</b> Morning is clean; by the time TCU matures into thunderstorms (see the "Nasty weather" lesson: +TSRA), you're packed up. If it's a football Saturday: NO-GO city-wide during the stadium TFR window.</p>

<h3>2 · Airspace & who to contact</h3>
<ul>
<li><b>Provo Class D</b> — surface to 7,000 MSL ([70]), part-time. Inside the ring: <b>LAANC</b> (grids generally usable). Outside: Class G/E under the B-adjacent shelves.</li>
<li><b>BYU stadium TFR</b> on event days: 3 NM / 3,000 ft — no LAANC inside a TFR.</li>
</ul>

<h3>3 · Local hazards</h3>
<ul>
<li><b>Training traffic:</b> KPVU is one of the busiest GA training fields in the region — pattern aircraft everywhere; monitor 125.3.</li>
<li><b>Terrain:</b> MEF 12,100; canyon outflows (Provo Canyon) gust hard in the afternoon.</li>
<li><b>Wilderness:</b> no drone launch/land in Timpanogos Wilderness.</li>
<li><b>Utah Lake:</b> afternoon chop, zero VLOS references over open water.</li>
</ul>
`
},

/* ============================================================ 5 · Antelope Island (winter) */
{
  id: "antelope",
  name: "Antelope Island — winter permit",
  explore: { charts: [ { name: "Antelope Island — real sectional", fig: "sec_antelope", hotspots: [
    { x: 24, y: 28, w: 16, h: 22, title: "YOU — Antelope Island (Dec-Feb, WITH permit)",
      text: "The island rises to 6,596 MSL from a ~4,200-ft lake plain. Drones are banned March-November; December-February the state park issues photography permits. Today assumes you HOLD one — the airspace was never the problem here; the land rules were." },
    { x: 0, y: 39, w: 8, h: 13, title: "Class B shelf: 120/78",
      text: "Over the island's west side the SLC Class B floor is 7,800 MSL — roughly 1,200-3,600 ft above the terrain. At 400 ft AGL you're comfortably underneath, in Class G: NO airspace authorization needed. Legal air over restricted land — the exact inverse of downtown SLC." },
    { x: 54, y: 43, w: 10, h: 13, title: "Class B to the SURFACE: 120/SFC",
      text: "East of the island over Farmington Bay the chart says 120/SFC — Class B down to the water (protecting SLC arrivals). Drift your operation east across the bay and you've flown into no-authorization-available airspace. The boundary line matters to the yard." },
    { x: 57, y: 18, w: 9, h: 11, title: "Class B shelf: 120/60",
      text: "Just northeast: floor 6,000 MSL. The shelves step DOWN toward the airport like an upside-down wedding cake — 78 → 60 → SFC as you approach KSLC. Read the fractions and you can see the funnel shape airliners descend through." },
    { x: 9, y: 52, w: 31, h: 13, title: "WASATCH VOR-DME box",
      text: "WASATCH 116.8 Ch 115 TCH — a navaid on the island's south end. Airways converge on it (V-32 etc. on the chart), so expect en-route GA traffic overhead; another reason the B shelf sits where it does." },
    { x: 43, y: 78, w: 15, h: 14, title: "KSL antenna farm — 4553 (330), 4672 (457)",
      text: "The broadcast towers on the south shore: (457) = 457 ft AGL, above your ceiling, with uncharted guy wires — plus serious RF. Give the antenna farm a wide berth on the drive in/out shots." },
    { x: 13, y: 80, w: 9, h: 15, title: "MEF: 9,700 MSL",
      text: "This quadrangle's Maximum Elevation Figure (9⁷) is set by the Oquirrhs/Stansburys to the southwest, not the island — a reminder the MEF covers the whole half-degree box, not just what's under your pin." }
  ] } ] },
  html: `
<h3>The situation</h3>
<p><b>December, with a state-park photography permit in hand</b> — bison in the snow. The airspace here is the easy part; the calendar and the land rules are the hard part. Real chart:</p>
<div id="chartexplore"></div>

<h3>1 · Read the METAR — <code>KOGD</code> (nearest report, cold-clear example)</h3>
<div class="metar" style="font-size:16px">KOGD 151853Z 00000KT 10SM SKC M07/M12 A3055</div>
<div style="overflow-x:auto"><table>
<tr><th>Group</th><th>Decode</th><th>So what for your drone</th></tr>
<tr><td><code>00000KT</code></td><td>Calm</td><td>Perfect image stability — and a hint the inversion may build later; calm + cold + high pressure is how the smog deck forms.</td></tr>
<tr><td><code>10SM SKC</code></td><td>10+ miles, clear</td><td>Full VLOS, no cloud restriction. The good winter day.</td></tr>
<tr><td><code>M07/M12</code></td><td>−7°C / dewpoint −12°C</td><td><b>The limiting factor.</b> LiPo capacity drops hard below freezing: warm the packs in the truck, hover-warm before working, land at 40% not 20%, carry double batteries.</td></tr>
<tr><td><code>A3055</code></td><td>Altimeter 30.55</td><td>Very strong high — stable, calm... and the setup for tomorrow's inversion. Fly today.</td></tr>
</table></div>
<p class="scengo bad" style="background:#223a26;border-color:#2c5a30;color:#d6f5d8">Verdict: <b>GO</b> — airspace is Class G under the 7,800-ft B shelf, weather is clear and calm. Your constraints are the permit terms, wildlife distance, and battery cold. (No permit or outside Dec-Feb: absolute NO-GO regardless of airspace.)</p>

<h3>2 · Airspace & who to contact</h3>
<ul>
<li><b>Class G</b> under the SLC Class B shelf (floor 7,800 MSL here) — <b>no FAA authorization needed</b> at 400 AGL over most of the island.</li>
<li><b>Do not drift east over Farmington Bay</b> — the 120/SFC sector is Class B to the surface: no LAANC, no flight.</li>
<li>Contact for the LAND: <b>Utah State Parks</b> (permit) — not the FAA. Two rulebooks, both binding.</li>
</ul>

<h3>3 · Local hazards</h3>
<ul>
<li><b>Wildlife:</b> permit terms set standoff distances — bison WILL react to prop noise; harassment is a state offense.</li>
<li><b>Cold:</b> battery sag, gimbal stiffness, touchscreen gloves — the practical limits today.</li>
<li><b>Antenna farm</b> south shore: 457-ft AGL towers, guy wires, RF.</li>
<li><b>Eagles (why the Mar-Nov ban exists):</b> even in winter, break off if raptors show interest in the aircraft.</li>
</ul>
<p class="scensrc">Sources: <a href="https://stateparks.utah.gov/parks/antelope-island/drone-guidelines/" target="_blank">Antelope Island drone guidelines</a> · <a href="https://www.faa.gov/uas/commercial_operators/uas_facility_maps" target="_blank">FAA UAS Facility Maps</a></p>
`
}
];
