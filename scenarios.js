/* Real-world mission scenarios — location briefings that tie together METAR reading,
   airspace class, who-to-contact, and local hazards. Facts cross-checked against FAA /
   Utah State Parks / USFWS sources (2026). Grid altitudes & TFRs change — the app says
   so and links the live tools. */
"use strict";

window.SCENARIOS = [

/* ============================================================ Layton, UT */
{
  id: "layton",
  name: "Layton, UT — Hill AFB corridor",
  html: `
<div class="scenwarn">⚠ Study aid, not an authorization. Airspace grid ceilings and TFRs change — confirm the live picture in <b>LAANC</b> (Aloft/Avision/AutoPylot) or <b>B4UFLY</b> and a <b>1800wxbrief.com</b> briefing before every flight.</div>

<h3>The situation</h3>
<p>You're in <b>Layton</b>, in the narrow benchland corridor between the <b>Great Salt Lake / Antelope Island</b> to the west and the <b>Wasatch Range</b> to the east. <b>Hill AFB (KHIF)</b> is right on top of you and <b>Ogden-Hinckley (KOGD)</b> is just to the north. This is one of the most constrained places in Utah to fly a drone — the value is in knowing <i>why</i> before you drive out.</p>

<svg viewBox="0 0 960 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Layton area situational map">
  <rect x="0" y="0" width="960" height="560" fill="#1c1e23"/>
  <!-- Lake / west -->
  <rect x="0" y="0" width="200" height="560" fill="#24405a"/>
  <path d="M60 120 q40 40 10 90 q-30 40 20 90 q40 40 0 90 z" fill="#3a3a2a" stroke="#8a7a4a"/>
  <text x="100" y="40" fill="#8fb3d8" font-size="15" text-anchor="middle" font-weight="bold">GREAT SALT LAKE</text>
  <text x="100" y="300" fill="#d9c98a" font-size="12" text-anchor="middle">Antelope I.</text>
  <text x="100" y="500" fill="#e06055" font-size="12" text-anchor="middle" font-weight="bold">Drones banned</text>
  <text x="100" y="516" fill="#e06055" font-size="11" text-anchor="middle">Mar–Nov (State Park);</text>
  <text x="100" y="530" fill="#e06055" font-size="11" text-anchor="middle">refuge: no takeoff/land</text>

  <!-- Mountains / east -->
  <rect x="760" y="0" width="200" height="560" fill="#2e2a22"/>
  <g fill="#6b5a3a" stroke="#8a7a4a">
    <path d="M770 300 L830 120 L890 300 Z"/><path d="M850 320 L910 160 L960 320 Z"/><path d="M760 460 L820 300 L880 460 Z"/>
  </g>
  <text x="860" y="40" fill="#d9c98a" font-size="15" text-anchor="middle" font-weight="bold">WASATCH RANGE</text>
  <text x="860" y="500" fill="#d4a942" font-size="11" text-anchor="middle">terrain 9,000+ MSL</text>
  <text x="860" y="516" fill="#d4a942" font-size="11" text-anchor="middle">wave/rotor · high DA</text>

  <!-- Ogden Class D (north) -->
  <circle cx="470" cy="130" r="95" fill="#6aa3d80f" stroke="#6aa3d8" stroke-width="2.5" stroke-dasharray="9 6"/>
  <text x="470" y="80" fill="#6aa3d8" font-size="14" text-anchor="middle" font-weight="bold">OGDEN (KOGD)</text>
  <text x="470" y="98" fill="#9fc0e0" font-size="12" text-anchor="middle">Class D</text>

  <!-- Hill AFB Class D (center, big) -->
  <circle cx="450" cy="360" r="175" fill="#6aa3d80f" stroke="#6aa3d8" stroke-width="3" stroke-dasharray="9 6"/>
  <text x="450" y="250" fill="#6aa3d8" font-size="17" text-anchor="middle" font-weight="bold">HILL AFB (KHIF) — CLASS D</text>
  <text x="450" y="270" fill="#9fc0e0" font-size="13" text-anchor="middle">SFC → 7,800 MSL · 4.6 NM · daytime</text>
  <text x="450" y="410" fill="#e06055" font-size="13" text-anchor="middle" font-weight="bold">MILITARY — authorization required</text>
  <text x="450" y="428" fill="#e06055" font-size="12" text-anchor="middle">LAANC grids here are mostly 0 ft</text>

  <!-- YOU -->
  <circle cx="290" cy="345" r="9" fill="#d4a942"/>
  <text x="290" y="326" fill="#d4a942" font-size="14" text-anchor="middle" font-weight="bold">🛸 YOU — Layton</text>

  <!-- SLC Class B edge (south) -->
  <path d="M240 540 Q450 500 700 540" fill="none" stroke="#6aa3d8" stroke-width="3"/>
  <text x="470" y="552" fill="#6aa3d8" font-size="12" text-anchor="middle">↓ SLC Class B shelf begins to the south</text>
</svg>

<h3>1 · Read the METAR — <code>KHIF</code> (example)</h3>
<div class="metar" style="font-size:16px">KHIF 151856Z 32017G27KT 10SM FEW080 SCT150 07/M06 A3005 RMK AO2A</div>
<div style="overflow-x:auto"><table>
<tr><th>Group</th><th>Decode</th><th>So what for your drone</th></tr>
<tr><td><code>32017G27KT</code></td><td>Wind from 320° true, 17 kt gusting 27</td><td>Gusty NW downslope wind off the mountains. Under your 87-kt limit, but a light quad will get tossed — and gusts near terrain mean rotor/wave turbulence.</td></tr>
<tr><td><code>10SM</code></td><td>Visibility 10+ statute miles</td><td>Meets the 3 SM minimum with room to spare. Good day for VLOS.</td></tr>
<tr><td><code>FEW080 SCT150</code></td><td>Few at 8,000 ft, scattered 15,000 ft AGL</td><td>No ceiling issue — both layers are far above you and above the 500-ft cloud clearance.</td></tr>
<tr><td><code>07/M06</code></td><td>Temp 7°C, dewpoint −6°C</td><td>Cold: LiPo voltage sags — warm packs, expect shorter flights and abrupt low-voltage cutoffs. Big spread ⇒ dry air, no fog.</td></tr>
<tr><td><code>A3005</code></td><td>Altimeter 30.05 inHg</td><td>High pressure; but at ~4,300 ft field elevation you're already at high density altitude — props bite less, climb is weaker.</td></tr>
</table></div>

<h3>2 · What airspace am I in?</h3>
<ul>
<li><b>Hill AFB Class D</b> — surface up to <b>7,800 MSL</b>, 4.6 NM radius, active roughly daytime. Layton is inside it. Class D ⇒ <b>authorization required</b> (14 CFR 107.41).</li>
<li><b>Ogden (KOGD) Class D</b> just north — abuts Hill's ring; if you're on the north side of town you may be in Ogden's D instead.</li>
<li><b>Class G</b> only if you're well west over the flats away from both rings — but that's toward the lake restrictions.</li>
</ul>

<h3>3 · Who do I contact / can I even get clearance?</h3>
<p><b>Class D authorization normally comes through LAANC</b> (Aloft, Avision, AutoPylot apps) — near-instant, up to the grid's published ceiling. <b>But Hill AFB is military:</b> its UAS Facility Map grids are mostly <b>0 ft</b>, meaning LAANC has no altitude to grant. When the grid is 0 ft you must request authorization through <b>FAA DroneZone</b> (can take ~30–90 days) and, in practice near an active AFB, coordinate with the base — most civil drone flight in the immediate Hill AFB area is effectively a <b>no-go</b> without special arrangement.</p>
<p class="scengo bad">Bottom line for central Layton: treat it as <b>NO-GO</b> until LAANC/B4UFLY shows a non-zero ceiling for your exact spot. Move to a Class G area with a real ceiling, away from the base and the lake.</p>

<h3>4 · Local hazards checklist</h3>
<ul>
<li><b>West (lake):</b> Antelope Island State Park bans drones <b>Mar–Nov</b> (permits only Dec–Feb); Bear River Migratory Bird Refuge <b>prohibits takeoff/landing</b> of any drone. Plus open water = few visual references and stronger wind.</li>
<li><b>East (mountains):</b> terrain climbs past 9,000 MSL fast — flying off the bench over falling/rising ground changes your AGL height; expect mountain wave, rotor, and high density altitude sapping performance.</li>
<li><b>Overhead:</b> military traffic (fighters, tankers) operates low and fast — you <b>yield to all aircraft</b> (107.37).</li>
</ul>
<p class="scensrc">Sources: <a href="https://www.federalregister.gov/documents/2015/08/13/2015-19140/establishment-of-class-e-airspace-and-amendment-of-class-d-airspace-ogden-hill-afb-ut" target="_blank">FAA Class D rule (Ogden/Hill AFB)</a> · <a href="https://www.airnav.com/airport/KHIF" target="_blank">KHIF (AirNav)</a> · <a href="https://stateparks.utah.gov/parks/antelope-island/drone-guidelines/" target="_blank">Antelope Island drone rules</a> · <a href="https://www.fws.gov/refuge/bear-river-migratory-bird/visit-us/rules-policies" target="_blank">Bear River Refuge</a> · <a href="https://www.faa.gov/uas/getting_started/laanc" target="_blank">FAA LAANC</a></p>
`
},

/* ============================================================ Salt Lake City */
{
  id: "slc",
  name: "Salt Lake City — downtown & KSLC",
  html: `
<div class="scenwarn">⚠ Study aid, not an authorization. Class B grid ceilings and TFRs change — confirm in <b>LAANC</b> / <b>B4UFLY</b> and get a <b>1800wxbrief.com</b> briefing before every flight.</div>

<h3>The situation</h3>
<p>You're in <b>downtown Salt Lake City</b>: <b>Salt Lake City International (KSLC)</b> and its <b>Class B</b> sit a few miles to the <b>west</b>, the <b>Wasatch Range</b> walls off the <b>east</b>, hospitals and tall buildings surround you, and the valley is laced with freeways (I-15 / I-80) you may not loiter over.</p>

<svg viewBox="0 0 960 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Salt Lake City situational map">
  <rect x="0" y="0" width="960" height="560" fill="#1c1e23"/>
  <!-- Mountains east -->
  <rect x="820" y="0" width="140" height="560" fill="#2e2a22"/>
  <g fill="#6b5a3a" stroke="#8a7a4a"><path d="M820 300 L880 120 L940 300 Z"/><path d="M880 360 L940 200 L960 360 Z"/></g>
  <text x="890" y="40" fill="#d9c98a" font-size="14" text-anchor="middle" font-weight="bold">WASATCH</text>
  <text x="890" y="520" fill="#d4a942" font-size="11" text-anchor="middle">terrain · wave</text>

  <!-- KSLC Class B (west) -->
  <circle cx="180" cy="300" r="230" fill="#6aa3d80a" stroke="#6aa3d8" stroke-width="3"/>
  <circle cx="180" cy="300" r="130" fill="#6aa3d81a" stroke="#6aa3d8" stroke-width="3"/>
  <text x="180" y="150" fill="#6aa3d8" font-size="16" text-anchor="middle" font-weight="bold">KSLC — CLASS B</text>
  <text x="180" y="300" fill="#9fc0e0" font-size="13" text-anchor="middle">core: SFC → 10,000 MSL</text>
  <text x="180" y="320" fill="#e06055" font-size="12" text-anchor="middle" font-weight="bold">LAANC grids near field = 0 ft</text>
  <text x="70" y="300" fill="#9fc0e0" font-size="12" text-anchor="middle">shelf →</text>

  <!-- Freeways -->
  <line x1="470" y1="0" x2="470" y2="560" stroke="#d4a942" stroke-width="6" opacity="0.5"/>
  <line x1="300" y1="430" x2="820" y2="360" stroke="#d4a942" stroke-width="6" opacity="0.5"/>
  <text x="486" y="90" fill="#d4a942" font-size="12">I-15</text>
  <text x="700" y="378" fill="#d4a942" font-size="12">I-80</text>
  <text x="560" y="470" fill="#d4a942" font-size="11" text-anchor="middle">no sustained flight over moving traffic (107.145)</text>

  <!-- Downtown buildings -->
  <g fill="#4a4d55" stroke="#7a7d85">
    <rect x="520" y="240" width="26" height="90"/><rect x="552" y="210" width="26" height="120"/><rect x="584" y="255" width="26" height="75"/><rect x="616" y="225" width="26" height="105"/>
  </g>
  <text x="580" y="200" fill="#e8e6e0" font-size="13" text-anchor="middle" font-weight="bold">DOWNTOWN — tall buildings</text>
  <text x="580" y="350" fill="#9a978f" font-size="11" text-anchor="middle">GPS multipath · building rotor</text>

  <!-- Hospitals -->
  <g font-size="15" font-weight="bold" fill="#e06055"><text x="700" y="180">🄷</text><text x="660" y="300">🄷</text></g>
  <text x="700" y="160" fill="#e06055" font-size="11" text-anchor="middle">hospitals — medical heli traffic</text>

  <!-- Stadium TFR -->
  <circle cx="720" cy="470" r="26" fill="none" stroke="#e06055" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="720" y="474" fill="#e06055" font-size="10" text-anchor="middle">TFR</text>
  <text x="720" y="510" fill="#e06055" font-size="11" text-anchor="middle">stadium: 3 NM / 3,000 ft on event days</text>

  <!-- YOU -->
  <circle cx="560" cy="300" r="9" fill="#d4a942"/>
  <text x="560" y="282" fill="#d4a942" font-size="14" text-anchor="middle" font-weight="bold">🛸 YOU — downtown</text>
</svg>

<h3>1 · Read the METAR — <code>KSLC</code> (winter-inversion example)</h3>
<div class="metar" style="font-size:16px">KSLC 151853Z 15005KT 3SM HZ BR BKN004 OVC010 M01/M02 A3042</div>
<div style="overflow-x:auto"><table>
<tr><th>Group</th><th>Decode</th><th>So what for your drone</th></tr>
<tr><td><code>15005KT</code></td><td>Wind 150° true at 5 kt</td><td>Light and steady — classic trapped-inversion calm. Flyable wind, but the rest of the report is the problem.</td></tr>
<tr><td><code>3SM HZ BR</code></td><td>Visibility 3 SM in haze and mist</td><td>Right at the Part 107 <b>3 SM minimum</b> — any worse and you're grounded. Trapped valley smog; VLOS is degraded.</td></tr>
<tr><td><code>BKN004 OVC010</code></td><td>Broken 400 ft, overcast 1,000 ft AGL</td><td><b>Ceiling 400 ft.</b> You must stay 500 ft below clouds → effectively no legal altitude. This is a <b>no-fly</b> ceiling.</td></tr>
<tr><td><code>M01/M02</code></td><td>Temp −1°C / dewpoint −2°C</td><td>Freezing with a 1° spread — saturated, sub-zero: <b>icing risk</b> and persistent fog/low stratus.</td></tr>
<tr><td><code>A3042</code></td><td>Altimeter 30.42 inHg</td><td>Strong high pressure = the inversion cap holding the smog down. It won't lift until a front scours it out.</td></tr>
</table></div>
<p class="scengo bad">METAR verdict: <b>NO-GO.</b> A 400-ft ceiling plus 3 SM haze plus freezing/near-saturated air is a triple stop. Wait for a clear post-frontal day.</p>

<h3>2 · What airspace am I in?</h3>
<ul>
<li><b>Class B</b> from KSLC. Downtown is only ~4–5 NM ENE of the field, so you're under the Class B core or a low shelf. Class B ⇒ <b>authorization required</b>, and the UAS Facility Map grids right around downtown/KSLC are largely <b>0 ft</b>.</li>
<li>Farther from the field the shelves step up (floors rise), so grids there may offer a real ceiling — check the map for your exact block.</li>
</ul>

<h3>3 · Who do I contact / how do I get clearance?</h3>
<p><b>Request LAANC authorization</b> through an approved app (Aloft, Avision, AutoPylot) for your specific grid, up to its published ceiling — near-instant when the grid is non-zero. Where the grid is <b>0 ft</b> (much of downtown/KSLC), LAANC can't grant altitude; you'd need a <b>DroneZone</b> authorization or waiver, or simply choose a site farther out with a real ceiling. Salt Lake Approach/Tower is the controlling facility, but you coordinate through LAANC/DroneZone, not by calling the tower.</p>

<h3>4 · Local hazards checklist</h3>
<ul>
<li><b>Hospitals:</b> University of Utah, IMC and others generate <b>medical-helicopter</b> traffic that arrives low and fast — yield to all aircraft (107.37) and keep clear of helipads.</li>
<li><b>Tall buildings:</b> the 400-ft limit lifts only <b>within 400 ft of a structure</b> (107.51) — and downtown means GPS multipath, compass errors, and building-edge rotor. Calibrate away from steel, be ready for attitude mode.</li>
<li><b>Freeways (I-15 / I-80):</b> no <b>sustained flight over moving vehicles</b> unless you meet the operations-over-moving-vehicles rule (107.145) — transit only, don't loiter over traffic.</li>
<li><b>Stadiums (Rice-Eccles):</b> a <b>3 NM / 3,000 ft AGL TFR</b> takes effect 1 hr before to 1 hr after major events. Check tfr.faa.gov.</li>
<li><b>East:</b> the Wasatch drives afternoon canyon winds and wave — expect turbulence on the east bench.</li>
</ul>
<p class="scensrc">Sources: <a href="https://dronelytics.io/fly-drone-in/salt-lake-city-ut/" target="_blank">SLC airspace overview</a> · <a href="https://www.faa.gov/uas/commercial_operators/uas_facility_maps" target="_blank">FAA UAS Facility Maps</a> · <a href="https://www.faa.gov/uas/getting_started/laanc" target="_blank">FAA LAANC</a> · <a href="https://tfr.faa.gov" target="_blank">FAA TFR list</a></p>
`
}
];
