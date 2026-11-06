# Pasos para entregar el portal

Entrega del portal: **viernes 6 de noviembre**, vale **10 % de la nota** (guías del Día 1 y Día 2). Este documento deja el orden exacto para publicar y subir sin olvidar nada.

## 1. Antes de publicar (5 minutos)
- [ ] Abrir el portal con Live Server y revisar que no haya errores en la consola (F12 → Console).
- [x] README con autoría individual y enlace público.
- [x] Verificar que las diez fichas tengan al menos una evidencia.
- [ ] Revisar que no haya contraseñas, tokens ni datos personales en ningún archivo.
- [ ] Confirmar que `index.html` está en la **raíz** de la carpeta que se va a publicar.

## 2. Publicar en GitHub Pages
Si es la primera vez:

```bash
cd portal-modulos
git init
git add .
git commit -m "feat: portal de módulos con fichas y actividades"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portal-modulos.git
git push -u origin main
```

Luego, en GitHub:
1. **Settings → Pages**.
2. En *Source*, elegir **Deploy from a branch**.
3. Rama **main**, carpeta **/ (root)** y **Save**.
4. Esperar 1–2 minutos y abrir la URL: `https://TU-USUARIO.github.io/portal-modulos/`.
5. Pegar esa URL en el README (reemplaza el enlace provisional) y en la entrega de Classroom.

Si el repositorio ya existe, solo hay que subir los cambios:

```bash
git add .
git commit -m "feat: actividades por módulo y guía de evidencias"
git push
```

**Comprobación final:** abrir la URL en una **ventana de incógnito**. Si ahí se ve bien, cualquier persona puede verla.

## 3. Qué subir a Classroom
Adjuntar o pegar:
1. **Enlace público** de GitHub Pages (en el comentario de la tarea).
2. **ZIP del portal** (`HUB_3DSA_Auralix_v1.0.zip`), por si el enlace falla.
3. **README.md** actualizado con autoría y enlace.
4. Captura de pantalla del portal publicado y del aviso de las fichas completas.

En el comentario se puede escribir algo breve:

> Portal de módulos de 3.º «A» publicado en GitHub Pages: [enlace]. Incluye las diez fichas con instrumentos, programas, herramientas, recursos, actividades y quiz de tres preguntas. El README trae el mapa de módulos y las bitácoras están en `docs/`.

## 4. Lista de verificación contra las guías
Nivel Base (obligatorio):
- [x] Portada con nombre propio y navegación clara.
- [x] Todos los módulos pintados desde `data/modulos.js`.
- [ ] Ficha por módulo con instrumentos, programas, herramientas, recursos y evidencias (falta la evidencia de cada ficha).
- [x] Diseño que se ve bien en celular (revisar en un celular real).
- [x] Publicado en GitHub Pages: <https://estelaaamya.github.io/HUB_3DSA/>.
- [x] README con autoría, enlace y registro de prompts.

Nivel Pro (para nota completa):
- [x] Buscador y filtros en tiempo real.
- [x] Progreso del repaso guardado en el navegador.
- [x] Quiz interactivo con retroalimentación inmediata y mejor puntaje.
- [x] Práctica general de 5 preguntas mezcladas.
- [x] Modo claro y modo oscuro.

Nivel Épico (opcional):
- [x] Insignias por repasar módulos.
- [ ] Flashcards de repaso.
- [ ] Línea de tiempo animada del año.
- [ ] Nube de tecnologías con clic y filtro.
- [ ] Instalable como app (PWA).
- [ ] Atajo de teclado para buscar (ya funciona con `/`).
- [ ] Tutoriales cortos en video.

## 5. Entregables del Día 1 y Día 2
| Entregable | Dónde está | Estado |
|---|---|---|
| Portal v0.2 publicado | GitHub Pages | Repositorio con etiquetas `v0.2`, `v0.5` y `v1.0`; falta activar Pages |
| Fichas con contenido verificado (v0.5) | `data/modulos.js` | Listo, con datos «por confirmar» marcados |
| Buscador y progreso | `js/app.js` | Listo |
| Actividades por módulo | `data/modulos.js` y `docs/actividades-por-modulo.md` | Listo |
| Práctica general y mejor puntaje | `js/practica.js` | Listo |
| Bitácoras | `docs/bitacora-*.md` | Días 1, 2 y 3 listos |
| Revisión cruzada (Issue) | `docs/revision-cruzada.md` | Pendiente de abrir el Issue |
| Registro de prompts | `docs/prompts-ia.md` | Listo |
| Evidencias | `evidencias/` | Las diez fichas con al menos una evidencia |
| Informe de Lighthouse | `docs/informe-lighthouse.md` y `evidencias/lighthouse-local.html` | Accesibilidad, buenas prácticas y SEO en 100 |

## 6. Seguridad
- No compartas tu contraseña de Classroom, correo ni GitHub con nadie.
- Si ya la compartiste, cámbiala y activa la verificación en dos pasos.
- La entrega se hace desde tu propia cuenta: así queda registrada a tu nombre.
