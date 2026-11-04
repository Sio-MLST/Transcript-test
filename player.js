// Single-track player for Custom.mp3.
// Cruz plays continuously; Koda segments are skipped unless clicked.
(() => {
const SEG = window.SEGMENTS;
const audio = document.getElementById("audio");
const root = document.getElementById("transcript");
const btn = document.getElementById("playBtn");
const clock = document.getElementById("clock");
const kodaToggle = document.getElementById("kodaToggle");
// Seconds to nudge each boundary (timestamps are only to the second).
const EDGE = 0.25;
let duration = 0;
let allowedKoda = -1;     // index of a Koda segment the user opted into
let activeSeg = -1, activePara = -1, follow = true, progUntil = 0;

const segEnd = i => i + 1 < SEG.length ? SEG[i + 1].start / 1000 : (duration || Infinity);
const nextCruz = i => { for (let j = i + 1; j < SEG.length; j++) if (SEG[j].who === "Cruz") return j; return -1; };
const mmss = s => (s = Math.max(0, Math.floor(s)), Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"));

// ---- Build DOM; estimate paragraph times by text length within a segment ----
SEG.forEach((seg, i) => {
  const box = document.createElement(seg.who === "Koda" ? "aside" : "section");
  box.className = "seg " + seg.who.toLowerCase();
  seg.el = box;
  if (seg.who === "Koda") {
    box.innerHTML = '<div class="note-head"><span class="note-tag">Koda · technical note</span><span class="note-time">' +
      mmss(seg.start / 1000) + '</span></div>';
  }
  const weights = seg.paras.map(p => p.replace(/\$[^$]*\$/g, "xxxxxxxxxxxxxxx").length + 40);
  const total = weights.reduce((a, b) => a + b, 0);
  let acc = 0;
  seg.p = seg.paras.map((txt, k) => {
    const frac = acc / total; acc += weights[k];
    const head = txt.startsWith("# ");
    const el = document.createElement(head ? "h2" : "p");
    el.className = "para";
    el.textContent = head ? txt.slice(2) : txt;
    box.appendChild(el);
    const para = { el, frac };
    el.addEventListener("click", ev => { ev.stopPropagation(); clickPara(i, k); });
    return para;
  });
  box.addEventListener("click", () => clickPara(i, 0));
  root.appendChild(box);
});
const paraTime = (i, k) => {
  const s = SEG[i].start / 1000, e = segEnd(i);
  return s + SEG[i].p[k].frac * ((isFinite(e) ? e : s + 60) - s);
};

window.addEventListener("load", () => {
  if (window.renderMathInElement) renderMathInElement(root, {
    delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
    throwOnError: false
  });
});

// ---- Playback ----
function play() { const p = audio.play(); if (p && p.catch) p.catch(() => {}); }
function seek(t) { audio.currentTime = Math.max(0, t); }
function segAt(t) { let r = 0; for (let i = 0; i < SEG.length; i++) if (SEG[i].start / 1000 <= t + 0.01) r = i; return r; }

function clickPara(i, k) {
  const t = paraTime(i, k);
  const isActive = i === activeSeg && k === activePara;
  if (isActive && !audio.paused) { audio.pause(); return; }
  if (isActive && audio.paused) { play(); return; }
  allowedKoda = SEG[i].who === "Koda" ? i : -1;
  seek(t);
  follow = true; scrollTo(SEG[i].p[k].el, true);
  play();
}

function tick() {
  const t = audio.currentTime;
  let i = segAt(t);
  // Skip Koda unless opted in (or global toggle on)
  if (!audio.paused && SEG[i].who === "Koda" && i !== allowedKoda && !kodaToggle.checked) {
    const n = nextCruz(i);
    if (n < 0) { audio.pause(); seek(duration || t); }
    else seek(SEG[n].start / 1000 + EDGE);
    i = n < 0 ? i : n;
  }
  if (allowedKoda >= 0 && i !== allowedKoda && SEG[i].who === "Cruz") allowedKoda = -1;
  // Find active paragraph
  let k = 0;
  SEG[i].p.forEach((p, j) => { if (paraTime(i, j) <= t + 0.05) k = j; });
  setActive(i, k);
  clock.textContent = mmss(t) + " / " + mmss(duration);
  if (follow && !audio.paused) scrollTo(SEG[i].p[k].el, false);
  requestAnimationFrame(tick);
}

function setActive(i, k) {
  if (i === activeSeg && k === activePara) return;
  if (activeSeg >= 0) { SEG[activeSeg].el.classList.remove("active"); SEG[activeSeg].p[activePara]?.el.classList.remove("active"); }
  activeSeg = i; activePara = k;
  SEG[i].el.classList.add("active"); SEG[i].p[k].el.classList.add("active");
}

// ---- Gentle auto-follow, released by manual scrolling ----
function scrollTo(el, smooth) {
  const target = Math.max(0, el.getBoundingClientRect().top + scrollY - innerHeight * 0.3);
  const d = target - scrollY;
  if (Math.abs(d) < 2) return;
  progUntil = performance.now() + (smooth ? 700 : 150);
  if (smooth) window.scrollTo({ top: target, behavior: "smooth" }); else scrollBy(0, d * 0.1);
}
const release = () => { if (!audio.paused) follow = false; };
addEventListener("wheel", release, { passive: true });
addEventListener("touchstart", release, { passive: true });
addEventListener("scroll", () => { if (performance.now() > progUntil) release(); }, { passive: true });

// ---- Controls ----
btn.addEventListener("click", () => {
  if (audio.paused) { follow = true; if (activeSeg >= 0) scrollTo(SEG[activeSeg].p[activePara].el, true); play(); }
  else audio.pause();
});
addEventListener("keydown", e => {
  if (e.code === "Space" && e.target === document.body) { e.preventDefault(); btn.click(); }
});
audio.addEventListener("play", () => { document.body.classList.add("playing"); btn.textContent = "❚❚ Pause"; });
audio.addEventListener("pause", () => { document.body.classList.remove("playing"); btn.textContent = "▶ Play"; });
audio.addEventListener("loadedmetadata", () => { duration = audio.duration; });
audio.addEventListener("error", () => { clock.textContent = "Custom.mp3 not found"; });
requestAnimationFrame(tick);
})();
