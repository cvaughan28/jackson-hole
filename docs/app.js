/* Jackson Hole trip app */

const $ = (sel) => document.querySelector(sel);
const content = $("#content");

// ---------- helpers ----------

function gmaps(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

function parseHM(hm) {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
}

function fmtTime(hm) {
  let mins = typeof hm === "string" ? parseHM(hm) : hm;
  mins = ((mins % 1440) + 1440) % 1440;
  const h24 = Math.floor(mins / 60), m = mins % 60;
  const ampm = h24 >= 12 ? "PM" : "AM";
  const h = h24 % 12 === 0 ? 12 : h24 % 12;
  return h + ":" + String(m).padStart(2, "0") + " " + ampm;
}

// "Leave the Lodge by X" — arriveBy minus drive time
function leaveByLabel(ev) {
  if (!ev.arriveBy || !ev.driveMin) return null;
  const leave = parseHM(ev.arriveBy) - ev.driveMin;
  return `🚗 Leave the Lodge by ${fmtTime(leave)} (${ev.driveMin} min drive, arrive ${fmtTime(ev.arriveBy)})`;
}

function localDateStr(d = new Date()) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function esc(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

// ---------- rendering ----------

function eventCard(ev, opts = {}) {
  const leave = leaveByLabel(ev);
  return `
  <div class="card">
    ${opts.tag || ""}
    <div class="event">
      <div class="event-time-col">
        <div class="event-time">${ev.start ? fmtTime(ev.start) : ""}</div>
        ${ev.end ? `<div class="event-end">– ${fmtTime(ev.end)}</div>` : ""}
      </div>
      <div class="event-body">
        <div class="event-title">${ev.icon || ""} ${esc(ev.title)}</div>
        ${leave ? `<div class="leave-by">${leave}</div>` : ""}
        ${ev.details && ev.details.length ? `<ul class="event-details">${ev.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
        ${ev.reservation ? resBox(ev.reservation) : ""}
        ${ev.maps ? `<div class="btn-row"><a class="maps-btn" href="${gmaps(ev.maps)}" target="_blank" rel="noopener">📍 Google Maps</a></div>` : ""}
      </div>
    </div>
  </div>`;
}

function resBox(r) {
  return `
  <div class="res-box">
    <span class="res-tag">✓ Reservation</span>
    <div><strong>${esc(r.vendor)}</strong></div>
    <div>${esc(r.conf)}</div>
    ${r.phone ? `<div>📞 <a href="tel:${r.phone.replace(/[^0-9+]/g, "")}">${esc(r.phone)}</a></div>` : ""}
  </div>`;
}

function dayBlock(day) {
  return `
  <div class="day-header">
    <div class="day-date">${esc(day.label)}</div>
    <div class="day-title">${esc(day.title)}</div>
    <div class="day-sub">${esc(day.subtitle)}</div>
  </div>
  ${day.events.map((ev) => eventCard(ev)).join("")}`;
}

// ---------- tabs ----------

function renderToday() {
  const todayStr = localDateStr();
  const nowMin = new Date().getHours() * 60 + new Date().getMinutes();
  const day = TRIP.days.find((d) => d.date === todayStr);
  let html = "";

  if (!day) {
    const start = new Date(TRIP.startDate + "T00:00:00");
    const diffDays = Math.ceil((start - new Date()) / 86400000);
    if (diffDays > 0) {
      html += `
      <div class="hero">
        <div class="hero-kicker">Countdown</div>
        <div class="hero-big">${diffDays} day${diffDays === 1 ? "" : "s"} to Jackson Hole</div>
        <div class="hero-sub">Sat Jul 25 · AA 1883 departs DFW 1:12 PM · Everything booked is under Info → Reservations.</div>
      </div>`;
      html += `<h2 class="section">First up</h2>` + dayBlock(TRIP.days[0]);
    } else {
      html += `
      <div class="hero">
        <div class="hero-kicker">Trip complete</div>
        <div class="hero-big">Hope it was epic 🏔️</div>
        <div class="hero-sub">The full plan lives on under the Plan tab.</div>
      </div>`;
    }
    content.innerHTML = html;
    return;
  }

  // During the trip: now + next
  const timed = day.events.filter((e) => e.start);
  let current = null, next = null;
  for (const ev of timed) {
    const s = ev.arriveBy && ev.driveMin ? parseHM(ev.arriveBy) - ev.driveMin : parseHM(ev.start);
    if (s <= nowMin) current = ev;
    else { next = ev; break; }
  }

  html += `
  <div class="hero">
    <div class="hero-kicker">${esc(day.label)}</div>
    <div class="hero-big">${esc(day.title)}</div>
    <div class="hero-sub">${esc(day.subtitle)}</div>
  </div>`;

  if (current) html += eventCard(current, { tag: `<span class="now-tag">Now</span>` });
  if (next) {
    const s = next.arriveBy && next.driveMin ? parseHM(next.arriveBy) - next.driveMin : parseHM(next.start);
    const mins = s - nowMin;
    const inLabel = mins > 90 ? `in ${Math.floor(mins / 60)}h ${mins % 60}m` : `in ${mins} min`;
    html += eventCard(next, { tag: `<span class="next-tag">Next · ${inLabel}</span>` });
  }

  html += `<h2 class="section">Full day</h2>` + day.events.map((ev) => eventCard(ev)).join("");
  content.innerHTML = html;
}

function renderPlan() {
  content.innerHTML = TRIP.days.map(dayBlock).join("");
}

function renderMaps() {
  content.innerHTML = `
  <div class="hero">
    <div class="hero-kicker">Offline park maps</div>
    <div class="hero-big">Works with zero signal</div>
    <div class="hero-sub">These NPS maps are stored on your phone. Tap one, then pinch/scroll to zoom.</div>
  </div>
  ${TRIP.maps.map((m, i) => `
    <div class="card map-card" data-map="${i}">
      <div class="map-title">🗺️ ${esc(m.title)}</div>
      <div class="map-note">${esc(m.note)}</div>
      <div class="map-open">Tap to open ›</div>
    </div>`).join("")}`;

  content.querySelectorAll(".map-card").forEach((el) => {
    el.addEventListener("click", () => {
      $("#map-img").src = TRIP.maps[Number(el.dataset.map)].file;
      $("#map-viewer").classList.remove("hidden");
    });
  });
}

function renderExplore() {
  content.innerHTML = TRIP.explore.map((cat) => `
    <h2 class="section">${esc(cat.category)}</h2>
    <div class="card">
      ${cat.items.map((it) => `
        <div class="explore-item">
          <div>
            <div class="explore-name">${esc(it.name)}</div>
            <div class="explore-note">${esc(it.note)}</div>
          </div>
          <a class="pin-btn" href="${gmaps(it.maps)}" target="_blank" rel="noopener" aria-label="Open in Google Maps">📍</a>
        </div>`).join("")}
    </div>`).join("");
}

// Packing checkmarks are saved per phone, so each of us keeps our own list.
const PACK_KEY = "jh-packing";

function packChecked() {
  try { return new Set(JSON.parse(localStorage.getItem(PACK_KEY) || "[]")); }
  catch { return new Set(); }
}

function renderPacking() {
  const checked = packChecked();
  const total = TRIP.packing.reduce((n, g) => n + g.items.length, 0);
  return `
  <h2 class="section">🎒 Packing list <span class="pack-count">${checked.size}/${total}</span></h2>
  ${TRIP.packing.map((g, gi) => `
    <div class="card">
      <div class="pack-group">${esc(g.group)}</div>
      ${g.items.map((it, ii) => {
        const id = gi + ":" + ii;
        const on = checked.has(id);
        return `<label class="pack-item${on ? " packed" : ""}"><input type="checkbox" data-pack="${id}" ${on ? "checked" : ""}><span>${esc(it)}</span></label>`;
      }).join("")}
    </div>`).join("")}
  <button id="pack-reset" class="pack-reset">Reset packing list</button>`;
}

function renderInfo() {
  content.innerHTML = `
  <div class="card">
    <div class="event-title">🏨 ${esc(TRIP.home.name)}</div>
    <ul class="event-details"><li>${esc(TRIP.home.notes)}</li></ul>
    <div class="btn-row"><a class="maps-btn" href="${gmaps(TRIP.home.mapsQuery)}" target="_blank" rel="noopener">📍 Google Maps</a></div>
  </div>
  ${TRIP.info.map((sec) => `
    <h2 class="section">${esc(sec.title)}</h2>
    <div class="card"><ul class="info-list">${sec.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}
  ${renderPacking()}`;

  content.querySelectorAll("[data-pack]").forEach((box) => {
    box.addEventListener("change", () => {
      const checked = packChecked();
      box.checked ? checked.add(box.dataset.pack) : checked.delete(box.dataset.pack);
      localStorage.setItem(PACK_KEY, JSON.stringify([...checked]));
      box.closest(".pack-item").classList.toggle("packed", box.checked);
      const count = content.querySelector(".pack-count");
      const total = TRIP.packing.reduce((n, g) => n + g.items.length, 0);
      if (count) count.textContent = checked.size + "/" + total;
    });
  });

  $("#pack-reset").addEventListener("click", () => {
    localStorage.removeItem(PACK_KEY);
    renderInfo();
    window.scrollTo(0, document.body.scrollHeight);
  });
}

const TABS = { today: renderToday, plan: renderPlan, maps: renderMaps, explore: renderExplore, info: renderInfo };

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    TABS[btn.dataset.tab]();
    window.scrollTo(0, 0);
  });
});

$("#map-close").addEventListener("click", () => {
  $("#map-viewer").classList.add("hidden");
  $("#map-img").src = "";
});

renderToday();

// ---------- service worker ----------
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
