// Original questions — Area II: Airspace & Requirements.
window.QBANK = (window.QBANK || []).concat([
{
  id: "air-01", topic: "airspace", sub: "Airspace classes", acs: "UA.II.A.K1", figure: null,
  q: "In which airspace may a small UA operate under part 107 WITHOUT prior ATC authorization?",
  choices: ["Class G airspace.", "Class D airspace below 400 feet AGL.", "The surface area of Class E airspace designated for an airport."],
  answer: 0,
  explanation: "107.41: authorization is required in Class B, C, D, and the SURFACE area of Class E designated for an airport. Class G (uncontrolled) needs no authorization at any legal altitude — and neither does Class E that begins at 700/1,200 AGL, as long as you stay below it at 400 ft.",
  traps: []
},
{
  id: "air-02", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K1b", figure: null,
  q: "On a sectional chart, Class D airspace is depicted by",
  choices: ["a dashed blue line.", "a dashed magenta line.", "a solid magenta line."],
  answer: 0,
  explanation: "Dashed BLUE = Class D. Dashed MAGENTA = Class E surface area. Solid magenta rings = Class C; solid blue rings = Class B. Faded/vignette magenta = Class E starting at 700 AGL. Know all five cold — sectional colors are worth multiple questions.",
  traps: ["chart-reading"]
},
{
  id: "air-03", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K1b", figure: null,
  q: "Inside a dashed-blue Class D circle, the number '[24]' in a dashed box means",
  choices: ["the ceiling of the Class D airspace is 2,400 feet MSL.", "the floor of overlying Class E is 2,400 feet AGL.", "the Class D radius is 2.4 nautical miles."],
  answer: 0,
  explanation: "The bracketed number is the Class D CEILING in hundreds of feet MSL: [24] = 2,400 MSL. A minus sign before the number (e.g. [-24]) means 'up to but not including.' MSL again — not AGL.",
  traps: ["msl-agl", "chart-reading"]
},
{
  id: "air-04", topic: "airspace", sub: "Class E airspace", acs: "UA.II.A.K1c", figure: null,
  q: "A shaded/faded magenta band (vignette) surrounding an airport on a sectional chart indicates",
  choices: ["Class E airspace beginning at 700 feet AGL.", "Class E airspace beginning at the surface.", "Class G airspace up to 14,500 feet MSL."],
  answer: 0,
  explanation: "The magenta vignette lowers Class E's floor from 1,200 AGL to 700 AGL. For drones this usually doesn't matter — at 400 ft you're below both floors and in Class G. Only a DASHED magenta line (surface Class E) requires authorization.",
  traps: ["chart-reading"]
},
{
  id: "air-05", topic: "airspace", sub: "Class E airspace", acs: "UA.II.A.K1c", figure: null,
  q: "You plan to fly at 300 feet AGL directly over a small airport surrounded by a dashed magenta line. What is required?",
  choices: ["ATC authorization, because the dashed magenta line is Class E airspace that begins at the surface.", "Nothing — Class E never requires sUAS authorization.", "A radio call to the airport's UNICOM frequency."],
  answer: 0,
  explanation: "Dashed magenta = Class E TO THE SURFACE for that airport, and surface-E is on the 107.41 authorization list along with B, C, and D. This is the most commonly missed airspace rule: 'Class E is fine' is only true for E starting at 700/1,200 AGL.",
  traps: ["chart-reading"]
},
{
  id: "air-06", topic: "airspace", sub: "Special use airspace", acs: "UA.II.A.K2", figure: null,
  q: "Flight through a Restricted Area (e.g., R-2916) with your sUAS is",
  choices: ["not allowed when the area is active, without permission of the using or controlling agency.", "always prohibited under all circumstances.", "allowed anytime below 400 feet AGL."],
  answer: 0,
  explanation: "Restricted Areas contain invisible hazards (artillery fire, aerial gunnery, guided missiles). Entry when ACTIVE requires permission from the controlling agency. When inactive, flight is technically permitted — check status via the chart's special-use panel or FSS. PROHIBITED areas (P-xx) are the always-no ones.",
  traps: []
},
{
  id: "air-07", topic: "airspace", sub: "Special use airspace", acs: "UA.II.A.K2", figure: null,
  q: "What is a Military Operations Area (MOA)?",
  choices: ["Airspace separating military training activities from IFR traffic; VFR and sUAS flight is not prohibited but demands extreme vigilance.", "Airspace where all civil flight is prohibited during published hours.", "A radius around military bases where drones must broadcast Remote ID."],
  answer: 0,
  explanation: "MOAs separate military TRAINING from IFR traffic. Civil flight isn't barred, but expect fast, unpredictable military aircraft — including low-level. Check activity status (chart margin lists hours; FSS has real-time status) before flying in one.",
  traps: []
},
{
  id: "air-08", topic: "airspace", sub: "Special use airspace", acs: "UA.II.A.K2", figure: null,
  q: "An Alert Area, such as A-211 shown on a sectional chart, indicates",
  choices: ["a high volume of pilot training or unusual aerial activity — all pilots are equally responsible for collision avoidance.", "airspace where sUAS operations require a Certificate of Waiver.", "an area where aircraft are prohibited below 1,500 feet AGL."],
  answer: 0,
  explanation: "Alert Areas warn of concentrated training or unusual activity. No clearance or permission needed — everyone shares see-and-avoid responsibility. Compare: Warning Areas are the offshore equivalent (beyond 3 NM from the coast).",
  traps: []
},
{
  id: "air-09", topic: "airspace", sub: "TFRs", acs: "UA.II.A.K3", figure: null,
  q: "A stadium TFR (sporting-event flight restriction) is typically in effect",
  choices: ["from 1 hour before to 1 hour after the event, within 3 NM of the stadium, up to 3,000 feet AGL.", "from 2 hours before to 2 hours after, within 5 NM, up to 5,000 feet AGL.", "only during nationally televised games, within 1 NM."],
  answer: 0,
  explanation: "The standing stadium NOTAM covers MLB, NFL, NCAA Division I football, and major motor speedway events: 3 NM radius, 3,000 ft AGL, 1 hour before to 1 hour after. Memorize 3-3-1. Violating it is a fast way to lose a certificate.",
  traps: []
},
{
  id: "air-10", topic: "airspace", sub: "TFRs & NOTAMs", acs: "UA.II.B.K5", figure: null,
  q: "Where should a remote PIC check for Temporary Flight Restrictions before a flight?",
  choices: ["The FAA TFR website (tfr.faa.gov) or a flight service briefing (1800WXBrief).", "The Chart Supplement U.S.", "The sectional chart, which depicts all current TFRs."],
  answer: 0,
  explanation: "TFRs are TEMPORARY — too new for printed charts or the Chart Supplement. Check tfr.faa.gov, get a briefing via 1800WXBrief, or use a LAANC app that overlays TFRs. VIP (presidential) TFRs pop up with little notice and are enforced aggressively.",
  traps: []
},
{
  id: "air-11", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K4", figure: null,
  q: "The Maximum Elevation Figure (MEF), shown as a large digit with a smaller raised digit (e.g., 2⁵) in each quadrangle of a sectional chart, represents",
  choices: ["the height of the highest terrain or obstacle in that quadrangle, in thousands and hundreds of feet MSL.", "the floor of controlled airspace in that quadrangle, in feet AGL.", "the minimum safe altitude for manned aircraft, in feet AGL."],
  answer: 0,
  explanation: "MEF 2⁵ = 2,500 feet MSL — the highest obstruction/terrain in that lat/long quadrangle (rounded up with a safety margin). It's MSL, not AGL. Useful for judging whether towers in your area out-climb your 400-ft ceiling.",
  traps: ["msl-agl", "chart-reading"]
},
{
  id: "air-12", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K4", figure: null,
  q: "An obstacle on a sectional chart shows two numbers: 1549 and (405). What do they mean?",
  choices: ["The top of the obstacle is 1,549 feet MSL and 405 feet AGL.", "The top is 1,549 feet AGL and the base is 405 feet MSL.", "The obstacle is 1,549 feet tall with a 405-foot lighted section."],
  answer: 0,
  explanation: "Bold number = height of the TOP above sea level (MSL). Number in (parentheses) = height above ground (AGL). So this tower's top is 405 ft above the ground — you may NOT fly over it at 400 ft AGL, but the within-400-ft-of-a-structure rule could let you inspect it up to 805 ft AGL.",
  traps: ["msl-agl", "chart-reading"]
},
{
  id: "air-13", topic: "airspace", sub: "Airport symbology", acs: "UA.II.A.K4", figure: null,
  q: "On a sectional chart, an airport symbol printed in magenta indicates",
  choices: ["an airport without an operating control tower.", "an airport with a control tower.", "a private airport closed to the public."],
  answer: 0,
  explanation: "MAGENTA airport = no operating control tower (non-towered). BLUE airport = towered. A star above the symbol = rotating beacon; tick marks around the circle = fuel available. Color tells you tower status at a glance — and towered usually means controlled airspace around it.",
  traps: ["chart-reading"]
},
{
  id: "air-14", topic: "airspace", sub: "NOTAMs", acs: "UA.II.B.K5", figure: null,
  q: "What information would a remote PIC find in a NOTAM?",
  choices: ["Time-critical information such as closed runways, airspace restrictions, or inoperative lighting not yet published on charts.", "Permanent airport data such as runway lengths and traffic pattern altitudes.", "Long-range weather forecasts for the departure area."],
  answer: 0,
  explanation: "NOTAMs = time-critical aeronautical CHANGES: hazards, TFRs, closed runways, UAS operating areas, unlit towers. Permanent info lives in the Chart Supplement; weather comes from METARs/TAFs. Checking NOTAMs is part of the required 107.49 preflight.",
  traps: []
},
{
  id: "air-15", topic: "airspace", sub: "Washington DC area", acs: "UA.II.A.K3", figure: null,
  q: "The Washington, DC Flight Restricted Zone (FRZ) is airspace where",
  choices: ["sUAS operations are prohibited without specific FAA authorization.", "sUAS may operate below 200 feet AGL without authorization.", "only night sUAS operations are restricted."],
  answer: 0,
  explanation: "The DC FRZ (roughly 15 NM around DCA) is effectively a no-drone zone without specific authorization; the surrounding SFRA (30 NM) has its own requirements. This is the most restricted airspace in the country — 'national defense airspace' with criminal penalties.",
  traps: []
},
{
  id: "air-16", topic: "airspace", sub: "Airspace classes", acs: "UA.II.A.K1a", figure: null,
  q: "Class A airspace begins at what altitude, and can part 107 operations occur there?",
  choices: ["18,000 feet MSL; no — part 107 operations cannot reach Class A.", "10,000 feet MSL; yes, with a waiver.", "14,500 feet MSL; yes, with ATC authorization."],
  answer: 0,
  explanation: "Class A: 18,000 MSL up to FL600, IFR only. With a 400-ft AGL ceiling, part 107 flights can never be in Class A. Know the vertical stack: G (surface up), E (700/1,200 AGL typically), then A at 18,000 MSL; B/C/D wrap around airports.",
  traps: []
},
{
  id: "air-17", topic: "airspace", sub: "Controlled airspace", acs: "UA.II.A.K1b", figure: null,
  q: "You receive a LAANC authorization to fly in Class D airspace 'at or below 100 feet AGL' in a particular grid. During the flight you need 250 feet AGL for one photo. You should",
  choices: ["request a higher authorization (further coordination) before exceeding 100 feet — the grid ceiling is a hard limit.", "climb briefly to 250 feet; LAANC ceilings are advisory.", "climb to 250 feet while announcing intentions on the tower frequency."],
  answer: 0,
  explanation: "The UAS Facility Map grid altitude in your authorization is a HARD ceiling. Exceeding it violates 107.41 even though 250 ft is under the general 400-ft limit. Request 'further coordination' via LAANC for higher altitudes — it needs manual ATC review, so plan ahead.",
  traps: []
},
{
  id: "air-18", topic: "airspace", sub: "Sectional symbology", acs: "UA.II.A.K4", figure: null,
  q: "A magenta flag symbol on a sectional chart marks",
  choices: ["a VFR checkpoint used by manned pilots as a visual reporting point — expect concentrated air traffic nearby.", "a mandatory sUAS launch site.", "a wildlife refuge with flight restrictions."],
  answer: 0,
  explanation: "Magenta flags are VFR reporting checkpoints — prominent landmarks manned pilots use to report position. For a drone pilot they signal 'funnel of low-flying traffic here.' Great situational-awareness cue for choosing operating sites.",
  traps: ["chart-reading"]
},
{
  id: "air-19", topic: "airspace", sub: "Airspace at night", acs: "UA.II.A.K1", figure: null,
  q: "Does a Class D airspace designation remain in effect when that airport's control tower closes for the night?",
  choices: ["Not necessarily — it typically reverts to Class E or G; check the Chart Supplement for the airport's airspace hours.", "Yes — Class D exists 24 hours a day at every towered field.", "No — it always becomes Class G at the surface."],
  answer: 0,
  explanation: "Part-time towers mean part-time Class D. After hours it usually reverts to Class E surface or Class G — the Chart Supplement's 'AIRSPACE' entry says which, and it matters: surface-E still requires authorization, Class G doesn't.",
  traps: []
},
{
  id: "air-20", topic: "airspace", sub: "Recreational vs 107 airspace apps", acs: "UA.II.B.K5", figure: null,
  q: "Which tool provides real-time airspace awareness specifically designed for drone pilots planning a flight?",
  choices: ["B4UFLY or a LAANC service provider app showing UAS facility map grids.", "The Terminal Procedures Publication.", "The Airport/Facility Directory legend."],
  answer: 0,
  explanation: "B4UFLY (FAA's app, now web-based) and LAANC provider apps (Aloft, AutoPylot, Avision) show controlled-airspace grids, TFRs, and special-use areas for drone planning. The others are manned-aviation instrument publications.",
  traps: []
}
]);
