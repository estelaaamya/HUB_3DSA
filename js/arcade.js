/* Zona de retos · reto relámpago, detective de conceptos y reto cooperativo
   Depende de: js/utils.js, data/modulos.js y data/juegos.js. */

const aleatorio = lista => lista[Math.floor(Math.random() * lista.length)];

// Dibuja las opciones de una pregunta en `contenedor`.
// Al elegir una, bloquea las demás y llama a `alElegir(opcion)`.
function dibujarOpciones(contenedor, q, alElegir) {
  const botones = opcionesMezcladas(q).map(op => {
    const b = boton(op.texto, "op", () => {
      botones.forEach(x => { x.disabled = true; });
      alElegir(op);
    });
    return b;
  });
  contenedor.replaceChildren(...botones);
}

/* ---------- ⚡ Reto relámpago ---------- */
const TODAS_LAS_PREGUNTAS = MODULOS.flatMap(m => m.quiz.map(q => ({ ...q, modulo: m.nombre })));
let racha = 0;

function nuevoReto() {
  const q = aleatorio(TODAS_LAS_PREGUNTAS);
  $("reto-pregunta").textContent = q.p + " · " + q.modulo;
  $("reto-feedback").textContent = "";
  dibujarOpciones($("reto-opciones"), q, op => {
    racha = op.correcta ? racha + 1 : 0;
    $("reto-feedback").textContent = op.correcta
      ? "¡Correcto! Racha: " + racha + " 🔥"
      : "¡Buen intento! La respuesta correcta era: " + q.o[q.c];
    $("racha").textContent = racha;
  });
}

/* ---------- 🧠 Detective de conceptos ---------- */
function nuevaPista() {
  const q = aleatorio(PISTAS);
  $("pista-texto").textContent = "Pista: " + q.p;
  $("detective-feedback").textContent = "";
  dibujarOpciones($("detective-opciones"), q, op => {
    $("detective-feedback").textContent = op.correcta
      ? "¡Caso resuelto, detective! 🕵️"
      : "Pista revisada: la respuesta correcta es " + q.o[q.c] + ".";
  });
}

/* ---------- 🌱 Reto cooperativo ---------- */
function nuevoCooperativo() {
  const r = RETO_COOPERATIVO;
  $("coop-enunciado").textContent = r.enunciado;
  $("coop-feedback").textContent = "";
  $("coop-reiniciar").hidden = true;
  dibujarOpciones($("coop-opciones"), r, op => {
    $("coop-feedback").textContent = op.correcta ? r.acierto : r.error;
    $("coop-reiniciar").hidden = false;
  });
}

/* ---------- Inicio: cada juego muestra su primera ronda al cargar ---------- */
$("nuevo-reto").onclick = nuevoReto;
$("nueva-pista").onclick = nuevaPista;
$("coop-reiniciar").onclick = nuevoCooperativo;
nuevoReto();
nuevaPista();
nuevoCooperativo();
