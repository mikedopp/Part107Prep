/* Part 107 Prep v1.5 — six plain-English scenario briefings.
   METARs are fixed training examples, never live weather. Chart images are current
   FAA VFR raster chart crops; always re-check the live airspace, NOTAMs, TFRs,
   land rules, and weather before an actual operation. */
"use strict";

const P107_SOURCE = { label: "FAA Part 107", url: "https://www.faa.gov/uas/commercial_operators" };
const LAANC_SOURCE = { label: "FAA LAANC", url: "https://www.faa.gov/uas/getting_started/laanc" };
const B4UFLY_SOURCE = { label: "FAA B4UFLY", url: "https://www.faa.gov/uas/getting_started/b4ufly" };

function chart(fig, name, hotspots) {
  return { charts: [{ fig, name, hotspots }] };
}

function hot(x, y, w, h, title, what, means, doNext) {
  return { x, y, w, h, title, what, means, do: doNext };
}

const V15 = [
  {
    id: "layton", name: "Layton, UT", v15: true,
    explore: chart("sec_layton", "Layton and Hill AFB", [
      hot(51,58,12,8,"Launch area — Layton","The proposed launch point on the Wasatch Front bench.","It sits in a narrow corridor between Hill AFB, Ogden traffic, the lake, and steep terrain.","Pin the exact site in a live FAA-approved airspace app. A street address is not precise enough."),
      hot(57,40,19,15,"KHIF airport data","Hill Air Force Base and its airport data block.","Active military traffic can be fast, low, and less forgiving than the training question makes it sound.","Yield to every crewed aircraft. Build an immediate land plan before takeoff."),
      hot(49,32,7,10,"Dashed blue boundary","The edge of Hill AFB Class D airspace.","Inside the active Class D, a Part 107 flight needs FAA airspace authorization.","Check the exact LAANC grid and tower hours. No authorization means no launch."),
      hot(53,47,6,11,"120/78 fraction","A Class B shelf with a 12,000-foot MSL top and 7,800-foot MSL floor.","Those numbers are hundreds of feet MSL, not a suggested drone altitude.","For a low drone flight, deal with the surface airspace first; do not confuse the shelf floor with your 400-foot AGL limit."),
      hot(77,24,22,26,"Wasatch terrain","High terrain and peaks east of Layton.","Ridges create rotor, downslope gusts, and rapidly changing AGL beneath the aircraft.","Stay on the valley side, set a conservative wind limit, and keep a real escape route."),
      hot(14,34,21,10,"Check effective hours","A chart note sending you to NOTAMs and the Chart Supplement for Class D hours.","Part-time airspace can change class when the tower closes; the chart alone does not tell you whether it is active now.","Check current hours and NOTAMs. Never guess from the time of day.")
    ]),
    brief: {
      mission: "Roof inspection near central Layton",
      intro: "Looks routine from the parking lot. The chart says otherwise: active military airspace, layered shelves, and terrain that can turn a mild forecast into ugly local wind.",
      checks: [
        { label: "Airspace", text: "Hill AFB Class D is the first gate. Verify the exact grid and obtain authorization when required." },
        { label: "Land", text: "Get the property owner's permission and choose a launch point clear of people and traffic." },
        { label: "Traffic", text: "Military aircraft get the right of way. Your plan needs an immediate land area." },
        { label: "Terrain", text: "The Wasatch can produce gusts and rotor that the airport report understates." }
      ],
      metar: {
        station: "KHIF", raw: "KHIF 151856Z 32017G27KT 10SM FEW080 SCT150 07/M06 A3005",
        note: "Fixed exam-style example. It teaches decoding; it is not current weather.",
        groups: [
          { code: "32017G27KT", decode: "Wind from 320° true at 17 kt, gusting 27", impact: "A gust spread of 10 kt near terrain is a serious control and battery-margin problem." },
          { code: "10SM", decode: "10 statute miles visibility", impact: "Above the 3 SM Part 107 minimum, but visibility does not solve airspace." },
          { code: "FEW080 SCT150", decode: "Few 8,000 ft; scattered 15,000 ft AGL", impact: "No ceiling. Cloud clearance is not the limiting factor." },
          { code: "07/M06", decode: "7°C; dew point −6°C", impact: "Cold batteries and a wide spread: warm packs and expect less endurance." }
        ]
      },
      verdict: { level: "modify", title: "MODIFY — authorization and wind decide it", reason: "Do not treat Layton as an automatic launch. The exact point, active airspace, and gusts control the call.", actions: ["Confirm the exact LAANC grid and altitude.","Do not fly without required authorization.","Use a lower site wind limit than the aircraft marketing number."] },
      questions: [
        { prompt: "The chart shows 120/78 above Layton. What does 78 mean?", choices: ["The drone may fly to 7,800 feet AGL","The Class B shelf begins at 7,800 feet MSL","The Class D ceiling is 780 feet AGL"], answer: 1, explanation: "Class B fractions are in hundreds of feet MSL: top over floor.", trap: "MSL versus AGL" },
        { prompt: "Visibility is 10 SM. What is the next decision?", choices: ["Launch; weather is legal","Check airspace authorization and gust risk","Call Hill tower for a verbal clearance"], answer: 1, explanation: "Good visibility clears one weather gate. It does not grant airspace access or make gusts safe.", trap: "One good number does not approve the whole mission" }
      ],
      sources: [P107_SOURCE, LAANC_SOURCE, B4UFLY_SOURCE]
    }
  },
  {
    id: "slc", name: "Salt Lake City, UT", v15: true,
    explore: chart("sec_slc", "Downtown Salt Lake City and KSLC", [
      hot(50,27,17,9,"Downtown launch area","The mission area east of Salt Lake City International.","Buildings, roads, helipads, and controlled airspace stack several separate problems into one site.","Mark the launch, route, emergency landing area, and every nonparticipant exposure before deciding."),
      hot(44,11,27,14,"KSLC airport data","The primary Class B airport and its airport data block.","Airliner traffic is why the valley has layered Class B sectors.","Use LAANC/DroneZone for authorization. Do not call the tower for an improvised clearance."),
      hot(33,42,8,10,"120/SFC","Class B from the surface to 12,000 feet MSL.","SFC means there is no uncontrolled sliver at drone height.","Authorization is required before launch. Check the exact UAS Facility Map cell."),
      hot(46,35,10,9,"Stadium symbol","A charted stadium near the university.","Certain major sporting events can activate a temporary flight restriction around a stadium.","Check current TFRs and the event schedule; the printed flag is a warning, not a live status light."),
      hot(41,43,9,9,"4656 (408) obstacle","An obstacle whose top is 4,656 feet MSL and height is 408 feet AGL.","The number in parentheses is AGL. The larger number is MSL.","Plan clearance from the obstacle and guy wires; do not confuse its height with general flight permission."),
      hot(76,16,14,11,"Maximum elevation figure","The highest terrain or obstacle figure for that chart quadrangle.","It is a broad situational-awareness value, not terrain clearance for a drone route.","Use it to recognize the terrain wall, then assess the actual route and AGL locally.")
    ]),
    brief: {
      mission: "Downtown construction progress photos",
      intro: "A clear skyline can still be a no-go. Downtown adds Class B, buildings, roads, helipads, people, and weather that pools against the Wasatch.",
      checks: [
        { label: "Airspace", text: "Identify whether the exact site is in surface Class B or under a shelf, then check the live LAANC altitude." },
        { label: "People", text: "Plan around nonparticipants; a sidewalk is not an exclusion zone." },
        { label: "Vehicles", text: "Do not plan sustained flight over moving traffic." },
        { label: "Helicopters", text: "Hospital and public-safety traffic may be low and fast between buildings." }
      ],
      metar: {
        station: "KSLC", raw: "KSLC 151853Z 15005KT 3SM HZ BR BKN004 OVC010 M01/M02 A3042",
        note: "Fixed winter-inversion example. It is intentionally ugly and not live weather.",
        groups: [
          { code: "15005KT", decode: "Wind from 150° true at 5 kt", impact: "The wind is easy; do not stop reading." },
          { code: "3SM HZ BR", decode: "3 SM in haze and mist", impact: "Exactly at the minimum flight visibility. Any degradation grounds the flight." },
          { code: "BKN004", decode: "Broken layer at 400 ft AGL", impact: "Broken is a ceiling. Staying 500 ft below it leaves no legal operating height." },
          { code: "M01/M02", decode: "−1°C; dew point −2°C", impact: "Near saturation below freezing: fog/low cloud and icing concerns." }
        ]
      },
      verdict: { level: "nogo", title: "NO-GO — the ceiling ends the discussion", reason: "A broken layer at 400 feet cannot support the required 500-foot below-cloud clearance. Airspace permission would not fix the weather.", actions: ["Wait for the ceiling and visibility to improve.","Re-check TFRs and LAANC when rescheduling.","Keep people, roads, and helipads in the new plan."] },
      questions: [
        { prompt: "Which METAR group makes this flight impossible first?", choices: ["15005KT","3SM","BKN004"], answer: 2, explanation: "BKN004 is a ceiling at 400 feet AGL. Required cloud clearance eliminates usable altitude.", trap: "The light wind is bait" },
        { prompt: "What does 4656 (408) by an obstacle mean?", choices: ["4,656 AGL and 408 MSL","4,656 MSL and 408 AGL","The obstacle is authorized to 408 feet"], answer: 1, explanation: "Sectionals show obstacle top MSL first and AGL in parentheses.", trap: "MSL versus AGL" }
      ],
      sources: [P107_SOURCE, LAANC_SOURCE, B4UFLY_SOURCE, { label: "FAA TFRs", url: "https://tfr.faa.gov/" }]
    }
  },
  {
    id: "bear-lake", name: "Bear Lake, UT", v15: true,
    explore: chart("sec_bear_lake_v1_5", "Garden City and Bear Lake", [
      hot(44.5,64.5,8,9,"Garden City launch area","A proposed shoreline mission near Garden City.","The exact parcel may be state-park land, municipal land, or private property; those permissions are separate from FAA airspace.","Identify the land manager before unpacking the aircraft."),
      hot(31,20,18,8.5,"Bear Lake County Airport (1U7)","A non-towered public airport and its magenta data block.","The block gives airport elevation, runway length, lighting, and CTAF—not permission to fly near it.","Account for local traffic and check the exact mission point in the current airspace app."),
      hot(32,10.5,24,19,"Magenta Class E vignette","The fuzzy magenta edge marks where Class E begins at 700 feet AGL.","It is not a surface controlled-airspace boundary, and it is not a LAANC grid value.","Stay inside Part 107 altitude limits and still check live restrictions before flight."),
      hot(64,41,9,11,"Maximum elevation figure 103","The MEF says the highest charted terrain or obstacle in that quadrangle is about 10,300 feet MSL.","It is a broad warning about elevation—not a drone clearance altitude.","Expect reduced performance at high elevation and assess the actual route in AGL."),
      hot(25,63,21,9,"Mount Naomi Wilderness Area","A charted wilderness area west of the lake.","The label is a land-management and risk cue, not automatic proof of a Part 107 airspace prohibition.","Identify the land manager and applicable rules before selecting a launch site.")
    ]),
    brief: {
      mission: "Shoreline real-estate video near Garden City",
      intro: "The air can look simple while the ground rule is not. Bear Lake teaches the split the exam loves: FAA airspace and permission to use the launch site are two different gates.",
      checks: [
        { label: "Land", text: "If the launch point is Utah State Parks property, obtain the required park-manager permission. Private land needs owner permission." },
        { label: "Airspace", text: "Confirm the exact point in B4UFLY and check NOTAMs/TFRs; rural-looking does not mean unchecked." },
        { label: "Weather", text: "KLGU is regional context. Lake and ridge wind must be checked at the site." },
        { label: "Recovery", text: "Keep a land-side route and enough battery to return against the wind." }
      ],
      metar: {
        station: "KLGU", raw: "KLGU 151851Z 21012G21KT 10SM FEW090 29/08 A3008",
        note: "Fixed training report from a nearby station. Conditions at the lake can be materially different.",
        groups: [
          { code: "21012G21KT", decode: "Wind 210° true at 12 kt, gusting 21", impact: "A 9-kt gust spread plus terrain and water calls for an on-site limit." },
          { code: "10SM", decode: "10 statute miles visibility", impact: "Good visibility supports VLOS but says nothing about land permission." },
          { code: "FEW090", decode: "Few clouds at 9,000 ft AGL", impact: "No ceiling. Cloud clearance is easy in this example." },
          { code: "29/08", decode: "29°C; dew point 8°C", impact: "Warm and dry; high elevation reduces performance and battery margin." }
        ]
      },
      verdict: { level: "modify", title: "MODIFY — move or get written permission", reason: "The mission can be workable from an authorized private site with acceptable on-site wind. A convenient state-park beach is not an automatic launch pad.", actions: ["Confirm who manages the exact launch parcel.","Obtain written park permission if required or move to authorized private land.","Use on-site wind, not KLGU alone."] },
      questions: [
        { prompt: "B4UFLY shows no controlled-airspace authorization at the point. Can you launch from the state-park beach?", choices: ["Yes; FAA airspace is the only gate","Only after satisfying the land manager's rules","Yes, if the drone stays under 400 feet"], answer: 1, explanation: "Airspace access and launch-site permission are independent requirements.", trap: "Legal air does not equal legal ground" },
        { prompt: "Why is KLGU not enough to approve the weather?", choices: ["METAR wind is magnetic","It is away from the lake and terrain can change local conditions","METARs cannot report gusts"], answer: 1, explanation: "A nearby station gives regional context, not the wind at your launch point.", trap: "Nearest report versus actual site" }
      ],
      sources: [P107_SOURCE, B4UFLY_SOURCE, { label: "Bear Lake State Park", url: "https://stateparks.utah.gov/parks/bear-lake/discover/" }, { label: "Utah State Parks rule filing", url: "https://rules.utah.gov/publicat/updt_zip/2016/uac16_08.pdf" }]
    }
  },
  {
    id: "yellowstone", name: "Yellowstone, WY", v15: true,
    explore: chart("sec_yellowstone_v1_5", "Old Faithful and Yellowstone", [
      hot(62.5,13.5,11.5,8.5,"Old Faithful","The proposed launch area inside Yellowstone National Park.","The National Park Service prohibits launching, landing, or operating an unmanned aircraft from or on lands and waters administered by the park.","Do not launch. Move the project outside park-managed land and reassess from scratch."),
      hot(0,85,27,11.5,"Stanford Field (U12) context","A readable airport block inside this crop; it is not the nearest airport to Old Faithful.","West Yellowstone (KWYS), used for the METAR, is off the north edge of this sectional crop.","Recognize missing briefing data and check the adjacent chart/weather source instead of pretending the crop is complete."),
      hot(19.5,0,25,44,"Magenta Class E vignette","The fuzzy magenta boundary west of the park marks Class E beginning at 700 feet AGL.","It is an airspace transition cue, not the Yellowstone park boundary.","Keep the FAA airspace check separate from the NPS land-use rule."),
      hot(67,37,10,11,"Maximum elevation figure 107","The MEF warns that terrain or obstacles in this quadrangle reach about 10,700 feet MSL.","That broad MSL figure is not the height of the ground beneath your drone.","Use local terrain and AGL for the route; expect high-elevation performance loss."),
      hot(89,23,11,12,"Yellowstone National Park","The chart labels the park, but the sectional is not a parcel-level land-ownership map.","FAA airspace and NPS land rules come from different authorities.","Use the official park map and land-manager rules to verify the launch site.")
    ]),
    brief: {
      mission: "Sunrise video of Old Faithful",
      intro: "The weather is almost beside the point. This is the cleanest lesson in the set: a beautiful shot and flyable air do not defeat the land manager's rule.",
      checks: [
        { label: "Land rule", text: "Yellowstone prohibits launching, landing, or operating a drone from park-managed lands and waters." },
        { label: "Airspace", text: "A sectional does not show whether the ground below is an approved launch site." },
        { label: "Wildlife and people", text: "Thermal areas, wildlife, and dense visitors leave almost no forgiving failure space." },
        { label: "Alternative", text: "Any outside-park site is a new mission requiring its own land, airspace, weather, and hazard checks." }
      ],
      metar: {
        station: "KWYS", raw: "KWYS 151755Z 21008G18KT 6SM -SN BKN012 M04/M07 A2990",
        note: "Fixed training example. Even perfect live weather would not authorize a park launch.",
        groups: [
          { code: "21008G18KT", decode: "Wind 210° true at 8 kt, gusting 18", impact: "A 10-kt spread in mountain terrain is a warning." },
          { code: "6SM -SN", decode: "6 SM in light snow", impact: "Above 3 SM, but precipitation and contrast degrade VLOS." },
          { code: "BKN012", decode: "Broken ceiling at 1,200 ft AGL", impact: "Cloud clearance may leave usable low altitude, but terrain can rise into the margin." },
          { code: "M04/M07", decode: "−4°C; dew point −7°C", impact: "Cold battery performance and possible icing contamination." }
        ]
      },
      verdict: { level: "nogo", title: "NO-GO — Old Faithful launch", reason: "The National Park Service rule stops this mission from park land. A good METAR, Part 107 certificate, or airspace app does not change that.", actions: ["Do not launch or operate from Yellowstone lands or waters.","If the assignment changes, find a lawful site outside the park.","Rebuild the entire preflight for that new site."] },
      questions: [
        { prompt: "The airspace app shows no authorization required and the METAR is VFR. What is the correct call at Old Faithful?", choices: ["Go below 400 feet","No-go from park-managed land","Ask visitors to stand back and launch"], answer: 1, explanation: "The NPS land-use prohibition is an independent stop.", trap: "Airspace approval is not launch-site permission" },
        { prompt: "What does BKN012 mean?", choices: ["Broken clouds at 1,200 feet AGL","Broken clouds at 12,000 feet MSL","Visibility 1.2 statute miles"], answer: 0, explanation: "METAR cloud heights are hundreds of feet AGL.", trap: "Hundreds and AGL" }
      ],
      sources: [P107_SOURCE, B4UFLY_SOURCE, { label: "Yellowstone filming and drone policy", url: "https://home.nps.gov/yell/planyourvisit/filmpermit.htm" }, { label: "Yellowstone laws and policies", url: "https://home.nps.gov/yell/learn/management/lawsandpolicies.htm" }]
    }
  },
  {
    id: "charlotte", name: "Charlotte, NC", v15: true,
    explore: chart("sec_charlotte_v1_5", "Uptown Charlotte and KCLT", [
      hot(46.5,43,8.5,11,"Uptown mission area","A proposed high-rise inspection in central Charlotte.","The site is close to a major Class B airport and packed with obstacles, people, roads, and helicopter activity.","Use the exact coordinates in LAANC and design a controlled site, not a sidewalk launch."),
      hot(29.5,49,19,13,"KCLT airport data","Charlotte Douglas International, the primary Class B airport.","Arrival and departure traffic drive the controlled-airspace structure over Uptown.","Obtain any required authorization before flight and yield immediately to crewed aircraft."),
      hot(35,28,9.5,13,"100/SFC Class B sector","This Class B sector extends from the surface to 10,000 feet MSL.","SFC means controlled airspace begins at the ground—not at 100 feet.","Use the precise UAS Facility Map cell and obtain authorization before launch."),
      hot(57,37.5,8.5,11,"Obstacle 1999 (1220)","An obstacle topping at 1,999 feet MSL and standing 1,220 feet AGL.","Obstacle figures describe the structure, not a drone altitude limit or authorization.","Plan actual clearance, VLOS, and a safe emergency path around the urban obstacle field."),
      hot(49,43.5,9,9,"Stadium symbol","The charted stadium flag is a prompt to check event-driven restrictions.","The printed chart does not tell you whether a stadium TFR is active right now.","Check current TFRs and the event schedule immediately before flight.")
    ]),
    brief: {
      mission: "Uptown façade inspection",
      intro: "Charlotte is the classic professional-job trap: the client owns the building, but not the airspace, sidewalks, traffic, or the people walking through your failure zone.",
      checks: [
        { label: "Airspace", text: "Uptown is in the KCLT terminal environment. Use the exact coordinates and obtain required FAA authorization." },
        { label: "Site control", text: "A rooftop or controlled construction site is workable; a public sidewalk with uncontrolled foot traffic is not the same mission." },
        { label: "People and vehicles", text: "Category eligibility and the operating conditions matter. Do not assume a Part 107 card permits routine flight over everyone." },
        { label: "Urban wind", text: "Building edges can amplify or reverse the airport-reported wind." }
      ],
      metar: {
        station: "KCLT", raw: "KCLT 151852Z 22014G24KT 10SM SCT025 BKN060 31/22 A2994",
        note: "Fixed training example. Use a live aviation weather source for a real operation.",
        groups: [
          { code: "22014G24KT", decode: "Wind 220° true at 14 kt, gusting 24", impact: "A 10-kt spread can become stronger, turbulent flow around towers." },
          { code: "10SM", decode: "10 statute miles visibility", impact: "VLOS visibility is good; urban obstructions still limit what you can actually see." },
          { code: "SCT025 BKN060", decode: "Scattered 2,500; broken 6,000 ft AGL", impact: "The ceiling is 6,000 feet; cloud clearance is not the limiting factor." },
          { code: "31/22", decode: "31°C; dew point 22°C", impact: "Hot and humid reduces aircraft performance and increases battery heat." }
        ]
      },
      verdict: { level: "modify", title: "MODIFY — controlled site, authorization, calmer wind", reason: "The mission needs a precise LAANC check, controlled access below, and wind acceptable at roof height. A clear METAR alone does not make Uptown easy.", actions: ["Use a private, authorized launch area.","Secure required FAA authorization.","Measure wind at the operating height and protect nonparticipants."] },
      questions: [
        { prompt: "The client owns the building. What permission is still missing?", choices: ["None; ownership covers the mission","FAA airspace authorization when required and a compliant plan for people/vehicles","A phone call to KCLT tower only"], answer: 1, explanation: "Property permission does not replace FAA authorization or Part 107 operating rules.", trap: "Client permission is only one gate" },
        { prompt: "Which layer is the METAR ceiling?", choices: ["SCT025","BKN060","Both"], answer: 1, explanation: "The lowest broken or overcast layer is the ceiling. Scattered is not a ceiling.", trap: "Scattered versus broken" }
      ],
      sources: [P107_SOURCE, LAANC_SOURCE, B4UFLY_SOURCE, { label: "Charlotte city ordinances", url: "https://www.charlottenc.gov/City-Government/City-Codes-Ordinances" }]
    }
  },
  {
    id: "nyc", name: "New York, NY", v15: true,
    explore: chart("sec_nyc_v1_5", "Manhattan and New York terminal area", [
      hot(46.5,47.5,8,10,"Central Park / Manhattan","The proposed establishing shot from Manhattan; the park is coordinate-derived because the sectional does not label it.","The site is inside a dense, multi-airport terminal area and subject to New York City takeoff/landing permitting.","Treat a casual walk-up launch as a no-go. Start with permits and a controlled site."),
      hot(56,47,19,14,"KLGA","LaGuardia and its airport data block east of Manhattan.","One of several major airports shaping the airspace; the nearest airport is not the only one that matters.","Use exact coordinates in LAANC and review the entire terminal picture."),
      hot(49,28,10,14,"70/15 Class B shelf","The Class B shelf runs from 1,500 feet MSL to 7,000 feet MSL in this sector.","It does not describe a UAS Facility Map ceiling, and nearby sectors reach the surface.","Verify the exact mission coordinate in LAANC rather than borrowing a nearby fraction."),
      hot(40,47,10.5,14,"Manhattan obstacle cluster","The sectional includes obstacles such as 1806 (1792): 1,806 feet MSL and 1,792 feet AGL.","It is not a street-level obstacle survey, and the numbers are not drone altitude permission.","Keep the route short, protect VLOS, and guarantee an emergency landing area."),
      hot(35,59,12,13,"Statue of Liberty cue","A prominent charted landmark and security-sensitive area.","The landmark symbol is a prompt, not a complete UAS restriction briefing.","Check current security restrictions, NOTAMs, and local rules for the exact route.")
    ]),
    brief: {
      mission: "Central Park skyline establishing shot",
      intro: "New York punishes shortcut thinking. A Part 107 certificate is only the start: city permit, launch-site authority, Class B authorization, people, vehicles, helicopters, and TFRs all get a vote.",
      checks: [
        { label: "NYC permit", text: "NYPD requires a permit to take off or land a qualifying unmanned aircraft in New York City; other agency approvals may also apply." },
        { label: "Airspace", text: "Manhattan sits inside a complex Class B terminal environment. Check the exact LAANC grid and active restrictions." },
        { label: "Ground exposure", text: "Central Park visitors, streets, buildings, and moving vehicles make a casual launch operationally unacceptable." },
        { label: "Crewed traffic", text: "Helicopters and airliners can be low, fast, and arrive from several directions." }
      ],
      metar: {
        station: "KLGA", raw: "KLGA 151851Z 18011G19KT 7SM FEW018 BKN035 27/23 A2988",
        note: "Fixed training example from one airport. New York requires the broader weather and traffic picture.",
        groups: [
          { code: "18011G19KT", decode: "Wind 180° true at 11 kt, gusting 19", impact: "Building channels can amplify and rotate this wind at street and roof level." },
          { code: "7SM", decode: "7 statute miles visibility", impact: "Above the minimum, but buildings—not haze—may be the practical VLOS limit." },
          { code: "FEW018 BKN035", decode: "Few 1,800; broken ceiling 3,500 ft AGL", impact: "Cloud clearance is workable for a low flight; it does not solve permits or people." },
          { code: "27/23", decode: "27°C; dew point 23°C", impact: "Warm, humid air and a small spread suggest haze and reduced performance." }
        ]
      },
      verdict: { level: "nogo", title: "NO-GO — casual Central Park launch", reason: "Without the city permit, site authority, FAA authorization where required, and a controlled operation below, this is not a lawful walk-up flight.", actions: ["Begin with the NYPD permit timeline, not the weather app.","Obtain every site/agency approval and required FAA authorization.","If people and emergency landing cannot be controlled, decline or redesign the shot."] },
      questions: [
        { prompt: "You hold a Remote Pilot Certificate and LAANC approves 100 feet. May you launch in Central Park immediately?", choices: ["Yes; federal approval preempts every local launch rule","No; city/site permission and the operating conditions still matter","Yes, if no police officer is nearby"], answer: 1, explanation: "FAA authorization solves only the airspace gate. New York City and the land manager still control takeoff/landing permissions.", trap: "One approval is not all approvals" },
        { prompt: "KLGA reports BKN035. What is the ceiling?", choices: ["350 feet AGL","3,500 feet AGL","35,000 feet MSL"], answer: 1, explanation: "Cloud heights use hundreds of feet AGL: 035 becomes 3,500 feet.", trap: "Hundreds and AGL" }
      ],
      sources: [P107_SOURCE, LAANC_SOURCE, B4UFLY_SOURCE, { label: "NYPD unmanned aircraft permits", url: "https://www.nyc.gov/site/nypd/services/law-enforcement/permits-uas-permits.page" }, { label: "NYC Parks rules", url: "https://php1-84.nycgovparks.org/rules/" }]
    }
  }
];

const oldScenarios = window.SCENARIOS || [];
const requestedIds = new Set(V15.map(s => s.id));
window.SCENARIOS = V15.concat(oldScenarios.filter(s => !requestedIds.has(s.id)));
