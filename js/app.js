/* Portal de módulos · lógica del portal
   Depende de: js/utils.js y data/modulos.js (se cargan antes en index.html). */

/* ---------- Estado ---------- */
let hechos = store.get("hub-hechos", {});   // { idModulo: true }
let notas = store.get("hub-notas", {});     // { idModulo: aciertos del quiz }
let docente = "Todos";
let texto = "";

const DOCENTES = ["Todos", ...new Set(MODULOS.map(m => m.docente))];

/* ---------- Tema claro / oscuro ---------- */
const root = document.documentElement;
const btnTema = $("tema");

function aplicarTema(t) {
  root.dataset.theme = t;
  btnTema.textContent = t === "dark" ? "Modo claro" : "Modo oscuro";
}

const prefiereClaro = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
aplicarTema(store.get("hub-tema", prefiereClaro ? "light" : "dark"));
btnTema.onclick = () => {
  const t = root.dataset.theme === "dark" ? "light" : "dark";
  aplicarTema(t);
  store.set("hub-tema", t);
};

/* ---------- Progreso e insignias ---------- */
function insignia(n, total) {
  if (n === total) return "Insignia: Portal completo";
  if (n >= Math.ceil(total / 2)) return "Insignia: Mitad del año dominada";
  if (n >= 1) return "Insignia: Primer repaso";
  return "Aún sin insignia: abre una ficha y empieza.";
}

function pintarProgreso() {
  const n = Object.keys(hechos).length, total = MODULOS.length;
  $("rep").textContent = n;
  $("total").textContent = total;
  $("relleno").style.width = (n / total * 100) + "%";
  $("insignia").textContent = insignia(n, total);
  $("pct").textContent = Math.round(n / total * 100) + " %";
  const fin = n === total;
  if (fin && $("celebra").hidden) confeti();
  $("celebra").hidden = !fin;
}

// Lluvia de confeti al llegar al 100 % (solo decoración).
function confeti() {
  const c = el("div", null, "confeti");
  c.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 28; i++) {
    const s = el("span", ["🎉", "✨", "⭐", "💙"][i % 4]);
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDelay = Math.random() * .8 + "s";
    c.append(s);
  }
  document.body.append(c);
  setTimeout(() => c.remove(), 4000);
}

/* ---------- Anatomía de una ficha: mínimos que debe cumplir ---------- */
const MINIMOS = [["instrumentos", 2], ["programas", 2], ["herramientas", 2], ["recursos", 3], ["evidencias", 1]];
const ICONOS = { adaptacion: "🌱", "m33-bd": "🗄️", "m34-documentacion": "📝", "m36-ingles": "🗣️", "m38-proyecto": "🎨",
  "m1-aplicaciones": "🧩", "m2-moviles": "📱", mantenimiento: "🛠️", cooperativismo: "🤝", "tesis-empresa": "🎓" };

// Devuelve lo que le falta a la ficha para cumplir los mínimos.
function faltantes(m) {
  const f = MINIMOS.filter(([k, n]) => (m[k] || []).length < n).map(([k, n]) => k + " (mín. " + n + ")");
  if (m.quiz.length < 3) f.push("quiz (mín. 3)");
  return f;
}

/* ---------- Texto con notas «por confirmar» ---------- */
// «Guías de MySQL (confirmar nombres)» → texto principal + nota atenuada.
function separarNota(txt) {
  const m = txt.match(/^(.*?)\s*\(([^)]*(?:confirmar|completar|agregar)[^)]*)\)\s*$/i);
  return m ? { principal: m[1], nota: m[2] } : { principal: txt, nota: "" };
}

function itemLista(txt) {
  const { principal, nota } = separarNota(txt);
  const li = el("li", principal);
  if (nota) li.append(" ", el("span", nota, "nota"));
  return li;
}

/* ---------- Buscador y filtros ---------- */
function pintarFiltros() {
  DOCENTES.forEach(d => {
    const b = boton(d, "fbtn", () => {
      docente = d;
      [...$("filtros").children].forEach(x => x.setAttribute("aria-pressed", x === b));
      pintar();
    });
    b.setAttribute("aria-pressed", d === docente);
    $("filtros").append(b);
  });
}

$("q").oninput = e => { texto = norm(e.target.value); pintar(); };

// Atajo: la tecla «/» enfoca el buscador (salvo que ya estés escribiendo).
document.addEventListener("keydown", e => {
  const escribiendo = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
  if (e.key === "/" && !escribiendo) { e.preventDefault(); $("q").focus(); }
});

function coincide(m) {
  const base = norm([m.nombre, m.docente, m.colabora || "", m.resumen,
    ...m.herramientas, ...m.programas, ...m.instrumentos, ...(m.actividades || [])].join(" "));
  const delDocente = docente === "Todos" || m.docente === docente || m.colabora === docente;
  return delDocente && base.includes(texto);
}

/* ---------- Tarjetas ---------- */
function lineaDocente(m) {
  return [m.docente, m.colabora && "con " + m.colabora, m.periodo].filter(Boolean).join(" · ");
}

// Etiquetas cortas para la tarjeta (las largas se leen en la ficha).
function etiquetas(m) {
  const cortas = [...m.herramientas, ...m.programas]
    .map(t => separarNota(t).principal)
    .filter(t => t.length <= 34);
  return [...new Set(cortas)].slice(0, 5);
}

function tarjeta(m) {
  const c = el("article", null, "card" + (hechos[m.id] ? " hecho" : ""));
  c.dataset.tono = DOCENTES.indexOf(m.docente) % 3;
  const falta = faltantes(m);
  const chip = el("span", falta.length ? "Ficha: faltan " + falta.length + " dato(s)" : "Ficha completa ✓", "chip" + (falta.length ? "" : " ok"));
  c.append(el("span", ICONOS[m.id] || "📘", "ico"), el("h3", m.nombre), el("p", lineaDocente(m), "docente"), el("p", m.resumen), chip);

  const ul = el("ul", null, "tags");
  etiquetas(m).forEach(t => {
    const li = el("li");
    li.append(boton(t, "tag", () => { $("q").value = t; texto = norm(t); pintar(); }));
    ul.append(li);
  });
  c.append(ul);

  if (hechos[m.id]) {
    c.append(el("p", "Repasado" + (notas[m.id] != null ? " · mejor quiz " + notas[m.id] + "/" + m.quiz.length : ""), "sello"));
  }
  c.append(boton("Abrir ficha", "abrir", () => abrirFicha(m)));
  return c;
}

function pintar() {
  const lista = $("lista");
  const visibles = MODULOS.filter(coincide);
  lista.replaceChildren(...visibles.map(tarjeta));
  $("estado").textContent = visibles.length
    ? "Mostrando " + visibles.length + " de " + MODULOS.length + " módulos."
    : "No encontré módulos con esa búsqueda. Prueba otra palabra o elige «Todos».";
  pintarProgreso();
}

/* ---------- Ficha del módulo ---------- */
function seccion(titulo, items) {
  const f = document.createDocumentFragment();
  const ul = el("ul");
  items.forEach(i => ul.append(itemLista(i)));
  f.append(el("h3", titulo), ul);
  return f;
}

// Actividades de clase: lista numerada (se lee como una secuencia de trabajo).
function seccionActividades(items) {
  const f = document.createDocumentFragment();
  const ol = el("ol", null, "acts");
  items.forEach(i => ol.append(itemLista(i)));
  f.append(el("h3", "Actividades realizadas"), ol);
  return f;
}

function seccionRecursos(recursos) {
  const f = document.createDocumentFragment();
  const ul = el("ul");
  recursos.forEach(r => {
    const a = el("a", r.t);
    a.href = r.u; a.target = "_blank"; a.rel = "noopener noreferrer";
    const li = el("li"); li.append(a); ul.append(li);
  });
  f.append(el("h3", "Recursos para seguir aprendiendo"), ul);
  return f;
}

// Lista de enlaces; si no hay ninguno, muestra un aviso en lugar de dejar la sección vacía.
function seccionEnlaces(titulo, items, vacio) {
  const f = document.createDocumentFragment();
  f.append(el("h3", titulo));
  if (!items.length) { f.append(el("p", vacio, "vacio")); return f; }
  const ul = el("ul");
  items.forEach(r => {
    const a = el("a", r.t);
    a.href = r.u; a.target = "_blank"; a.rel = "noopener noreferrer";
    const li = el("li"); li.append(a); ul.append(li);
  });
  f.append(ul);
  return f;
}

function pregunta(q, numero, alResponder) {
  const caja = el("div", null, "preg");
  const fb = el("p", null, "fb");
  fb.setAttribute("aria-live", "polite");
  caja.append(el("p", numero + ". " + q.p));

  const botones = opcionesMezcladas(q).map(op => {
    const b = boton(op.texto, "op", () => {
      botones.forEach(x => { x.b.disabled = true; if (x.op.correcta) x.b.classList.add("bien"); });
      if (op.correcta) {
        fb.textContent = "¡Correcto!";
      } else {
        b.classList.add("mal");
        fb.textContent = "Casi. La respuesta correcta es: " + q.o[q.c] + ".";
      }
      alResponder(op.correcta);
    });
    caja.append(b);
    return { b, op };
  });
  caja.append(fb);
  return caja;
}

function abrirFicha(m) {
  const box = $("f-cont");
  const titulo = el("h2", m.nombre);
  titulo.id = "f-titulo";

  const partes = [
    boton("Cerrar", "cerrar", () => $("ficha").close()),
    titulo,
    el("p", lineaDocente(m), "docente"),
    el("p", m.resumen),
    seccion("Tres cosas que aprendí", m.aprendizajes),
  ];
  if (m.actividades && m.actividades.length) {
    partes.push(seccionActividades(m.actividades));
  }
  partes.push(
    seccion("Instrumentos", m.instrumentos),
    seccion("Programas", m.programas),
    seccion("Herramientas", m.herramientas),
    seccionRecursos(m.recursos),
    seccionEnlaces("Evidencias", m.evidencias || [], "Aún sin evidencia. Sube una captura o enlace a evidencias/ y agrégalo en data/modulos.js."),
    el("h3", "Quiz de " + m.quiz.length + " preguntas")
  );
  box.replaceChildren(...partes);

  // Quiz con retroalimentación inmediata
  const resultado = el("p", null, "fb");
  resultado.setAttribute("aria-live", "polite");
  let aciertos = 0, respondidas = 0;
  m.quiz.forEach((q, i) => {
    box.append(pregunta(q, i + 1, correcta => {
      if (correcta) aciertos++;
      if (++respondidas < m.quiz.length) return;
      const previo = notas[m.id] ?? 0;
      const mejor = Math.max(previo, aciertos);
      notas[m.id] = mejor;
      store.set("hub-notas", notas);
      resultado.textContent = "Resultado: " + aciertos + " de " + m.quiz.length + ". " +
        (aciertos > previo ? "¡Nuevo mejor puntaje!" : "Mejor puntaje: " + mejor + " de " + m.quiz.length + ".");
      pintar();
    }));
  });
  box.append(resultado);

  const falta = faltantes(m);
  box.append(el("p", falta.length ? "Para completar esta ficha: " + falta.join(", ") + "." : "Esta ficha cumple todos los mínimos. ✓", "faltan" + (falta.length ? "" : " ok")));

  // Marcar / quitar de repasados
  const etiquetaMarca = () => hechos[m.id] ? "Quitar de repasados" : "Marcar como repasado";
  const marca = boton(etiquetaMarca(), "marcar", () => {
    if (hechos[m.id]) delete hechos[m.id]; else hechos[m.id] = true;
    store.set("hub-hechos", hechos);
    marca.textContent = etiquetaMarca();
    pintar();
  });
  box.append(marca);

  $("ficha").showModal();
}

// Cerrar la ficha al tocar fuera de ella.
$("ficha").addEventListener("click", e => {
  const r = $("ficha").getBoundingClientRect();
  const fuera = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (fuera) $("ficha").close();
});

/* ---------- Inicio ---------- */
$("n-mod").textContent = MODULOS.length;
$("n-doc").textContent = DOCENTES.length - 1;
pintarFiltros();
pintar();
