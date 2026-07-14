// Original questions — Area IV: Loading & Performance.
window.QBANK = (window.QBANK || []).concat([
{
  id: "load-01", topic: "loading", sub: "Load factor", acs: "UA.IV.A.K1a", figure: null,
  q: "In a level 60° banked turn, the load factor on an unmanned airplane is",
  choices: ["2.0 — the structure supports twice the aircraft's weight.", "1.5 — half again the aircraft's weight.", "4.0 — four times the aircraft's weight."],
  answer: 0,
  explanation: "Anchor values worth memorizing: 30° ≈ 1.15 G, 45° ≈ 1.41 G, 60° = exactly 2.0 G, 75° ≈ 3.9 G. Load factor climbs steeply past 45°. A 10-lb aircraft in a 60° level turn is structurally carrying 20 lb.",
  traps: []
},
{
  id: "load-02", topic: "loading", sub: "Stalls", acs: "UA.IV.A.K1b", figure: null,
  q: "How does load factor affect the stall speed of a fixed-wing unmanned aircraft?",
  choices: ["Stall speed increases as load factor increases — the aircraft can stall at a higher airspeed in a steep turn.", "Stall speed decreases as load factor increases.", "Load factor has no effect on stall speed."],
  answer: 0,
  explanation: "Stall speed rises with the square root of load factor: at 2 G (60° bank) stall speed is ~41% higher. That's why an aircraft that flies fine straight-and-level can stall 'unexpectedly' in a steep low turn — same critical angle of attack, reached at higher speed.",
  traps: []
},
{
  id: "load-03", topic: "loading", sub: "Center of gravity", acs: "UA.IV.A.K2", figure: null,
  q: "Loading a small UA so that its center of gravity is aft of the rearward limit will most likely cause",
  choices: ["instability and difficulty recovering from a stall.", "a nose-heavy condition requiring extra power.", "improved stability and longer flight time."],
  answer: 0,
  explanation: "AFT CG = UNSTABLE: the aircraft resists returning to level flight, and stalls become flat and unrecoverable. FORWARD CG = stable but nose-heavy (more control effort, higher stall speed). Out-of-limits either way is dangerous — follow the manufacturer's loading limits.",
  traps: []
},
{
  id: "load-04", topic: "loading", sub: "Weight effects", acs: "UA.IV.A.K1", figure: null,
  q: "Operating a small UA above its maximum gross weight will result in",
  choices: ["reduced climb performance, shorter endurance, and degraded maneuverability.", "no measurable change if winds are calm.", "better stability due to increased inertia."],
  answer: 0,
  explanation: "Overweight = motors work harder for the same lift: slower climb, faster battery drain, sluggish response, lower gust margins, and more heat. On multirotors it also erodes the thrust margin used for stabilization — the flight controller literally runs out of authority.",
  traps: []
},
{
  id: "load-05", topic: "loading", sub: "Battery safety", acs: "UA.V.F.K1", figure: null,
  q: "Before flight you notice one of your LiPo battery packs is swollen (puffy). You should",
  choices: ["remove it from service — a swollen pack indicates internal damage and fire risk.", "use it only for short flights below 100 feet.", "squeeze it back to shape and charge it slowly."],
  answer: 0,
  explanation: "Swelling means gas from internal chemical breakdown — the pack can vent flame during charge OR discharge. Retire it (discharge safely, recycle). Never puncture, squeeze, or 'just use it up.' LiPo fires are self-oxidizing and very hard to extinguish.",
  traps: []
},
{
  id: "load-06", topic: "loading", sub: "Battery safety", acs: "UA.V.F.K1", figure: null,
  q: "What is the proper way to charge lithium polymer flight batteries?",
  choices: ["With the manufacturer-specified charger, attended, in a fire-resistant container away from flammables.", "Overnight, unattended, at the highest charge rate the charger supports.", "With any charger that fits the connector, as long as voltage matches."],
  answer: 0,
  explanation: "Use the correct charger/profile (LiPo chemistry, correct cell count), NEVER charge unattended, and charge in/on something fire-resistant (LiPo bag, ammo can). Most drone-related fires happen during charging. Also: transport at storage charge, and follow FAA/airline rules for carrying batteries.",
  traps: []
},
{
  id: "load-07", topic: "loading", sub: "Performance & environment", acs: "UA.IV.A.K1", figure: null,
  q: "How does high humidity affect the performance of a small unmanned aircraft?",
  choices: ["It decreases performance — water vapor is less dense than dry air, reducing lift and thrust.", "It increases performance — moist air is heavier and provides more lift.", "Humidity affects only internal-combustion aircraft, not electric ones."],
  answer: 0,
  explanation: "Counterintuitive but true: water vapor molecules (H₂O, ~18 g/mol) are LIGHTER than the N₂/O₂ they displace (~28-32 g/mol), so humid air is thinner. Less dense air = less lift, less prop thrust. Humid is one of the three H's of high density altitude.",
  traps: []
},
{
  id: "load-08", topic: "loading", sub: "Performance & payload", acs: "UA.IV.A.K2", figure: null,
  q: "Mounting a heavier camera on your multirotor without changing anything else will",
  choices: ["shift the CG, reduce available thrust margin, and shorten flight time.", "only shorten flight time; CG and handling are unaffected on multirotors.", "have no effect if the aircraft can still take off."],
  answer: 0,
  explanation: "Any payload change affects BOTH weight and balance. A nose-mounted heavier camera shifts CG forward — the flight controller compensates by working some motors harder, costing efficiency, agility, and gust margin. Verify total weight and CG against the manual after every payload change, then test-hover.",
  traps: []
},
{
  id: "load-09", topic: "loading", sub: "Load factor", acs: "UA.IV.A.K1a", figure: null,
  q: "Which situation increases the load factor on a small unmanned aircraft?",
  choices: ["Turbulence, steep turns, and abrupt control inputs.", "Reducing airspeed in straight-and-level flight.", "Flying in colder, denser air."],
  answer: 0,
  explanation: "Load factor rises whenever lift must exceed weight: banked turns, gust/turbulence encounters, sharp pull-ups or aggressive stick inputs. Cold dense air improves performance without raising load factor; slowing down in level flight doesn't change it (still 1 G).",
  traps: []
},
{
  id: "load-10", topic: "loading", sub: "Angle of attack", acs: "UA.IV.A.K1b", figure: null,
  q: "The angle of attack is defined as the angle between",
  choices: ["the wing chord line and the relative wind.", "the wing chord line and the horizon.", "the aircraft's longitudinal axis and the ground track."],
  answer: 0,
  explanation: "AOA = chord line vs RELATIVE WIND (not the horizon — that's pitch attitude). A wing always stalls at the same CRITICAL angle of attack regardless of airspeed, weight, or attitude. An aircraft can stall nose-low and fast if the AOA is exceeded.",
  traps: []
},
{
  id: "load-11", topic: "loading", sub: "Battery & environment", acs: "UA.IV.A.K1", figure: null,
  q: "How does cold weather affect lithium-battery-powered UA operations?",
  choices: ["Battery capacity and voltage drop, shortening flight time and risking sudden power loss — warm batteries before flight and expect reduced endurance.", "Cold improves battery chemistry, extending flight time.", "Cold affects the airframe but not the batteries."],
  answer: 0,
  explanation: "Cold slows the chemistry: voltage sags under load and usable capacity drops sharply below ~10 °C, sometimes triggering low-voltage failsafes mid-flight with charge 'remaining.' Keep packs warm until launch, hover to warm them up, land with bigger reserves. (The cold, dense AIR actually helps lift — the battery is the weak link.)",
  traps: []
}
]);
