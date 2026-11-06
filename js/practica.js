/* Práctica general · 5 preguntas mezcladas de todos los módulos.
   Depende de: js/utils.js, data/modulos.js y js/app.js (usa pregunta, el, boton, mezclar, store). */

const TOTAL_PRACTICA = 5;
const CLAVE_MEJOR = "hub-mejor-practica";

function mejorPractica() {
  return store.get(CLAVE_MEJOR, null);
}

function pintarMejorPractica() {
  const m = mejorPractica();
  const salida = $("mejor-practica");
  if (!salida) return;
  if (!m) { salida.textContent = "todavía sin intentos"; return; }
  const pct = Math.round(m.aciertos / m.total * 100);
  salida.textContent = m.aciertos + " de " + m.total + " (" + pct + " %)";
}

// Todas las preguntas del portal, cada una con el nombre de su módulo.
function bancoPreguntas() {
  const banco = [];
  MODULOS.forEach(m => m.quiz.forEach(q => banco.push({ q, modulo: m.nombre })));
  return banco;
}

function abrirPractica() {
  const total = Math.min(TOTAL_PRACTICA, bancoPreguntas().length);
  const elegidas = mezclar(bancoPreguntas()).slice(0, total);
  const box = $("f-cont");
  const titulo = el("h2", "Práctica general");
  titulo.id = "f-titulo";

  const estado = el("p", null, "quiz-meta");
  estado.setAttribute("aria-live", "polite");
  const cont = el("div");

  box.replaceChildren(
    boton("Cerrar", "cerrar", () => $("ficha").close()),
    titulo,
    el("p", "Cinco preguntas mezcladas de los diez módulos. Elige una opción: la respuesta se corrige al instante.", "docente"),
    estado,
    cont
  );

  let i = 0, aciertos = 0;

  function terminar() {
    const previo = mejorPractica();
    const esMejor = !previo || aciertos / total > previo.aciertos / previo.total;
    if (esMejor) {
      store.set(CLAVE_MEJOR, { aciertos, total });
      pintarMejorPractica();
    }
    estado.textContent = "Práctica terminada.";

    const caja = el("div", null, "preg");
    const pct = Math.round(aciertos / total * 100);
    caja.append(
      el("h3", "Resultado"),
      el("p", "Acertaste " + aciertos + " de " + total + " (" + pct + " %).", "fb"),
      el("p", esMejor
        ? "¡Es tu mejor resultado hasta ahora!"
        : "Tu mejor resultado sigue siendo " + previo.aciertos + " de " + previo.total + ".")
    );
    const repetir = boton("Repetir", "cta", abrirPractica);
    const cerrar = boton("Cerrar", "cerrar", () => $("ficha").close());
    caja.append(repetir, cerrar);
    cont.replaceChildren(caja);
    repetir.focus();
  }

  function paso() {
    if (i >= total) { terminar(); return; }
    const item = elegidas[i];
    estado.textContent = "Aciertos: " + aciertos + " · Pregunta " + (i + 1) + " de " + total;

    const caja = el("div", null, "preg");
    caja.append(
      el("p", "Pregunta " + (i + 1) + " de " + total + " · " + item.modulo, "quiz-meta"),
      el("p", item.q.p)
    );
    const fb = el("p", null, "fb");
    fb.setAttribute("aria-live", "polite");

    const botones = opcionesMezcladas(item.q).map(op => {
      const b = boton(op.texto, "op", () => {
        botones.forEach(x => {
          x.b.disabled = true;
          if (x.op.correcta) x.b.classList.add("bien");
        });
        if (op.correcta) {
          aciertos++;
          fb.textContent = "¡Correcto!";
        } else {
          b.classList.add("mal");
          fb.textContent = "Casi. La respuesta correcta es: " + item.q.o[item.q.c] + ".";
        }
        siguiente.hidden = false;
        siguiente.focus();
      });
      caja.append(b);
      return { b, op };
    });

    const siguiente = boton(i + 1 === total ? "Ver resultado" : "Siguiente pregunta", "cta", () => {
      i++;
      paso();
    });
    siguiente.hidden = true;
    caja.append(fb, siguiente);

    cont.replaceChildren(caja);
  }

  $("ficha").showModal();
  paso();
}

/* Botón y mejor resultado de la portada. */
if ($("practicar")) {
  $("practicar").onclick = abrirPractica;
  pintarMejorPractica();
}
