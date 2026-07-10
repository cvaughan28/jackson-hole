// Jackson Hole Family Trip — July 25–29, 2026
// All trip content lives here. Edit this file and bump CACHE_VERSION in sw.js to publish changes.

const TRIP = {
  title: "Jackson Hole",
  dates: "July 25–29, 2026",
  startDate: "2026-07-25",
  endDate: "2026-07-29",
  travelers: "Chris, Whitney & Reid",
  home: {
    name: "The Lodge at Jackson Hole",
    address: "80 Scott Ln, Jackson, WY",
    mapsQuery: "The Lodge at Jackson Hole, 80 Scott Ln, Jackson, WY",
    notes: "Indoor/outdoor pool + hot tub · $5 breakfast · ~7 min to Town Square · Check-in 4 PM · Check-out 11 AM",
  },

  days: [
    {
      date: "2026-07-25",
      label: "Sat, Jul 25",
      title: "Arrive & Settle In",
      subtitle: "Easy first day — land, check in, pool, Town Square.",
      events: [
        {
          start: "13:12", end: "14:59",
          icon: "✈️",
          title: "Fly DFW → JAC",
          details: [
            "American Airlines 1883 · departs DFW 1:12 PM, lands JAC 2:59 PM (2h 47m)",
            "JAC is the only U.S. airport inside a national park — Tetons on approach, sit on the left side!",
            "Main Cabin · carry-on included · checked bags extra",
          ],
          reservation: {
            vendor: "American Airlines",
            conf: "Conf code is in the Expedia email (kept off this page on purpose)",
            phone: "800-433-7300",
          },
        },
        {
          start: "15:30",
          icon: "🚗",
          title: "Pick up rental car — Hertz",
          details: [
            "Counter at the airport: 1250 E Airport Road",
            "Full-size (Nissan Altima or similar), automatic, unlimited miles",
            "Return with a full tank — plan a gas stop in town Wednesday",
          ],
          maps: "Hertz, 1250 E Airport Road, Jackson, WY",
          reservation: { vendor: "Hertz", conf: "L6320808242", phone: "307-733-2272" },
        },
        {
          start: "16:00",
          icon: "🏨",
          title: "Check in — The Lodge at Jackson Hole",
          details: [
            "80 Scott Ln · ~25 min from the airport · check-in 4 PM",
            "Pool time to shake off the flight",
            "Resort fee $33.60/night collected at the property (includes shuttle + bottled water)",
          ],
          maps: "The Lodge at Jackson Hole, 80 Scott Ln, Jackson, WY",
          reservation: { vendor: "Expedia (hotel + flights + car)", conf: "Itinerary # 73483539092612" },
        },
        {
          start: "17:30",
          icon: "🍕",
          title: "Evening — Town Square & casual dinner",
          details: [
            "Walk Town Square + the antler arches (photo op)",
            "Dinner: Pinky G's Pizzeria or StillWest Brewery — both walk-in",
            "Early to bed — altitude + big day tomorrow",
          ],
          maps: "Town Square, Jackson, WY",
        },
      ],
    },
    {
      date: "2026-07-26",
      label: "Sun, Jul 26",
      title: "Grand Teton South — Float + Tram",
      subtitle: "Everything's in the south end today — no crisscrossing.",
      events: [
        {
          start: "10:30", end: "13:00", arriveBy: "10:00", driveMin: 35,
          icon: "🛶",
          title: "Snake River Scenic Float — Solitude Float Trips",
          details: [
            "10:30 AM – 1:00 PM · ~2 hrs on the water",
            "Meet at the Solitude office near Moose — plan to arrive ~30 min early to check in",
            "Eagles, maybe moose, full Teton range behind you · bring layers + sunscreen",
          ],
          maps: "Solitude Float Trips, 1 Teton Park Rd, Moose, WY",
          reservation: {
            vendor: "Solitude Float Trips",
            conf: "Booking # 361866425 · 2 adults, 1 child",
            phone: "307-733-2871",
          },
        },
        {
          start: "13:15",
          icon: "🍕",
          title: "Lunch — Dornan's (Moose)",
          details: ["Deck pizza with a head-on Teton view · walk-in"],
          maps: "Dornan's Pizza Pasta Company, Moose, WY",
        },
        {
          start: "14:15",
          icon: "📸",
          title: "Quick stop — Mormon Row / T.A. Moulton Barn",
          details: ["The iconic barn-with-Tetons photo · 10 minutes"],
          maps: "T.A. Moulton Barn, Mormon Row, Moose, WY",
        },
        {
          start: "15:15",
          icon: "🚠",
          title: "Jackson Hole Aerial Tram — Teton Village",
          details: [
            "Ride up Rendezvous Mountain (4,139 ft up!) · waffles at Corbet's Cabin on top",
            "~25 min drive from Moose",
            "Skip for pool/town downtime if everyone's wiped from the float",
          ],
          maps: "Jackson Hole Aerial Tram, Teton Village, WY",
        },
        {
          start: "17:30",
          icon: "🍽️",
          title: "Dinner — walk-in night (no reservation)",
          details: [
            "Go EARLY (5:30ish) — Sunday walk-in is easy before 6, tough after 7.",
            "Best fit: Mangy Moose (Teton Village) — right at the tram base, fun & family-friendly. Dinner right after the tram, zero extra driving.",
            "In town: Hand Fire Pizza (wood-fired, in the old Teton Theater — no reservations; join the waitlist online ~30 min out)",
            "Also good: StillWest Brewery (check Resy for late openings), Miazga's (casual, walk-in)",
          ],
          maps: "Mangy Moose Restaurant and Saloon, Teton Village, WY",
        },
      ],
    },
    {
      date: "2026-07-27",
      label: "Mon, Jul 27",
      title: "Yellowstone — The Big Day",
      subtitle: "Long but unforgettable. Geyser highlights loop from the south.",
      events: [
        {
          start: "06:30",
          icon: "🌅",
          title: "Leave the Lodge — 6:30 AM",
          details: [
            "Grab Lodge breakfast to-go + snacks · pack layers (cold mornings, even in July)",
            "⚠️ Download offline Google Maps BEFORE leaving — almost no cell signal in the park",
            "Gas up if below half a tank — services in Yellowstone are sparse",
          ],
        },
        {
          start: "07:30",
          icon: "🏞️",
          title: "Yellowstone South Entrance",
          details: [
            "~1 hr from the Lodge · have the park pass ready",
            "America the Beautiful pass — Recreation.gov order # 0896259208-1",
            "Lewis Falls is a roadside stop just past the entrance if traffic is light",
          ],
          maps: "Yellowstone South Entrance",
        },
        {
          start: "08:30",
          icon: "🌋",
          title: "West Thumb Geyser Basin",
          details: ["Easy boardwalk of colorful pools right on Yellowstone Lake · ~45 min"],
          maps: "West Thumb Geyser Basin",
        },
        {
          start: "10:00",
          icon: "⛲",
          title: "Old Faithful + Old Faithful Inn",
          details: [
            "Check the eruption prediction at the Visitor Center first, then grab a bench",
            "Step inside the Inn's giant log lobby after",
            "Lunch here: quick at Geyser Grill, or the Inn dining room",
          ],
          maps: "Old Faithful Visitor Education Center",
        },
        {
          start: "13:00",
          icon: "🌈",
          title: "Grand Prismatic Spring — Midway Geyser Basin",
          details: [
            "The giant rainbow hot spring · boardwalk gets you right up to it · 10 min north of Old Faithful",
            "Hold hats — the boardwalk is windy and the spring is hot",
          ],
          maps: "Midway Geyser Basin",
        },
        {
          start: "14:30",
          icon: "🌋",
          title: "Optional — Fountain Paint Pots",
          details: ["Bubbling mud + spitting geysers · short loop, a kid favorite · only if energy holds"],
          maps: "Fountain Paint Pot",
        },
        {
          start: "15:30",
          icon: "🦌",
          title: "Head home — watch for bison",
          details: [
            "~2.5 hrs back · home 6–7 PM",
            "Dinner easy tonight: StillWest / Pinky G's, or grab something before leaving the park",
          ],
        },
      ],
    },
    {
      date: "2026-07-28",
      label: "Tue, Jul 28",
      title: "Jenny Lake + Scenic Drives",
      subtitle: "Gentle morning hike, easy overlooks, big finale dinner.",
      events: [
        {
          start: "08:45", arriveBy: "08:45", driveMin: 45,
          icon: "⛵",
          title: "Jenny Lake — boat shuttle + Hidden Falls",
          details: [
            "Be there before 9 AM — the lot fills fast",
            "Shuttle boat across the lake (Reid will love it), short walk to Hidden Falls, turn back there",
            "Inspiration Point is just beyond if legs are fresh",
          ],
          maps: "Jenny Lake Visitor Center, Grand Teton National Park",
        },
        {
          start: "12:00",
          icon: "🥪",
          title: "Lunch — picnic by the lake or back in town",
          details: [],
        },
        {
          start: "13:30",
          icon: "📸",
          title: "Drive-up viewpoints (no hiking)",
          details: [
            "Signal Mountain Summit Road — 5-mile drive to a full-valley panorama",
            "Oxbow Bend — prime moose + reflection spot",
            "Snake River Overlook — the classic Ansel Adams view, 2-min pull-off",
          ],
          maps: "Oxbow Bend Turnout, Moran, WY",
        },
        {
          start: "15:30",
          icon: "🏊",
          title: "Pool / downtime + last souvenir browse",
          details: [],
        },
        {
          start: "19:00", arriveBy: "18:55", driveMin: 10,
          icon: "🍽️",
          title: "Dinner — Local Restaurant & Bar (RESERVED)",
          details: [
            "7:00 PM · 3 guests · dining room · on Town Square",
            "Steaks + burgers from their own ranch — the send-off dinner",
          ],
          maps: "Local Restaurant and Bar, 55 N Cache St, Jackson, WY",
          reservation: { vendor: "Local Restaurant & Bar (via Resy)", conf: "Tue Jul 28, 7:00 PM · 3 guests" },
        },
      ],
    },
    {
      date: "2026-07-29",
      label: "Wed, Jul 29",
      title: "Slow Morning & Fly Home",
      subtitle: "Breakfast treat, last stroll, easy departure.",
      events: [
        {
          start: "08:30",
          icon: "🥐",
          title: "Breakfast — Persephone Bakery or Cafe Genevieve",
          details: [
            "Persephone: pastries + great coffee · Genevieve: the s'mores French toast is a thing",
            "Check out of the Lodge by 11 AM — bags in the car first",
          ],
          maps: "Persephone Bakery, 145 E Broadway Ave, Jackson, WY",
        },
        {
          start: "11:00",
          icon: "🧭",
          title: "Last antler-arch photo + souvenirs",
          details: ["Teton Toys / Jackson Trading Co. for last-minute huckleberry everything"],
          maps: "Town Square, Jackson, WY",
        },
        {
          start: "14:00",
          icon: "⛽",
          title: "Gas up, then drop the car — Hertz by 2:45 PM",
          details: [
            "Fill the tank in town (refueling charges at drop-off are steep)",
            "~25 min to the airport · Hertz drop-off due 2:45 PM",
          ],
          maps: "Hertz, 1250 E Airport Road, Jackson, WY",
          reservation: { vendor: "Hertz", conf: "L6320808242", phone: "307-733-2272" },
        },
        {
          start: "16:15", end: "20:09",
          icon: "✈️",
          title: "Fly JAC → DFW",
          details: [
            "American Airlines 883 · departs 4:15 PM, lands DFW 8:09 PM",
            "JAC is tiny — being there by ~2:45 after the car drop is plenty",
          ],
          reservation: {
            vendor: "American Airlines",
            conf: "Conf code is in the Expedia email (kept off this page on purpose)",
            phone: "800-433-7300",
          },
        },
      ],
    },
  ],

  explore: [
    {
      category: "Eat — reserve ahead",
      items: [
        { name: "Local Restaurant & Bar", note: "Fine dining on Town Square — BOOKED Tue 7 PM", maps: "Local Restaurant and Bar, 55 N Cache St, Jackson, WY" },
        { name: "Snake River Grill", note: "The hardest table in town · reopened 2026", maps: "Snake River Grill, 84 E Broadway Ave, Jackson, WY" },
        { name: "Gather", note: "Upscale-cozy · 72 S Glenwood St", maps: "Gather, 72 S Glenwood St, Jackson, WY" },
        { name: "The Kitchen", note: "Asian fusion, superb · CLOSED Sun & Mon", maps: "The Kitchen, 155 N Glenwood St, Jackson, WY" },
      ],
    },
    {
      category: "Eat — walk-in friendly",
      items: [
        { name: "Mangy Moose", note: "Teton Village, at the tram base · fun, loud, kid-perfect", maps: "Mangy Moose Restaurant and Saloon, Teton Village, WY" },
        { name: "Hand Fire Pizza", note: "Wood-fired, in the old Teton Theater · online waitlist", maps: "Hand Fire Pizza, 120 N Cache St, Jackson, WY" },
        { name: "Dornan's", note: "Moose · deck pizza, head-on Teton views", maps: "Dornan's Pizza Pasta Company, Moose, WY" },
        { name: "Pinky G's Pizzeria", note: "Classic pizza joint · 50 W Broadway", maps: "Pinky G's Pizzeria, 50 W Broadway, Jackson, WY" },
        { name: "StillWest Brewery & Grill", note: "Brewpub under Snow King · patio", maps: "StillWest Brewery & Grill, 45 E Snow King Ave, Jackson, WY" },
        { name: "Roosevelts", note: "Steaks · 140 N Cache St", maps: "Roosevelts Jackson Hole, 140 N Cache St, Jackson, WY" },
        { name: "Miazga's", note: "Polish + a great bison burger", maps: "Miazga's, 399 W Broadway, Jackson, WY" },
        { name: "Cafe Genevieve", note: "Breakfast/brunch · s'mores French toast", maps: "Cafe Genevieve, 135 E Broadway Ave, Jackson, WY" },
      ],
    },
    {
      category: "Coffee & bakeries",
      items: [
        { name: "Persephone Bakery", note: "Coffee + pastries + breakfast", maps: "Persephone Bakery, 145 E Broadway Ave, Jackson, WY" },
        { name: "Cowboy Coffee Co.", note: "Local fave — huckleberry latte", maps: "Cowboy Coffee Co, 125 N Cache St, Jackson, WY" },
        { name: "Snake River Roasting Co.", note: "Top local roaster", maps: "Snake River Roasting Company, 50 W Broadway, Jackson, WY" },
        { name: "Café Jackson Hole", note: "Newer · great pastries", maps: "Cafe Jackson Hole, 175 S Glenwood St, Jackson, WY" },
      ],
    },
    {
      category: "Treats",
      items: [
        { name: "Moo's Gourmet Ice Cream", note: "Get the wild huckleberry", maps: "Moo's Gourmet Ice Cream, 155 Center St, Jackson, WY" },
        { name: "Cream + Sugar Scoop Shop", note: "20 E Broadway Ave", maps: "Cream and Sugar Scoop Shop, 20 E Broadway Ave, Jackson, WY" },
      ],
    },
    {
      category: "Fun stores",
      items: [
        { name: "Teton Toys", note: "Kid heaven · open till 9 PM · has ice cream", maps: "Teton Toys, 225 N Cache St, Jackson, WY" },
        { name: "Valley Bookstore", note: "Charming indie", maps: "Valley Bookstore, 140 E Broadway Ave, Jackson, WY" },
        { name: "MADE", note: "Local makers & gifts · Gaslight Alley", maps: "MADE, 125 N Cache St, Jackson, WY" },
        { name: "Stio Mountain Studio", note: "Jackson's own outdoor brand", maps: "Stio Mountain Studio, 10 E Broadway Ave, Jackson, WY" },
        { name: "Skinny Skis", note: "Gear · bear-spray rentals", maps: "Skinny Skis, 65 W Deloney Ave, Jackson, WY" },
        { name: "Jackson Trading Company", note: "Souvenirs / huckleberry everything", maps: "Jackson Trading Company, 25 W Broadway, Jackson, WY" },
      ],
    },
    {
      category: "Grand Teton sights",
      items: [
        { name: "Mormon Row / T.A. Moulton Barn", note: "Iconic barn photo", maps: "T.A. Moulton Barn, Moose, WY" },
        { name: "Jenny Lake boat + Hidden Falls", note: "Tuesday morning plan", maps: "Jenny Lake Visitor Center, Grand Teton National Park" },
        { name: "Signal Mountain Summit Road", note: "Drive-up valley panorama", maps: "Signal Mountain Summit Road, Grand Teton National Park" },
        { name: "Oxbow Bend", note: "Moose + reflection spot", maps: "Oxbow Bend Turnout, Moran, WY" },
        { name: "Snake River Overlook", note: "The Ansel Adams view", maps: "Snake River Overlook, Moran, WY" },
        { name: "Schwabacher Landing", note: "Optional sunrise/reflection spot", maps: "Schwabacher Landing, Grand Teton National Park" },
        { name: "Aerial Tram (Teton Village)", note: "Waffles at the top", maps: "Jackson Hole Aerial Tram, Teton Village, WY" },
      ],
    },
    {
      category: "Yellowstone sights (south loop)",
      items: [
        { name: "Lewis Falls", note: "Roadside, on the way in", maps: "Lewis Falls, Yellowstone National Park" },
        { name: "West Thumb Geyser Basin", note: "Pools on Yellowstone Lake", maps: "West Thumb Geyser Basin" },
        { name: "Old Faithful + Inn", note: "Check eruption predictions", maps: "Old Faithful, Yellowstone National Park" },
        { name: "Grand Prismatic Spring", note: "Midway Geyser Basin boardwalk", maps: "Midway Geyser Basin" },
        { name: "Fairy Falls Trailhead", note: "The overhead Prismatic view (longer walk)", maps: "Fairy Falls Trailhead, Yellowstone National Park" },
        { name: "Fountain Paint Pots", note: "Bubbling mud · kid favorite", maps: "Fountain Paint Pot, Yellowstone National Park" },
        { name: "Biscuit / Black Sand Basin", note: "Optional quick stops", maps: "Biscuit Basin, Yellowstone National Park" },
      ],
    },
  ],

  maps: [
    { file: "maps/grand-teton-full.jpg", title: "Grand Teton — full park map", note: "Official NPS brochure map" },
    { file: "maps/jenny-lake-trails.jpg", title: "Jenny Lake trails", note: "Boat dock, Hidden Falls, Inspiration Point" },
    { file: "maps/yellowstone-full.jpg", title: "Yellowstone — full park map", note: "Official NPS brochure map" },
    { file: "maps/yellowstone-old-faithful-area.jpg", title: "Old Faithful area", note: "Geyser basin detail" },
    { file: "maps/yellowstone-west-thumb.jpg", title: "West Thumb / Grant Village", note: "First Yellowstone stop" },
  ],

  info: [
    {
      title: "Reservations at a glance",
      items: [
        "✈️ AA 1883 out Sat 1:12 PM · AA 883 home Wed 4:15 PM (conf code in Expedia email)",
        "🏨 The Lodge at Jackson Hole · Expedia itin # 73483539092612",
        "🚗 Hertz full-size · conf L6320808242 · 307-733-2272",
        "🛶 Solitude Float, Sun 10:30 AM · booking # 361866425 · 307-733-2871",
        "🍽️ Local Restaurant & Bar, Tue 7:00 PM · 3 guests (Resy)",
        "🏞️ Park pass · Recreation.gov order # 0896259208-1",
      ],
    },
    {
      title: "Drive times from the Lodge",
      items: [
        "Town Square — ~7 min",
        "Teton Village (tram) — ~25 min",
        "Moose (float / Dornan's) — ~35 min",
        "Jenny Lake — ~45 min",
        "Yellowstone South Entrance — ~1 hr",
        "Old Faithful — ~2.5 hrs",
      ],
    },
    {
      title: "Good to know",
      items: [
        "Altitude: Jackson ~6,200 ft (Yellowstone higher). Hydrate hard, especially Day 1.",
        "Weather: sunny mornings, frequent afternoon thunderstorms — do outdoor things early, pack a rain layer.",
        "Bears: carry bear spray on trails (rent at Skinny Skis). Make noise, stay together.",
        "Wildlife distance: 100 yds from bears · 25 yds from bison/moose/elk. Bison injure more people than bears.",
        "Cell service: almost none in Yellowstone — this app works offline, and download offline Google Maps before Monday.",
        "Gas up before park days — services inside Yellowstone are sparse and crowded.",
        "Sunday dinner: no reservation — go early (~5:30). Mangy Moose at the tram base is the easy win.",
      ],
    },
  ],
};
