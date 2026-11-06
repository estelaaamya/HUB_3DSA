# Informe de Lighthouse

**Fecha:** 5 de noviembre de 2026
**Página auditada:** `http://127.0.0.1:8765/` (servidor local del portal)
**Informe completo:** `evidencias/lighthouse-local.html`

## Resultados

| Categoría | Puntaje | Meta |
|---|---:|---|
| Accesibilidad | **100** | 90 o más |
| Buenas prácticas | **100** | — |
| SEO | **100** | — |
| Rendimiento | Pendiente | — |

No quedaron fallas de accesibilidad, buenas prácticas ni SEO en la auditoría.

> La herramienta usada audita accesibilidad, buenas prácticas y SEO, pero **no mide rendimiento**. Para tener los cuatro puntajes hay que abrir Chrome, F12 → Lighthouse, marcar «Performance» y «Mobile», y generar el informe sobre la URL pública. Guardar la captura en `evidencias/`.

## Qué se revisó antes de la auditoría
- Idioma de la página: `lang="es"`.
- Un solo `h1` y jerarquía de títulos ordenada (`h1` → `h2` → `h3`).
- Enlace «Ir a los módulos» para saltar la navegación.
- Texto alternativo en la ilustración de portada.
- Etiqueta oculta para el buscador y `aria-label` en los grupos de filtros.
- Botones táctiles de al menos 44 px.
- Contraste legible en modo claro y oscuro.
- Navegación completa con `Tab` y atajo `/` para buscar.
- Avisos de resultado del quiz con `aria-live`.
- Sin errores en la consola del navegador.

## Cómo repetirlo en la URL publicada
1. Abrir <https://estelaaamya.github.io/HUB_3DSA/> en Chrome.
2. F12 → pestaña **Lighthouse**.
3. Marcar **Performance**, **Accessibility**, **Best Practices** y **SEO**, y elegir **Mobile**.
4. **Analyze page load**.
5. Anotar los cuatro puntajes en este documento y guardar la captura en `evidencias/lighthouse-publicado.png`.

## Pendientes
- [ ] Generar el informe sobre la URL pública (incluye rendimiento).
- [ ] Repetir la prueba en un celular real y anotar en `docs/bitacora-dia3.md`.
