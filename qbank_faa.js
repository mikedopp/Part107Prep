// Official FAA UAG sample questions (faa.gov, 8/10/2021) — public domain.
// Answers verified against published answer keys. Explanations original.
// topic: regulations | airspace | weather | loading | operations
window.QBANK = (window.QBANK || []).concat([
{
  id: "faa-01", topic: "weather", sub: "Air masses & stability", acs: "UA.III.B.K1d", figure: null,
  q: "What are characteristics of a moist, unstable air mass?",
  choices: ["Turbulence and showery precipitation.", "Poor visibility and smooth air.", "Haze and smoke."],
  answer: 0,
  explanation: "UNSTABLE air = rising air: cumulus clouds, turbulence, SHOWERY precipitation, and good visibility. STABLE air = smooth air, poor visibility (haze traps), STEADY precipitation, stratus clouds. Memorize the pairs — the exam tests them both directions.",
  traps: ["stable-unstable"]
},
{
  id: "faa-02", topic: "regulations", sub: "Airspace authorization", acs: "UA.I.B.K16", figure: null,
  q: "According to 14 CFR part 107, how may a remote pilot operate an unmanned aircraft in Class C airspace?",
  choices: ["The remote pilot must have prior authorization from the Air Traffic Control (ATC) facility having jurisdiction over that airspace.", "The remote pilot must monitor the Air Traffic Control (ATC) frequency from launch to recovery.", "The remote pilot must contact the Air Traffic Control (ATC) facility after launching the unmanned aircraft."],
  answer: 0,
  explanation: "14 CFR 107.41: operations in Class B, C, D, or the surface area of Class E require PRIOR ATC authorization (in practice via LAANC or FAA DroneZone). You never just 'monitor a frequency' or call after launch — authorization comes BEFORE flight.",
  traps: ["before-vs-after"]
},
{
  id: "faa-03", topic: "airspace", sub: "Controlled airspace", acs: "UA.II.A.K1b", figure: null,
  q: "According to 14 CFR part 107 the remote pilot in command (PIC) of a small unmanned aircraft planning to operate within Class C airspace",
  choices: ["must use a visual observer.", "is required to file a flight plan.", "is required to receive ATC authorization."],
  answer: 2,
  explanation: "Same rule, different wording: Class B/C/D and surface Class E require ATC authorization (107.41). Visual observers are never mandatory under part 107, and sUAS never file flight plans.",
  traps: []
},
{
  id: "faa-04", topic: "weather", sub: "Density altitude", acs: "UA.III.B.K1a", figure: null,
  q: "What effect does high density altitude have on the efficiency of a UA propeller?",
  choices: ["Propeller efficiency is increased.", "Propeller efficiency is decreased.", "Density altitude does not affect propeller efficiency."],
  answer: 1,
  explanation: "High density altitude = thin air (hot, high, humid). A propeller is a rotating airfoil — thinner air gives it less to bite, so thrust and efficiency DECREASE. Everything performs worse in high density altitude: props, wings, motors (cooling too).",
  traps: []
},
{
  id: "faa-05", topic: "operations", sub: "Sectional chart / airport info", acs: "UA.V.B.K6a", figure: 22,
  q: "(Refer to FAA-CT-8080-2H, Figure 22, area 2.) At Coeur D'Alene which frequency should be used as a Common Traffic Advisory Frequency (CTAF) to monitor airport traffic?",
  choices: ["122.05 MHz.", "135.075 MHz.", "122.8 MHz."],
  answer: 2,
  explanation: "On a sectional, the CTAF is the frequency with a filled dot 'C' symbol next to it in the airport data block. At Coeur d'Alene the data block shows 122.8 with the C symbol. 122.05 is the FSS frequency and 135.075 is the AWOS (weather). Learn the airport data block layout — it's a guaranteed exam topic.",
  traps: ["chart-reading"]
},
{
  id: "faa-06", topic: "operations", sub: "See and avoid / scanning", acs: "UA.I.B.K14a", figure: null,
  q: "Which technique should a remote pilot use to scan for traffic? A remote pilot should",
  choices: ["systematically focus on different segments of the sky for short intervals.", "concentrate on relative movement detected in the peripheral vision area.", "continuously scan the sky from right to left."],
  answer: 0,
  explanation: "Effective scanning = systematic, segmented: focus on one 10° block of sky at a time for at least 1 second, then move to the next. Continuous sweeping motion blurs detail, and peripheral vision alone won't catch converging (non-moving-in-your-view) traffic — which is exactly the traffic that hits you.",
  traps: []
},
{
  id: "faa-07", topic: "loading", sub: "Load factor", acs: "UA.IV.A.K1a", figure: 2,
  q: "(Refer to FAA-CT-8080-2H, Figure 2.) If an unmanned airplane weighs 33 pounds, what approximate weight would the airplane structure be required to support during a 30° banked turn while maintaining altitude?",
  choices: ["34 pounds.", "47 pounds.", "38 pounds."],
  answer: 2,
  explanation: "From the load factor chart: 30° bank = 1.154 G. 33 lb × 1.154 ≈ 38 lb. Method: find the bank angle on the chart, read the load factor, multiply by weight. (60° bank = 2.0 G would be 66 lb — know that anchor point.)",
  traps: ["chart-reading"]
},
{
  id: "faa-08", topic: "airspace", sub: "Class C dimensions", acs: "UA.II.A.K1b", figure: 23,
  q: "(Refer to FAA-CT-8080-2H, Figure 23, area 3.) What is the floor of the Savannah Class C airspace at the shelf area (outer circle)?",
  choices: ["1,300 feet AGL.", "1,300 feet MSL.", "1,700 feet MSL."],
  answer: 1,
  explanation: "Class C altitudes on sectionals are shown as MSL in hundreds of feet: '41/13' means ceiling 4,100 MSL, floor 1,300 MSL. THE TRAP: answers offer the same number as AGL and MSL. Charted airspace altitudes are MSL (except when noted). If you missed this on the real test, this single trap may be costing you several questions.",
  traps: ["msl-agl", "chart-reading"]
},
{
  id: "faa-09", topic: "operations", sub: "Sectional chart hazards", acs: "UA.V.B.K6a", figure: 20,
  q: "(Refer to FAA-CT-8080-2H, Figure 20, area 3.) With ATC authorization, you are operating your small unmanned aircraft approximately 4 SM southeast of Elizabeth City Regional Airport (ECG). What hazard is indicated to be in that area?",
  choices: ["High density military operations in the vicinity.", "Unmarked balloon on a cable up to 3,008 feet AGL.", "Unmarked balloon on a cable up to 3,008 feet MSL."],
  answer: 2,
  explanation: "The chart CAUTION box reads 'UNMARKED BALLOON ON CABLE TO 3008 MSL'. Read the chart literally — it says MSL. This is the same MSL/AGL trap again: don't answer from memory of 'what sounds right', answer from what the chart actually prints.",
  traps: ["msl-agl", "chart-reading"]
},
{
  id: "faa-10", topic: "airspace", sub: "Special use airspace (MOA)", acs: "UA.II.A.K2", figure: 21,
  q: "(Refer to FAA-CT-8080-2H, Figure 21.) You have been hired by a farmer to use your small UA to inspect his crops. The area that you are to survey is in the Devil's Lake West MOA, east of area 2. How would you find out if the MOA is active?",
  choices: ["Refer to the chart legend.", "This information is available in the Small UAS database.", "Refer to the Military Operations Directory."],
  answer: 0,
  explanation: "Sectional charts include a Special Use Airspace panel (part of the chart legend/margin) listing each MOA's hours of operation, altitudes, and controlling agency to contact. There is no 'Small UAS database' or 'Military Operations Directory' — those are made-up distractors.",
  traps: ["chart-reading"]
},
{
  id: "faa-11", topic: "operations", sub: "Airport information sources", acs: "UA.V.B.K6b", figure: null,
  q: "The most comprehensive information on a given airport is provided by",
  choices: ["the Chart Supplements U.S. (formerly Airport Facility Directory).", "Notices to Airmen (NOTAMS).", "Terminal Area Chart (TAC)."],
  answer: 0,
  explanation: "The Chart Supplement U.S. (formerly A/FD) is the encyclopedia for an airport: runways, frequencies, services, remarks, hours. NOTAMs are time-critical CHANGES, and a TAC is just a zoomed-in chart. Keyword 'most comprehensive' → Chart Supplement.",
  traps: []
},
{
  id: "faa-12", topic: "operations", sub: "Hazardous attitudes", acs: "UA.V.D.K4", figure: null,
  q: "Identify the hazardous attitude or characteristic a remote pilot displays while taking risks in order to impress others?",
  choices: ["Impulsivity.", "Invulnerability.", "Macho."],
  answer: 2,
  explanation: "Taking risks to IMPRESS OTHERS = Macho ('I can do it'). Antidote: 'Taking chances is foolish.' The five: Anti-authority, Impulsivity (do something NOW), Invulnerability (won't happen to me), Macho (showing off), Resignation (what's the use). Match the scenario keyword to the attitude.",
  traps: []
},
{
  id: "faa-13", topic: "operations", sub: "Airspace authorization", acs: "UA.V.B.K6a", figure: 26,
  q: "(Refer to FAA-CT-8080-2H, Figure 26, area 4.) You have been hired to inspect the tower under construction at 46.9N and 98.6W, near Jamestown Regional (JMS). What must you receive prior to flying your unmanned aircraft in this area?",
  choices: ["Authorization from the military.", "Authorization from ATC.", "Authorization from the National Park Service."],
  answer: 1,
  explanation: "The tower sits inside Jamestown Regional's controlled airspace (dashed line = surface-area controlled airspace). Any operation in B/C/D or surface E airspace requires ATC authorization (107.41). Only ATC authorizes airspace — never the military or park service.",
  traps: ["chart-reading"]
},
{
  id: "faa-14", topic: "airspace", sub: "NOTAMs", acs: "UA.II.B.K5", figure: 20,
  q: "(Refer to FAA-CT-8080-2H, Figure 20, area 5.) How would a remote PIC \"CHECK NOTAMS\" as noted in the CAUTION box regarding the unmarked balloon?",
  choices: ["By utilizing the B4UFLY mobile application.", "By contacting the FAA district office.", "By obtaining a briefing via an online source such as: 1800WXBrief.com."],
  answer: 2,
  explanation: "NOTAMs come from flight service: 1800WXBrief.com (Leidos Flight Service) or the FAA NOTAM Search site. B4UFLY shows airspace, not NOTAMs; FSDO offices don't give briefings.",
  traps: []
},
{
  id: "faa-15", topic: "operations", sub: "Crew Resource Management", acs: "UA.V.D.K2", figure: null,
  q: "When adapting crew resource management (CRM) concepts to the operation of a small UA, CRM must be integrated into",
  choices: ["the flight portion only.", "all phases of the operation.", "the communications only."],
  answer: 1,
  explanation: "CRM (using ALL available resources — people, equipment, information) applies to ALL phases: planning, preflight, flight, and post-flight. Any answer that limits it to one slice is wrong. FAA loves 'all phases' as the correct pattern here.",
  traps: []
},
{
  id: "faa-16", topic: "operations", sub: "Hazardous attitudes", acs: "UA.V.D.K4", figure: null,
  q: "You have been hired as a remote pilot by a local TV news station to film breaking news with a small UA. You expressed a safety concern and the station manager has instructed you to 'fly first, ask questions later.' What type of hazardous attitude does this attitude represent?",
  choices: ["Machismo.", "Invulnerability.", "Impulsivity."],
  answer: 2,
  explanation: "'Fly FIRST, ask questions LATER' = act without thinking = Impulsivity. Antidote: 'Not so fast — think first.' It's not Macho because nobody is showing off; the pressure is to act NOW.",
  traps: []
},
{
  id: "faa-17", topic: "operations", sub: "Safety culture", acs: "UA.V.D.K1", figure: null,
  q: "A local TV station has hired a remote pilot to operate their small UA to cover news stories. The remote pilot has had multiple near misses with obstacles on the ground and two small UAS accidents. What would be a solution for the news station to improve their operating safety culture?",
  choices: ["The news station should implement a policy of no more than five crashes/incidents within 6 months.", "The news station does not need to make any changes; there are times that an accident is unavoidable.", "The news station should recognize hazardous attitudes and situations and develop standard operating procedures that emphasize safety."],
  answer: 2,
  explanation: "Safety culture = recognize hazards and build SOPs that emphasize safety. A 'crash quota' is absurd and 'do nothing' is never the FAA answer. On culture/ADM questions, pick the option that sounds like proactive systematic safety management.",
  traps: []
},
{
  id: "faa-18", topic: "operations", sub: "Traffic pattern", acs: "UA.V.A.K3", figure: 26,
  q: "(Refer to FAA-CT-8080-2H, Figure 26, area 2.) While monitoring the Cooperstown CTAF you hear an aircraft announce that they are midfield left downwind to RWY 13. Where would the aircraft be relative to the runway?",
  choices: ["The aircraft is East.", "The aircraft is South.", "The aircraft is West."],
  answer: 0,
  explanation: "Runway 13 points southeast (130°). Downwind is flown OPPOSITE landing direction (heading 310°), and 'left' traffic means the runway is off the pilot's LEFT — putting the aircraft northeast of the field. East is the closest answer. Method: draw the runway, fly the downwind opposite the number, offset to the pattern side.",
  traps: ["traffic-pattern"]
},
{
  id: "faa-19", topic: "operations", sub: "Emergency deviations & reporting", acs: "UA.V.C.K1", figure: null,
  q: "To avoid a possible collision with a manned airplane, you estimate that your small UA climbed to an altitude greater than 600 feet AGL. To whom must you report the deviation?",
  choices: ["Air Traffic Control.", "The National Transportation Safety Board.", "Upon request of the Federal Aviation Administration."],
  answer: 2,
  explanation: "107.21: in an emergency you may deviate from any part 107 rule to the extent needed, and you must send a written report ONLY UPON REQUEST of the FAA. Not automatic, not to ATC, not to NTSB. (NTSB is for serious-injury/damage accident reports — different rule.)",
  traps: ["who-responsible"]
},
{
  id: "faa-20", topic: "loading", sub: "Load factor", acs: "UA.IV.A.K1a", figure: null,
  q: "When operating an unmanned airplane, the remote pilot should consider that the load factor on the wings may be increased any time",
  choices: ["the CG is shifted rearward to the aft CG limit.", "the airplane is subjected to maneuvers other than straight-and-level flight.", "the gross weight is reduced."],
  answer: 1,
  explanation: "Load factor rises with ANY maneuvering — turns, pull-ups, turbulence. Straight-and-level = 1G; anything else loads the wings more. CG position changes stability (not load factor), and reducing weight reduces load, not increases it.",
  traps: []
},
{
  id: "faa-21", topic: "loading", sub: "Stalls", acs: "UA.IV.A.K1b", figure: null,
  q: "A stall occurs when the smooth airflow over the unmanned airplane's wing is disrupted and the lift degenerates rapidly. This is caused when the wing",
  choices: ["exceeds the maximum speed.", "exceeds maximum allowable operating weight.", "exceeds its critical angle of attack."],
  answer: 2,
  explanation: "A stall is ALWAYS exceeding the critical angle of attack — at any airspeed, any weight, any attitude. Speed and weight change WHEN you reach it, but the cause is always the same. If 'critical angle of attack' is a choice on a stall question, it's the answer.",
  traps: []
},
{
  id: "faa-22", topic: "operations", sub: "Risk management", acs: "UA.V.D.K1", figure: null,
  q: "Safety is an important element for a remote pilot to consider prior to operating an unmanned aircraft system. To prevent the final 'link' in the accident chain, a remote pilot must consider which methodology?",
  choices: ["Crew Resource Management.", "Safety Management System.", "Risk Management."],
  answer: 2,
  explanation: "Breaking the accident chain = Risk Management (identify hazards, assess risk, mitigate). CRM is about using resources/communication; SMS is an organizational framework. Keyword 'accident chain' → risk management.",
  traps: []
},
{
  id: "faa-23", topic: "operations", sub: "Fatigue & physiology", acs: "UA.V.E.K5", figure: null,
  q: "You are a remote pilot for a co-op energy service provider. You are to use your UA to inspect power lines in a remote area 15 hours away from your home office. After the drive, fatigue impacts your abilities to complete your assignment on time. Fatigue can be recognized",
  choices: ["easily by an experienced pilot.", "as being in an impaired state.", "by an ability to overcome sleep deprivation."],
  answer: 1,
  explanation: "Fatigue = an impaired state, and its danger is that it's HARD to self-recognize (which kills option A). You cannot 'overcome' sleep deprivation by will. Treat fatigue like alcohol: you're impaired whether you feel it or not.",
  traps: []
},
{
  id: "faa-24", topic: "operations", sub: "Latitude/longitude", acs: "UA.V.B.K6a", figure: 21,
  q: "(Refer to FAA-CT-8080-2H, Figure 21.) What airport is located approximately 47 (degrees) 40 (minutes) N latitude and 101 (degrees) 26 (minutes) W longitude?",
  choices: ["Mercer County Regional Airport.", "Semshenko Airport.", "Garrison Airport."],
  answer: 2,
  explanation: "Find the printed 48° latitude line and 101° longitude line, then count tick marks (each tick = 1 minute, bold tick = 5 minutes) SOUTH from 48° to 47°40' and WEST past 101° to 26'. That intersection is Garrison. Practice this mechanically — lat/long questions are free points once you've done five of them.",
  traps: ["chart-reading", "lat-long"]
},
{
  id: "faa-25", topic: "weather", sub: "METAR reading", acs: "UA.III.A.K2", figure: 12,
  q: "(Refer to FAA-CT-8080-2H, Figure 12.) What are the current conditions for Chicago Midway Airport (KMDW)?",
  choices: ["Sky 700 feet overcast, visibility 1-1/2SM, rain.", "Sky 7,000 feet overcast, visibility 1-1/2SM, heavy rain.", "Sky 700 feet overcast, visibility 11, occasionally 2SM, with rain."],
  answer: 0,
  explanation: "KMDW METAR: '1 1/2SM RA OVC007' = visibility 1½ statute miles, rain (RA with no +/- is moderate), overcast at 007 = 700 feet AGL. Cloud heights in METARs are in HUNDREDS of feet: 007=700, 070=7,000. That decimal-place trap is the whole question.",
  traps: ["units", "metar"]
},
{
  id: "faa-26", topic: "weather", sub: "METAR reading", acs: "UA.III.A.K2", figure: 12,
  q: "(Refer to FAA-CT-8080-2H, Figure 12.) The wind direction and velocity at KJFK is from",
  choices: ["180° true at 4 knots.", "180° magnetic at 4 knots.", "040° true at 18 knots."],
  answer: 0,
  explanation: "KJFK shows '18004KT' = wind FROM 180° at 4 knots. Two traps in one: (1) written METAR/TAF winds are TRUE north (spoken winds from a tower/ATIS are magnetic — 'if you read it, it's true; if you hear it, it's magnetic'); (2) don't split 18004 as 040@18.",
  traps: ["true-magnetic", "metar"]
},
{
  id: "faa-27", topic: "regulations", sub: "Night operations", acs: "UA.I.B.K9", figure: null,
  q: "According to 14 CFR part 107, what is required to operate a small UA within 30 minutes after official sunset?",
  choices: ["Use of anti-collision lights.", "Must be operated in a rural area.", "Use of a transponder."],
  answer: 0,
  explanation: "Civil twilight (30 min after sunset / before sunrise) and night ops require anti-collision lighting visible for 3 statute miles with a flash rate sufficient to avoid collision (107.29). sUAS don't carry transponders, and there's no rural-area rule.",
  traps: []
},
{
  id: "faa-28", topic: "loading", sub: "Weight & balance", acs: "UA.IV.A.K1b", figure: null,
  q: "To ensure that the unmanned aircraft center of gravity (CG) limits are not exceeded, follow the aircraft loading instructions specified in the",
  choices: ["Pilot's Operating Handbook or UAS Flight Manual.", "Aeronautical Information Manual (AIM).", "Aircraft Weight and Balance Handbook."],
  answer: 0,
  explanation: "Aircraft-specific limits live in that aircraft's POH / Flight Manual from the manufacturer. The AIM is general procedures; the Weight & Balance Handbook teaches theory. 'Where do I find MY aircraft's numbers' → the manufacturer's manual, always.",
  traps: []
},
{
  id: "faa-29", topic: "regulations", sub: "Remote PIC responsibilities", acs: "UA.I.B.K20", figure: null,
  q: "According to 14 CFR part 107, who is responsible for determining the performance of a small unmanned aircraft?",
  choices: ["Remote pilot-in-command.", "Manufacturer.", "Owner or operator."],
  answer: 0,
  explanation: "Under part 107 the Remote PIC is responsible for nearly EVERYTHING: performance, preflight inspection, safe condition, briefings, compliance. When a question asks 'who is responsible' the answer is almost always the remote PIC. Count how many times you've missed one of these — it's a pattern worth fixing.",
  traps: ["who-responsible"]
},
{
  id: "faa-30", topic: "airspace", sub: "Military Training Routes", acs: "UA.II.A.K2", figure: 59,
  q: "(Refer to FAA-CT-8080-2H, Figure 59, area 2.) The chart shows a gray line with \"VR1667, VR1617, VR1638, and VR1668.\" Could this area present a hazard to the operations of a small UA?",
  choices: ["No, all operations will be above 400 feet.", "Yes, this is a Military Training Route from the surface to 1,500 feet AGL.", "Yes, the defined route provides traffic separation to manned aircraft."],
  answer: 1,
  explanation: "Military Training Routes with FOUR-digit numbers (VR1667) are flown at or below 1,500 ft AGL — right where you fly, often at speeds over 250 knots. Three-digit MTRs (VR166) have segments ABOVE 1,500 AGL. VR = visual rules, IR = instrument. A fast jet at 300 ft is absolutely your problem.",
  traps: ["chart-reading"]
},
{
  id: "faa-31", topic: "operations", sub: "Latitude/longitude", acs: "UA.V.B.K6a", figure: 26,
  q: "(Refer to FAA-CT-8080-2H, Figure 26.) What does the line of latitude at area 4 measure?",
  choices: ["The degrees of latitude east and west of the Prime Meridian.", "The degrees of latitude north and south of the equator.", "The degrees of latitude east and west of the line that passes through Greenwich, England."],
  answer: 1,
  explanation: "LATitude lines run flat (horizontal) and measure NORTH-SOUTH of the equator. LONGitude lines are the long ones pole-to-pole, measuring EAST-WEST of the Prime Meridian (Greenwich). Mnemonic: 'lat = flat'.",
  traps: ["lat-long"]
},
{
  id: "faa-32", topic: "operations", sub: "Maintenance", acs: "UA.V.F.K1", figure: null,
  q: "Under what condition should the operator of a small UA establish scheduled maintenance protocol?",
  choices: ["When the manufacturer does not provide a maintenance schedule.", "UAS does not need a required maintenance schedule.", "When the FAA requires you to, following an accident."],
  answer: 0,
  explanation: "Follow the manufacturer's maintenance schedule if one exists; if not, YOU should establish your own protocol based on experience with the aircraft. The FAA doesn't mandate sUAS maintenance schedules — but 'no schedule needed' is never the safe answer.",
  traps: []
},
{
  id: "faa-33", topic: "regulations", sub: "Remote PIC responsibilities", acs: "UA.V.F.K2", figure: null,
  q: "According to 14 CFR part 107, the responsibility to inspect the small UAS to ensure it is in a safe operating condition rests with the",
  choices: ["remote pilot-in-command.", "visual observer.", "owner of the small UAS."],
  answer: 0,
  explanation: "107.15/107.49: the REMOTE PIC must check the sUAS is in condition for safe operation before EACH flight. Not the owner, not the VO. 'Who is responsible?' → remote PIC. Again.",
  traps: ["who-responsible"]
},
{
  id: "faa-34", topic: "regulations", sub: "Registration", acs: "UA.I.B.K1", figure: null,
  q: "According to 14 CFR part 48, when would a small UA owner not be permitted to register it?",
  choices: ["If the owner is less than 13 years of age.", "All persons must register their small UA.", "If the owner does not have a valid United States driver's license."],
  answer: 0,
  explanation: "Part 48: you must be at least 13 to register (under 13, a parent/guardian registers it). No driver's license requirement exists. Registration also requires U.S. citizenship or permanent residency for full registration.",
  traps: []
},
{
  id: "faa-35", topic: "regulations", sub: "Registration", acs: "UA.I.B.K1", figure: null,
  q: "According to 14 CFR part 48, when must a person register a small UA with the Federal Aviation Administration?",
  choices: ["All civilian small UAs weighing greater than .55 pounds must be registered regardless of its intended use.", "When the small UA is used for any purpose other than as a model aircraft.", "Only when the operator will be paid for commercial services."],
  answer: 0,
  explanation: "Anything over 0.55 lb (250 g) must be registered no matter how it's used. And note: if flying under PART 107, even sub-0.55-lb aircraft must be registered — the weight exemption only applies to purely recreational flying. Registration is $5, valid 3 years, marked externally.",
  traps: []
},
{
  id: "faa-36", topic: "operations", sub: "Alcohol & drugs", acs: "UA.V.E.K2", figure: null,
  q: "Which is true regarding the presence of alcohol within the human body?",
  choices: ["A small amount of alcohol increases vision acuity.", "Consuming an equal amount of water will increase the destruction of alcohol and alleviate a hangover.", "Judgment and decision-making abilities can be adversely affected by even small amounts of alcohol."],
  answer: 2,
  explanation: "Even small amounts of alcohol impair judgment and decision-making — and judgment is the first thing to go, which is why impaired people think they're fine. Water doesn't speed alcohol metabolism (only time does). Regulatory numbers to pair with this: 8 hours bottle-to-throttle, 0.04% BAC max.",
  traps: []
},
{
  id: "faa-37", topic: "operations", sub: "Crew briefing", acs: "UA.V.C.K1", figure: null,
  q: "When using a small UA in a commercial operation, who is responsible for briefing the participants about emergency procedures?",
  choices: ["The FAA inspector-in-charge.", "The lead visual observer.", "The remote PIC."],
  answer: 2,
  explanation: "'Who is responsible' → the remote PIC (107.49: preflight familiarization includes briefing all participants on operating conditions, emergency procedures, contingencies, and roles).",
  traps: ["who-responsible"]
},
{
  id: "faa-38", topic: "weather", sub: "Air masses & stability", acs: "UA.III.B.K1c", figure: null,
  q: "What are the characteristics of stable air?",
  choices: ["Good visibility and steady precipitation.", "Poor visibility and steady precipitation.", "Poor visibility and intermittent precipitation."],
  answer: 1,
  explanation: "STABLE air: smooth, POOR visibility (pollutants trapped), STEADY precipitation, stratus clouds. The distractors mix one right trait with one wrong. Stable = 'S' words: smooth, stratus, steady. Unstable = cumulus, turbulence, showers, good visibility.",
  traps: ["stable-unstable"]
},
{
  id: "faa-39", topic: "weather", sub: "Temperature inversions", acs: "UA.III.B.K1j", figure: null,
  q: "You have received an outlook briefing from flight service through 1800wxbrief.com. The briefing indicates you can expect a low-level temperature inversion with high relative humidity. What weather conditions would you expect?",
  choices: ["Smooth air, poor visibility, fog, haze, or low clouds.", "Light wind shear, poor visibility, haze, and light rain.", "Turbulent air, poor visibility, fog, low stratus type clouds, and showery precipitation."],
  answer: 0,
  explanation: "An inversion (warm air over cold) is a lid: extremely STABLE. Stable + high humidity = smooth air with fog, haze, low clouds, poor visibility. 'Turbulent' or 'showery' anywhere in the answer kills it — those are unstable-air words.",
  traps: ["stable-unstable"]
},
{
  id: "faa-40", topic: "regulations", sub: "Night operations", acs: "UA.I.B.K25", figure: null,
  q: "When may a remote pilot reduce the intensity of an aircraft's lights during a night flight?",
  choices: ["At no time may the lights of an sUAS be reduced in intensity at night.", "When a manned aircraft is in the vicinity of the sUAS.", "When it is in the interest of safety to dim the aircraft's lights."],
  answer: 2,
  explanation: "107.29: anti-collision lights may be reduced in intensity when the remote PIC determines it's in the INTEREST OF SAFETY (e.g., the strobe is destroying the pilot's night vision). The reg builds in PIC discretion — 'at no time' absolutes are usually wrong.",
  traps: []
},
{
  id: "faa-41", topic: "regulations", sub: "Remote ID", acs: "UA.I.F.K1", figure: null,
  q: "What must a person, who is manipulating the controls of a small unmanned aircraft, do if the standard remote identification fails during a flight?",
  choices: ["Land the aircraft as soon as practicable.", "Notify the nearest FAA Air Traffic facility.", "Activate the aircraft's navigation lights."],
  answer: 0,
  explanation: "If Remote ID fails in flight: land as soon as PRACTICABLE (not 'practical', not 'immediately crash it down'). No notification requirement. RID basics: standard RID, broadcast module (VLOS only), or fly in a FRIA without RID.",
  traps: []
},
{
  id: "faa-42", topic: "regulations", sub: "Remote ID", acs: "UA.I.B.K1", figure: null,
  q: "Where must a small unmanned aircraft's serial number be listed when using either standard remote identification or a broadcast module?",
  choices: ["The aircraft's Document of Compliance.", "The manufacturer's Method of Compliance.", "The Certificate of Aircraft Registration."],
  answer: 2,
  explanation: "The RID serial number goes on the Certificate of Aircraft Registration (you enter it in FAADroneZone when registering). 'Document/Method of Compliance' are manufacturer-side paperwork distractors.",
  traps: []
},
{
  id: "faa-43", topic: "operations", sub: "Night physiology", acs: "UA.V.E.K8", figure: null,
  q: "When preparing for a night flight, what should an sUAS pilot be aware of after assembling and conducting a preflight of an aircraft while using a bright flashlight or work light?",
  choices: ["Once adapted to darkness, a persons eyes are relatively immune to bright lights.", "It takes approximately 30 minutes for a persons eyes to fully adapt to darkness.", "The person should use a flash light equipped with LED lights to facilitate their night vision."],
  answer: 1,
  explanation: "Full dark adaptation takes ~30 minutes, and one blast of bright white light resets the clock. Use dim red light after adapting, and view objects slightly off-center at night (rods, not cones). '30 minutes' is the number the exam wants.",
  traps: []
},
{
  id: "faa-44", topic: "regulations", sub: "Operations over people", acs: "UA.I.E.K3a", figure: null,
  q: "To conduct Category 1 operations, a remote pilot in command must use a small unmanned aircraft that weighs",
  choices: ["0.55 pounds or less.", "0.65 pounds or less.", "0.75 pounds or less."],
  answer: 0,
  explanation: "Category 1 (ops over people): ≤0.55 lb (250 g) INCLUDING everything attached, no exposed rotating parts that could lacerate skin, and Remote ID needed for sustained flight over open-air assemblies. Cat 2: ≤11 ft-lb kinetic energy. Cat 3: ≤25 ft-lb with site restrictions. Cat 4: airworthiness certificate.",
  traps: []
},
{
  id: "faa-45", topic: "regulations", sub: "Operations over people", acs: "UA.I.E.K3d", figure: null,
  q: "Which Category of small unmanned aircraft must have an airworthiness certificate issued by the FAA?",
  choices: ["4.", "3.", "2."],
  answer: 0,
  explanation: "Category 4 = FAA airworthiness certificate (part 21), operated per its operating limitations, with maintenance/inspection requirements. Categories 1-3 use weight/kinetic-energy limits and declarations of compliance instead.",
  traps: []
},
{
  id: "faa-46", topic: "airspace", sub: "TFRs", acs: "UA.II.A.K3", figure: null,
  q: "Your surveying company is a title sponsor for a race team at the Indianapolis 500. To promote your new aerial surveying department, you decide to video part of the race using a small UA. The FAA has issued a Temporary Flight Restriction (TFR) for the race in the area you plan to fly. In this situation",
  choices: ["you may fly your drone in the TFR since your company is sponsoring a team at the race.", "the TFR applies to all aircraft; you may not fly in the area without a Certificate of Waiver or Authorization.", "flying your drone is allowed if you notify all non-participating people of the closed course UA operation."],
  answer: 1,
  explanation: "TFRs apply to ALL aircraft including sUAS — sponsorship, permission from the venue, or notifying people changes nothing. You'd need an FAA waiver/authorization to operate inside one. Check TFRs at tfr.faa.gov or via a flight service briefing before every flight.",
  traps: []
}
]);
