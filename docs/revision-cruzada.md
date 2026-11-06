# Revisión cruzada con Issues · Día 2

**Título del Issue:** `Ficha [nombre del módulo]: [qué falta o está mal]`

**Plantilla:**
- **Qué encontré:** (concreto, con el campo exacto, por ejemplo «instrumentos tiene 1; el mínimo es 2»)
- **Dónde está:** archivo y línea (`data/modulos.js`, módulo `m33-bd`)
- **Sugerencia:** (cómo podría corregirse, dicho con respeto)

**Al corregir:** el commit cierra el Issue, por ejemplo `fix: agrega 2.º instrumento a la ficha 3.3, closes #1`.

Checklist del revisor: nombre y docente · resumen + 3 aprendizajes · instrumentos ≥ 2 · programas ≥ 2 · herramientas ≥ 2 · recursos ≥ 3 con enlace que abre · evidencias ≥ 1 · quiz ≥ 3. (La ficha del portal ya muestra qué le falta.)

## Ejemplo listo para copiar

**Título:** `Ficha 3.3: falta la evidencia y un instrumento está por confirmar`

**Cuerpo:**
> **Qué encontré:** la ficha de 3.3 tiene 2 instrumentos, 2 programas, 3 herramientas, 3 recursos y quiz de 3 preguntas, pero **no tiene evidencia**. Además, el instrumento dice «Guías o prácticas de MySQL (confirmar nombres y números)».
>
> **Dónde está:** `data/modulos.js`, módulo `m33-bd` (campo `instrumentos` y falta `evidencias`).
>
> **Sugerencia:** agregar una captura de MySQL Workbench en `evidencias/02-m33-bd/` y enlazarla con `rec("Consulta SQL", "evidencias/02-m33-bd/consulta-sql.png")`; confirmar el nombre de la guía con los apuntes.
>
> **Cierre:** `fix: agrega evidencia y confirma instrumento de 3.3, closes #1`

Después de abrirlo, corregir y cerrarlo con el commit, la revisión cruzada queda registrada en GitHub. Se puede repetir el mismo formato para los otros módulos.
