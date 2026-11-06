# Guion para la defensa (60 a 90 segundos)

La rúbrica da **1 punto individual** por explicar los módulos, el código propio y responder una pregunta de repaso. Este guion se puede adaptar a cualquier integrante.

## 1. Guion corto (90 segundos)

> Buenos días. Este es **HUB 3DS·A**, el portal de repaso de 3.º «A». Reúne los diez módulos del año en fichas con instrumentos, programas, herramientas, recursos, actividades y un quiz de tres preguntas.
>
> El portal está hecho con HTML, CSS y JavaScript, sin frameworks. Los módulos no están escritos en el HTML: se pintan desde `data/modulos.js`. Por eso, si agrego un módulo ahí, la tarjeta aparece sola.
>
> Voy a mostrar tres funciones. Primero, el **buscador**: escribo «dramatización» y me lleva al módulo de inglés, porque también busca dentro de las actividades. Segundo, abro una ficha y se ven las actividades, los recursos y el quiz. Cada respuesta se corrige al instante y el portal guarda mi **mejor puntaje**. Tercero, la **práctica general** mezcla cinco preguntas de todos los módulos y también recuerda el mejor resultado. El **modo claro/oscuro** respeta la preferencia del sistema y recuerda lo que elijo.
>
> Para el progreso uso `localStorage`, así que no se envían datos a ningún servidor. En accesibilidad cuidé el contraste, el texto alternativo, la navegación con Tab y el atajo `/` para buscar. En la última auditoría de Lighthouse obtuve 100 en accesibilidad, buenas prácticas y SEO.
>
> Lo que todavía estoy completando son las evidencias de cada módulo. Gracias.

## 2. Cómo explicar el código (si preguntan)
| Archivo | Qué explicar |
|---|---|
| `data/modulos.js` | Es la fuente única de datos. Cada módulo es un objeto con `id`, docente, resumen, `actividades`, arreglos de instrumentos, programas, herramientas, recursos y `quiz`. |
| `js/app.js` | Pinta las tarjetas, filtra por texto y docente, abre la ficha, arma el quiz y guarda el progreso. La función `faltantes()` revisa los mínimos de la rúbrica. |
| `js/practica.js` | Toma todas las preguntas, las mezcla con Fisher-Yates, muestra cinco sin repetir, corrige y guarda el mejor resultado en `localStorage`. |
| `js/utils.js` | Funciones compartidas: `$`, `el`, `boton`, `norm` (quita tildes), `mezclar` y `opcionesMezcladas`. |
| `css/styles.css` | Variables CSS para el tema claro/oscuro, rejilla adaptable y estilos de la ficha. |

## 3. Preguntas probables y respuestas breves
**¿Por qué no usaste un framework?**
Porque la guía pedía HTML, CSS y JavaScript puro; además el portal es pequeño y así carga rápido y no depende de instalar nada.

**¿Cómo se guarda el progreso?**
En `localStorage`, con las claves `hub-hechos`, `hub-notas`, `hub-tema` y `hub-mejor-practica`. Queda solo en el navegador de cada persona.

**¿Qué pasa si un dato no está confirmado?**
Se escribe con «(confirmar…)» y el portal lo muestra atenuado. Preferimos marcarlo a inventarlo.

**¿Cómo se mezclan las opciones sin repetir la respuesta?**
`opcionesMezcladas()` mezcla las opciones de cada pregunta y busca la correcta por contenido, no por posición. Las preguntas de la práctica se mezclan con Fisher-Yates y se cortan en cinco.

**¿Cómo cumple la accesibilidad?**
Idioma `es`, un solo `h1`, enlace para saltar al contenido, texto alternativo, etiquetas en el buscador, botones de 44 px, foco visible, `aria-live` en los resultados y contraste revisado.

**¿Qué mejorarías?**
Agregar las evidencias reales, instalar el portal como PWA y agregar flashcards para repasar antes de los exámenes.

## 4. Demostración en 4 pasos
1. Abrir la portada y mostrar el progreso y las insignias.
2. Buscar «dramatización» y abrir la ficha del módulo 3.6: mostrar actividades y quiz.
3. Responder una pregunta mal y una bien para mostrar la retroalimentación.
4. Abrir «Practicar 5 preguntas», terminar y recargar para mostrar que el mejor puntaje sigue guardado.

## 5. Antes de presentar
- [ ] Probar la demostración sin conexión a internet (por si falla el wifi).
- [ ] Cronometrar el guion: entre 60 y 90 segundos.
- [ ] Tener el portal abierto en una pestaña y el repositorio en otra.
- [ ] Saber explicar qué parte del código hizo cada quien.
- [ ] Preparar una pregunta de repaso de un módulo propio.
