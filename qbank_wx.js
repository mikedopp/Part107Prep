// Original questions — Area III: Weather.
window.QBANK = (window.QBANK || []).concat([
{
  id: "wx-01", topic: "weather", sub: "Density altitude", acs: "UA.III.B.K1a", figure: null,
  q: "Which combination of conditions produces the HIGHEST density altitude (worst aircraft performance)?",
  choices: ["High elevation, high temperature, high humidity.", "Low elevation, low temperature, low humidity.", "High elevation, low temperature, high barometric pressure."],
  answer: 0,
  explanation: "The three H's: HOT, HIGH, HUMID = thin air = high density altitude = less lift, less thrust, weaker motor cooling, shorter battery life. Cold dense air at sea level is where your drone performs best.",
  traps: []
},
{
  id: "wx-02", topic: "weather", sub: "Density altitude", acs: "UA.III.B.K1a", figure: null,
  q: "What is density altitude?",
  choices: ["Pressure altitude corrected for nonstandard temperature.", "The altitude indicated on the altimeter when set to 29.92.", "True altitude corrected for wind."],
  answer: 0,
  explanation: "Density altitude = pressure altitude corrected for nonstandard temperature — the altitude the aircraft 'feels.' On a hot day at a 5,000-ft field, the aircraft performs as if at 8,000 ft. Standard atmosphere reference: 29.92 inHg and 15 °C at sea level.",
  traps: []
},
{
  id: "wx-03", topic: "weather", sub: "Thunderstorms", acs: "UA.III.B.K1e", figure: null,
  q: "What three ingredients are required for a thunderstorm to form?",
  choices: ["Water vapor, an unstable lapse rate, and a lifting force.", "High pressure, cold temperatures, and strong wind.", "Cumulus clouds, lightning, and heavy rain."],
  answer: 0,
  explanation: "Moisture + instability + lift (heating, terrain, or a front). Option C lists RESULTS of a thunderstorm, not causes — a classic distractor pattern: causes vs. effects.",
  traps: []
},
{
  id: "wx-04", topic: "weather", sub: "Thunderstorms", acs: "UA.III.B.K1e", figure: null,
  q: "The mature stage of a thunderstorm begins with",
  choices: ["precipitation beginning to fall from the cloud base.", "the appearance of an anvil top.", "a steady updraft building the cumulus cloud."],
  answer: 0,
  explanation: "Three stages: Cumulus (updrafts only) → MATURE (starts when precipitation reaches the surface; updrafts AND downdrafts side-by-side — the most violent stage) → Dissipating (downdrafts dominate, anvil top). 'Rain starts falling' = mature has begun.",
  traps: []
},
{
  id: "wx-05", topic: "weather", sub: "Thunderstorms & wind shear", acs: "UA.III.B.K1f", figure: null,
  q: "A microburst is",
  choices: ["an intense, localized downdraft from a convective cloud, with downdrafts that can exceed 6,000 feet per minute and severe wind shear at the surface.", "a small dust devil caused by surface heating on clear days.", "a brief increase in headwind that improves aircraft performance."],
  answer: 0,
  explanation: "Microbursts are concentrated downdrafts under convective cells — down at up to 6,000 fpm, spreading outward with violent shear. For a small drone it's unflyable air. They can occur with little rain reaching the ground (dry microburst) and typically last 5-15 minutes.",
  traps: []
},
{
  id: "wx-06", topic: "weather", sub: "Fog", acs: "UA.III.B.K1i", figure: null,
  q: "Which type of fog forms when moist air moves over a colder surface, such as a coastal area?",
  choices: ["Advection fog.", "Radiation fog.", "Upslope fog."],
  answer: 0,
  explanation: "ADVECTION fog = moist air ADVECTED (moved horizontally, needs wind) over a colder surface — classic sea fog rolling ashore; can persist with wind. RADIATION fog = calm clear nights, ground radiates heat away (valley fog, burns off in morning). UPSLOPE = moist air forced up terrain.",
  traps: []
},
{
  id: "wx-07", topic: "weather", sub: "Fog", acs: "UA.III.B.K1i", figure: null,
  q: "Clear sky, calm winds, and high humidity overnight will most likely produce",
  choices: ["radiation (ground) fog by early morning.", "advection fog after midnight.", "steam fog by early morning."],
  answer: 0,
  explanation: "Clear + calm + moist = radiation fog: the ground radiates heat away overnight, chilling the air to its dew point. Forms in low areas and valleys near dawn, burns off as the sun heats the surface. Advection fog needs WIND moving air over a cold surface; steam fog needs cold air over warm water.",
  traps: []
},
{
  id: "wx-08", topic: "weather", sub: "Cloud base estimation", acs: "UA.III.B.K1h", figure: null,
  q: "The surface temperature is 24 °C and the dew point is 16 °C. What is the approximate base of the cumulus clouds?",
  choices: ["3,200 feet AGL.", "1,800 feet AGL.", "8,000 feet AGL."],
  answer: 0,
  explanation: "Cloud base ≈ (temperature − dew point) ÷ 2.5 °C × 1,000 ft. Spread = 8 °C; 8 ÷ 2.5 = 3.2 → about 3,200 ft AGL. (Using Fahrenheit, divide the spread by 4.4 instead.) The result is AGL, not MSL.",
  traps: ["units"]
},
{
  id: "wx-09", topic: "weather", sub: "Dew point & frost", acs: "UA.III.B.K1h", figure: null,
  q: "The dew point is the temperature at which",
  choices: ["air becomes saturated and can hold no more water vapor.", "frost always forms on surfaces.", "fog is guaranteed to form."],
  answer: 0,
  explanation: "Dew point = saturation temperature (100% relative humidity). Small temperature/dew-point spreads (within ~2 °C and converging) warn of imminent fog or low clouds. Frost forms when the surface cools BELOW the dew point AND the dew point is below freezing.",
  traps: []
},
{
  id: "wx-10", topic: "weather", sub: "METAR reading", acs: "UA.III.A.K2", figure: null,
  q: "METAR KLNK 121854Z 18010G17KT 4SM HZ OVC020 28/22 A2992 — what are the reported wind and ceiling?",
  choices: ["Wind from 180° true at 10 knots, gusting 17 knots; ceiling 2,000 feet AGL overcast.", "Wind from 180° magnetic at 10 mph; ceiling 20,000 feet overcast.", "Wind from 018° at 10 knots; ceiling 200 feet overcast."],
  answer: 0,
  explanation: "18010G17KT = from 180° TRUE at 10 kt, Gusts 17. OVC020 = overcast at 020 hundreds = 2,000 ft AGL. Remaining: 4SM haze, 28 °C/22 °C, altimeter 29.92. Cloud heights: hundreds of feet AGL. Written winds: true north, knots.",
  traps: ["units", "true-magnetic", "metar"]
},
{
  id: "wx-11", topic: "weather", sub: "TAF reading", acs: "UA.III.A.K3", figure: null,
  q: "A Terminal Aerodrome Forecast (TAF) describes expected weather",
  choices: ["within 5 statute miles of an airport, typically for a 24- or 30-hour period.", "for an entire state, updated hourly.", "along a flight route between two airports."],
  answer: 0,
  explanation: "TAF = point forecast for the area within 5 SM of the airport, issued 4×/day, valid 24 or 30 hours. Date/time groups like 0512/0618 mean 'from the 5th at 12Z through the 6th at 18Z.' For a drone site away from any airport, interpolate between nearby TAFs and use graphical forecasts.",
  traps: []
},
{
  id: "wx-12", topic: "weather", sub: "Stability", acs: "UA.III.B.K1c", figure: null,
  q: "What measurement can be used to determine the stability of the atmosphere?",
  choices: ["The actual lapse rate — how temperature decreases with altitude.", "Surface barometric pressure alone.", "Wind velocity at the surface."],
  answer: 0,
  explanation: "Stability is determined by the ACTUAL LAPSE RATE (temperature change with height) versus the adiabatic rate: cools quickly with altitude → unstable (rising air keeps rising); cools slowly or warms (inversion) → stable. Moisture makes air LESS stable; cooling from below stabilizes... warming from below destabilizes.",
  traps: ["stable-unstable"]
},
{
  id: "wx-13", topic: "weather", sub: "Wind shear", acs: "UA.III.B.K1f", figure: null,
  q: "Where can low-level wind shear be expected?",
  choices: ["Near thunderstorms, frontal passages, and low-level temperature inversions — at any altitude and in any direction.", "Only above 2,000 feet AGL in mountainous terrain.", "Only during daytime heating over flat terrain."],
  answer: 0,
  explanation: "Wind shear — an abrupt change in wind speed and/or direction — happens at ALL altitudes and in all directions: thunderstorm gust fronts (miles ahead of the storm), fronts, inversions (calm below, howling above), and terrain/building rotors. For a light drone this is the most operationally dangerous weather phenomenon.",
  traps: []
},
{
  id: "wx-14", topic: "weather", sub: "Icing", acs: "UA.III.B.K1g", figure: null,
  q: "Structural icing on a small UA requires which two conditions?",
  choices: ["Visible moisture and surface/air temperature at or below freezing.", "High winds and low humidity.", "Clear air and temperatures below -20 °C."],
  answer: 0,
  explanation: "Icing needs VISIBLE MOISTURE (clouds, rain, drizzle, fog) + temperatures at/below freezing where the moisture strikes the airframe. Ice adds weight, distorts props/airfoils and can quickly bring a small UA down — don't fly in freezing precipitation or cloud.",
  traps: []
},
{
  id: "wx-15", topic: "weather", sub: "Weather sources", acs: "UA.III.A.K1", figure: null,
  q: "Which is the primary FAA-sanctioned source for a preflight aviation weather briefing?",
  choices: ["Flight service via 1800WXBrief.com or aviationweather.gov.", "A television station's evening forecast.", "A smartphone's built-in weather widget."],
  answer: 0,
  explanation: "Official sources: Leidos Flight Service (1800WXBrief.com, or 1-800-WX-BRIEF by phone) and NWS Aviation Weather Center (aviationweather.gov) for METARs, TAFs, and graphical products. Consumer apps are fine for awareness but aren't aviation-grade briefings.",
  traps: []
},
{
  id: "wx-16", topic: "weather", sub: "Wind effects", acs: "UA.III.B.K2", figure: null,
  q: "You are flying near a line of tall buildings on a windy day. What should you expect on the downwind side of the buildings?",
  choices: ["Turbulent eddies and downdrafts (mechanical turbulence) that can exceed your aircraft's climb capability.", "Perfectly smooth air shielded from the wind.", "A steady updraft ideal for extending battery life."],
  answer: 0,
  explanation: "Obstructions shed rotors and eddies downwind — mechanical turbulence with sharp downdrafts that a small multirotor may not out-climb. Rule of thumb: turbulence extends downwind 10-20× the obstacle height. Approach structures from upwind and keep margin.",
  traps: []
},
{
  id: "wx-17", topic: "weather", sub: "Stability", acs: "UA.III.B.K1c", figure: null,
  q: "What type of clouds, visibility, and precipitation are associated with UNSTABLE air?",
  choices: ["Cumulus clouds, good visibility, showery precipitation.", "Stratus clouds, poor visibility, steady precipitation.", "Fog, smooth air, drizzle."],
  answer: 0,
  explanation: "Unstable = vertical development: CUMULUS clouds, turbulence, SHOWERS, and GOOD visibility (rising air lifts the haze out). The other two options both describe stable air. This pairing appears on nearly every exam — in both directions.",
  traps: ["stable-unstable"]
},
{
  id: "wx-18", topic: "weather", sub: "METAR reading", acs: "UA.III.A.K2", figure: null,
  q: "In the METAR remark 'RAB35', what does the group mean?",
  choices: ["Rain began at 35 minutes past the hour.", "Rain bands within 35 miles.", "Runway braking action 35%."],
  answer: 0,
  explanation: "Remarks-section decode: RAB35 = RAin Began :35 after the hour; RAE would be rain ended. Other remark staples: AO2 = automated station with precipitation sensor; SLP = sea-level pressure; PK WND = peak wind.",
  traps: ["metar"]
}
]);
