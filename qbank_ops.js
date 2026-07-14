// Original questions — Area V: Operations (ADM/CRM, physiology, airport ops, radio,
// emergency procedures, maintenance).
window.QBANK = (window.QBANK || []).concat([
{
  id: "ops-01", topic: "operations", sub: "Hazardous attitudes", acs: "UA.V.D.K4", figure: null,
  q: "A remote pilot says, 'Regulations are for careful pilots — I know what I'm doing.' Which hazardous attitude is this, and what is its antidote?",
  choices: ["Anti-authority; 'Follow the rules — they are usually right.'", "Macho; 'Taking chances is foolish.'", "Resignation; 'I'm not helpless — I can make a difference.'"],
  answer: 0,
  explanation: "Dismissing rules = ANTI-AUTHORITY. The five attitude/antidote pairs are pure memorization: Anti-authority→'Follow the rules'; Impulsivity→'Not so fast, think first'; Invulnerability→'It could happen to me'; Macho→'Taking chances is foolish'; Resignation→'I'm not helpless.' Expect 1-2 of these on every exam.",
  traps: []
},
{
  id: "ops-02", topic: "operations", sub: "Hazardous attitudes", acs: "UA.V.D.K4", figure: null,
  q: "After a battery warning appears, a remote pilot thinks 'these things always cry wolf — nothing will happen to me' and keeps flying. This is the hazardous attitude of",
  choices: ["invulnerability — antidote: 'It could happen to me.'", "impulsivity — antidote: 'Not so fast, think first.'", "anti-authority — antidote: 'Follow the rules.'"],
  answer: 0,
  explanation: "'It won't happen to me' = INVULNERABILITY. The scenario's tell is dismissing personal risk, not dismissing rules or acting hastily. Read for the pilot's internal reasoning — that's what maps to the attitude.",
  traps: []
},
{
  id: "ops-03", topic: "operations", sub: "ADM checklists", acs: "UA.V.D.K3", figure: null,
  q: "In the IMSAFE personal-readiness checklist, the letters stand for",
  choices: ["Illness, Medication, Stress, Alcohol, Fatigue, Emotion.", "Inspection, Maintenance, Safety, Airspace, Flight plan, Equipment.", "Illness, Money, Sleep, Attitude, Food, Exercise."],
  answer: 0,
  explanation: "IMSAFE = personal go/no-go: Illness, Medication, Stress, Alcohol, Fatigue, Emotion. It's the 'is the PILOT airworthy?' check. Compare: PAVE (Pilot, Aircraft, enVironment, External pressures) frames overall flight risk; DECIDE is the in-flight decision loop.",
  traps: []
},
{
  id: "ops-04", topic: "operations", sub: "ADM checklists", acs: "UA.V.D.K3", figure: null,
  q: "In the PAVE risk-assessment checklist, the 'V' represents",
  choices: ["enVironment — weather, terrain, airspace, and lighting conditions.", "Velocity — the maximum groundspeed for the operation.", "Visual observers — the crew assisting the operation."],
  answer: 0,
  explanation: "PAVE = Pilot, Aircraft, enVironment, External pressures. 'External pressures' (client deadlines, get-the-shot-itis) is the sneaky one — it's the category behind most bad go decisions, like launching in marginal wind because the customer is watching.",
  traps: []
},
{
  id: "ops-05", topic: "operations", sub: "Crew Resource Management", acs: "UA.V.D.K2", figure: null,
  q: "During an operation, your visual observer spots a helicopter approaching, but hesitates to speak up because you seem busy. This is a failure of",
  choices: ["crew resource management — all crew must communicate hazards immediately and clearly.", "risk management — the helicopter should have been forecast in planning.", "the visual observer's certification requirements."],
  answer: 0,
  explanation: "CRM failure: information existed in the crew but didn't reach the decision-maker. Effective CRM means anyone announces hazards immediately, and the briefing (107.49) should establish exactly those callouts. VOs hold no certificate — their value is entirely in communication.",
  traps: []
},
{
  id: "ops-06", topic: "operations", sub: "Traffic pattern & runways", acs: "UA.V.A.K2", figure: null,
  q: "Runway 9 at a non-towered airport points in which approximate magnetic direction, and from which side would landing traffic approach?",
  choices: ["090° (east); aircraft on final approach from the west, flying eastbound.", "090° (east); aircraft on final approach from the east, flying westbound.", "009° (north); aircraft on final approach from the south."],
  answer: 0,
  explanation: "Runway numbers = MAGNETIC heading ÷ 10: RWY 9 ≈ 090° (east). Aircraft LAND on runway 9 heading east — so final approach traffic comes from the WEST of the field, descending. Position your operation accordingly and expect the same runway's opposite end to be RWY 27.",
  traps: ["traffic-pattern"]
},
{
  id: "ops-07", topic: "operations", sub: "Traffic pattern & radio", acs: "UA.V.A.K3", figure: null,
  q: "You monitor the CTAF and hear: 'Hicks traffic, Cessna 5-3-Alpha, turning base, runway 36, Hicks.' Where should you look for this aircraft, and what is it about to do?",
  choices: ["Perpendicular to the runway 36 final approach path, turning toward a north-bound landing.", "Departing runway 36 to the south.", "Directly over midfield at pattern altitude, heading north."],
  answer: 0,
  explanation: "Base leg is the short perpendicular leg between downwind and final. RWY 36 = landing to the NORTH, so final is flown northbound from south of the field, and base is the perpendicular leg just before it. Monitoring CTAF and visualizing pattern legs is precisely why these questions are on the drone exam.",
  traps: ["traffic-pattern"]
},
{
  id: "ops-08", topic: "operations", sub: "Radio procedures", acs: "UA.V.A.K1", figure: null,
  q: "At a non-towered airport, the recommended way for a remote PIC to build awareness of manned traffic is to",
  choices: ["monitor the CTAF for position reports while scanning visually — self-announced positions are advisory, not ATC control.", "transmit their drone's GPS position on the CTAF every two minutes.", "call the nearest ATC tower for traffic advisories."],
  answer: 0,
  explanation: "Non-towered airports have no controller: pilots self-announce on the CTAF. A remote PIC should MONITOR (a cheap air-band scanner works) and keep eyes out — radio reports are advisory only, and NORDO (no-radio) aircraft exist. Drone pilots generally should not clutter the CTAF with transmissions.",
  traps: []
},
{
  id: "ops-09", topic: "operations", sub: "Airport environment", acs: "UA.V.A.K2", figure: null,
  q: "A segmented circle at a non-towered airport provides what information?",
  choices: ["Traffic pattern direction for each runway and wind/landing direction indicators.", "The airport's CTAF frequency and hours of operation.", "The location of fuel and maintenance services."],
  answer: 0,
  explanation: "The segmented circle (visible from the air) holds the wind indicator and L-shaped extensions showing which runways use RIGHT traffic (standard is left). It tells you where the pattern flows — and therefore where manned aircraft will be concentrated at low altitude.",
  traps: ["traffic-pattern"]
},
{
  id: "ops-10", topic: "operations", sub: "Night physiology", acs: "UA.V.E.K8", figure: null,
  q: "To best detect a small aircraft at night with your unaided eyes, you should",
  choices: ["look slightly off-center of where you expect the object, using peripheral (rod) vision.", "stare directly at the expected location.", "close one eye to sharpen focus in the other."],
  answer: 0,
  explanation: "Night vision lives in the RODS, which are absent from the eye's center (fovea). Off-center viewing — looking 5-10° to the side of the target — puts the image on rods. Directly staring at a dim object at night can make it disappear. Pair with: ~30 min dark adaptation, red light preserves it.",
  traps: []
},
{
  id: "ops-11", topic: "operations", sub: "Fatigue & stress", acs: "UA.V.E.K5", figure: null,
  q: "What is the difference between acute and chronic fatigue?",
  choices: ["Acute fatigue follows a single period of exertion and is cured by rest/sleep; chronic fatigue builds over time and requires prolonged recovery.", "Acute fatigue is mental; chronic fatigue is physical.", "Acute fatigue is dangerous; chronic fatigue is not."],
  answer: 0,
  explanation: "ACUTE = short-term tiredness after exertion; a good night's sleep fixes it. CHRONIC = accumulated sleep debt/stress over weeks; one night off does NOT fix it and its impairment is insidious. Both degrade judgment before you notice — apply IMSAFE honestly.",
  traps: []
},
{
  id: "ops-12", topic: "operations", sub: "Medications", acs: "UA.V.E.K3", figure: null,
  q: "May a remote pilot fly after taking an over-the-counter antihistamine for allergies?",
  choices: ["Only if the medication does not cause impairing side effects — sedating antihistamines are incompatible with 107.17.", "Yes — only prescription medications restrict flying.", "No — any medication of any kind grounds a remote pilot for 48 hours."],
  answer: 0,
  explanation: "107.17 hinges on IMPAIRMENT, not prescription status. Many OTC antihistamines (diphenhydramine/Benadryl) sedate for 8+ hours. Read labels, know your reaction, and when in doubt sit it out. The PIC is responsible for the self-assessment.",
  traps: []
},
{
  id: "ops-13", topic: "operations", sub: "Emergency procedures", acs: "UA.V.C.K1", figure: null,
  q: "During a flight, your sUAS loses its control link. What should have been done BEFORE flight to prepare for this?",
  choices: ["Verify and brief the aircraft's programmed lost-link behavior (e.g., return-to-home altitude and route) as part of the preflight contingency plan.", "Nothing — lost link always resolves itself when the aircraft lands.", "File a lost-link report with the FAA in advance."],
  answer: 0,
  explanation: "Lost-link behavior (RTH altitude, hover-then-land timers, failsafe route) must be CONFIGURED and BRIEFED preflight (107.49 contingency planning). Set the RTH altitude above every obstacle on the return path but no higher than needed — and know what the aircraft will do before it does it.",
  traps: []
},
{
  id: "ops-14", topic: "operations", sub: "Emergency procedures", acs: "UA.V.C.K1", figure: null,
  q: "Your multirotor suffers a low-battery failsafe and begins auto-landing over a crowd that has gathered under it. The best available action is to",
  choices: ["use remaining control authority to translate the aircraft laterally to the nearest clear area, even if it lands hard.", "let the automation land it vertically — automation always outranks the pilot.", "command full climb to buy time to think."],
  answer: 0,
  explanation: "Priority: people > property > aircraft. Most failsafe descents still accept lateral input — steer to a clear spot and accept a rough landing. Climbing on a dying battery worsens the crash energy. And the deeper lesson: don't let people gather beneath the aircraft in the first place.",
  traps: []
},
{
  id: "ops-15", topic: "operations", sub: "Maintenance & records", acs: "UA.V.F.K1", figure: null,
  q: "Which maintenance practice best supports safe sUAS operations over time?",
  choices: ["Documenting all maintenance, firmware updates, and inspections in a log, and following the manufacturer's inspection intervals.", "Replacing parts only after an in-flight failure occurs.", "Relying on the aircraft's self-test to catch all defects."],
  answer: 0,
  explanation: "Best practice (per the FAA study guide): scheduled + unscheduled maintenance recorded in a LOG, using manufacturer procedures where they exist and your own protocol where they don't. Records reveal trends (a motor drawing more current every week) before they become failures.",
  traps: []
},
{
  id: "ops-16", topic: "operations", sub: "Preflight inspection", acs: "UA.V.F.K2", figure: null,
  q: "During your preflight inspection you find a hairline crack in one propeller. The correct action is to",
  choices: ["replace the propeller before flight — cracked props can shed a blade at full RPM.", "fly a short test hover to see if vibration develops.", "wrap the crack with tape and limit RPM."],
  answer: 0,
  explanation: "A cracked prop is a grounding item, full stop. Blade separation at operating RPM unbalances the aircraft instantly and can injure bystanders. Props are consumables — inspect before every flight, replace at any nick/crack, and always as a matched set if required by the manufacturer.",
  traps: []
},
{
  id: "ops-17", topic: "operations", sub: "GPS & interference", acs: "UA.V.C.K2", figure: null,
  q: "You plan to launch from a site next to a large steel bridge. Which effect should you anticipate?",
  choices: ["Compass/magnetometer interference and multipath GPS errors — calibrate away from the structure and expect degraded position hold.", "Improved GPS accuracy from signal reflection off the bridge.", "No effect — GPS and compasses are immune to nearby structures."],
  answer: 0,
  explanation: "Large ferrous structures skew the magnetometer (bad heading = 'toilet-bowl' drift) and reflect GPS signals (multipath = position jumps). Calibrate the compass well away from steel/rebar/vehicles, launch with clear sky view, and be ready to fly in attitude mode.",
  traps: []
},
{
  id: "ops-18", topic: "operations", sub: "GPS & interference", acs: "UA.V.C.K2", figure: null,
  q: "A NOTAM warns of GPS interference testing in your area, and solar-storm activity is elevated (high Kp index). How should this affect your sUAS operation?",
  choices: ["Expect degraded or lost GPS — be prepared to fly manually and consider postponing precision or BVLOS-waivered work.", "No impact — sUAS use a different satellite system than manned aircraft.", "It only matters at night when satellites are overhead."],
  answer: 0,
  explanation: "GPS jamming NOTAMs (common near military ranges) and geomagnetic storms both degrade the position solution your autopilot leans on. Failsafes like RTH also depend on GPS. Verify satellite count/HDOP before launch and be proficient in non-GPS flight modes.",
  traps: []
},
{
  id: "ops-19", topic: "operations", sub: "Physiology - stress", acs: "UA.V.E.K6", figure: null,
  q: "Which statement about stress and pilot performance is true?",
  choices: ["Stressors are cumulative — job pressure, life events, and in-flight demands add together and can push total stress past the point of degraded performance.", "Stress always improves focus and reaction time.", "Only in-flight events count as stress; personal life is irrelevant to flying."],
  answer: 0,
  explanation: "Stress accumulates across sources — an argument at home rides along to the flight line. Moderate arousal can sharpen performance, but past the peak, added stress collapses judgment and narrows attention (tunneling). The 'S' in IMSAFE asks you to total it honestly.",
  traps: []
},
{
  id: "ops-20", topic: "operations", sub: "Physiology - vision", acs: "UA.V.E.K7", figure: null,
  q: "Haze during daytime flight creates which visual illusion for a remote pilot tracking their aircraft?",
  choices: ["Objects appear farther away than they actually are.", "Objects appear closer than they actually are.", "Haze has no effect on distance perception."],
  answer: 0,
  explanation: "Haze reduces contrast, and low contrast reads as distance — your aircraft (and obstacles/traffic) look FARTHER than they are, so you underestimate closure. In haze, add margin and bring the aircraft in earlier than feels necessary.",
  traps: []
},
{
  id: "ops-21", topic: "operations", sub: "Crew roles & handoff", acs: "UA.V.C.K1", figure: null,
  q: "Two certificated remote pilots share a long mapping mission. What is required to hand off the remote-PIC role mid-operation?",
  choices: ["A positive, briefed transfer of control so exactly one person is remote PIC at any moment.", "Nothing — both pilots are simultaneously PIC while the aircraft flies.", "A written FAA form filed within 24 hours of the handoff."],
  answer: 0,
  explanation: "There is exactly ONE remote PIC at a time. Handoffs are legal but must be positive and unambiguous ('You have the aircraft' / 'I have the aircraft') and pre-briefed. Ambiguity about who's flying is a classic CRM accident ingredient.",
  traps: ["who-responsible"]
},
{
  id: "ops-22", topic: "operations", sub: "Dehydration & heat", acs: "UA.V.E.K4", figure: null,
  q: "A remote pilot working outdoors on a hot afternoon develops headache, fatigue, and impaired judgment. The most likely cause and remedy are",
  choices: ["dehydration/heat stress — stop operations, hydrate, and cool down before resuming.", "hypoxia — descend the aircraft to a lower altitude.", "carbon monoxide poisoning — move away from the aircraft's battery."],
  answer: 0,
  explanation: "Drone crews stand in the sun for hours; dehydration's first casualties are concentration and judgment — exactly what VLOS scanning needs. Remedy: shade, water, rest. (Hypoxia affects pilots at altitude in aircraft, not ground crews; electric UAS produce no CO.)",
  traps: []
},
{
  id: "ops-23", topic: "operations", sub: "ADM process", acs: "UA.V.D.K3", figure: null,
  q: "In the DECIDE model of aeronautical decision making, the letters stand for",
  choices: ["Detect, Estimate, Choose, Identify, Do, Evaluate.", "Decide, Execute, Check, Inspect, Debrief, Exit.", "Detect, Evaluate, Communicate, Initiate, Descend, End."],
  answer: 0,
  explanation: "DECIDE: Detect a change, Estimate its significance, Choose a safe outcome, Identify actions, Do the best action, Evaluate the result — a continuous loop, not a one-shot checklist. Exam answer pattern: the version starting 'Detect, Estimate, Choose...'",
  traps: []
},
{
  id: "ops-24", topic: "operations", sub: "Sectional chart / airport data", acs: "UA.V.B.K6a", figure: null,
  q: "An airport data block on a sectional reads: 'NAME (ABC) — CT 118.3 ✱ — ATIS 124.85 — 283 L 72 — 122.95'. The '283' and 'L 72' indicate",
  choices: ["field elevation 283 feet MSL; lighted runway, longest runway 7,200 feet.", "traffic pattern altitude 283 feet AGL; left traffic, runway 72.", "283 based aircraft; runway 72 feet wide."],
  answer: 0,
  explanation: "Data block decode: field ELEVATION in feet MSL (283), 'L' = runway lighting available (✱ on CT means part-time tower), '72' = longest runway in HUNDREDS of feet (7,200 ft). This layout is printed in every chart legend — learn it once, earn points forever.",
  traps: ["chart-reading"]
},
{
  id: "ops-25", topic: "operations", sub: "Public safety & security", acs: "UA.V.C.K1", figure: null,
  q: "While you are flying a mapping mission, a police officer approaches and asks you to land immediately because of an emergency helicopter inbound to the area. You should",
  choices: ["comply — land safely as soon as practicable and coordinate before resuming.", "continue the mission — only the FAA can direct an aircraft operation.", "climb above 400 feet to clear a path for the helicopter."],
  answer: 0,
  explanation: "Yield and land: 107.37 right-of-way plus basic ADM. Emergency aircraft (EMS, firefighting) operate low and fast exactly where drones fly, and TFRs often follow. Cooperating with public safety on scene is both required judgment and good citizenship — and never bust 400 ft to 'help.'",
  traps: []
}
]);
