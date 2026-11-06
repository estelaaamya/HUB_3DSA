/* Utilidades compartidas por app.js y arcade.js */

const $ = id => document.getElementById(id);

// Crea un elemento con texto y clase opcionales (usa textContent: nunca interpreta HTML).
function el(tag, txt, cls) {
  const n = document.createElement(tag);
  if (txt) n.textContent = txt;
  if (cls) n.className = cls;
  return n;
}

// Crea un botón de tipo "button" listo para usar.
function boton(txt, cls, onclick) {
  const b = el("button", txt, cls);
  b.type = "button";
  if (onclick) b.onclick = onclick;
  return b;
}

// Quita tildes y pasa a minúsculas, para que «aplicacion» encuentre «aplicaciones».
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// Devuelve una copia del arreglo en orden aleatorio (Fisher-Yates).
function mezclar(entrada) {
  const a = [...entrada];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Muestra las opciones de una pregunta en orden aleatorio, conservando cuál es la correcta.
// Devuelve [{ texto, correcta }, ...]
const opcionesMezcladas = q => mezclar(q.o.map((texto, i) => ({ texto, correcta: i === q.c })));

// Almacenamiento con respaldo en memoria si el navegador bloquea localStorage.
const mem = {};
const store = {
  get(k, d) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }
    catch { return k in mem ? mem[k] : d; }
  },
  set(k, v) {
    mem[k] = v;
    try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sin almacenamiento: se usa mem */ }
  }
};
