# Jackson Hole Trip App

iPhone home-screen app (PWA) for the Vaughan family Jackson Hole trip, **July 25–29, 2026**.
Same setup as Off the Wall: static site in `docs/`, served by GitHub Pages, installed via
Safari → Share → **Add to Home Screen**.

## What it does

| Tab | What's there |
|---|---|
| **Today** | Before the trip: countdown + Day 1 preview. During the trip: today's schedule with a "Now" and "Next" card, including when to leave the Lodge. |
| **Plan** | The full day-by-day itinerary. Activities with bookings show a green reservation box (vendor, confirmation #, tap-to-call phone). |
| **Maps** | Five NPS park maps (Grand Teton, Jenny Lake trails, Yellowstone, Old Faithful area, West Thumb) stored **on the phone** — they open with zero cell signal. |
| **Explore** | The eat / coffee / treats / shops / sights lists, each with a Google Maps pin button. |
| **Info** | Reservations at a glance, drive times from the Lodge, and the good-to-know list (altitude, bears, weather, gas). |

## How offline works

The service worker (`docs/sw.js`) caches every file — including the ~7 MB of park maps — the
first time the app is opened. After that it loads entirely from the phone. **Google Maps links
still need signal** (tap them in town; navigation continues offline once started).

## Key assumptions

- **Leave-by times** are computed as *arrival time − drive time* using the drive times from the
  itinerary email (Moose 35 min, Jenny Lake 45 min, etc.). They are estimates, not GPS.
- **"Now / Next"** uses the phone's clock and date. It only means something while you're in
  Mountain Time during the trip — which is exactly when you'll use it.
- **Privacy:** the site URL is public, so the app deliberately uses first names only and leaves
  the airline confirmation code out (it's in the Expedia email). Restaurant/float/car
  confirmation numbers are included — they can't be used to do much beyond cancel a dinner.
- Sunday dinner is intentionally unreserved: the app carries a ranked walk-in plan
  (Mangy Moose → Hand Fire Pizza → StillWest/Miazga's) with a go-early note.

## What this ignores

- No live data: no flight status, weather, or eruption predictions — links/notes only.
- No editing in the app. To change the plan, edit `docs/data.js`, bump `CACHE_VERSION`
  in `docs/sw.js`, and push. Phones pick up the new version next time they open the app online.

## Updating

1. Edit `docs/data.js` (all trip content is in this one file).
2. Bump `CACHE_VERSION` in `docs/sw.js` (e.g. `jh-v1` → `jh-v2`).
3. Commit and push — GitHub Pages redeploys automatically.

Map images are public-domain NPS brochure maps via npmaps.com.
