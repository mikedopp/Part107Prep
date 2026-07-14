// Original questions — chart & map reading (Chart School companion set).
window.QBANK = (window.QBANK || []).concat([
{
  id: "cht-01", topic: "airspace", sub: "Airport symbology", acs: "UA.II.A.K4", figure: null,
  q: "On a sectional chart, an airport symbol printed in BLUE indicates",
  choices: ["an airport with an operating control tower.", "an airport where fuel is available.", "a military airport."],
  answer: 0,
  explanation: "Blue = towered, magenta = non-towered. That single color tells you whether a controller is talking to traffic there — and towered airports usually sit inside controlled airspace that needs authorization. (Fuel is shown by tick marks; military fields have special names/symbols, not just color.)",
  traps: ["chart-reading"]
},
{
  id: "cht-02", topic: "airspace", sub: "Airport symbology", acs: "UA.II.A.K4", figure: null,
  q: "A star on top of an airport symbol on a sectional chart means",
  choices: ["a rotating beacon operates there from sunset to sunrise.", "the airport is closed permanently.", "the airport is a VFR checkpoint."],
  answer: 0,
  explanation: "The star = rotating airport beacon (operating sunset-sunrise). A beacon rotating during the DAY at a towered field signals IFR weather — a strong 'don't fly' cue for a drone pilot. (VFR checkpoints are magenta flags; closed airports get an X.)",
  traps: ["chart-reading"]
},
{
  id: "cht-03", topic: "airspace", sub: "Airport symbology", acs: "UA.II.A.K4", figure: null,
  q: "Small tick marks protruding from an airport's circle symbol indicate",
  choices: ["fuel is available and the field is attended during normal hours.", "the number of runways at the airport.", "the airport has right-hand traffic patterns."],
  answer: 0,
  explanation: "Ticks around the circle = services (fuel, attended). More activity and based aircraft means more traffic to watch for. Runway layout is shown by the runway diagram inside larger symbols; right patterns appear as 'RP' in the data block.",
  traps: ["chart-reading"]
},
{
  id: "cht-04", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K4", figure: null,
  q: "An obstacle symbol on a sectional chart with lightning-bolt marks at its tip indicates",
  choices: ["the obstacle is lighted.", "the obstacle is electrically hazardous.", "a radio transmission tower with guy wires."],
  answer: 0,
  explanation: "Lightning bolts = the obstacle has hazard lighting. Useful at night — but never assume the lights work (check NOTAMs for 'tower light out'). Guy wires are a real hazard on ALL towers and extend much farther sideways than most pilots expect; they're not separately charted.",
  traps: ["chart-reading"]
},
{
  id: "cht-05", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K4", figure: null,
  q: "What does 'UC' next to an obstacle on a sectional chart mean?",
  choices: ["The obstacle is under construction — its final height may differ and lighting may not be installed yet.", "The obstacle is uncharted above 200 feet.", "The obstacle has an unserviceable clearance light."],
  answer: 0,
  explanation: "UC = under construction. The charted height is what was reported at press time — the tower may already be taller, and lighting may be absent. Treat UC obstacles with extra margin, and remember charts only show obstacles above ~200 ft AGL; shorter towers are invisible on the chart.",
  traps: ["chart-reading"]
},
{
  id: "cht-06", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K4", figure: null,
  q: "An obstacle on a sectional is labeled '2295 (356)'. Which number tells you the obstacle's height above the ground?",
  choices: ["(356) — the parenthesized number is height AGL; 2295 is the tip's altitude MSL.", "2295 — the bold number is always AGL.", "Neither; obstacle heights are listed only in the Chart Supplement."],
  answer: 0,
  explanation: "Parentheses = AGL, bold = MSL, every time. For drone work the AGL number is the one that matters against your 400-ft ceiling — and the structure rule (107.51) lets you inspect up to 400 ft above the TOP if you stay within a 400-ft radius.",
  traps: ["msl-agl", "chart-reading"]
},
{
  id: "cht-07", topic: "operations", sub: "Sectional chart / airport info", acs: "UA.V.B.K6a", figure: null,
  q: "An airport's chart data block ends with 'RP 11'. This tells the remote pilot that",
  choices: ["runway 11 uses a RIGHT traffic pattern — expect pattern traffic on the opposite side from standard.", "the airport has 11 based aircraft.", "runway 11 is closed to piston aircraft."],
  answer: 0,
  explanation: "RP = Right Pattern for the listed runway (standard is LEFT traffic). 'RP*' means right pattern only at certain times. For a drone crew this flips which side of the field the low, slow traffic flows on — set up on the non-pattern side.",
  traps: ["chart-reading", "traffic-pattern"]
},
{
  id: "cht-08", topic: "operations", sub: "Sectional chart / airport info", acs: "UA.V.B.K6a", figure: null,
  q: "In an airport data block, a frequency followed by a solid dot with a 'C' inside (Ⓒ) identifies",
  choices: ["the Common Traffic Advisory Frequency (CTAF).", "the control tower's primary frequency.", "the clearance delivery frequency."],
  answer: 0,
  explanation: "The filled circle-C marks the CTAF — the frequency where pilots self-announce. At a towered field the tower frequency doubles as CTAF after hours. This is the frequency to monitor with a scanner while you fly near any airport.",
  traps: ["chart-reading"]
},
{
  id: "cht-09", topic: "airspace", sub: "Airport symbology", acs: "UA.II.A.K4", figure: null,
  q: "An airport whose name is followed by '(Pvt)' and a circled R symbol is",
  choices: ["a private airport not open to the general public — but its traffic still matters to you.", "a public airport with restaurant services.", "a heliport restricted to medical flights."],
  answer: 0,
  explanation: "(Pvt)/circled-R = private airfield (permission required to land there). It's charted because its TRAFFIC affects everyone nearby — crop dusters and light aircraft use these strips at very low altitude, exactly where sUAS operate. Note private fields on your preflight airspace check even though no authorization is tied to them (they're usually in Class G).",
  traps: ["chart-reading"]
},
{
  id: "cht-10", topic: "operations", sub: "Sectional chart / airport info", acs: "UA.V.B.K6a", figure: null,
  q: "The blue compass rose printed around a VORTAC on a sectional chart is oriented to",
  choices: ["magnetic north — bearings you measure with it need no variation correction.", "true north — like the chart's meridians.", "grid north — aligned with the chart edges."],
  answer: 0,
  explanation: "VOR compass roses are aligned to MAGNETIC north. The chart's lat/long grid is TRUE north. That's why runway numbers (magnetic) don't quite match the geometry you measure against meridians. Rule: radio/runway/spoken = magnetic; grid/METAR-text = true.",
  traps: ["true-magnetic", "chart-reading"]
},
{
  id: "cht-11", topic: "regulations", sub: "Operating limits", acs: "UA.I.B.K6", figure: null,
  q: "You launch from a ridge whose surface is 2,000 feet MSL and fly level at 350 feet above the launch point, out over a valley whose floor is 1,000 feet MSL. Over the valley, your aircraft is",
  choices: ["1,350 feet AGL — a violation, because the 400-foot limit is measured from the terrain directly below the aircraft.", "350 feet AGL — legal, because altitude is measured from the launch point.", "2,350 feet MSL — legal, because part 107 uses MSL altitudes."],
  answer: 0,
  explanation: "107.51's 400-ft limit is AGL beneath the aircraft, not above your launch point and not MSL. Flying off a ridge over falling terrain 'climbs' you in AGL terms even in level flight. Use the chart's contour lines to anticipate this; descend as the terrain drops.",
  traps: ["msl-agl", "read-carefully"]
},
{
  id: "cht-12", topic: "airspace", sub: "Special use airspace", acs: "UA.II.A.K2", figure: null,
  q: "On a sectional chart, Military Training Routes are depicted as",
  choices: ["gray lines labeled IR or VR with route numbers — 4-digit numbers meaning segments at or below 1,500 feet AGL.", "magenta hatched corridors labeled MTR.", "dashed blue circles around military bases."],
  answer: 0,
  explanation: "MTRs = thin gray lines: IR (instrument) or VR (visual) + number. FOUR digits (VR1667) = entire route at or below 1,500 AGL — drone altitude, jet speed. THREE digits = some segments above 1,500. The route line is only the centerline; aircraft may fly several miles either side of it.",
  traps: ["chart-reading"]
}
]);
