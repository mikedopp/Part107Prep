// Original questions — Area I: Regulations. Written from 14 CFR part 107/48 and the
// FAA Remote Pilot Study Guide. Explanations cite the governing regulation.
window.QBANK = (window.QBANK || []).concat([
{
  id: "reg-01", topic: "regulations", sub: "Operating limits", acs: "UA.I.B.K5", figure: null,
  q: "What is the maximum allowable groundspeed for a small unmanned aircraft under 14 CFR part 107?",
  choices: ["87 knots (100 mph).", "100 knots (115 mph).", "87 mph (76 knots)."],
  answer: 0,
  explanation: "107.51(a): max groundspeed is 87 KNOTS = 100 MPH. The distractors swap the units — know both numbers and which unit goes with which. It's GROUNDspeed, so a tailwind counts against you.",
  traps: ["units"]
},
{
  id: "reg-02", topic: "regulations", sub: "Operating limits", acs: "UA.I.B.K6", figure: null,
  q: "Under 14 CFR part 107, a small unmanned aircraft may be operated higher than 400 feet AGL only when",
  choices: ["it remains within a 400-foot radius of a structure and flies no higher than 400 feet above the structure's immediate uppermost limit.", "ATC has been notified by radio prior to the climb.", "the aircraft remains within 200 feet of any structure along the route."],
  answer: 0,
  explanation: "107.51(b): the structure exception — within a 400-ft RADIUS of a structure and no more than 400 ft ABOVE its top. Inspecting a 1,000-ft tower? You can legally be at 1,400 ft AGL beside it. Both numbers are 400.",
  traps: []
},
{
  id: "reg-03", topic: "regulations", sub: "Operating limits", acs: "UA.I.B.K7", figure: null,
  q: "What are the minimum flight visibility and cloud clearance requirements for small UA operations under part 107?",
  choices: ["3 SM visibility; 500 feet below and 2,000 feet horizontally from clouds.", "1 SM visibility; clear of clouds.", "3 SM visibility; 1,000 feet above and 500 feet horizontally from clouds."],
  answer: 0,
  explanation: "107.51(c)-(d): 3 statute miles visibility from the control station, stay 500 ft BELOW and 2,000 ft HORIZONTAL from clouds. Mnemonic: '3-5-2' (3 SM, 500 below, 2,000 beside). The '1,000 above' distractor borrows from manned VFR rules.",
  traps: ["units"]
},
{
  id: "reg-04", topic: "regulations", sub: "sUAS definition", acs: "UA.I.A.K2", figure: null,
  q: "A 'small unmanned aircraft' as defined in 14 CFR part 107 weighs",
  choices: ["less than 55 pounds, including everything onboard or attached to the aircraft.", "55 pounds or less, excluding payload.", "less than 55 pounds, excluding fuel and batteries."],
  answer: 0,
  explanation: "Less than 55 lb INCLUDING everything onboard or attached — payload, cameras, batteries, all of it — at takeoff. At 55 lb or more you're out of part 107 entirely.",
  traps: []
},
{
  id: "reg-05", topic: "regulations", sub: "Certificate requirements", acs: "UA.I.C.K1", figure: null,
  q: "To exercise the privileges of a remote pilot certificate, the certificate holder must have completed",
  choices: ["recurrent training within the previous 24 calendar months.", "a flight review with an FAA inspector within the previous 12 months.", "a new knowledge test at a testing center every 36 months."],
  answer: 0,
  explanation: "107.65: initial knowledge test OR recurrent training within the preceding 24 CALENDAR months. The recurrent requirement is now met by the free online course at faasafety.gov — no testing center, no fee. 'Calendar months' means it expires at the END of the 24th month.",
  traps: []
},
{
  id: "reg-06", topic: "regulations", sub: "Certificate requirements", acs: "UA.I.C.K1", figure: null,
  q: "What is the minimum age to be eligible for a remote pilot certificate with a small UAS rating?",
  choices: ["16 years old.", "18 years old.", "14 years old."],
  answer: 0,
  explanation: "107.61: at least 16 years old, able to read/speak/write/understand English, no known disqualifying physical or mental condition, and pass the initial knowledge test.",
  traps: []
},
{
  id: "reg-07", topic: "regulations", sub: "Accident reporting", acs: "UA.I.B.K3", figure: null,
  q: "Under 14 CFR part 107, when must a remote PIC report an sUAS accident to the FAA?",
  choices: ["Within 10 calendar days of an operation that causes serious injury, loss of consciousness, or property damage of at least $500 (other than to the UA).", "Within 30 days of any accident involving the unmanned aircraft.", "Immediately, for any flight that damages the unmanned aircraft itself."],
  answer: 0,
  explanation: "107.9: report to the FAA within 10 CALENDAR DAYS if the operation causes (1) serious injury or loss of consciousness, or (2) damage to property OTHER THAN the UA of $500+ (repair cost or fair-market replacement, whichever is lower). Crashing your own drone is not reportable.",
  traps: []
},
{
  id: "reg-08", topic: "regulations", sub: "Accident reporting", acs: "UA.I.B.K3", figure: null,
  q: "Your 3-pound quadcopter strikes a parked car, causing $350 in damage to the car, and the drone is destroyed ($1,200 value). Is this an FAA-reportable accident under part 107?",
  choices: ["No — damage to property other than the UA is under $500, and damage to the UA itself doesn't count.", "Yes — total damage exceeds $500.", "Yes — any property damage to a third party must be reported."],
  answer: 0,
  explanation: "The $500 threshold counts ONLY damage to property other than the unmanned aircraft. $350 to the car < $500, and your destroyed drone is excluded. Not reportable. The exam loves making you add the drone's value in — don't.",
  traps: ["read-carefully"]
},
{
  id: "reg-09", topic: "regulations", sub: "Alcohol & drugs", acs: "UA.I.B.K13", figure: null,
  q: "No person may act as a crewmember of an sUAS operation within how many hours of consuming alcohol, or with what blood alcohol concentration?",
  choices: ["8 hours; 0.04% BAC or greater.", "12 hours; 0.08% BAC or greater.", "8 hours; 0.08% BAC or greater."],
  answer: 0,
  explanation: "91.17 applies via 107.27: 8 hours 'bottle to throttle' AND under 0.04% BAC (half the typical driving limit) AND not under the influence. Applies to the remote PIC, the person manipulating controls, AND visual observers.",
  traps: []
},
{
  id: "reg-10", topic: "regulations", sub: "Alcohol & drugs", acs: "UA.I.B.K12", figure: null,
  q: "A remote pilot refuses to submit to a blood alcohol test when requested by a law enforcement officer. What action may the FAA take?",
  choices: ["Deny an application for a certificate for up to 1 year, or suspend/revoke an existing certificate.", "Issue a written warning for a first offense.", "Require the pilot to retake the knowledge test within 60 days."],
  answer: 0,
  explanation: "107.59: refusing a lawful alcohol test (or refusing to release results) is grounds for denial of a certificate application for up to 1 year after the refusal, and suspension or revocation of any existing airman certificate. Same consequence as a drug/alcohol conviction (107.57).",
  traps: []
},
{
  id: "reg-11", topic: "regulations", sub: "Right of way", acs: "UA.I.B.K10", figure: null,
  q: "While flying your sUAS at 300 feet AGL, you see a manned helicopter approaching the area at low altitude. You must",
  choices: ["yield the right of way to the helicopter and not pass over, under, or ahead of it unless well clear.", "maintain your altitude and course, since you are below 400 feet AGL where sUAS have priority.", "climb above 400 feet AGL to pass over the helicopter."],
  answer: 0,
  explanation: "107.37: the sUAS must yield right of way to ALL other aircraft, every time, everywhere — there is no altitude where a drone has priority. Yielding means the manned aircraft never has to maneuver to avoid you.",
  traps: []
},
{
  id: "reg-12", topic: "regulations", sub: "Visual line of sight", acs: "UA.I.B.K14", figure: null,
  q: "May a remote PIC satisfy the visual-line-of-sight requirement of part 107 by using the video feed from an onboard camera (first-person view)?",
  choices: ["No — VLOS must be maintained with unaided vision, except for corrective lenses.", "Yes — FPV counts as long as the video link is uninterrupted.", "Yes — but only below 200 feet AGL."],
  answer: 0,
  explanation: "107.31: the aircraft must be visible with vision UNAIDED by any device other than glasses/contacts. FPV goggles, binoculars, and zoom cameras don't count. Either the PIC or a visual observer must maintain actual eyeball VLOS throughout the flight.",
  traps: []
},
{
  id: "reg-13", topic: "regulations", sub: "Visual line of sight", acs: "UA.I.B.K15", figure: null,
  q: "When a visual observer is used, which requirement applies?",
  choices: ["The remote PIC and VO must maintain effective communication at all times.", "The VO must hold at least a student remote pilot certificate.", "The VO must be positioned within 100 feet of the control station."],
  answer: 0,
  explanation: "107.33: with a VO you must have effective communication at all times (radios are fine — they don't have to stand next to you), and the VO must be able to see the aircraft well enough to determine position, altitude, direction, and scan for hazards. VOs need NO certificate. VOs are always optional under part 107.",
  traps: []
},
{
  id: "reg-14", topic: "regulations", sub: "Operations from vehicles", acs: "UA.I.B.K19", figure: null,
  q: "Under what condition may a small unmanned aircraft be operated from a moving car or truck?",
  choices: ["Only over a sparsely populated area, and not while transporting property for compensation.", "Never — part 107 prohibits operations from any moving vehicle.", "Only if a visual observer rides in the vehicle."],
  answer: 0,
  explanation: "107.25: operating from a moving LAND or WATER vehicle is allowed over sparsely populated areas (but not carrying property for hire). Operating from a moving AIRCRAFT is flatly prohibited — that part is not even waiverable.",
  traps: []
},
{
  id: "reg-15", topic: "regulations", sub: "Certificate & inspection", acs: "UA.I.B.K2", figure: null,
  q: "Upon request, a remote pilot must present their remote pilot certificate for inspection to",
  choices: ["the FAA, NTSB, TSA, or any federal, state, or local law enforcement officer.", "the FAA only.", "any person who requests to see it."],
  answer: 0,
  explanation: "107.7: certificate (and identification) must be presented on request to the FAA Administrator, NTSB, TSA, or any federal/state/local law enforcement officer. A curious bystander has no such authority.",
  traps: []
},
{
  id: "reg-16", topic: "regulations", sub: "Change of address", acs: "UA.I.C.K2", figure: null,
  q: "A remote pilot moves to a new home. How long may they continue exercising certificate privileges before notifying the FAA of the address change?",
  choices: ["30 days.", "60 days.", "90 days."],
  answer: 0,
  explanation: "107.77: after moving you may exercise privileges for only 30 DAYS unless you've notified the FAA Airman Certification Branch (online at faa.gov works). Same 30-day rule as manned pilots.",
  traps: []
},
{
  id: "reg-17", topic: "regulations", sub: "Waivers", acs: "UA.I.B.K23", figure: null,
  q: "Which part 107 provision can NOT be waived by a Certificate of Waiver?",
  choices: ["Carriage of hazardous materials (107.36).", "Operation at night (107.29).", "Visual line of sight (107.31)."],
  answer: 0,
  explanation: "107.205 lists what's waivable: moving vehicles, night (pre-2021 rule), VLOS, VO requirements, multiple UAS, right-of-way, over people, in controlled airspace, and speed/altitude/visibility limits. NOT waivable: hazardous materials, max weight, and transporting property for hire from a moving vehicle.",
  traps: []
},
{
  id: "reg-18", topic: "regulations", sub: "Waivers", acs: "UA.I.B.K22", figure: null,
  q: "When will the FAA grant a Certificate of Waiver for a part 107 operation?",
  choices: ["When the applicant demonstrates the proposed operation can be conducted safely under the terms of the waiver.", "Automatically, 90 days after application.", "Only for government and public-safety operators."],
  answer: 0,
  explanation: "107.200: the FAA issues a waiver if it finds the operation can SAFELY be conducted under its terms. You must describe your mitigations (how you'll maintain equivalent safety). Anyone can apply via FAADroneZone.",
  traps: []
},
{
  id: "reg-19", topic: "regulations", sub: "Remote ID", acs: "UA.I.F.K1", figure: null,
  q: "Which of the following is NOT a legal way to satisfy the Remote ID rule when flying under part 107?",
  choices: ["Flying an aircraft with no Remote ID equipment outside of a FRIA while keeping it within visual line of sight.", "Flying an aircraft with built-in standard Remote ID.", "Attaching a Remote ID broadcast module and keeping the aircraft within visual line of sight."],
  answer: 0,
  explanation: "Three ways to comply: (1) Standard Remote ID built in; (2) a broadcast MODULE added on — but then the aircraft must stay within VLOS; (3) fly without RID only inside an FAA-Recognized Identification Area (FRIA). No RID + not in a FRIA = illegal, VLOS or not.",
  traps: []
},
{
  id: "reg-20", topic: "regulations", sub: "Remote ID", acs: "UA.I.F.K1", figure: null,
  q: "What information does standard Remote ID broadcast during flight?",
  choices: ["Aircraft ID, aircraft position/altitude/velocity, control station position and elevation, time mark, and emergency status.", "Only the aircraft's registration number and battery level.", "The remote pilot's name and certificate number."],
  answer: 0,
  explanation: "Standard RID message elements: UA serial number or session ID, UA latitude/longitude/geometric altitude/velocity, control station lat/long/elevation, a time mark, and emergency status. It does NOT broadcast your name — though the public can see the broadcast, only the FAA can link it to the registered owner.",
  traps: []
},
{
  id: "reg-21", topic: "regulations", sub: "Registration", acs: "UA.I.B.K1", figure: null,
  q: "A 0.4-pound (180 g) micro drone will be used for paid roof inspections under part 107. Must it be registered?",
  choices: ["Yes — every aircraft flown under part 107 must be registered regardless of weight.", "No — aircraft 0.55 pounds or less never require registration.", "Only if it flies in controlled airspace."],
  answer: 0,
  explanation: "The under-0.55-lb registration exemption applies ONLY to aircraft flown exclusively under the recreational exception (49 USC 44809). Fly it under part 107 — even once — and it must be registered. Classic trap: 'commercial micro drone'.",
  traps: ["read-carefully"]
},
{
  id: "reg-22", topic: "regulations", sub: "Registration", acs: "UA.I.B.K1", figure: null,
  q: "How long is a small UA registration under part 48 valid, and how must the registration number be displayed?",
  choices: ["3 years; marked legibly on an external surface of the aircraft.", "2 years; carried on a card by the remote pilot.", "5 years; marked inside the battery compartment."],
  answer: 0,
  explanation: "Part 48: registration lasts 3 YEARS ($5 renewal) and the number must be on an EXTERNAL surface, legible, visible on inspection. (External marking became mandatory in 2019 — battery-bay marking is no longer allowed.)",
  traps: []
},
{
  id: "reg-23", topic: "regulations", sub: "Operations over people", acs: "UA.I.E.K3b", figure: null,
  q: "Category 2 operations over people require a small unmanned aircraft that",
  choices: ["will not cause injury more severe than that from transferring 11 foot-pounds of kinetic energy from a rigid object, with no exposed lacerating parts.", "weighs less than 2 pounds and flies below 200 feet AGL.", "carries an FAA airworthiness certificate."],
  answer: 0,
  explanation: "Cat 2: ≤11 ft-lb kinetic energy on impact, no exposed rotating parts that lacerate, no FAA-identified safety defect, and an FAA-accepted Means of Compliance + Declaration of Compliance from the manufacturer. Cat 3 is the same idea at ≤25 ft-lb but with site restrictions. Cat 4 is the airworthiness-certificate route.",
  traps: []
},
{
  id: "reg-24", topic: "regulations", sub: "Operations over people", acs: "UA.I.E.K3c", figure: null,
  q: "Which restriction applies to Category 3 operations over people?",
  choices: ["No sustained flight over open-air assemblies of people.", "Operations are limited to government sites only.", "Flight is permitted only at night."],
  answer: 0,
  explanation: "Category 3 may NOT sustain flight over open-air assemblies. Ops over people are allowed only within/over a closed- or restricted-access site where everyone is on notice, OR without sustained flight over any person not directly participating or not under a covered structure/stationary vehicle.",
  traps: []
},
{
  id: "reg-25", topic: "regulations", sub: "Operations over vehicles", acs: "UA.I.E.K4", figure: null,
  q: "Under part 107, small UA operations over moving vehicles are permitted only if",
  choices: ["the aircraft meets Category 1-4 requirements and either stays over a closed/restricted site with notice, or does not sustain flight over the vehicles.", "the vehicles are traveling under 30 mph.", "operations remain over vehicles for less than 5 minutes at a time."],
  answer: 0,
  explanation: "107.145: over moving vehicles requires a Cat 1-4 eligible aircraft AND either (a) a closed/restricted-access site where occupants are on notice, or (b) only transiting — no SUSTAINED flight (no hovering over, no flying along with traffic).",
  traps: []
},
{
  id: "reg-26", topic: "regulations", sub: "Supervision of controls", acs: "UA.I.B.K18", figure: null,
  q: "May a person without a remote pilot certificate fly a small UA in a part 107 operation?",
  choices: ["Yes — under the direct supervision of a remote PIC who can take immediate control of the aircraft.", "No — every person touching the controls must hold a certificate.", "Yes — as long as they have passed the TRUST recreational test."],
  answer: 0,
  explanation: "107.12: a non-certificated person may manipulate the controls under the DIRECT SUPERVISION of a remote PIC who has the ability to take immediate control. The remote PIC remains responsible for everything. TRUST is recreational-only and irrelevant to part 107.",
  traps: []
},
{
  id: "reg-27", topic: "regulations", sub: "Medical condition", acs: "UA.I.D.K1", figure: null,
  q: "Part 107 requires no aviation medical certificate. However, a person may not participate as remote PIC, person manipulating controls, or visual observer if they",
  choices: ["know or have reason to know they have a physical or mental condition that would interfere with safe operation.", "have any level of color blindness.", "are over 65 years of age without a physician's letter."],
  answer: 0,
  explanation: "107.17: self-disqualification for any physical/mental condition that would interfere with safe operation — temporary ones count too (heavy cold medicine, a broken hand, severe fatigue). There are no age or color-vision rules under part 107.",
  traps: []
},
{
  id: "reg-28", topic: "regulations", sub: "Multiple aircraft / hazmat", acs: "UA.I.B.K11", figure: null,
  q: "Under part 107, a single remote pilot may operate how many unmanned aircraft at the same time?",
  choices: ["One, unless the FAA has issued a waiver of 14 CFR 107.35.", "Up to three if they remain within visual line of sight.", "Any number, if each has standard Remote ID."],
  answer: 0,
  explanation: "107.35: one person may act as remote PIC or manipulate controls for only ONE unmanned aircraft at a time. Swarm/multi-aircraft operations require a 107.35 waiver.",
  traps: []
},
{
  id: "reg-29", topic: "regulations", sub: "Careless operation / dropping objects", acs: "UA.I.B.K8", figure: null,
  q: "Under part 107, dropping an object from a small unmanned aircraft in flight is",
  choices: ["allowed if reasonable precautions are taken to avoid creating a hazard to people or property.", "always prohibited.", "allowed only with a Certificate of Waiver."],
  answer: 0,
  explanation: "107.23: you may not drop an object 'in a manner that creates an undue hazard.' Dropping itself isn't banned — creating a hazard is. (Think agricultural product delivery to a field vs. dropping anything over a crowd.)",
  traps: ["read-carefully"]
},
{
  id: "reg-30", topic: "regulations", sub: "Carrying property", acs: "UA.I.A.K4", figure: null,
  q: "A remote pilot wants to carry packages for compensation using a 40-pound drone with a 10-pound payload. Which statement is correct?",
  choices: ["Allowed under part 107 if flown within a single state, within VLOS, not from a moving vehicle, and total weight stays under 55 pounds.", "Prohibited — carrying property for hire always requires a part 135 certificate.", "Allowed anywhere in the U.S., including between states, under part 107."],
  answer: 0,
  explanation: "Carriage of property for compensation IS allowed under part 107, but: total weight (aircraft + cargo) < 55 lb, INTRAstate only (crossing state lines makes it interstate air transportation → part 135), within VLOS (not waiverable for property carriage), not from a moving vehicle, and no hazmat.",
  traps: []
},
{
  id: "reg-31", topic: "regulations", sub: "Night operations", acs: "UA.I.B.K9", figure: null,
  q: "To operate a small UA at night under part 107 (without a waiver), the remote PIC must",
  choices: ["have completed the current initial knowledge test or updated recurrent training, and equip the aircraft with anti-collision lights visible for 3 SM.", "hold a night-operations waiver issued under 107.29.", "operate only below 200 feet AGL with a visual observer."],
  answer: 0,
  explanation: "Since April 2021, night ops need no waiver: complete the updated training/test (all current tests include night content) AND use anti-collision lighting visible for 3 STATUTE MILES with a flash rate sufficient to avoid collision. Steady lights aren't enough — it must flash/strobe.",
  traps: []
},
{
  id: "reg-32", topic: "regulations", sub: "Preflight requirements", acs: "UA.I.B.K21", figure: null,
  q: "Before each flight, 14 CFR 107.49 requires the remote PIC to",
  choices: ["assess the operating environment — local weather, airspace, flight restrictions, and people/property on the ground — and brief all participants.", "file a UAS operating plan with the nearest FSDO.", "test-hover the aircraft at 10 feet for one minute."],
  answer: 0,
  explanation: "107.49 preflight familiarization: assess weather, airspace and restrictions, locations of people/property, and other ground hazards; brief everyone on roles, emergency procedures, and contingencies; inspect the aircraft and links; check enough power for the intended flight.",
  traps: []
},
{
  id: "reg-33", topic: "regulations", sub: "In-flight emergencies", acs: "UA.I.B.K4", figure: null,
  q: "During an in-flight emergency, the remote PIC may",
  choices: ["deviate from any rule of part 107 to the extent needed to meet that emergency.", "not deviate from part 107 without prior ATC approval.", "deviate from part 107 only if a waiver application is on file."],
  answer: 0,
  explanation: "107.21: in an emergency requiring immediate action, the remote PIC may deviate from ANY part 107 rule to the extent needed. Written report only if the FAA asks for one. Emergency authority always rests with the PIC.",
  traps: []
},
{
  id: "reg-34", topic: "regulations", sub: "Applicability", acs: "UA.I.A.K1", figure: null,
  q: "Which operation is subject to 14 CFR part 107?",
  choices: ["A real-estate agent photographing a listed property with a 2-pound quadcopter.", "A hobbyist flying strictly for fun in accordance with the recreational exception (49 USC 44809).", "A U.S. Air Force training flight with a military UAS."],
  answer: 0,
  explanation: "Part 107 covers civil small UAS operations that aren't purely recreational. Real-estate photos further a business → part 107 (even if unpaid). Recreational flyers under 44809 and public/military aircraft operate under different authority. The test: PURPOSE of the flight, not whether money changed hands.",
  traps: ["read-carefully"]
},
{
  id: "reg-35", topic: "regulations", sub: "Airspace authorization", acs: "UA.I.B.K16", figure: null,
  q: "What is LAANC?",
  choices: ["A system providing near-real-time ATC authorization for sUAS operations in controlled airspace at participating facilities.", "A mandatory registration database for all UAS over 55 pounds.", "The FAA's system for issuing TFRs."],
  answer: 0,
  explanation: "LAANC = Low Altitude Authorization and Notification Capability. Through approved apps (Aloft, AutoPylot, etc.) you request authorization up to the published UAS Facility Map grid altitudes and typically get approval in seconds. Where LAANC isn't available, use FAADroneZone (can take weeks).",
  traps: []
}
]);
