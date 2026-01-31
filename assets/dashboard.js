
// ---- v7: iconos SVG estilo GIS (línea) ----
function svgIcon(name){
  // SVG line-icons estilo GIS (stroke = currentColor)
  switch(name){

    /* --- Capas --- */
    case "layerUp":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 16l8 4 8-4" />
        <path d="M4 12l8 4 8-4" />
        <path d="M12 4v7" />
        <path d="M8.5 8L12 4l3.5 4" />
      </svg>`;
    case "layerDown":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 8l8-4 8 4" />
        <path d="M4 12l8-4 8 4" />
        <path d="M12 20v-7" />
        <path d="M8.5 16L12 20l3.5-4" />
      </svg>`;
    case "style":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14.5 3.5l6 6L10 20H4v-6L14.5 3.5z" />
        <path d="M13 5l6 6" />
        <path d="M7 14c-1.1 0-2 .9-2 2s.9 2 2 2h7" />
      </svg>`;
    case "download":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v10" />
        <path d="M8 9l4 4 4-4" />
        <path d="M4 17v3h16v-3" />
      </svg>`;
    case "trash":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>`;

    /* --- Mapa --- */
    case "zoomIn":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M11 8v6" /><path d="M8 11h6" />
      </svg>`;
    case "zoomOut":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M8 11h6" />
      </svg>`;
    case "zoomSel":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="5" y="5" width="10" height="10" rx="2" />
        <path d="M19 9v10H9" />
      </svg>`;
    case "fitAll":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>`;
    case "identify":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 2v4" /><path d="M12 18v4" />
        <path d="M2 12h4" /><path d="M18 12h4" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>`;
    case "basemap":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 6l7-3 7 3 4-2v14l-4 2-7-3-7 3V6z" />
        <path d="M10 3v14" /><path d="M17 6v14" />
      </svg>`;
    case "basemapStyle":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 19.5V4.5a1 1 0 0 1 1.5-.86L12 7l6.5-3.36A1 1 0 0 1 20 4.5v15a1 1 0 0 1-1.5.86L12 17l-6.5 3.36A1 1 0 0 1 4 19.5z"/>
        <path d="M12 7v10" />
      </svg>`;
    case "settings":
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a7.7 7.7 0 0 0 .1-6l2-1.1-2-3.4-2.2 1a7.8 7.8 0 0 0-5.2-3L12 0H8l-.1 2.4a7.8 7.8 0 0 0-5.2 3l-2.2-1-2 3.4L.6 9a7.7 7.7 0 0 0 .1 6L0 16.1l2 3.4 2.2-1a7.8 7.8 0 0 0 5.2 3L8 24h4l.1-2.4a7.8 7.8 0 0 0 5.2-3l2.2 1 2-3.4-2-1.2z" />
      </svg>`;

    default:
      return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9"/>
      </svg>`;
  }
}

/*
  Dashboard CPM local (v4)
  - CSV/TXT local -> KPIs, filtros, charts canvas, tabla
  - Visor geográfico local: Shapefile ZIP -> GeoJSON (sin dependencias externas)
  - OSM basemap opcional (se desactiva si no hay internet)
*/

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);


// v14: Modal helpers (restored)
function showModalById(id){
  const m = document.getElementById(id);
  if(!m) return;
  m.setAttribute("aria-hidden","false");
  m.style.display = "flex";
  m.style.zIndex = "9999";
  document.body.classList.add("hasModal");
}

function hideModalById(id){
  const m = document.getElementById(id);
  if(!m) return;
  m.setAttribute("aria-hidden","true");
  m.style.display = "none";
  const anyOpen = Array.from(document.querySelectorAll(".modal")).some(x=>x.getAttribute("aria-hidden")==="false");
  if(!anyOpen) document.body.classList.remove("hasModal");
}


function makeDialogDraggable(modalId, handleSelector){
  const modal = document.getElementById(modalId);
  if(!modal) return;
  const dialog = modal.querySelector(".modal__dialog");
  const handle = modal.querySelector(handleSelector);
  if(!dialog || !handle) return;
  if(dialog.dataset.draggable === "1") return;
  dialog.dataset.draggable = "1";

  let dragging = false;
  let startX=0, startY=0, origLeft=0, origTop=0;

  const clampPos = ()=>{
    const r = dialog.getBoundingClientRect();
    const pad = 8;
    let left = parseFloat(dialog.style.left || r.left);
    let top = parseFloat(dialog.style.top || r.top);
    const maxLeft = window.innerWidth - r.width - pad;
    const maxTop = window.innerHeight - r.height - pad;
    left = Math.max(pad, Math.min(maxLeft, left));
    top = Math.max(pad, Math.min(maxTop, top));
    dialog.style.left = left + "px";
    dialog.style.top = top + "px";
  };

  const onDown = (e)=>{
    // don't drag when clicking buttons in header
    if(e.target.closest("button")) return;
    dragging = true;
    const r = dialog.getBoundingClientRect();
    dialog.style.position = "fixed";
    dialog.style.margin = "0";
    dialog.style.left = r.left + "px";
    dialog.style.top = r.top + "px";
    dialog.style.transform = "none";

    startX = (e.touches?e.touches[0].clientX:e.clientX);
    startY = (e.touches?e.touches[0].clientY:e.clientY);
    origLeft = r.left;
    origTop = r.top;
    e.preventDefault();
  };

  const onMove = (e)=>{
    if(!dragging) return;
    const x = (e.touches?e.touches[0].clientX:e.clientX);
    const y = (e.touches?e.touches[0].clientY:e.clientY);
    const dx = x - startX;
    const dy = y - startY;
    dialog.style.left = (origLeft + dx) + "px";
    dialog.style.top = (origTop + dy) + "px";
    clampPos();
    e.preventDefault();
  };

  const onUp = ()=>{
    dragging = false;
  };

  handle.style.cursor = "move";
  handle.addEventListener("mousedown", onDown);
  handle.addEventListener("touchstart", onDown, {passive:false});
  window.addEventListener("mousemove", onMove);
  window.addEventListener("touchmove", onMove, {passive:false});
  window.addEventListener("mouseup", onUp);
  window.addEventListener("touchend", onUp);
  window.addEventListener("resize", clampPos);
}
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

const DEFAULT_JOIN_TXT = "CCATASTRAL";
const DEFAULT_JOIN_GEO = "clavecatas";

function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"','&quot;')
    .replaceAll("'","&#039;");
}

function toNum(v){
  if(v === null || v === undefined) return NaN;
  if(typeof v === "number") return v;
  let s = String(v).trim();
  if(!s) return NaN;

  // Soportar negativos tipo (1,234.56)
  let neg = false;
  if(s.startsWith("(") && s.endsWith(")")){
    neg = true;
    s = s.slice(1,-1).trim();
  }

  // Quitar símbolos de moneda y texto: dejar solo dígitos, signo, coma y punto
  s = s.replace(/[^\d,\.\-]/g, "");

  if(!s) return NaN;

  // Soportar formatos tipo 1,234.56 o 1.234,56
  const hasComma = s.includes(",");
  const hasDot = s.includes(".");
  let x = s;
  if(hasComma && hasDot){
    // si la última coma está después del último punto, asume coma decimal
    if(s.lastIndexOf(",") > s.lastIndexOf(".")){
      x = s.replaceAll(".", "").replaceAll(",", ".");
    } else {
      x = s.replaceAll(",", "");
    }
  } else if(hasComma && !hasDot){
    // asume coma decimal
    x = s.replaceAll(",", ".");
  }
  const n = Number(x);
  const out = Number.isFinite(n) ? n : NaN;
  return neg ? -out : out;
}


/* ---------- Theme (v10) ---------- */
const THEME_KEY = "cpm_theme_v10";

function defaultTheme(){
  return {
    appBg: "rgb(30,117,74)",
    panelBg: "rgba(0,0,0,.38)",
    headerBg: "rgba(0,0,0,.34)",
    text: "rgba(255,255,255,.92)",
    muted: "rgba(255,255,255,.70)",
    accent: "#FFC928",
    fontFamily: "system",
    fontSize: 14,
    currency: { locale: "es-HN", code: "HNL" },
    chart: ["#FEDC97", "#3B82F6", "#22C55E", "#FACC15", "#F43F5E"]
  };
}

function loadTheme(){
  try{
    const raw = localStorage.getItem(THEME_KEY);
    if(!raw) return defaultTheme();
    const obj = JSON.parse(raw);
    const d = defaultTheme();
    return {
      ...d,
      ...(obj||{}),
      currency: {...d.currency, ...((obj||{}).currency||{})},
      chart: Array.isArray((obj||{}).chart) ? (obj.chart.slice(0,5).concat(d.chart)).slice(0,5) : d.chart
    };
  }catch(e){
    return defaultTheme();
  }
}

function saveTheme(t){
  try{ localStorage.setItem(THEME_KEY, JSON.stringify(t)); }catch(e){}
}

function fontFamilyValue(key){
  switch(String(key||"system")){
    case "arial": return 'Arial, "Segoe UI", Tahoma, sans-serif';
    case "segoe": return '"Segoe UI", Tahoma, Arial, sans-serif';
    case "roboto": return 'Roboto, "Segoe UI", Arial, sans-serif';
    case "tahoma": return 'Tahoma, "Segoe UI", Arial, sans-serif';
    default: return 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, Tahoma, sans-serif';
  }
}

function hexToRgb(hex){
  let h = String(hex||"").trim();
  if(!h) return "255,255,255";
  if(h.startsWith("rgb")) return "255,255,255";
  if(h.startsWith("#")) h = h.slice(1);
  if(h.length===3) h = h.split("").map(c=>c+c).join("");
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `${r},${g},${b}`;
}

function rgbToHex(v){
  const s = String(v||"").trim();
  if(s.startsWith("#")) return s;
  const m = s.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if(!m) return "#1E754A";
  const r = Number(m[1]), g=Number(m[2]), b=Number(m[3]);
  return "#" + [r,g,b].map(x=>x.toString(16).padStart(2,"0")).join("");
}
function rgbaToHex(v){ return rgbToHex(v); }

function applyTheme(t){
  state.theme = t;
  const r = document.documentElement;
  r.style.setProperty("--app-bg", t.appBg);
  r.style.setProperty("--panel-bg", t.panelBg);
  r.style.setProperty("--header-bg", t.headerBg);
  r.style.setProperty("--text-color", t.text);
  r.style.setProperty("--muted-color", t.muted);
  r.style.setProperty("--accent-color", t.accent);
  r.style.setProperty("--font-family", fontFamilyValue(t.fontFamily));
  r.style.setProperty("--font-size", `${Number(t.fontSize||14)}px`);

  r.style.setProperty("--chart-c1", `rgba(${hexToRgb(t.chart[0])},.92)`);
  r.style.setProperty("--chart-c2", `rgba(${hexToRgb(t.chart[1])},.90)`);
  r.style.setProperty("--chart-c3", `rgba(${hexToRgb(t.chart[2])},.90)`);
  r.style.setProperty("--chart-c4", `rgba(${hexToRgb(t.chart[3])},.90)`);
  r.style.setProperty("--chart-c5", `rgba(${hexToRgb(t.chart[4])},.90)`);

  state.meta = state.meta || {};
  state.meta.currency = { locale: t.currency?.locale || "es-HN", code: t.currency?.code || "HNL" };

  try{ renderKPIs(); }catch(e){}
  try{ renderCharts(); }catch(e){}
}

function syncThemeUI(){
  const t = state.theme || loadTheme();
  const set = (id, v)=>{ const el=document.getElementById(id); if(el) el.value = v; };

  set("themeAppBg", rgbToHex(t.appBg));
  set("themePanelBg", rgbaToHex(t.panelBg));
  set("themeHeaderBg", rgbaToHex(t.headerBg));
  set("themeAccent", rgbToHex(t.accent));
  set("themeText", rgbaToHex(t.text));
  set("themeMuted", rgbaToHex(t.muted));
  set("themeFontFamily", t.fontFamily || "system");
  set("themeFontSize", String(t.fontSize||14));
  set("themeCurrency", t.currency?.code || "HNL");
  set("themeLocale", t.currency?.locale || "es-HN");

  set("chartColor1", t.chart?.[0] || "#FEDC97");
  set("chartColor2", t.chart?.[1] || "#3B82F6");
  set("chartColor3", t.chart?.[2] || "#22C55E");
  set("chartColor4", t.chart?.[3] || "#FACC15");
  set("chartColor5", t.chart?.[4] || "#F43F5E");

/* ---------- Theme preview (v11) ---------- */
function getThemeUIColors(){
  const get = (id, def)=> String(document.getElementById(id)?.value ?? def);
  const t = state.theme || loadTheme();
  return {
    c1: get("chartColor1", t.chart?.[0] || "#FEDC97"),
    c2: get("chartColor2", t.chart?.[1] || "#3B82F6"),
    c3: get("chartColor3", t.chart?.[2] || "#22C55E"),
    c4: get("chartColor4", t.chart?.[3] || "#FACC15"),
    c5: get("chartColor5", t.chart?.[4] || "#F43F5E"),
  };
}

function drawThemePreview(){
  const bar = document.getElementById("themePreviewBar");
  const donut = document.getElementById("themePreviewDonut");
  if(!bar || !donut) return;
  const {c1,c2,c3,c4,c5} = getThemeUIColors();

  // Bar preview
  const bctx = bar.getContext("2d");
  const bw = bar.width, bh = bar.height;
  bctx.clearRect(0,0,bw,bh);
  const pad = 14;
  const bars = [38, 62, 28, 74, 55];
  const max = Math.max(...bars);
  const plotH = Math.floor((bh - pad*2)*0.85);
  const chartW = bw - pad*2;
  const barGap = 10;
  const barW = (chartW - barGap*(bars.length-1))/bars.length;

  bctx.fillStyle = "rgba(0,0,0,.10)";
  bctx.fillRect(pad,pad,chartW,bh-pad*2);

  for(let i=0;i<bars.length;i++){
    const x = pad + i*(barW+barGap);
    const h = (bars[i]/max) * (plotH-6);
    const y = pad + (plotH - h);
    bctx.fillStyle = c1;
    bctx.fillRect(x,y,barW,h);
  }
  bctx.fillStyle = "rgba(255,255,255,.75)";
  bctx.font = "12px system-ui, -apple-system, Segoe UI, Arial";
  bctx.fillText("Preview", pad, pad+12);

  // Donut preview
  const dctx = donut.getContext("2d");
  const dw = donut.width, dh = donut.height;
  dctx.clearRect(0,0,dw,dh);
  const cx = dw/2, cy = dh/2;
  const outer = Math.min(dw,dh)*0.34;
  const inner = outer*0.55;
  const vals = [35, 25, 20, 12, 8];
  const colors = [c1,c2,c3,c4,c5];
  const total = vals.reduce((a,b)=>a+b,0);
  let a0 = -Math.PI/2;
  for(let i=0;i<vals.length;i++){
    const a1 = a0 + (vals[i]/total)*Math.PI*2;
    dctx.beginPath();
    dctx.moveTo(cx,cy);
    dctx.arc(cx,cy,outer,a0,a1);
    dctx.closePath();
    dctx.fillStyle = colors[i];
    dctx.fill();
    a0 = a1;
  }
  // punch hole
  dctx.globalCompositeOperation = "destination-out";
  dctx.beginPath(); dctx.arc(cx,cy,inner,0,Math.PI*2); dctx.fill();
  dctx.globalCompositeOperation = "source-over";
  dctx.strokeStyle = "rgba(0,0,0,.10)";
  dctx.strokeRect(pad,pad,dw-pad*2,dh-pad*2);
}

function bindThemePreview(){
  const ids = ["chartColor1","chartColor2","chartColor3","chartColor4","chartColor5"];
  for(const id of ids){
    const el = document.getElementById(id);
    if(el && !el._previewBound){
      el._previewBound = true;
      el.addEventListener("input", ()=>{ drawThemePreview(); });
    }
  }
  drawThemePreview();
}
}

function fmtNumber(n){
  try{ return new Intl.NumberFormat(state.meta?.currency?.locale || "es-HN").format(n); }
  catch{ return String(n); }
}

function fmtCurrency(n){
  const locale = state.meta?.currency?.locale || "es-HN";
  const code = state.meta?.currency?.code || "HNL";
  try{ return new Intl.NumberFormat(locale, {style:"currency", currency:code, maximumFractionDigits:2}).format(n); }
  catch{ return String(n); }
}

function sum(rows, col){
  let t = 0;
  for(const r of rows){
    const n = toNum(r[col]);
    if(Number.isFinite(n)) t += n;
  }
  return t;
}

function uniqueValues(rows, col){
  const set = new Set();
  for(const r of rows){
    const v = r[col];
    if(v === null || v === undefined) continue;
    const s = String(v).trim();
    if(s) set.add(s);
  }
  return [...set].sort((a,b)=>a.localeCompare(b, "es"));
}

function setSelectOptions(selectEl, values){
  selectEl.innerHTML = values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
  selectEl.selectedIndex = -1;
}

function getSelected(selectEl){
  return [...selectEl.selectedOptions].map(o => o.value);
}

function setStatus(msg, kind=""){
  const el = $("dataStatus");
  const mini = document.getElementById("dataStatusMini");
  el.className = "status mt10" + (kind === "ok" ? " status--ok" : kind === "warn" ? " status--warn" : "");
  el.textContent = msg;
  if(mini){ mini.className = "status" + (kind === "ok" ? " status--ok" : kind === "warn" ? " status--warn" : ""); mini.textContent = msg; }
}

function label(col){
  return (state.meta?.labels && state.meta.labels[col]) ? state.meta.labels[col] : col;
}

function selectOptionInsensitive(selectEl, preferred){
  if(!selectEl) return false;
  const pref = String(preferred||"").toLowerCase();
  const opts = [...selectEl.options];
  const exact = opts.find(o => String(o.value).toLowerCase() === pref);
  if(exact){ selectEl.value = exact.value; return true; }
  return false;
}

function detectDelimiter(text){
  const first = text.split(/\r?\n/).find(l => l.trim().length);
  if(!first) return ";";
  const candidates = [";", ",", "\t", "|"];
  let best = ";", bestCount = -1;
  for(const d of candidates){
    const c = (first.match(new RegExp(`\\${d}`, "g")) || []).length;
    if(c > bestCount){ bestCount = c; best = d; }
  }
  return best;
}

function parseDelimited(text, delimiter){
  const lines = text.replace(/^\uFEFF/,"").split(/\r?\n/).filter(l => l.trim().length);
  if(!lines.length) return [];
  // parser simple con comillas
  const rows = [];
  for(const line of lines){
    const out = [];
    let cur = "";
    let inQ = false;
    for(let i=0;i<line.length;i++){
      const ch = line[i];
      if(ch === '"'){
        if(inQ && line[i+1] === '"'){ cur += '"'; i++; }
        else inQ = !inQ;
      } else if(!inQ && ch === delimiter){
        out.push(cur); cur = "";
      } else {
        cur += ch;
      }
    }
    out.push(cur);
    rows.push(out);
  }
  return rows;
}

function rowsFromMatrix(matrix){
  if(matrix.length < 2) return [];
  const header = matrix[0].map(h => String(h ?? "").trim());
  const rows = [];
  for(let i=1;i<matrix.length;i++){
    const r = {};
    for(let j=0;j<header.length;j++){
      const key = header[j] || `COL_${j+1}`;
      r[key] = matrix[i][j];
    }
    rows.push(r);
  }
  return rows;
}

function normalizeRows(rows){
  // normaliza nulos y trims
  return rows.map(r => {
    const o = {};
    for(const [k,v] of Object.entries(r)){
      const key = String(k).trim();
      let val = v;
      if(typeof val === "string") val = val.trim();
      if(val === "") val = null;
      o[key] = val;
    }
    return o;
  });
}

/* ---------- State ---------- */

const KPI_PREFS_KEY = "cpm_kpi_prefs_v1";
function defaultKpiPrefs(){
  return {
    count:   {show:true, color:"blue",   fmt:"number"},
    SaldoPendi:{show:true, color:"yellow", fmt:"currency"},
    Capital:{show:true, color:"blue", fmt:"currency"},
    Interes:{show:true, color:"blue", fmt:"currency"},
    InteresPen:{show:true, color:"blue", fmt:"currency"},
    Descuento:{show:true, color:"blue", fmt:"currency"},
  };
}
function loadKpiPrefs(){
  try{
    const raw = localStorage.getItem(KPI_PREFS_KEY);
    if(!raw) return defaultKpiPrefs();
    const obj = JSON.parse(raw);
    return {...defaultKpiPrefs(), ...(obj||{})};
  }catch(e){
    return defaultKpiPrefs();
  }
}
function saveKpiPrefs(p){
  try{ localStorage.setItem(KPI_PREFS_KEY, JSON.stringify(p)); }catch(e){}

function syncKpiUIFromPrefs(){
  const p = state.kpiPrefs || loadKpiPrefs();

  const setChecked = (id, v)=>{ const el=document.getElementById(id); if(el) el.checked = !!v; };
  const setValue = (id, v)=>{ const el=document.getElementById(id); if(el) el.value = String(v ?? ""); };

  setChecked("kpiShowCount", p.count.show);
  setValue("kpiColorCount", p.count.color);
  setValue("kpiFmtCount", p.count.fmt);

  setChecked("kpiShowSaldoPendi", p.SaldoPendi.show);
  setValue("kpiColorSaldoPendi", p.SaldoPendi.color);
  setValue("kpiFmtSaldoPendi", p.SaldoPendi.fmt);

  setChecked("kpiShowCapital", p.Capital.show);
  setValue("kpiColorCapital", p.Capital.color);
  setValue("kpiFmtCapital", p.Capital.fmt);

  setChecked("kpiShowInteres", p.Interes.show);
  setValue("kpiColorInteres", p.Interes.color);
  setValue("kpiFmtInteres", p.Interes.fmt);

  setChecked("kpiShowInteresPen", p.InteresPen.show);
  setValue("kpiColorInteresPen", p.InteresPen.color);
  setValue("kpiFmtInteresPen", p.InteresPen.fmt);

  setChecked("kpiShowDescuento", p.Descuento.show);
  setValue("kpiColorDescuento", p.Descuento.color);
  setValue("kpiFmtDescuento", p.Descuento.fmt);
}

function readKpiPrefsFromUI(){
  const getChecked = (id)=> !!document.getElementById(id)?.checked;
  const getValue = (id, def)=> String(document.getElementById(id)?.value ?? def);

  return {
    count: {show:getChecked("kpiShowCount"), color:getValue("kpiColorCount","blue"), fmt:getValue("kpiFmtCount","number")},
    SaldoPendi: {show:getChecked("kpiShowSaldoPendi"), color:getValue("kpiColorSaldoPendi","yellow"), fmt:getValue("kpiFmtSaldoPendi","currency")},
    Capital: {show:getChecked("kpiShowCapital"), color:getValue("kpiColorCapital","blue"), fmt:getValue("kpiFmtCapital","currency")},
    Interes: {show:getChecked("kpiShowInteres"), color:getValue("kpiColorInteres","blue"), fmt:getValue("kpiFmtInteres","currency")},
    InteresPen: {show:getChecked("kpiShowInteresPen"), color:getValue("kpiColorInteresPen","blue"), fmt:getValue("kpiFmtInteresPen","currency")},
    Descuento: {show:getChecked("kpiShowDescuento"), color:getValue("kpiColorDescuento","blue"), fmt:getValue("kpiFmtDescuento","currency")},
  };
}

}

const state = {
  rows: [],
  filtered: [],
  meta: null,

  filters: { proyecto:[], uso:[], mant:[], tipoCuenta:[], search:"", minSaldo:null, maxSaldo:null },
  metric: "SaldoPendi",
  topN: 10,
  page: 1,
  pageSize: 50,

  // Map
  layers: [],
  selectionByLayer: new Map(),
  mapView: null,
  basemapOn: true,
  basemapStyle: "standard",
  mapTool: "pan",
};

/* ---------- Metadata ---------- */
async function loadMeta(){
  const [colsRes, dictRes] = await Promise.all([
    fetch("data/columns.json").catch(()=>null),
    fetch("data/dictionary.json").catch(()=>null)
  ]);

  let meta = null;
  if(colsRes && colsRes.ok) meta = await colsRes.json();

  // dictionary.json es opcional (solo para trazabilidad)
  if(dictRes && dictRes.ok){
    const dict = await dictRes.json();
    meta = meta || {};
    meta.dictionary = dict;
  }

  // defaults
  meta = meta || {
    labels:{}, numericColumns:["SaldoPendi","Capital","Interes","InteresPen","Descuento"],
    categoryColumns:["NombreProy","Uso","DesTipMant","TipoCuenta"],
    searchColumns:["RicNom","CatCCa","Direccion","RutaCobro"],
    boolishColumns:[],
    currency:{locale:"es-HN", code:"HNL"},
    rawToInternal:{}
  };

  state.meta = meta;
}

/* ---------- Column aliasing (requerimiento 1a) ---------- */
function applyColumnAliases(rows){
  if(!rows.length) return rows;

  const map = state.meta?.rawToInternal || {};

  // Compatibilidad con versiones previas: mapeos conocidos a nombres internos
  const legacyPairs = [
    {from:"uso", to:"Uso"},
    {from:"usocatastral", to:"Uso"},
    {from:"catcod", to:"CatCod"},
    {from:"ccatastral", to:"CatCCa"},
    {from:"contribuyente", to:"RicNom"},
    {from:"telefono", to:"Tel"},
    {from:"saldopendiente", to:"SaldoPendi"},
    {from:"capital", to:"Capital"},
    {from:"intereses", to:"Interes"},
    {from:"interespendiente", to:"InteresPen"},
    {from:"codproyecto", to:"CodigoProy"},
    {from:"nombproyecto", to:"NombreProy"},
    {from:"desctipmanto", to:"DesTipMant"},
    {from:"direccioncobro", to:"Direccion"},
    {from:"rutacobro1", to:"RutaCobro"},
    {from:"tipocuenta1", to:"TipoCuenta"},
  ];

  return rows.map(r => {
    const out = {...r};
    const lowerKeyToActual = {};
    for(const k of Object.keys(out)) lowerKeyToActual[k.toLowerCase()] = k;

    // rawToInternal (del diccionario)
    for(const [raw, internal] of Object.entries(map)){
      const actual = lowerKeyToActual[String(raw).toLowerCase()];
      if(actual !== undefined){
        if(out[internal] === undefined || out[internal] === null) out[internal] = out[actual];
      }
    }

    // legacy (si vienen encabezados alternos)
    for(const p of legacyPairs){
      const actual = lowerKeyToActual[p.from];
      if(actual !== undefined){
        if(out[p.to] === undefined || out[p.to] === null) out[p.to] = out[actual];
      }
    }

    return out;
  });
}

/* ---------- Filtering ---------- */
function applyFilters(){
  const f = state.filters;
  const metric = state.metric;

  const rows = state.rows.filter(r => {
    const p = (f.proyecto.length ? f.proyecto.includes(String(r["NombreProy"] ?? "")) : true);
    const u = (f.uso.length ? f.uso.includes(String(r["Uso"] ?? "")) : true);
    const m = (f.mant.length ? f.mant.includes(String(r["DesTipMant"] ?? "")) : true);
    const t = (f.tipoCuenta.length ? f.tipoCuenta.includes(String(r["TipoCuenta"] ?? "")) : true);

    if(!(p && u && m && t)) return false;

    if(f.search){
      const q = f.search.toLowerCase();
      const cols = state.meta?.searchColumns || [];
      let ok = false;
      for(const c of cols){
        const v = r[c];
        if(v !== null && v !== undefined && String(v).toLowerCase().includes(q)) { ok = true; break; }
      }
      if(!ok) return false;
    }

    const mv = toNum(r[metric]);
    if(f.minSaldo !== null && Number.isFinite(f.minSaldo)){
      if(!Number.isFinite(mv) || mv < f.minSaldo) return false;
    }
    if(f.maxSaldo !== null && Number.isFinite(f.maxSaldo)){
      if(!Number.isFinite(mv) || mv > f.maxSaldo) return false;
    }

    return true;
  });

  state.filtered = rows;
  state.page = 1;
  renderAppliedChips();
  renderAll();
  updateMapSelection();
}

function renderAppliedChips(){
  const chips = [];
  const f = state.filters;
  if(f.proyecto.length) chips.push(...f.proyecto.map(v=>({k:"Proyecto", v})));
  if(f.uso.length) chips.push(...f.uso.map(v=>({k:"Uso", v})));
  if(f.mant.length) chips.push(...f.mant.map(v=>({k:"Mantenimiento", v})));
  if(f.tipoCuenta.length) chips.push(...f.tipoCuenta.map(v=>({k:"Tipo", v})));
  if(f.search) chips.push({k:"Buscar", v:f.search});
  if(f.minSaldo !== null) chips.push({k:"Mín", v:String(f.minSaldo)});
  if(f.maxSaldo !== null) chips.push({k:"Máx", v:String(f.maxSaldo)});

  const el = $("appliedFilters");
  if(!chips.length){
    el.textContent = "Ninguno";
    return;
  }
  el.innerHTML = chips.map(c => `<span class="chip chip--accent">${escapeHtml(c.k)}: ${escapeHtml(c.v)}</span>`).join("");
}

/* ---------- KPIs + Charts ---------- */
function renderKPIs(){
  const rows = state.filtered;
  const prefs = state.kpiPrefs || loadKpiPrefs();

  const total = rows.length;
  const sumSaldo = sum(rows, "SaldoPendi");
  const sumCap = sum(rows, "Capital");
  const sumInt = sum(rows, "Interes");
  const sumIntPen = sum(rows, "InteresPen");
  const sumDesc = sum(rows, "Descuento");

  const items = [
    {id:"count", label:"Registros", value: total, sub:"Filtrados"},
    {id:"SaldoPendi", label: label("SaldoPendi"), value: sumSaldo, sub:"Suma"},
    {id:"Capital", label: label("Capital"), value: sumCap, sub:"Suma"},
    {id:"Interes", label: label("Interes"), value: sumInt, sub:"Suma"},
    {id:"InteresPen", label: label("InteresPen"), value: sumIntPen, sub:"Suma"},
    {id:"Descuento", label: label("Descuento"), value: sumDesc, sub:"Suma"},
  ];

  const fmtVal = (id, v)=>{
    const p = prefs[id] || prefs.count;
    const fmt = p.fmt || (id==="count" ? "number" : "currency");
    if(fmt === "currency") return fmtCurrency(v);
    return fmtNumber(v);
  };

  const cards = items.filter(it => (prefs[it.id]?.show ?? true)).map(it=>{
    const p = prefs[it.id] || {};
    const color = p.color || "neutral";
    return `
      <div class="kpi kpi--${escapeHtml(color)}" data-kpi="${escapeHtml(it.id)}">
        <div class="kpi__label">${escapeHtml(it.label)}</div>
        <div class="kpi__value">${escapeHtml(fmtVal(it.id, it.value))}</div>
        <div class="kpi__sub">${escapeHtml(it.sub)}</div>
      </div>
    `;
  });

  $("kpis").innerHTML = cards.join("");

  // títulos de charts
  const metric = state.metric;
  $("chart1Title").textContent = `${label(metric)} por ${label("NombreProy")}`;
  $("chart2Title").textContent = `${label(metric)} por ${label("Uso")}`;
  $("chart4Title").textContent = `Top Contribuyentes por ${label(metric)}`;
}

function clearCanvas(canvas){
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.round(rect.width * dpr));
  canvas.height = Math.max(1, Math.round(rect.height * dpr));
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,rect.width, rect.height);
  return {ctx, w: rect.width, h: rect.height};
}

function drawBarChart(canvas, items, opts={}){
  const {ctx, w, h} = clearCanvas(canvas);
  const pad = 14;
  const chartW = w - pad*2;
  const chartH = h - pad*2;

  // Plot area: 85% height (rest reserved for eje X / etiquetas)
  const plotH = Math.floor(chartH * 0.85);

  const max = Math.max(1, ...items.map(d => d.value));
  const hoverIndex = Number.isInteger(opts.hoverIndex) ? opts.hoverIndex : -1;

  const cs = getComputedStyle(document.documentElement);
  const barColor = cs.getPropertyValue("--chart-c1").trim() || "rgba(254,220,151,.92)";
  const mutedColor = cs.getPropertyValue("--muted-color").trim() || "rgba(235,235,235,.75)";
  const textColor = cs.getPropertyValue("--text-color").trim() || "rgba(235,235,235,.9)";
  const accent = cs.getPropertyValue("--accent-color").trim() || "#FFC928";
  const fontFamily = cs.getPropertyValue("--font-family").trim() || "ui-sans-serif";
  const baseFont = parseInt((cs.getPropertyValue("--font-size")||"14").trim(),10) || 14;

  ctx.fillStyle = "rgba(0,0,0,.12)";
  ctx.fillRect(pad, pad, chartW, chartH);

  const barGap = 6;
  const n = items.length;
  const barW = n ? (chartW - (n-1)*barGap)/n : chartW;

  const usableH = Math.max(10, plotH - 10);

  const rects = [];
  for(let i=0;i<n;i++){
    const x = pad + i*(barW+barGap);
    const bh = (items[i].value / max) * usableH;
    const y = pad + (plotH - bh);

    rects.push({x, y, w: barW, h: bh});

    ctx.save();
    if(hoverIndex >= 0 && i !== hoverIndex) ctx.globalAlpha = 0.55;
    ctx.fillStyle = barColor;
    ctx.fillRect(x, y, barW, bh);

    if(i === hoverIndex){
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(x+1, y+1, Math.max(0,barW-2), Math.max(0,bh-2));
    }
    ctx.restore();

    const lbl = (items[i].label ?? "").toString();
    const short = lbl.length > 16 ? lbl.slice(0,16) + "…" : lbl;

    ctx.fillStyle = mutedColor;
    ctx.font = `${Math.max(11, baseFont-2)}px ${fontFamily}`;
    ctx.save();
    ctx.translate(x + barW/2, pad + plotH + 6);
    ctx.rotate(-Math.PI/6);
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText(short, 0, 0);
    ctx.restore();
  }

  if(opts.title){
    ctx.fillStyle = textColor;
    ctx.font = `700 ${Math.max(12, baseFont-2)}px ${fontFamily}`;
    ctx.fillText(opts.title, pad, pad+2);
  }

  canvas._chartInfo = {type:"bar", items, rects};
}

function drawPieLike(canvas, items, opts={}){
  const {ctx, w, h} = clearCanvas(canvas);
  const pad = 14;
  const chartW = w - pad*2;
  const chartH = h - pad*2;
  const cs = getComputedStyle(document.documentElement);

  const colors = [
    cs.getPropertyValue("--chart-c1").trim() || "rgba(254,220,151,.92)",
    cs.getPropertyValue("--chart-c2").trim() || "rgba(59,130,246,.90)",
    cs.getPropertyValue("--chart-c3").trim() || "rgba(34,197,94,.90)",
    cs.getPropertyValue("--chart-c4").trim() || "rgba(250,204,21,.90)",
    cs.getPropertyValue("--chart-c5").trim() || "rgba(244,63,94,.90)"
  ];
  const textColor = cs.getPropertyValue("--text-color").trim() || "rgba(235,235,235,.9)";
  const mutedColor = cs.getPropertyValue("--muted-color").trim() || "rgba(235,235,235,.75)";
  const accent = cs.getPropertyValue("--accent-color").trim() || "#FFC928";
  const fontFamily = cs.getPropertyValue("--font-family").trim() || "ui-sans-serif";
  const baseFont = parseInt((cs.getPropertyValue("--font-size")||"14").trim(),10) || 14;

  ctx.fillStyle = "rgba(0,0,0,.12)";
  ctx.fillRect(pad, pad, chartW, chartH);

  const total = items.reduce((a,b)=>a+(b.value||0),0) || 1;

  const cx = w/2, cy = h/2;
  const outerR = Math.min(chartW, chartH) * 0.34;
  const innerR = outerR * 0.55;

  let angle = -Math.PI/2;
  const segs = [];
  const hoverIndex = Number.isInteger(opts.hoverIndex) ? opts.hoverIndex : -1;

  for(let i=0;i<items.length;i++){
    const frac = (items[i].value||0)/total;
    const a0 = angle;
    const a1 = angle + frac * Math.PI*2;

    segs.push({a0, a1});

    ctx.save();
    if(hoverIndex >= 0 && i !== hoverIndex) ctx.globalAlpha = 0.55;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, outerR, a0, a1);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    if(i === hoverIndex){
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();

    angle = a1;
  }

  // hole
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
  ctx.globalCompositeOperation = "source-over";

  // legend
  ctx.font = `${Math.max(11, baseFont-2)}px ${fontFamily}`;
  let y = pad + 10;
  for(let i=0;i<items.length;i++){
    const lbl = (items[i].label ?? "").toString();
    const short = lbl.length > 22 ? lbl.slice(0,22) + "…" : lbl;
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(pad+8, y-8, 10, 10);
    ctx.fillStyle = mutedColor;
    ctx.fillText(short, pad+26, y);
    y += 16;
    if(y > h - pad - 8) break;
  }

  if(opts.title){
    ctx.fillStyle = textColor;
    ctx.font = `700 ${Math.max(12, baseFont-2)}px ${fontFamily}`;
    ctx.fillText(opts.title, pad, pad+2);
  }

  canvas._chartInfo = {type:"donut", items, segs, cx, cy, innerR, outerR};
}


/* ---------- Chart hover tooltip (v11) ---------- */
function ensureChartTooltip(){
  let t = document.getElementById("chartTooltip");
  if(!t){
    t = document.createElement("div");
    t.id = "chartTooltip";
    t.className = "chartTooltip";
    t.style.display = "none";
    t.innerHTML = '<div class="tTitle"></div><div class="tVal"></div>';
    document.body.appendChild(t);
  }
  return t;
}

function showChartTooltip(title, value, x, y){
  const t = ensureChartTooltip();
  t.querySelector(".tTitle").textContent = title;
  t.querySelector(".tVal").textContent = value;
  t.style.left = (x + 12) + "px";
  t.style.top = (y + 12) + "px";
  t.style.display = "block";
}

function hideChartTooltip(){
  const t = document.getElementById("chartTooltip");
  if(t) t.style.display = "none";
}

function bindChartHover(canvas){
  if(!canvas || canvas._hoverBound) return;
  canvas._hoverBound = true;

  canvas.addEventListener("mouseleave", ()=>{
    canvas._hoverIndex = -1;
    hideChartTooltip();
    const info = canvas._chartInfo;
    if(info){
      if(info.type==="bar") drawBarChart(canvas, info.items, {hoverIndex:-1});
      if(info.type==="donut") drawPieLike(canvas, info.items, {hoverIndex:-1});
    }
  });

  canvas.addEventListener("mousemove", (e)=>{
    const info = canvas._chartInfo;
    if(!info) return;
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * sx;
    const my = (e.clientY - rect.top) * sy;

    let idx = -1;

    if(info.type==="bar"){
      for(let i=0;i<info.rects.length;i++){
        const r = info.rects[i];
        if(mx>=r.x && mx<=r.x+r.w && my>=r.y && my<=r.y+r.h){ idx = i; break; }
      }
    } else if(info.type==="donut"){
      const dx = mx - info.cx, dy = my - info.cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist>=info.innerR && dist<=info.outerR){
        let ang = Math.atan2(dy, dx);
        if(ang < -Math.PI/2) ang += Math.PI*2;
        // normalize to [start,end] space
        for(let i=0;i<info.segs.length;i++){
          const s = info.segs[i];
          if(ang >= s.a0 && ang <= s.a1){ idx = i; break; }
        }
      }
    }

    if(idx !== canvas._hoverIndex){
      canvas._hoverIndex = idx;
      if(info.type==="bar") drawBarChart(canvas, info.items, {hoverIndex: idx});
      if(info.type==="donut") drawPieLike(canvas, info.items, {hoverIndex: idx});
    }

    if(idx>=0){
      const it = info.items[idx];
      const val = (info.type==="bar") ? fmtCurrency(it.value) : fmtNumber(it.value);
      showChartTooltip(String(it.label ?? ""), val, e.clientX, e.clientY);
    } else {
      hideChartTooltip();
    }
  });
}

function capItems(items, max, othersLabel="Otros"){
  if(!Array.isArray(items)) return [];
  if(items.length <= max) return items;
  const top = items.slice(0, Math.max(1, max-1));
  const rest = items.slice(Math.max(1, max-1));
  const sum = rest.reduce((a,b)=> a + (Number(b.value)||0), 0);
  top.push({label: othersLabel, value: sum});
  return top;
}

function renderCharts(){
  const rows = state.filtered;
  const metric = state.metric;
  const topN = state.topN;
  const barMax = Math.min(Math.max(5, topN||10), 18);
  const donutMax = 8;

  // proyecto
  const byProj = new Map();
  for(const r of rows){
    const k = String(r["NombreProy"] ?? "Sin proyecto");
    byProj.set(k, (byProj.get(k)||0) + (toNum(r[metric])||0));
  }
  const projAll = [...byProj.entries()]
    .map(([label,value])=>({label, value}))
    .sort((a,b)=>b.value-a.value);
  const projItems = capItems(projAll, barMax, "Otros");
  drawBarChart($("chartByProject"), projItems);
  bindChartHover($("chartByProject"));

  // uso
  const byUso = new Map();
  for(const r of rows){
    const k = String(r["Uso"] ?? "Sin uso");
    byUso.set(k, (byUso.get(k)||0) + (toNum(r[metric])||0));
  }
  const usoAll = [...byUso.entries()]
    .map(([label,value])=>({label, value}))
    .sort((a,b)=>b.value-a.value);
  const usoItems = capItems(usoAll, barMax, "Otros");
  drawBarChart($("chartByUse"), usoItems);
  bindChartHover($("chartByUse"));

  // tipo cuenta (conteo)
  const byTipo = new Map();
  for(const r of rows){
    const k = String(r["TipoCuenta"] ?? "Sin tipo");
    byTipo.set(k, (byTipo.get(k)||0) + 1);
  }
  const tipoAll = [...byTipo.entries()]
    .map(([label,value])=>({label, value}))
    .sort((a,b)=>b.value-a.value);
  const tipoItems = capItems(tipoAll, donutMax, "Otros");
  drawPieLike($("chartByTipoCuenta"), tipoItems);
  bindChartHover($("chartByTipoCuenta"));

  // top contribuyentes
  renderTopTable();
}

function renderTopTable(){
  const rows = state.filtered;
  const metric = state.metric;
  const topN = state.topN;

  const top = rows
    .map(r => ({
      name: String(r["RicNom"] ?? "Sin nombre"),
      clave: String(r["CatCCa"] ?? ""),
      value: toNum(r[metric])
    }))
    .filter(d => Number.isFinite(d.value))
    .sort((a,b)=> b.value - a.value)
    .slice(0, topN);

  const tb = $("topTable").querySelector("tbody");
  tb.innerHTML = top.map((d,i)=>`
    <tr>
      <td>${i+1}</td>
      <td>${escapeHtml(d.name)}</td>
      <td>${escapeHtml(d.clave)}</td>
      <td class="right">${fmtCurrency(d.value)}</td>
    </tr>
  `).join("");

  // header
  const th = $("topTable").querySelectorAll("thead th");
  if(th.length >= 4) th[3].textContent = label(metric);
}

function renderDetailTable(){
  const rows = state.filtered;
  const pageSize = state.pageSize;
  const page = state.page;

  $("tableCount").textContent = `${fmtNumber(rows.length)} registros`;

  // columnas clave + pagos si existen
  const baseCols = [
    "CatCCa","RicNom","NombreProy","Uso","DesTipMant","TipoCuenta",
    "Capital","SaldoPendi","Interes","InteresPen","Descuento","Direccion",
    "ValorPagados","FechaPagados","Recibo"
  ];
  const cols = baseCols.filter(c => rows.length === 0 ? true : (c in rows[0]));

  const thead = $("detailTable").querySelector("thead");
  thead.innerHTML = `<tr>` + cols.map(c => `<th>${escapeHtml(label(c))}</th>`).join("") + `</tr>`;

  const start = (page-1)*pageSize;
  const end = Math.min(rows.length, start + pageSize);
  const slice = rows.slice(start, end);

  const tbody = $("detailTable").querySelector("tbody");
  tbody.innerHTML = slice.map(r => `
    <tr>
      ${cols.map(c => {
        const v = r[c];
        if(state.meta?.numericColumns?.includes(c)) return `<td class="right">${fmtCurrency(toNum(v)||0)}</td>`;
        return `<td>${escapeHtml(v ?? "")}</td>`;
      }).join("")}
    </tr>
  `).join("");

  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  $("pageInfo").textContent = `Página ${page} de ${totalPages}`;
  $("prevPage").disabled = page <= 1;
  $("nextPage").disabled = page >= totalPages;
}

function renderAll(){
  renderKPIs();
  renderCharts();
  renderDetailTable();
}

/* ---------- Filters UI ---------- */
function populateFilters(){
  const rows = state.rows;
  setSelectOptions($("fProyecto"), uniqueValues(rows, "NombreProy"));
  setSelectOptions($("fUso"), uniqueValues(rows, "Uso"));
  setSelectOptions($("fMant"), uniqueValues(rows, "DesTipMant"));
  setSelectOptions($("fTipoCuenta"), uniqueValues(rows, "TipoCuenta"));

  // métricas
  const metrics = (state.meta?.numericColumns?.length)
    ? state.meta.numericColumns
    : ["SaldoPendi","Capital","Interes","InteresPen","Descuento"];

  const sel = $("metricSelect");
  sel.innerHTML = metrics.map(m => `<option value="${m}">${escapeHtml(label(m))}</option>`).join("");
  if(metrics.includes(state.metric)) sel.value = state.metric;
  else { state.metric = metrics[0]; sel.value = state.metric; }
}

function resetFilters(all=false){
  $("fProyecto").selectedIndex = -1;
  $("fUso").selectedIndex = -1;
  $("fMant").selectedIndex = -1;
  $("fTipoCuenta").selectedIndex = -1;
  $("searchText").value = "";
  $("minSaldo").value = "";
  $("maxSaldo").value = "";

  state.filters = {proyecto:[], uso:[], mant:[], tipoCuenta:[], search:"", minSaldo:null, maxSaldo:null};

  if(all){
    const metrics = state.meta?.numericColumns || [];
    state.metric = metrics.includes("SaldoPendi") ? "SaldoPendi" : (metrics[0] || "SaldoPendi");
    $("metricSelect").value = state.metric;
    state.topN = 10;
    $("topN").value = "10";
  }
  applyFilters();
}

/* ---------- Data loading ---------- */
async function loadCsvText(text){
  const delimiter = detectDelimiter(text);
  const matrix = parseDelimited(text, delimiter);
  if(!matrix.length) throw new Error("Archivo vacío");

  const rawRows = rowsFromMatrix(matrix);
  const aliasedRows = applyColumnAliases(rawRows);
  const rows = normalizeRows(aliasedRows);

  state.rows = rows;
  state.filtered = rows;

  populateFilters();
  setStatus(`Datos cargados: ${fmtNumber(rows.length)} registros. Delimitador detectado: ${delimiter === "\t" ? "TAB" : delimiter}`, "ok");
  applyFilters();
}

async function loadExample(){
  try{
    const res = await fetch("data/sample.csv");
    if(!res.ok) throw new Error("fetch sample.csv falló");
    const text = await res.text();
    await loadCsvText(text);
  } catch (e){
    setStatus("No se pudo cargar el ejemplo. Sugerencia: abre el dashboard con un servidor local (python -m http.server) o carga el CSV/TXT manualmente.", "warn");
  }
}

function exportFiltered(){
  if(!state.filtered.length){
    alert("No hay datos filtrados para exportar.");
    return;
  }
  const cols = Object.keys(state.filtered[0]);
  const delimiter = ";";
  const escape = (v) => {
    const s = (v === null || v === undefined) ? "" : String(v);
    if(s.includes('"') || s.includes(delimiter) || s.includes("\n") || s.includes("\r")){
      return `"${s.replaceAll('"','""')}"`;
    }
    return s;
  };
  let out = cols.join(delimiter) + "\n";
  for(const r of state.filtered){
    out += cols.map(c => escape(r[c])).join(delimiter) + "\n";
  }
  const blob = new Blob([out], {type:"text/csv;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `filtrado_${Date.now()}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ---------- Resize observers (requerimiento 1c) ---------- */
let chartResizeTimer = null;
function setupChartResize(){
  const canvases = [
    $("chartByProject"),
    $("chartByUse"),
    $("chartByTipoCuenta"),
  ];

  if(!("ResizeObserver" in window)){
    window.addEventListener("resize", ()=>{
      clearTimeout(chartResizeTimer);
      chartResizeTimer = setTimeout(()=> renderCharts(), 80);
    });
    return;
  }

  const ro = new ResizeObserver(()=>{
    clearTimeout(chartResizeTimer);
    chartResizeTimer = setTimeout(()=> renderCharts(), 80);
  });

  canvases.forEach(c => {
    if(c) ro.observe(c.parentElement);
  });
}

/* ---------- Map + Layers (requerimiento 2) ---------- */

function openLayerModal(){
  showModalById("layerModal");
  $("layerZipInput").value = "";
  $("layerMeta").textContent = "Sin archivo seleccionado.";
  $("joinOptions").hidden = true;
  $("linkToTxt").checked = false;

  const hasData = state.rows.length > 0;
  $("linkToTxt").disabled = !hasData;
  $("linkDisabledHint").style.display = hasData ? "none" : "block";

  // limpiar selects
  $("shpJoinField").innerHTML = "";
  // sugerencia de campo geográfico clavecatas
  selectOptionInsensitive($("shpJoinField"), DEFAULT_JOIN_GEO);
  $("txtJoinField").innerHTML = "";

  // llenar txt fields
  if(hasData){
    const cols = Object.keys(state.rows[0] || {});
    $("txtJoinField").innerHTML = cols.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(label(c))}</option>`).join("");
  }

  // sugerencias (Edwin): TXT=CCATASTRAL, GEO=clavecatas
  if(hasData){
    if(!selectOptionInsensitive($("txtJoinField"), DEFAULT_JOIN_TXT)){
      // fallback al nombre interno del tablero
      selectOptionInsensitive($("txtJoinField"), "CatCCa");
    }
  }

}

function closeLayerModal(){
  hideModalById("layerModal");
}

// ---- Modal estilo de capa (popup) ----
state.styleLayerId = null;


function openStyleModal(layerId){
  if(layerId && typeof layerId === "object" && layerId.id){ layerId = layerId.id; }
  const ly = state.layers.find(l=>l.id===layerId);
  if(!ly) return;
  state.styleLayerId = layerId;

  ly.geomType = ly.geomType || inferGeomType(ly.geojson);
  const geomType = ly.geomType;

  // draft style: edit locally (preview-only); apply to layer on OK
  state.styleDraft = JSON.parse(JSON.stringify(ly.style || {}));

  showModalById("styleModal");
  renderPointIconSvgs();

  const lbl = $("styleGeomLabel");
  if(lbl){
    lbl.textContent = geomType === "point" ? "Puntos" : (geomType === "line" ? "Líneas" : (geomType === "polygon" ? "Polígonos" : ""));
  }

  // show/hide point options
  const pointBlock = $("stylePointBlock");
  const radiusField = $("styleRadiusField");
  if(pointBlock) pointBlock.style.display = (geomType === "point") ? "block" : "none";
  if(radiusField) radiusField.style.display = (geomType === "point") ? "block" : "none";

  const d = state.styleDraft;
  // defaults if missing
  d.stroke = d.stroke || "#111827";
  d.fill = d.fill || "#60a5fa";
  d.opacity = (d.opacity ?? 0.6);
  d.weight = (d.weight ?? 2);
  if(geomType === "point"){
    d.radius = (d.radius ?? 6);
    d.shape = (d.shape ?? "circle");
  }

  // sync UI
  $("styleWeightNum").value = Number(d.weight);
  $("styleOpacityPct").value = Math.round(Number(d.opacity) * 100);
  if($("styleRadiusNum")) $("styleRadiusNum").value = Number(d.radius ?? 6);

  $("styleStrokeSwatch").style.background = d.stroke;
  $("styleFillSwatch").style.background = d.fill;

  setActiveShape(String(d.shape ?? "circle"));

  // preset colors grid: rebuild every open (simple + robust)
  const presetWrap = $("stylePresetColors");
  if(presetWrap){
    presetWrap.innerHTML = STYLE_PALETTE.filter(c=>c!=="#000000").slice(0,24).map(c=>`<button data-c="${c}" style="background:${c}" title="${c}"></button>`).join("");
    presetWrap.querySelectorAll("button").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const c = btn.getAttribute("data-c");
        if(!c) return;
        if(geomType === "line"){
          d.stroke = c;
          $("styleStrokeSwatch").style.background = c;
        } else {
          d.fill = c;
          $("styleFillSwatch").style.background = c;
        }
        drawStylePreview(geomType, d);
      });
    });
  }

  // shape buttons (geometric)
  const grid = $("styleShapeGrid");
  if(grid){
    grid.querySelectorAll(".shapeBtn").forEach(btn=>{
      btn.onclick = ()=>{
        const sh = btn.getAttribute("data-shape");
        if(!sh) return;
        d.shape = sh;
        setActiveShape(sh);
        drawStylePreview(geomType, d);
      };
    });
  }

  // icon buttons (point-only)
  const iconGrid = $("styleIconGrid");
  if(iconGrid){
    iconGrid.querySelectorAll(".iconBtn").forEach(btn=>{
      btn.onclick = ()=>{
        const sh = btn.getAttribute("data-shape");
        if(!sh) return;
        d.shape = sh; // e.g. icon:pin
        setActiveShape(sh);
        drawStylePreview(geomType, d);
      };
    });
  }

  // swatch popovers (preview-only)
  $("styleStrokeSwatch").onclick = (e)=>{
    e.stopPropagation();
    openStyleColorPop(e.currentTarget, d.stroke, (hex)=>{
      d.stroke = hex;
      $("styleStrokeSwatch").style.background = hex;
      drawStylePreview(geomType, d);
    });
  };
  $("styleFillSwatch").onclick = (e)=>{
    e.stopPropagation();
    openStyleColorPop(e.currentTarget, d.fill, (hex)=>{
      d.fill = hex;
      $("styleFillSwatch").style.background = hex;
      drawStylePreview(geomType, d);
    });
  };

  // live controls (preview-only)
  $("styleWeightNum").oninput = ()=>{
    const w = Number($("styleWeightNum").value);
    if(!Number.isNaN(w)) d.weight = w;
    drawStylePreview(geomType, d);
  };
  $("styleOpacityPct").oninput = ()=>{
    let op = Number($("styleOpacityPct").value);
    if(Number.isNaN(op)) op = 60;
    op = clamp(op,0,100);
    d.opacity = op/100;
    drawStylePreview(geomType, d);
  };
  if($("styleRadiusNum")){
    $("styleRadiusNum").oninput = ()=>{
      let r = Number($("styleRadiusNum").value);
      if(Number.isNaN(r)) r = 6;
      d.radius = clamp(r,1,40);
      drawStylePreview(geomType, d);
    };
  }

  // initial preview
  drawStylePreview(geomType, d);
}


function closeStyleModal(){
  hideModalById("styleModal");
  state.styleLayerId = null;
  state.styleDraft = null;
  const pop = document.getElementById("styleColorPop");
  if(pop) pop.classList.remove("open");
}

function applyStyleModal(e){
  if(e){ e.preventDefault(); e.stopPropagation(); }
  const id = state.styleLayerId;
  const ly = state.layers.find(l=>l.id===id);
  if(ly && state.styleDraft){
    // apply draft to the layer (single redraw, better performance)
    ly.style = Object.assign({}, ly.style || {}, state.styleDraft);
  }
  closeStyleModal();
  try{
    // redraw once so the new style is visible immediately
    state.mapView?.draw();
  }catch(err){}
}

function resetStyleModal(e){
  if(e){ e.preventDefault(); e.stopPropagation(); }
  const id = state.styleLayerId;
  const ly = state.layers.find(l=>l.id===id);
  if(!ly || !state.styleDraft) return;

  const t = ly.geomType || inferGeomType(ly.geojson);
  const d = state.styleDraft;
  if(t === "line"){
    d.stroke = "#3b82f6";
    d.fill = "#3b82f6";
    d.opacity = 0.8;
    d.weight = 2.5;
  } else if(t === "polygon"){
    d.stroke = "#3b82f6";
    d.fill = "#60a5fa";
    d.opacity = 0.35;
    d.weight = 2;
  } else { // point
    d.stroke = "#3b82f6";
    d.fill = "#60a5fa";
    d.opacity = 0.8;
    d.weight = 2;
    d.radius = 6;
    d.shape = "circle";
  }

  // sync UI
  $("styleStrokeSwatch").style.background = d.stroke;
  $("styleFillSwatch").style.background = d.fill;
  $("styleWeightNum").value = Number(d.weight);
  $("styleOpacityPct").value = Math.round(Number(d.opacity) * 100);
  if($("styleRadiusNum")) $("styleRadiusNum").value = Number(d.radius ?? 6);
  setActiveShape(String(d.shape ?? "circle"));
  drawStylePreview(t, d);
}


function closeStyleModal(){
  hideModalById("styleModal");
  state.styleLayerId = null;
}
function applyStyleModal(){
  // Styles are already live-updated; OK should just close and redraw once
  try{
    // close any open color popover
    const pop = document.getElementById("styleColorPop");
    if(pop) pop.classList.remove("open");
    closeStyleModal();
  } finally {
    try{ state.mapView?.draw(); } catch(e){}
  }
}


function renderLayerList(){
  const el = $("layerList");
  if(!state.layers.length){
    el.innerHTML = `<div class="muted tiny">(Sin capas)</div>`;
    return;
  }

  el.innerHTML = state.layers.map((ly, idx)=>{
    const joinTxt = ly.join?.enabled ? `${label(ly.join.txtKey)} ↔ ${ly.join.shpKey}` : "No vinculada";
    return `
      <div class="layerItem" data-id="${ly.id}">
        <div class="layerRow">
          <input type="checkbox" class="layerToggle lyVis" title="Mostrar/ocultar" ${ly.visible ? "checked" : ""} />
          <div class="layerName">${escapeHtml(ly.name)}</div>
          <button class="layerMenuBtn lyMenu" title="Opciones" aria-label="Opciones">⋯</button>
        </div>

        <div class="layerMenu">
          <button class="lyUp" ${idx===0?"disabled":""}>${svgIcon("layerUp")} Subir capa</button>
          <button class="lyDown" ${idx===state.layers.length-1?"disabled":""}>${svgIcon("layerDown")} Bajar capa</button>
          <button class="lyStyle">${svgIcon("style")} Estilo</button>
          <button class="lySave">${svgIcon("download")} Guardar GeoJSON</button>
          <button class="lyDel">${svgIcon("trash")} Quitar capa</button>
        </div>

        <div class="muted tiny mt6">${escapeHtml(joinTxt)}</div>
      </div>
    `;
  }).join("");

  // Delegación de eventos
  const closeAllMenus = ()=>{
    el.querySelectorAll(".layerMenu.open").forEach(m=>m.classList.remove("open"));
  };

  el.querySelectorAll(".layerItem").forEach(item=>{
    const id = item.getAttribute("data-id");
    const layer = state.layers.find(l=>l.id===id);

    item.querySelector(".lyVis").addEventListener("change", (e)=>{
      layer.visible = e.target.checked;
      state.mapView?.draw();
      syncBasemapAuto();
    });

    const menuBtn = item.querySelector(".lyMenu");
    const menu = item.querySelector(".layerMenu");

    menuBtn.addEventListener("click", (e)=>{
      e.stopPropagation();
      const isOpen = menu.classList.contains("open");
      closeAllMenus();
      if(!isOpen) menu.classList.add("open");
    });

    item.querySelector(".lyUp").addEventListener("click", ()=>{
      const i = state.layers.findIndex(l=>l.id===id);
      if(i>0){
        const tmp = state.layers[i-1];
        state.layers[i-1] = state.layers[i];
        state.layers[i] = tmp;
        renderLayerList();
        state.mapView?.draw();
      }
    });
    item.querySelector(".lyDown").addEventListener("click", ()=>{
      const i = state.layers.findIndex(l=>l.id===id);
      if(i < state.layers.length-1){
        const tmp = state.layers[i+1];
        state.layers[i+1] = state.layers[i];
        state.layers[i] = tmp;
        renderLayerList();
        state.mapView?.draw();
      }
    });
    item.querySelector(".lyStyle").addEventListener("click", ()=>{
      closeAllMenus();
      openStyleModal(id);
    });
    item.querySelector(".lySave").addEventListener("click", ()=>{
      closeAllMenus();
      saveLayerGeoJSON(layer);
    });
    item.querySelector(".lyDel").addEventListener("click", ()=>{
      closeAllMenus();
      removeLayer(id);
    });
  });

  // cerrar al hacer click fuera
  document.addEventListener("click", ()=>{
    closeAllMenus();
  }, {once:true});
}

function syncBasemapAuto(){
  const hint = $("basemapHint");
  const btn = $("mapBasemapToggle");

  const visible = state.layers.filter(l=>l.visible);
  const hasProjected = visible.some(l => l.crs === "plane");

  // Si hay capas proyectadas visibles, forzar OFF
  if(hasProjected){
    state.mapView?.setBasemap(false);
    btn?.classList.remove("is-active");
    hint.textContent = "Mapa base desactivado: hay capas en coordenadas proyectadas visibles.";
    return;
  }

  // En modo geo, respetar la preferencia del usuario
  state.mapView?.setBasemap(state.basemapOn);

  if(btn){
    btn.classList.toggle("is-active", !!state.basemapOn);
  }

  // Mensaje si offline
  if(state.basemapOn && !navigator.onLine){
    hint.textContent = "Sin conexión: el mapa base no se puede visualizar.";
  } else {
    // limpiar hint (CanvasMap puede setearlo si falla tiles)
    if(hint.textContent && hint.textContent.startsWith("Sin conexión")) hint.textContent = "";
  }
}


function updateMapSelection(){
  // recalcula selección por capa vinculada
  for(const ly of state.layers){
    if(ly.join?.enabled){
      const key = ly.join.txtKey;
      const sel = new Set(state.filtered.map(r => String(r[key] ?? "")).filter(s=>s));
      state.selectionByLayer.set(ly.id, sel);
    } else {
      state.selectionByLayer.delete(ly.id);
    }
  }
  state.mapView?.draw();
}

async function saveGeoJSONPrompt(layer){
  const jsonStr = JSON.stringify(layer.geojson);
  const suggested = `${layer.name.replace(/[^a-z0-9_-]/gi, "_")}.geojson`;

  // si hay File System Access API -> selector de carpeta/archivo
  if("showSaveFilePicker" in window){
    try{
      const handle = await window.showSaveFilePicker({
        suggestedName: suggested,
        types: [{ description: "GeoJSON", accept: { "application/geo+json": [".geojson", ".json"] }}]
      });
      const writable = await handle.createWritable();
      await writable.write(jsonStr);
      await writable.close();
      return;
    } catch(e){
      // cancelado o no permitido
    }
  }

  // fallback descarga
  const blob = new Blob([jsonStr], {type:"application/geo+json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = suggested;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function readZipDbfFields(file){
  const zip = await JSZip.loadAsync(file);
  const files = Object.keys(zip.files);
  const dbfName = files.find(n => n.toLowerCase().endsWith(".dbf"));
  if(!dbfName) throw new Error("El ZIP no contiene .dbf");
  const buf = await zip.file(dbfName).async("arraybuffer");
  return parseDbfHeader(buf);
}

async function parseZipToGeoJSON(file, crsOverride){
  const zip = await JSZip.loadAsync(file);
  const names = Object.keys(zip.files);
  const shpName = names.find(n => n.toLowerCase().endsWith(".shp"));
  const dbfName = names.find(n => n.toLowerCase().endsWith(".dbf"));
  const prjName = names.find(n => n.toLowerCase().endsWith(".prj"));
  if(!shpName || !dbfName) throw new Error("El ZIP debe incluir al menos .shp y .dbf");

  const [shpBuf, dbfBuf, prjText] = await Promise.all([
    zip.file(shpName).async("arraybuffer"),
    zip.file(dbfName).async("arraybuffer"),
    prjName ? zip.file(prjName).async("string") : Promise.resolve("")
  ]);

  const {records: dbfRecs} = parseDbf(dbfBuf);
  const shapes = parseShp(shpBuf);

  const features = [];
  const n = Math.min(shapes.length, dbfRecs.length);
  for(let i=0;i<n;i++){
    const geom = shapes[i];
    if(!geom) continue;
    features.push({
      type: "Feature",
      properties: dbfRecs[i] || {},
      geometry: geom
    });
  }

  let fc = { type:"FeatureCollection", features };

  // CRS heurística: si bbox parece lon/lat -> geo
  let bbox = geojsonBBox(fc);
  let crs = bboxLooksGeographic(bbox) ? "geo" : "plane";

  // ---- FORZAR CRS (opcional desde UI) ----
  const override = (crsOverride || "auto").toLowerCase();
  if(override === "wgs84"){
    crs = "geo";
  }

  // Si viene en UTM y el .prj lo indica (o si se fuerza), reproyecta a WGS84 para habilitar OSM
  if(crs === "plane"){
    let utm = null;
    if(override === "utm16n") utm = {zone:16, south:false};
    else if(override === "utm15n") utm = {zone:15, south:false};
    else if(override === "utm17n") utm = {zone:17, south:false};
    else utm = detectUtmFromPrj(prjText);

    if(utm){
      fc = reprojectFeatureCollectionUtm(fc, utm);
      bbox = geojsonBBox(fc);
      if(bboxLooksGeographic(bbox)) crs = "geo";
    }
  }

  return {
    geojson: fc,
    name: baseName(shpName),
    bbox,
    crs,
    prj: prjText
  };
}

function baseName(path){
  const p = path.split("/").pop();
  return p.replace(/\.[^.]+$/,"");
}


/* ---- Reproyección simple UTM (WGS84) -> Lon/Lat (grados) ----
   Nota: Esto habilita el basemap OSM cuando el SHP viene en UTM y el .prj lo indica.
*/
function detectUtmFromPrj(prjText){
  if(!prjText) return null;
  const t = prjText.toUpperCase();

  // EPSG explícito (muy común en .prj)
  // Ej: AUTHORITY["EPSG","32616"]  => UTM 16N (WGS84)
  const epsg = t.match(/AUTHORITY\[\s*"EPSG"\s*,\s*"(\d{4,5})"\s*\]/);
  if(epsg){
    const code = Number(epsg[1]);
    if(code >= 32601 && code <= 32660) return {zone: code - 32600, south:false};
    if(code >= 32701 && code <= 32760) return {zone: code - 32700, south:true};
  }

  // Caso común: PROJCS["WGS_1984_UTM_Zone_16N", ...]
  // También soporta: UTM_Zone_16_N, UTM ZONE 16 NORTH, etc.
  let m = t.match(/UTM[\s_-]*ZONE[\s_-]*(\d{1,2})(?:[\s_-]*([NS]|NORTH|SOUTH))?/);
  if(m){
    const zone = Number(m[1]);
    const hemi = (m[2] || "N").toUpperCase();
    const south = (hemi === "S" || hemi === "SOUTH");
    if(zone >= 1 && zone <= 60) return {zone, south};
  }

  // Fallback: Central_Meridian
  const cm = t.match(/PARAMETER\[\s*"CENTRAL_MERIDIAN"\s*,\s*([-0-9.]+)\s*\]/);
  if(cm){
    const centralMeridian = Number(cm[1]);
    const zone = Math.round((centralMeridian + 183) / 6);
    const fn = t.match(/PARAMETER\[\s*"FALSE_NORTHING"\s*,\s*([-0-9.]+)\s*\]/);
    const falseNorthing = fn ? Number(fn[1]) : 0;
    const south = falseNorthing >= 9999999;
    if(zone >= 1 && zone <= 60) return {zone, south};
  }
  return null;
}

function utmToLonLat(easting, northing, zone, south){
  // WGS84
  const a = 6378137.0;
  const f = 1/298.257223563;
  const e2 = f*(2-f);
  const e = Math.sqrt(e2);
  const e1sq = e2 / (1 - e2);
  const k0 = 0.9996;

  let x = easting - 500000.0;
  let y = northing;
  if(south) y -= 10000000.0;

  const lon0 = ((zone - 1) * 6 - 180 + 3) * Math.PI/180;

  const M = y / k0;
  const mu = M / (a * (1 - e2/4 - 3*e2*e2/64 - 5*e2*e2*e2/256));

  const e1 = (1 - Math.sqrt(1 - e2)) / (1 + Math.sqrt(1 - e2));

  const J1 = (3*e1/2 - 27*Math.pow(e1,3)/32);
  const J2 = (21*Math.pow(e1,2)/16 - 55*Math.pow(e1,4)/32);
  const J3 = (151*Math.pow(e1,3)/96);
  const J4 = (1097*Math.pow(e1,4)/512);

  const phi1 = mu + J1*Math.sin(2*mu) + J2*Math.sin(4*mu) + J3*Math.sin(6*mu) + J4*Math.sin(8*mu);

  const sin1 = Math.sin(phi1), cos1 = Math.cos(phi1);
  const N1 = a / Math.sqrt(1 - e2*sin1*sin1);
  const T1 = Math.tan(phi1) * Math.tan(phi1);
  const C1 = e1sq * cos1 * cos1;
  const R1 = a*(1 - e2) / Math.pow(1 - e2*sin1*sin1, 1.5);
  const D = x / (N1 * k0);

  const lat = phi1 - (N1*Math.tan(phi1)/R1) * (
    (D*D)/2 -
    (5 + 3*T1 + 10*C1 - 4*C1*C1 - 9*e1sq) * Math.pow(D,4)/24 +
    (61 + 90*T1 + 298*C1 + 45*T1*T1 - 252*e1sq - 3*C1*C1) * Math.pow(D,6)/720
  );

  const lon = lon0 + (
    D -
    (1 + 2*T1 + C1) * Math.pow(D,3)/6 +
    (5 - 2*C1 + 28*T1 - 3*C1*C1 + 8*e1sq + 24*T1*T1) * Math.pow(D,5)/120
  ) / cos1;

  return {lon: lon * 180/Math.PI, lat: lat * 180/Math.PI};
}

function transformCoords(coords, fn){
  if(!coords) return coords;
  if(typeof coords[0] === "number"){
    const p = fn(coords[0], coords[1]);
    return [p[0], p[1]];
  }
  return coords.map(c => transformCoords(c, fn));
}

function reprojectFeatureCollectionUtm(fc, utmInfo){
  const {zone, south} = utmInfo;
  for(const f of fc.features){
    if(!f.geometry?.coordinates) continue;
    f.geometry.coordinates = transformCoords(f.geometry.coordinates, (x,y)=>{
      const ll = utmToLonLat(Number(x), Number(y), zone, south);
      return [ll.lon, ll.lat];
    });
  }
  return fc;
}

function bboxLooksGeographic(b){
  if(!b) return false;
  const [minX,minY,maxX,maxY] = b;
  if(!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) return false;
  return (minX >= -180 && maxX <= 180 && minY >= -90 && maxY <= 90);
}

function geojsonBBox(fc){
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  const push = (x,y)=>{
    minX=Math.min(minX,x); minY=Math.min(minY,y);
    maxX=Math.max(maxX,x); maxY=Math.max(maxY,y);
  };
  const walk = (coords)=>{
    if(typeof coords[0] === "number") push(coords[0], coords[1]);
    else coords.forEach(walk);
  };
  for(const f of fc.features){
    if(f.geometry?.coordinates) walk(f.geometry.coordinates);
  }
  if(minX===Infinity) return null;
  return [minX,minY,maxX,maxY];
}

/* ---- SHP parser (Point/Polyline/Polygon) ---- */
function parseShp(arrayBuffer){
  const dv = new DataView(arrayBuffer);
  // header
  const fileCode = dv.getInt32(0, false);
  if(fileCode !== 9994) throw new Error("SHP inválido (file code)");
  const shapeType = dv.getInt32(32, true);
  const records = [];
  let off = 100;

  while(off + 8 <= dv.byteLength){
    const recNo = dv.getInt32(off, false);
    const contentLen = dv.getInt32(off+4, false) * 2;
    off += 8;
    if(off + contentLen > dv.byteLength) break;

    const st = dv.getInt32(off, true);
    if(st === 0){
      records.push(null);
      off += contentLen;
      continue;
    }

    if(st === 1){
      const x = dv.getFloat64(off+4, true);
      const y = dv.getFloat64(off+12, true);
      records.push({type:"Point", coordinates:[x,y]});
    } else if(st === 3 || st === 5){
      const numParts = dv.getInt32(off+36, true);
      const numPoints = dv.getInt32(off+40, true);
      let pOff = off + 44;
      const parts = [];
      for(let i=0;i<numParts;i++){ parts.push(dv.getInt32(pOff + i*4, true)); }
      pOff += numParts*4;

      const pts = [];
      for(let i=0;i<numPoints;i++){
        const x = dv.getFloat64(pOff + i*16, true);
        const y = dv.getFloat64(pOff + i*16 + 8, true);
        pts.push([x,y]);
      }

      const partCoords = [];
      for(let i=0;i<numParts;i++){
        const start = parts[i];
        const end = (i === numParts-1) ? numPoints : parts[i+1];
        partCoords.push(pts.slice(start, end));
      }

      if(st === 3){
        if(partCoords.length === 1) records.push({type:"LineString", coordinates: partCoords[0]});
        else records.push({type:"MultiLineString", coordinates: partCoords});
      } else {
        // polygon: agrupa rings outer/holes por orientación
        const rings = partCoords.map(r => closeRing(r));
        const polys = [];
        let current = null;
        for(const ring of rings){
          const a = ringArea(ring);
          const isOuter = a < 0; // heuristic
          if(isOuter || !current){
            current = [ring];
            polys.push(current);
          } else {
            current.push(ring);
          }
        }
        if(polys.length === 1) records.push({type:"Polygon", coordinates: polys[0]});
        else records.push({type:"MultiPolygon", coordinates: polys});
      }
    } else {
      // tipos no soportados
      records.push(null);
    }

    off += contentLen;
  }

  return records;
}

function closeRing(r){
  if(!r.length) return r;
  const a = r[0], b = r[r.length-1];
  if(a[0] !== b[0] || a[1] !== b[1]) return [...r, a];
  return r;
}

function ringArea(coords){
  // área firmada (shoelace), coords cerrado
  let a = 0;
  for(let i=0;i<coords.length-1;i++){
    const [x1,y1] = coords[i];
    const [x2,y2] = coords[i+1];
    a += (x1*y2 - x2*y1);
  }
  return a/2;
}

/* ---- DBF parser ---- */
function parseDbfHeader(buf){
  const dv = new DataView(buf);
  const headerLen = dv.getUint16(8, true);
  const fieldCount = (headerLen - 33) / 32;
  const decoder = new TextDecoder("latin1");
  const fields = [];
  let off = 32;
  for(let i=0;i<fieldCount;i++){
    const nameBytes = new Uint8Array(buf, off, 11);
    let name = decoder.decode(nameBytes).replace(/\0/g, "").trim();
    const type = String.fromCharCode(dv.getUint8(off+11));
    const len = dv.getUint8(off+16);
    const dec = dv.getUint8(off+17);
    fields.push({name, type, len, dec});
    off += 32;
  }
  return fields.map(f=>f.name).filter(Boolean);
}

function parseDbf(buf){
  const dv = new DataView(buf);
  const numRecords = dv.getUint32(4, true);
  const headerLen = dv.getUint16(8, true);
  const recordLen = dv.getUint16(10, true);

  const decoder = new TextDecoder("latin1");

  // fields
  const fields = [];
  let off = 32;
  while(off < headerLen - 1){
    const term = dv.getUint8(off);
    if(term === 0x0D) break;
    const nameBytes = new Uint8Array(buf, off, 11);
    let name = decoder.decode(nameBytes).replace(/\0/g, "").trim();
    const type = String.fromCharCode(dv.getUint8(off+11));
    const len = dv.getUint8(off+16);
    const dec = dv.getUint8(off+17);
    fields.push({name, type, len, dec});
    off += 32;
  }

  const records = [];
  let rOff = headerLen;
  for(let i=0;i<numRecords;i++){
    const del = dv.getUint8(rOff);
    if(del === 0x2A){
      rOff += recordLen;
      continue;
    }
    let p = rOff + 1;
    const rec = {};
    for(const f of fields){
      const bytes = new Uint8Array(buf, p, f.len);
      let raw = decoder.decode(bytes);
      raw = raw.trim();
      let val = raw;
      if(raw === "") val = null;
      else if(f.type === "N" || f.type === "F"){
        const n = Number(raw.replace(/,/g,""));
        val = Number.isFinite(n) ? n : raw;
      } else if(f.type === "D"){
        // YYYYMMDD
        if(/^\d{8}$/.test(raw)){
          val = `${raw.slice(0,4)}-${raw.slice(4,6)}-${raw.slice(6,8)}`;
        }
      }
      rec[f.name] = val;
      p += f.len;
    }
    records.push(rec);
    rOff += recordLen;
  }

  return {fields: fields.map(f=>f.name), records};
}

/* ---- Canvas Map ---- */
class CanvasMap{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.basemap = true;
    this.basemapId = "standard";
    this.basemapTemplate = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    this.zoom = 12;
    this.lastMoveAt = 0;
    this.center = {lon: -88.0, lat: 15.5};

    this.plane = {cx:0, cy:0, scale:1};

    this.dragging = false;
    this.dragStart = null;

    this.tileCache = new Map();

    this.bind();
  }

  bind(){
    const canvas = this.canvas;

    canvas.addEventListener("mousedown", (e)=>{
      this.dragging = true;
      this.dragStart = {x:e.clientX, y:e.clientY, center:{...this.center}, plane:{...this.plane}};
    });
    window.addEventListener("mouseup", ()=>{ this.dragging = false; this.dragStart = null; });
    window.addEventListener("mousemove", (e)=>{
      if(!this.dragging || !this.dragStart) return;
      this.lastMoveAt = Date.now();
      const dx = e.clientX - this.dragStart.x;
      const dy = e.clientY - this.dragStart.y;

      if(this.mode() === "geo"){
        const cPx = lonLatToPixel(this.dragStart.center.lon, this.dragStart.center.lat, this.zoom);
        const nPx = {x: cPx.x - dx, y: cPx.y - dy};
        const ll = pixelToLonLat(nPx.x, nPx.y, this.zoom);
        this.center = ll;
      } else {
        const s = this.dragStart.plane.scale;
        this.plane.cx = this.dragStart.plane.cx - dx / s;
        this.plane.cy = this.dragStart.plane.cy + dy / s;
      }
      this.draw();
    });

    canvas.addEventListener("wheel", (e)=>{
      e.preventDefault();
      const dir = e.deltaY > 0 ? -1 : 1;
      if(this.mode() === "geo"){
        this.zoom = clamp(this.zoom + dir, 1, 19);
      } else {
        const factor = dir > 0 ? 1.2 : 1/1.2;
        this.plane.scale = clamp(this.plane.scale * factor, 0.000001, 1e9);
      }
      this.draw();
    }, {passive:false});

    // redraw on resize
    window.addEventListener("resize", ()=> this.draw());
  }

  setLayers(layers){
    this.layers = layers;
    this.fitAll();
  }

  setSelection(getSelFn){
    this.getSelFn = getSelFn;
  }

  setBasemap(on){
    this.basemap = !!on;
    this.draw();
  }

  setBasemapTemplate(id, template){
    this.basemapId = id || this.basemapId || "standard";
    this.basemapTemplate = template || this.basemapTemplate;
    this.tileCache = new Map();
    const h = document.getElementById("basemapHint");
    if(h) h.textContent = "";
    this.draw();
  }

  mode(){
    const visible = (this.layers || []).filter(l=>l.visible);
    if(!visible.length) return "plane";
    // si existe una capa proyectada visible -> plane
    if(visible.some(l=>l.crs === "plane")) return "plane";
    return "geo";
  }

  fitAll(){
    const visible = (this.layers || []).filter(l=>l.visible);
    if(!visible.length){
      this.draw();
      return;
    }
    // bbox combinado
    let bbox = null;
    for(const l of visible){
      bbox = bboxUnion(bbox, l.bbox);
    }
    if(!bbox) { this.draw(); return; }

    if(this.mode() === "geo"){
      this.fitGeoBBox(bbox);
    } else {
      this.fitPlaneBBox(bbox);
    }
    this.draw();
  }

  fitGeoBBox(b){
    const [minLon,minLat,maxLon,maxLat] = b;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    const margin = 30;

    // iterar zoom para encajar
    let best = 1;
    for(let z=19; z>=1; z--){
      const p1 = lonLatToPixel(minLon, maxLat, z);
      const p2 = lonLatToPixel(maxLon, minLat, z);
      const spanX = Math.abs(p2.x - p1.x);
      const spanY = Math.abs(p2.y - p1.y);
      if(spanX <= (w - margin*2) && spanY <= (h - margin*2)){
        best = z;
        break;
      }
    }
    this.zoom = best;
    this.center = {lon:(minLon+maxLon)/2, lat:(minLat+maxLat)/2};
  }

  fitPlaneBBox(b){
    const [minX,minY,maxX,maxY] = b;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    const margin = 30;
    const spanX = Math.max(1e-9, maxX - minX);
    const spanY = Math.max(1e-9, maxY - minY);
    const s = Math.min((w-margin*2)/spanX, (h-margin*2)/spanY);
    this.plane.scale = s;
    this.plane.cx = (minX+maxX)/2;
    this.plane.cy = (minY+maxY)/2;
  }

  fitSelection(){
    const visible = (this.layers || []).filter(l=>l.visible);
    let bbox = null;
    for(const l of visible){
      const sel = this.getSelFn?.(l.id);
      if(!sel || sel.size === 0) continue;
      const sb = geojsonBBoxSelected(l.geojson, l.join, sel);
      bbox = bboxUnion(bbox, sb);
    }
    if(!bbox) return;
    if(this.mode() === "geo") this.fitGeoBBox(bbox);
    else this.fitPlaneBBox(bbox);
    this.draw();
  }

  draw(){
    const {ctx, w, h} = clearCanvas(this.canvas);

    // fondo
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,w,h);

    // basemap
    if(this.basemap && this.mode() === "geo"){
      this.drawTiles(ctx, w, h);
    }

    // vectores
    for(const layer of (this.layers || [])){
      if(!layer.visible) continue;
      this.drawLayer(ctx, w, h, layer);
    }

    // marco
    ctx.strokeStyle = "rgba(181,182,130,.50)";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5,0.5,w-1,h-1);
  }

  drawTiles(ctx, w, h){
    const z = this.zoom;
    const centerPx = lonLatToPixel(this.center.lon, this.center.lat, z);
    const topLeft = {x: centerPx.x - w/2, y: centerPx.y - h/2};

    const tileSize = 256;
    const x0 = Math.floor(topLeft.x / tileSize);
    const y0 = Math.floor(topLeft.y / tileSize);
    const x1 = Math.floor((topLeft.x + w) / tileSize);
    const y1 = Math.floor((topLeft.y + h) / tileSize);

    for(let x=x0; x<=x1; x++){
      for(let y=y0; y<=y1; y++){
        const xx = wrapX(x,z);
        const key = `${this.basemapId}/${z}/${xx}/${y}`;
        const px = x*tileSize - topLeft.x;
        const py = y*tileSize - topLeft.y;

        if(y < 0 || y >= (1<<z)) continue;

        let img = this.tileCache.get(key);
        if(!img){
          img = new Image();
          img.decoding = "async";
          img.crossOrigin = "anonymous";
          img.onload = ()=> this.draw();
          img.onerror = ()=> { this.tileCache.set(key, "err"); const h = document.getElementById("basemapHint"); if(h && !h.textContent) h.textContent = "No se pudo cargar el mapa base (verifica internet o firewall)."; };
          const url = (this.basemapTemplate || "https://tile.openstreetmap.org/{z}/{x}/{y}.png")
            .replace("{z}", String(z))
            .replace("{x}", String(xx))
            .replace("{y}", String(y))
            .replace("{bbox3857}", tileBBox3857(z, xx, y));
          img.src = url;
          this.tileCache.set(key, img);
        }
        if(img && img !== "err" && img.complete){
          ctx.drawImage(img, Math.round(px), Math.round(py), tileSize, tileSize);
        }
      }
    }

  }

  drawLayer(ctx, w, h, layer){
    const selSet = this.getSelFn?.(layer.id);
    const hasSel = selSet && selSet.size > 0 && layer.join?.enabled;

    // estilos
    const stroke = layer.style.stroke;
    const fill = layer.style.fill;
    const opacity = layer.style.opacity;
    const weight = layer.style.weight;

    const highlightStroke = "#fde047";
    const highlightFill = "rgba(253,224,71,.22)";

    const drawFeature = (geom, props, isSelected)=>{
      ctx.beginPath();
      const moveLine = (coords)=>{
        coords.forEach((pt, idx)=>{
          const p = this.project(pt, w, h);
          if(!p) return;
          if(idx===0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
      };

      const geomType = geom.type;
      const coords = geom.coordinates;

      if(geomType === "Point"){
        const p = this.project(coords, w, h);
        if(!p) return;

        const r = Number(layer.style.radius ?? 6);
        const shape = String(layer.style.shape ?? "circle");

        if(String(shape).startsWith("icon:")){
      const key = String(shape).split(":")[1] || "pin";
      const path = new Path2D(POINT_ICON_PATH[key] || POINT_ICON_PATH.pin);
      const scale = (r * 2) / 24;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(scale, scale);
      ctx.translate(-12, -12);
      ctx.fillStyle = withAlpha(fill, opacity);
      ctx.fill(path, "evenodd");
      ctx.strokeStyle = withAlpha(stroke, Math.min(1, opacity + 0.25));
      ctx.lineWidth = Math.max(1, weight) / scale;
      ctx.stroke(path);
      ctx.restore();
    } else if(shape === "square"){
          ctx.rect(p.x - r, p.y - r, r*2, r*2);
        } else if(shape === "triangle"){
          ctx.moveTo(p.x, p.y - r);
          ctx.lineTo(p.x + r, p.y + r);
          ctx.lineTo(p.x - r, p.y + r);
          ctx.closePath();
        } else if(shape === "diamond"){
          ctx.moveTo(p.x, p.y - r);
          ctx.lineTo(p.x + r, p.y);
          ctx.lineTo(p.x, p.y + r);
          ctx.lineTo(p.x - r, p.y);
          ctx.closePath();
        } else if(shape === "star"){
          const spikes = 5;
          const outer = r;
          const inner = Math.max(2, r * 0.45);
          let rot = Math.PI / 2 * 3;
          const x = p.x;
          const y = p.y;
          ctx.moveTo(x, y - outer);
          for(let i=0; i<spikes; i++){
            ctx.lineTo(x + Math.cos(rot) * outer, y - Math.sin(rot) * outer);
            rot += Math.PI / spikes;
            ctx.lineTo(x + Math.cos(rot) * inner, y - Math.sin(rot) * inner);
            rot += Math.PI / spikes;
          }
          ctx.lineTo(x, y - outer);
          ctx.closePath();
        } else {
          ctx.arc(p.x, p.y, r, 0, Math.PI*2);
        }
      } else if(geomType === "LineString"){
        moveLine(coords);
      } else if(geomType === "MultiLineString"){
        coords.forEach(line=>{ moveLine(line); });
      } else if(geomType === "Polygon"){
        coords.forEach(ring=>{ moveLine(ring); ctx.closePath(); });
      } else if(geomType === "MultiPolygon"){
        coords.forEach(poly=>{
          poly.forEach(ring=>{ moveLine(ring); ctx.closePath(); });
        });
      } else {
        return;
      }

      if(geomType !== "LineString" && geomType !== "MultiLineString"){
        ctx.fillStyle = isSelected ? highlightFill : withAlpha(fill, opacity);
        ctx.fill("evenodd");
      }
      ctx.strokeStyle = isSelected ? highlightStroke : withAlpha(stroke, Math.min(1, opacity + 0.25));
      ctx.lineWidth = isSelected ? Math.max(2, weight+1) : weight;
      ctx.stroke();
    };

    for(const f of layer.geojson.features){
      if(!f.geometry) continue;
      let isSel = false;
      if(hasSel){
        const v = f.properties?.[layer.join.shpKey];
        if(v !== undefined && v !== null){
          isSel = selSet.has(String(v));
        }
      }
      drawFeature(f.geometry, f.properties, isSel);
    }
  }

  project(pt, w, h){
    if(!pt) return null;
    if(this.mode() === "geo"){
      const z = this.zoom;
      const centerPx = lonLatToPixel(this.center.lon, this.center.lat, z);
      const topLeft = {x: centerPx.x - w/2, y: centerPx.y - h/2};
      const p = lonLatToPixel(pt[0], pt[1], z);
      return {x: p.x - topLeft.x, y: p.y - topLeft.y};
    }
    // plane
    const x = (pt[0] - this.plane.cx) * this.plane.scale + w/2;
    const y = h/2 - (pt[1] - this.plane.cy) * this.plane.scale;
    return {x, y};
  }
}

function withAlpha(hex, alpha){
  // hex -> rgba
  if(!hex || typeof hex !== "string") return `rgba(255,255,255,${alpha})`;
  const h = hex.replace("#","").trim();
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  return `rgba(${r},${g},${b},${alpha})`;
}


// ---- v9: bbox EPSG:3857 para WMS por teselas ----
const WEBMERC_MAX = 20037508.342789244;
function tileBBox3857(z,x,y){
  const n = 1<<z;
  const res = (2*WEBMERC_MAX)/(256*n);
  const minx = -WEBMERC_MAX + x*256*res;
  const maxx = minx + 256*res;
  const maxy = WEBMERC_MAX - y*256*res;
  const miny = maxy - 256*res;
  return `${minx},${miny},${maxx},${maxy}`;
}

function wrapX(x, z){
  const n = 1<<z;
  return ((x % n) + n) % n;
}

function lonLatToPixel(lon, lat, z){
  const tileSize = 256;
  const scale = tileSize * (1<<z);
  const x = (lon + 180) / 360;
  const sin = Math.sin(lat * Math.PI/180);
  const y = 0.5 - Math.log((1+sin)/(1-sin)) / (4*Math.PI);
  return {x: x*scale, y: y*scale};
}

function pixelToLonLat(px, py, z){
  const tileSize = 256;
  const scale = tileSize * (1<<z);
  const x = (px / scale) - 0.5;
  const y = 0.5 - (py / scale);
  const lon = x * 360;
  const lat = 90 - 360 * Math.atan(Math.exp(-y * 2*Math.PI)) / Math.PI;
  return {lon, lat};
}

function bboxUnion(a, b){
  if(!a) return b;
  if(!b) return a;
  return [
    Math.min(a[0], b[0]),
    Math.min(a[1], b[1]),
    Math.max(a[2], b[2]),
    Math.max(a[3], b[3])
  ];
}

function geojsonBBoxSelected(fc, join, selSet){
  if(!join?.enabled) return null;
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  const push = (x,y)=>{
    minX=Math.min(minX,x); minY=Math.min(minY,y);
    maxX=Math.max(maxX,x); maxY=Math.max(maxY,y);
  };
  const walk = (coords)=>{
    if(typeof coords[0] === "number") push(coords[0], coords[1]);
    else coords.forEach(walk);
  };
  for(const f of fc.features){
    const v = f.properties?.[join.shpKey];
    if(v===undefined||v===null) continue;
    if(!selSet.has(String(v))) continue;
    if(f.geometry?.coordinates) walk(f.geometry.coordinates);
  }
  if(minX===Infinity) return null;
  return [minX,minY,maxX,maxY];
}

/* ---------- Events / Init ---------- */
function wireEvents(){
  // datos
  $("btnLoadExample").addEventListener("click", (e)=>{ e.preventDefault(); loadExample(); });

  // configuración (Datos)
  const openSettings = ()=>{
    const m = document.getElementById("settingsModal");
    if(!m) return;
    showModalById("settingsModal");
    try{ syncThemeUI(); }catch(e){}
    try{ bindThemePreview(); }catch(e){}
  };
  const closeSettings = ()=>{
    const m = document.getElementById("settingsModal");
    if(!m) return;
    hideModalById("settingsModal");
  };
  const bs = document.getElementById("btnSettings");
  if(bs) bs.addEventListener("click", openSettings);
  const bos = document.getElementById("btnOpenSettings");
  if(bos) bos.addEventListener("click", openSettings);
  const sc = document.getElementById("settingsClose");
  if(sc) sc.addEventListener("click", closeSettings);
  const sd = document.getElementById("settingsDone");
  if(sd) sd.addEventListener("click", ()=>{
    try{
      state.kpiPrefs = readKpiPrefsFromUI();
      saveKpiPrefs(state.kpiPrefs);
    }catch(e){}
    try{ renderKPIs(); }catch(e){}
    closeSettings();
  });
  const sb = document.getElementById("settingsBackdrop");
  if(sb) sb.addEventListener("click", closeSettings);

  $("btnExport").addEventListener("click", exportFiltered);
  $("btnClearFilters").addEventListener("click", (e)=>{ e.preventDefault(); resetFilters(false); });
  $("btnResetAll").addEventListener("click", ()=> resetFilters(true));

  $("fileInput").addEventListener("change", async (e)=>{
    const f = e.target.files[0];
    if(!f) return;
    const text = await f.text();
    await loadCsvText(text);
  });

  $("fProyecto").addEventListener("change", ()=>{ state.filters.proyecto = getSelected($("fProyecto")); applyFilters(); });
  $("fUso").addEventListener("change", ()=>{ state.filters.uso = getSelected($("fUso")); applyFilters(); });
  $("fMant").addEventListener("change", ()=>{ state.filters.mant = getSelected($("fMant")); applyFilters(); });
  $("fTipoCuenta").addEventListener("change", ()=>{ state.filters.tipoCuenta = getSelected($("fTipoCuenta")); applyFilters(); });

  $("searchText").addEventListener("input", ()=>{ state.filters.search = $("searchText").value; applyFilters(); });

  $("minSaldo").addEventListener("input", ()=>{
    const v = toNum($("minSaldo").value);
    state.filters.minSaldo = Number.isFinite(v) ? v : null;
    applyFilters();
  });
  $("maxSaldo").addEventListener("input", ()=>{
    const v = toNum($("maxSaldo").value);
    state.filters.maxSaldo = Number.isFinite(v) ? v : null;
    applyFilters();
  });

  $("metricSelect").addEventListener("change", ()=>{
    state.metric = $("metricSelect").value;
    applyFilters();
  });

  $("topN").addEventListener("change", ()=>{
    state.topN = Number($("topN").value) || 10;
    applyFilters();
  });

  $("pageSize").addEventListener("change", ()=>{
    state.pageSize = Number($("pageSize").value) || 50;
    state.page = 1;
    renderDetailTable();
  });
  $("prevPage").addEventListener("click", ()=>{ state.page = Math.max(1, state.page-1); renderDetailTable(); });
  $("nextPage").addEventListener("click", ()=>{ 
    const totalPages = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
    state.page = Math.min(totalPages, state.page+1);
    renderDetailTable();
  });

  // visor geográfico
  $("btnAddLayer").addEventListener("click", openLayerModal);
  $("layerBackdrop").addEventListener("click", closeLayerModal);
  $("layerClose").addEventListener("click", closeLayerModal);
  $("btnAddLayerCancel").addEventListener("click", closeLayerModal);

  // modal estilo
  $("styleClose").addEventListener("click", closeStyleModal);
  $("styleBackdrop").addEventListener("click", closeStyleModal);
  $("styleCancel").addEventListener("click", closeStyleModal);
  $("styleApply").addEventListener("click", (e)=>{ e.preventDefault(); e.stopPropagation(); applyStyleModal(); });
  $("styleReset").addEventListener("click", resetStyleModal);


  $("linkToTxt").addEventListener("change", ()=>{
    $("joinOptions").hidden = !$("linkToTxt").checked;
  });

  $("layerZipInput").addEventListener("change", async (e)=>{
    const f = e.target.files[0];
    if(!f) return;
    try{
      const fields = await readZipDbfFields(f);
      $("layerMeta").className = "status mt10 status--ok";
      $("layerMeta").textContent = `ZIP listo: ${f.name} — campos DBF: ${fields.length}`;
      $("shpJoinField").innerHTML = fields.map(n => `<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join("");
      // si marcado, mostrar join
      if($("linkToTxt").checked) $("joinOptions").hidden = false;
    } catch(err){
      $("layerMeta").className = "status mt10 status--warn";
      $("layerMeta").textContent = `Error: ${err.message || err}`;
      $("shpJoinField").innerHTML = "";
    }
  });

  $("btnAddLayerConfirm").addEventListener("click", async ()=>{
    const f = $("layerZipInput").files[0];
    if(!f){ alert("Selecciona un ZIP."); return; }
    $("btnAddLayerConfirm").disabled = true;
    $("btnAddLayerConfirm").textContent = "Cargando...";

    try{
      const out = await parseZipToGeoJSON(f, $("layerCrsOverride")?.value || "auto");
      const id = `ly_${Date.now()}_${Math.random().toString(16).slice(2)}`;

      const join = {enabled:false};
      if($("linkToTxt").checked && state.rows.length){
        join.enabled = true;
        join.shpKey = $("shpJoinField").value;
        join.txtKey = $("txtJoinField").value;
      }

      const layer = {
        id,
        name: out.name,
        geojson: out.geojson,
        bbox: out.bbox,
        crs: out.crs,
        geomType: inferGeomType(out.geojson),
        visible: true,
        style: {
          stroke: "#3b82f6",
          fill: "#60a5fa",
          opacity: 0.35,
          weight: 2,
          radius: 6,
          shape: "circle"
        },
        join
      };

      state.layers.push(layer);
      renderLayerList();
      state.mapView?.setLayers(state.layers);
      syncBasemapAuto();
      updateMapSelection();

      closeLayerModal();

      // Requerimiento 2a: preguntar dónde guardarlo
      const want = confirm("Capa convertida a GeoJSON. ¿Deseas guardar/descargar el GeoJSON ahora?");
      if(want) await saveGeoJSONPrompt(layer);

    } catch(err){
      alert(`No se pudo cargar la capa: ${err.message || err}`);
    } finally {
      $("btnAddLayerConfirm").disabled = false;
      $("btnAddLayerConfirm").textContent = "Cargar capa";
    }
  });

  // controles mapa
  // visor geográfico (toolbar)
  // iconos
  $("mapZoomIn").innerHTML = svgIcon("zoomIn");
  $("mapZoomOut").innerHTML = svgIcon("zoomOut");
  $("mapZoomSel").innerHTML = svgIcon("zoomSel");
  $("mapFitAll").innerHTML = svgIcon("fitAll");
  $("mapIdentify").innerHTML = svgIcon("identify");
  $("mapBasemapToggle").innerHTML = svgIcon("basemap");
  $("btnBasemapStyles").innerHTML = svgIcon("basemapStyle");

  $("mapZoomIn").addEventListener("click", ()=>{ if(state.mapView.mode()==="geo") state.mapView.zoom = clamp(state.mapView.zoom+1,1,19); else state.mapView.plane.scale *= 1.25; state.mapView.draw(); });
  $("mapZoomOut").addEventListener("click", ()=>{ if(state.mapView.mode()==="geo") state.mapView.zoom = clamp(state.mapView.zoom-1,1,19); else state.mapView.plane.scale /= 1.25; state.mapView.draw(); });
  $("mapFitAll").addEventListener("click", ()=> state.mapView.fitAll());
  $("mapZoomSel").addEventListener("click", ()=> state.mapView.fitSelection());

  $("mapBasemapToggle").addEventListener("click", ()=>{
    state.basemapOn = !state.basemapOn;
    syncBasemapAuto();
  });

  
function updateBasemapCustomUI(){
  const v = document.getElementById("basemapStyle")?.value || "standard";
  const show = (id, on)=>{ const el=document.getElementById(id); if(el) el.style.display = on ? "block" : "none"; };
  show("bmXYZ", v === "xyzCustom");
  show("bmWMS", v === "wmsCustom");
  show("bmGoogleInfo", v === "googleSatInfo");
}

function loadBasemapCustomFromStorage(){
  try{
    const xyz = localStorage.getItem("cpm_bm_xyz");
    if(xyz){ const i=document.getElementById("bmXyzTemplate"); if(i) i.value = xyz; }
  }catch(e){}
  try{
    const wmsRaw = localStorage.getItem("cpm_bm_wms");
    if(wmsRaw){
      const w = JSON.parse(wmsRaw);
      if(w){
        const u=document.getElementById("bmWmsUrl"); if(u) u.value = w.url || "";
        const l=document.getElementById("bmWmsLayers"); if(l) l.value = w.layers || "";
        const f=document.getElementById("bmWmsFormat"); if(f) f.value = w.fmt || "image/png";
        const v=document.getElementById("bmWmsVersion"); if(v) v.value = w.ver || "1.3.0";
        const t=document.getElementById("bmWmsTransparent"); if(t) t.value = String(w.tr ?? "false");
        const e=document.getElementById("bmWmsExtra"); if(e) e.value = w.extra || "";
      }
    }
  }catch(e){}
}

// selector de mapa base
  const openBasemapModal = ()=>{
    const m = document.getElementById("basemapModal");
    if(!m) return;
    showModalById("settingsModal");
    // set select
    const sel = document.getElementById("basemapStyle");
    if(sel) sel.value = state.basemapStyle || "standard";
    loadBasemapCustomFromStorage();
    updateBasemapCustomUI();
  };
  const closeBasemapModal = ()=>{
    const m = document.getElementById("basemapModal");
    if(!m) return;
    hideModalById("settingsModal");
  };
  $("btnBasemapStyles").addEventListener("click", openBasemapModal);
  document.getElementById("basemapStyle")?.addEventListener("change", updateBasemapCustomUI);
  const bc = document.getElementById("basemapClose");
  if(bc) bc.addEventListener("click", closeBasemapModal);
  const bb = document.getElementById("basemapBackdrop");
  if(bb) bb.addEventListener("click", closeBasemapModal);
  const ba = document.getElementById("basemapApply");
  if(ba) ba.addEventListener("click", ()=>{
    const sel = document.getElementById("basemapStyle");
    const v = sel ? sel.value : "standard";
    state.basemapStyle = v;

    const templates = {
      standard: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      de: "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
      esriImg: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      esriTopo: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    };

    if(v === "xyzCustom"){
      const t = (document.getElementById("bmXyzTemplate")?.value || "").trim();
      if(t){
        try{ localStorage.setItem("cpm_bm_xyz", t); }catch(e){}
        state.mapView?.setBasemapTemplate("xyzCustom", t);
      }
    } else if(v === "wmsCustom"){
      const url = (document.getElementById("bmWmsUrl")?.value || "").trim();
      const layers = (document.getElementById("bmWmsLayers")?.value || "").trim();
      const fmt = (document.getElementById("bmWmsFormat")?.value || "image/png").trim();
      const ver = (document.getElementById("bmWmsVersion")?.value || "1.3.0").trim();
      const tr = (document.getElementById("bmWmsTransparent")?.value || "false").trim();
      const extra = (document.getElementById("bmWmsExtra")?.value || "").trim();

      if(url && layers){
        const sep = url.includes("?") ? "&" : "?";
        // EPSG:3857 + bbox por tile 256x256
        const t = `${url}${sep}SERVICE=WMS&REQUEST=GetMap&VERSION=${encodeURIComponent(ver)}&LAYERS=${encodeURIComponent(layers)}&STYLES=&FORMAT=${encodeURIComponent(fmt)}&TRANSPARENT=${encodeURIComponent(tr)}&CRS=EPSG:3857&BBOX={bbox3857}&WIDTH=256&HEIGHT=256${extra ? "&"+extra : ""}`;
        try{ localStorage.setItem("cpm_bm_wms", JSON.stringify({url,layers,fmt,ver,tr,extra})); }catch(e){}
        state.mapView?.setBasemapTemplate("wmsCustom", t);
      }
    } else if(v === "googleSatInfo"){
      // No tiles abiertos: fallback a ESRI Imagery
      const h = document.getElementById("basemapHint");
      if(h) h.textContent = "Google Satélite requiere un servicio autorizado. Usando ESRI World Imagery.";
      state.mapView?.setBasemapTemplate("esriImg", templates.esriImg);
    } else {
      state.mapView?.setBasemapTemplate(v, templates[v] || templates.standard);
    }
    syncBasemapAuto();
    closeBasemapModal();
  });

  // herramienta de consulta (identify)
  const setTool = (tool)=>{
    state.mapTool = tool;
    const b = document.getElementById("mapIdentify");
    if(b) b.classList.toggle("is-active", tool === "identify");
    const info = document.getElementById("mapInfo");
    if(tool !== "identify" && info){ info.style.display = "none"; info.setAttribute("aria-hidden","true"); }
  };
  $("mapIdentify").addEventListener("click", ()=>{
    setTool(state.mapTool === "identify" ? "pan" : "identify");
  });

  $("mapCanvas").addEventListener("click", (e)=>{
    if(state.mapTool !== "identify") return;
    if(state.mapView && (Date.now() - (state.mapView.lastMoveAt || 0) < 250)) return;

    const canvas = $("mapCanvas");
    const rect = canvas.getBoundingClientRect();
    const px = {x: e.clientX - rect.left, y: e.clientY - rect.top};
    const hit = identifyAtPixel(px, rect.width, rect.height);
    if(hit) showMapInfo(hit);
  });


  window.addEventListener("online", ()=> syncBasemapAuto());
  window.addEventListener("offline", ()=> syncBasemapAuto());
}



/* ---------- Identify (consulta) ---------- */
function distPointToSegment(px, a, b){
  const vx = b.x - a.x, vy = b.y - a.y;
  const wx = px.x - a.x, wy = px.y - a.y;
  const c1 = vx*wx + vy*wy;
  if(c1 <= 0) return Math.hypot(px.x - a.x, px.y - a.y);
  const c2 = vx*vx + vy*vy;
  if(c2 <= c1) return Math.hypot(px.x - b.x, px.y - b.y);
  const t = c1 / c2;
  const proj = {x: a.x + t*vx, y: a.y + t*vy};
  return Math.hypot(px.x - proj.x, px.y - proj.y);
}

function pointInRing(pt, ring){
  // ray casting
  let inside = false;
  for(let i=0, j=ring.length-1; i<ring.length; j=i++){
    const xi = ring[i].x, yi = ring[i].y;
    const xj = ring[j].x, yj = ring[j].y;
    const intersect = ((yi>pt.y) !== (yj>pt.y)) &&
      (pt.x < (xj - xi) * (pt.y - yi) / ((yj - yi) || 1e-9) + xi);
    if(intersect) inside = !inside;
  }
  return inside;
}

function hitFeatureAtPixel(feature, layer, px, w, h){
  const g = feature.geometry;
  if(!g) return null;

  const proj = (coord)=> state.mapView.project(coord, w, h);

  const t = g.type;
  const c = g.coordinates;

  const tol = 8;

  if(t === "Point"){
    const p = proj(c);
    if(!p) return null;
    const d = Math.hypot(px.x - p.x, px.y - p.y);
    if(d <= tol) return {score:d};
    return null;
  }

  const lineScore = (coords)=>{
    let best = Infinity;
    let prev = null;
    for(const co of coords){
      const p = proj(co);
      if(!p) continue;
      if(prev){
        best = Math.min(best, distPointToSegment(px, prev, p));
      }
      prev = p;
    }
    return best;
  };

  if(t === "LineString"){
    const d = lineScore(c);
    if(d <= tol) return {score:d};
    return null;
  }
  if(t === "MultiLineString"){
    let best = Infinity;
    for(const line of c){
      best = Math.min(best, lineScore(line));
    }
    if(best <= tol) return {score:best};
    return null;
  }

  const polyHit = (poly)=>{
    // poly: [ring1, ring2...]
    const rings = poly.map(ring=> ring.map(co => proj(co)).filter(Boolean));
    if(!rings.length || rings[0].length < 3) return null;
    const outer = rings[0];
    if(!pointInRing(px, outer)) return null;
    // holes
    for(let i=1;i<rings.length;i++){
      if(pointInRing(px, rings[i])) return null;
    }
    return {score:0}; // inside polygon
  };

  if(t === "Polygon"){
    const res = polyHit(c);
    if(res) return res;
    return null;
  }
  if(t === "MultiPolygon"){
    let best = null;
    for(const poly of c){
      const res = polyHit(poly);
      if(res){ best = res; break; }
    }
    return best;
  }
  return null;
}

function identifyAtPixel(px, w, h){
  const visible = [...state.layers].filter(l=>l.visible);
  if(!visible.length) return null;

  // top-most first (end of array on top)
  for(let li=visible.length-1; li>=0; li--){
    const layer = visible[li];
    const feats = layer.geojson?.features || [];
    let best = null;
    let bestFeat = null;

    for(const f of feats){
      const hit = hitFeatureAtPixel(f, layer, px, w, h);
      if(!hit) continue;
      if(best === null || hit.score < best){
        best = hit.score;
        bestFeat = f;
        if(best === 0) break;
      }
    }
    if(bestFeat){
      // join TXT if exists
      let joined = null;
      if(layer.join?.enabled && layer.join.txtKey && layer.join.shpKey){
        const shpVal = bestFeat.properties?.[layer.join.shpKey];
        if(shpVal !== undefined && shpVal !== null){
          const key = String(shpVal);
          joined = state.rows.find(r => String(r[layer.join.txtKey] ?? "") === key) || null;
        }
      }
      return {layer, feature: bestFeat, joined};
    }
  }
  return null;
}

function showMapInfo(hit){
  const el = document.getElementById("mapInfo");
  if(!el) return;

  const layer = hit.layer;
  const props = hit.feature?.properties || {};
  const joined = hit.joined;

  const rowsProps = Object.entries(props).slice(0, 40).map(([k,v])=>{
    return `<div class="mapinfo__row"><div class="mapinfo__k">${escapeHtml(k)}</div><div class="mapinfo__v">${escapeHtml(String(v ?? ""))}</div></div>`;
  }).join("");

  const rowsJoined = joined ? Object.entries(joined).slice(0, 60).map(([k,v])=>{
    if(v === null || v === undefined || String(v) === "") return "";
    return `<div class="mapinfo__row"><div class="mapinfo__k">${escapeHtml(label(k))}</div><div class="mapinfo__v">${escapeHtml(String(v))}</div></div>`;
  }).join("") : `<div class="muted tiny">(No hay datos TXT asociados o no está vinculado.)</div>`;

  el.innerHTML = `
    <div class="mapinfo__head">
      <div class="mapinfo__title">${escapeHtml(layer.name || "Capa")} — Consulta</div>
      <button class="mapinfo__close" title="Cerrar" aria-label="Cerrar">×</button>
    </div>
    <div class="mapinfo__section">Atributos SHP</div>
    <div class="mapinfo__grid">${rowsProps || `<div class="muted tiny">(Sin atributos)</div>`}</div>
    <div class="mapinfo__section">Datos asociados (TXT)</div>
    <div class="mapinfo__grid">${rowsJoined}</div>
  `;
  el.style.display = "block";
  el.setAttribute("aria-hidden","false");
  const close = el.querySelector(".mapinfo__close");
  if(close) close.onclick = ()=>{ el.style.display="none"; el.setAttribute("aria-hidden","true"); };
}


async function init(){
  await loadMeta();

  state.kpiPrefs = loadKpiPrefs();

  // map init
  state.mapView = new CanvasMap($("mapCanvas"));
  // ResizeObserver para el visor geográfico
  if("ResizeObserver" in window){
    const roMap = new ResizeObserver(()=>{ state.mapView?.draw(); });
    roMap.observe($("mapWrap"));
  }
  state.mapView.setLayers(state.layers);
  state.mapView.setSelection((layerId)=> state.selectionByLayer.get(layerId));

  // estilos de mapa base (OSM)
  const templates = {
    standard: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    hot: "https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    de: "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
  };
  state.mapView.setBasemapTemplate(state.basemapStyle, templates[state.basemapStyle] || templates.standard);
  syncBasemapAuto();

  wireEvents();
  bindThemeButtons();
  setupChartResize();

  // intento: cargar ejemplo si se sirve por http
  loadExample();
}

init();
function inferGeomType(geojson){
  try{
    const feats = geojson?.features || [];
    for(const f of feats){
      const g = f?.geometry;
      if(!g) continue;
      const t = g.type;
      if(t === "Point" || t === "MultiPoint") return "point";
      if(t === "LineString" || t === "MultiLineString") return "line";
      if(t === "Polygon" || t === "MultiPolygon") return "polygon";
    }
  }catch(e){}
  return "unknown";
}

const STYLE_PALETTE = [
  "#011752","#033f63","#28666e","#7c9885","#b5b682","#fedc97",
  "#111827","#374151","#6b7280","#9ca3af","#d1d5db","#f3f4f6",
  "#3b82f6","#60a5fa","#22c55e","#f59e0b","#ef4444","#a855f7",
  "#0ea5e9","#14b8a6","#84cc16","#eab308","#fb7185","#f97316",
  "#ffffff","#000000"
];

const POINT_ICONS = {
  pin:    '<svg viewBox="0 0 24 24"><path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12zm0-9.2a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6z"/></svg>',
  home:   '<svg viewBox="0 0 24 24"><path d="M12 3 3 10v11h6v-7h6v7h6V10l-9-7z"/></svg>',
  hospital:'<svg viewBox="0 0 24 24"><path d="M4 21h16V7l-4-3-4 3-4-3-4 3v14zm7-11h2V8h2v2h-2v2h-2v-2H9V8h2v2z"/></svg>',
  school: '<svg viewBox="0 0 24 24"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-7 9.3V19c2 1.3 4.4 2 7 2s5-.7 7-2v-6.7l-7 3.8-7-3.8z"/></svg>',
  police: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v7c0 5.2 3.4 9.9 8 10 4.6-.1 8-4.8 8-10V5l-8-3zm0 4.2 4 1.5v4.6c0 3.5-1.9 6.6-4 7-2.1-.4-4-3.5-4-7V7.7l4-1.5z"/></svg>',
  fire:   '<svg viewBox="0 0 24 24"><path d="M13 3s1 3-2 5c-2 1.3-3 3-3 5.2A6 6 0 0 0 20 14c0-4-3-6-3-8 0 0 0 2-2 3-1-2-2-6-2-6zM12 22a5 5 0 0 1-5-5c0-2 1-3.6 2.7-4.6.2 1.7 1.3 2.8 2.8 3.4-.1-1.2.6-2.1 1.5-2.7 1.2 1 2 2.4 2 3.9a5 5 0 0 1-4 5z"/></svg>',
  bus:    '<svg viewBox="0 0 24 24"><path d="M4 16V6c0-3 3-4 8-4s8 1 8 4v10c0 1.1-.9 2-2 2l1 2h-2l-1-2H8l-1 2H5l1-2c-1.1 0-2-.9-2-2zm2-8h12V6H6v2zm0 6h12v-4H6v4zm2.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>',
  shop:   '<svg viewBox="0 0 24 24"><path d="M4 4h16l-1.5 6H5.5L4 4zm2 8h12v8H6v-8zm2 2v4h3v-4H8zm5 0v4h3v-4h-3z"/></svg>',
  warning:'<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
  info:   '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'
};

const POINT_ICON_PATH = {
  pin: "M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z M12 12.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6z",
  home: "M12 3L3 10v11h6v-7h6v7h6V10z",
  hospital:"M4 21h16V7l-4-3-4 3-4-3-4 3z M11 10h2V8h2v2h-2v2h-2v-2H9V8h2z",
  school:"M12 3L1 9l11 6 9-4.9V17h2V9z M5 12.3V19c2 1.3 4.4 2 7 2s5-.7 7-2v-6.7l-7 3.8z",
  police:"M12 2L4 5v7c0 5.2 3.4 9.9 8 10 4.6-.1 8-4.8 8-10V5z M12 6.2l4 1.5v4.6c0 3.5-1.9 6.6-4 7-2.1-.4-4-3.5-4-7V7.7z",
  fire:"M13 3s1 3-2 5c-2 1.3-3 3-3 5.2A6 6 0 0 0 20 14c0-4-3-6-3-8 0 0 0 2-2 3-1-2-2-6-2-6z M12 22a5 5 0 0 1-5-5c0-2 1-3.6 2.7-4.6.2 1.7 1.3 2.8 2.8 3.4-.1-1.2.6-2.1 1.5-2.7 1.2 1 2 2.4 2 3.9a5 5 0 0 1-4 5z",
  bus:"M4 16V6c0-3 3-4 8-4s8 1 8 4v10c0 1.1-.9 2-2 2l1 2h-2l-1-2H8l-1 2H5l1-2c-1.1 0-2-.9-2-2z M6 8h12V6H6z M6 14h12v-4H6z M8.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M15.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  shop:"M4 4h16l-1.5 6H5.5z M6 12h12v8H6z M8 14v4h3v-4z M13 14v4h3v-4z",
  warning:"M1 21h22L12 2z M13 18h-2v-2h2z M13 14h-2v-4h2z",
  info:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M13 17h-2v-6h2z M13 9h-2V7h2z"
};




function renderPointIconSvgs(){
  document.querySelectorAll(".svgIco").forEach(el=>{
    const k = el.getAttribute("data-ico");
    if(!k) return;
    el.innerHTML = POINT_ICONS[k] || "";
  });
}
function setActiveShape(shape){
  document.querySelectorAll("#styleShapeGrid .shapeBtn, #styleIconGrid .iconBtn").forEach(b=>{
    b.classList.toggle("is-active", b.getAttribute("data-shape")===shape);
  });
}

function drawStylePreview(geomType, style){
  const c = document.getElementById("stylePreview");
  if(!c) return;
  const ctx = c.getContext("2d");
  const w = c.width, h = c.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,w,h);

  const stroke = style.stroke || "#111827";
  const fill = style.fill || "#60a5fa";
  const opacity = clamp(Number(style.opacity ?? 0.6), 0, 1);
  const weight = clamp(Number(style.weight ?? 2), 0, 50);
  const shape = String(style.shape ?? "circle");
  const r = clamp(Number(style.radius ?? 6), 1, 40);

  ctx.beginPath();
  if(geomType === "line"){
    ctx.moveTo(40, h/2);
    ctx.lineTo(w-40, h/2);
  } else if(geomType === "polygon"){
    ctx.moveTo(80, 40);
    ctx.lineTo(w-80, 55);
    ctx.lineTo(w-110, h-45);
    ctx.lineTo(110, h-55);
    ctx.closePath();
  } else {
    const x = w/2, y = h/2;
    if(String(shape).startsWith("icon:")){
      const key = String(shape).split(":")[1] || "pin";
      const path = new Path2D(POINT_ICON_PATH[key] || POINT_ICON_PATH.pin);
      const scale = (r * 2) / 24;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.translate(-12, -12);
      ctx.fillStyle = withAlpha(fill, opacity);
      ctx.fill(path, "evenodd");
      ctx.strokeStyle = withAlpha(stroke, Math.min(1, opacity + 0.25));
      ctx.lineWidth = Math.max(1, weight) / scale;
      ctx.stroke(path);
      ctx.restore();
    } else if(shape === "square"){
      ctx.rect(x-r, y-r, r*2, r*2);
    } else if(shape === "triangle"){
      ctx.moveTo(x, y-r);
      ctx.lineTo(x+r, y+r);
      ctx.lineTo(x-r, y+r);
      ctx.closePath();
    } else if(shape === "diamond"){
      ctx.moveTo(x, y-r);
      ctx.lineTo(x+r, y);
      ctx.lineTo(x, y+r);
      ctx.lineTo(x-r, y);
      ctx.closePath();
    } else if(shape === "star"){
      const spikes = 5;
      const outer = r;
      const inner = Math.max(2, r * 0.45);
      let rot = Math.PI / 2 * 3;
      ctx.moveTo(x, y - outer);
      for(let i=0;i<spikes;i++){
        ctx.lineTo(x + Math.cos(rot) * outer, y - Math.sin(rot) * outer);
        rot += Math.PI / spikes;
        ctx.lineTo(x + Math.cos(rot) * inner, y - Math.sin(rot) * inner);
        rot += Math.PI / spikes;
      }
      ctx.lineTo(x, y - outer);
      ctx.closePath();
    } else {
      ctx.arc(x, y, r, 0, Math.PI*2);
    }
  }

  if(geomType !== "line"){
    ctx.fillStyle = withAlpha(fill, opacity);
    ctx.fill("evenodd");
  }
  ctx.strokeStyle = withAlpha(stroke, Math.min(1, opacity + 0.25));
  ctx.lineWidth = weight || 0;
  if(weight > 0) ctx.stroke();

  ctx.strokeStyle = "rgba(0,0,0,.08)";
  ctx.lineWidth = 1;
  ctx.strokeRect(0.5,0.5,w-1,h-1);
}

function openStyleColorPop(anchorEl, currentHex, onPick){
  const pop = document.getElementById("styleColorPop");
  if(!pop || !anchorEl) return;

  pop.innerHTML = `
    <div class="popHead">
      <div class="label">Color</div>
      <button class="iconbtn iconbtn--small" id="styleColorPopClose" title="Cerrar">×</button>
    </div>
    <div class="grid">
      ${STYLE_PALETTE.map(c=>`<button class="cbtn" data-color="${c}" style="background:${c}" title="${c}"></button>`).join("")}
    </div>
    <div class="row">
      <div class="tiny muted">Hex</div>
      <input id="styleHexInput" class="input input--sm" value="${currentHex||""}" />
      <button id="styleHexApply" class="btn">Aplicar</button>
    </div>
  `;

  // Use fixed positioning so it's never clipped by the modal body
  pop.style.position = "fixed";
  const rect = anchorEl.getBoundingClientRect();
  pop.style.left = rect.left + "px";
  pop.style.top  = (rect.bottom + 8) + "px";
  pop.classList.add("open");

  const close = ()=> pop.classList.remove("open");
  pop.querySelector("#styleColorPopClose")?.addEventListener("click", (e)=>{ e.stopPropagation(); close(); });

  pop.querySelectorAll(".cbtn").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      const c = btn.getAttribute("data-color");
      if(c) onPick(c);
      close();
    });
  });

  pop.querySelector("#styleHexApply")?.addEventListener("click", (e)=>{
    e.stopPropagation();
    const val = (pop.querySelector("#styleHexInput")?.value || "").trim();
    if(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(val)){
      onPick(val);
      close();
    }
  });

  // click outside closes
  setTimeout(()=>{
    const onDoc = (ev)=>{
      if(!pop.contains(ev.target)) close();
      document.removeEventListener("click", onDoc, true);
    };
    document.addEventListener("click", onDoc, true);
  }, 0);
}

