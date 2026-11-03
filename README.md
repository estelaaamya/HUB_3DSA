# HUB 3DS-A · Repaso integral 2026

Portal educativo estático para repasar los aprendizajes de 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A», Instituto Nacional Cantón Lourdes (INDEL).

**Autora:** Estela Amaya  \n**Empresa del proyecto:** HUB 3DS-A · equipo de 6 integrantes  
**Enlace público:** pendiente de publicar en GitHub Pages: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

## Propósito
Reunir en un solo portal las fichas de los periodos y módulos estudiados durante el año, indicando aprendizajes, instrumentos, programas, herramientas y recursos. Las fichas se presentan sin archivos ni capturas de evidencias. Cada ficha incluye un quiz de tres preguntas.

## Mapa de módulos y periodos
| Docente | Módulo o periodo |
|---|---|
| Javier Arturo García Mineros | Semana de adaptación y refuerzo (02-02-2026 al 13-02-2026; periodo inicial, no módulo numerado; sin atribuir Git/GitHub) |
| Javier Arturo García Mineros | 3.3 · Administración de Bases de Datos (MySQL) |
| Javier Arturo García Mineros | 3.4 · Elaboración de documentación de Sistemas Informáticos |
| Javier Arturo García Mineros | 3.6 · Conversación en inglés sobre mantenimiento de sistemas informáticos |
| Javier Arturo García Mineros | 3.8 · Proyecto innovador de Desarrollo de Software |
| Arcides Canales Sorto | 1 · Desarrollo de aplicaciones de software para la solución de problemas |
| Arcides Canales Sorto | 2 · Desarrollo de componentes para dispositivos móviles |
| Arcides Canales Sorto | Mantenimiento y aseguramiento de la operación del sistema informático |
| Julio Nelson Portillo | Módulo de Cooperativismo |
| Julio Nelson Portillo / Arcides Canales Sorto | Proyecto de tesis · base de datos de una cafetería y empresa HUB 3DS-A |

**Empresa:** HUB 3DS-A, propuesta del equipo de seis integrantes. La tesis documentó la creación de la base de datos de una cafetería.  \n\n**Nota:** esta versión se entrega sin fotografías, capturas ni archivos de evidencias. El contenido describe las actividades y tecnologías que fueron indicadas por la estudiante; los instrumentos y herramientas no especificados se mantienen redactados de forma general.

## Funciones del portal
- Portada y navegación.
- Tarjetas generadas desde `data/modulos.js`.
- Fichas con explicación de los módulos, aprendizajes, instrumentos, programas, herramientas, recursos y quiz. No se adjuntan evidencias.
- Buscador y filtros por docente.
- Progreso guardado en el navegador.
- Modo claro/oscuro.
- Zona Arcade 3DS-A con tres juegos: reto relámpago, detective de conceptos y reto cooperativo.
- Diseño adaptable a celulares y accesible mediante teclado.

## Estructura
- `index.html`: estructura de la página.
- `css/styles.css`: estilos.
- `js/app.js`: buscador, filtros, fichas, progreso y quiz.
- `data/modulos.js`: contenido de los módulos.
- `img/`: imágenes e iconos.

## Cómo abrirlo en Visual Studio Code
1. Extraer el ZIP.
2. Abrir la carpeta `HUB 3DS-A_HUB_sin_evidencias` en Visual Studio Code.
3. Instalar la extensión Live Server si todavía no está instalada.
4. Clic derecho en `index.html` y seleccionar **Open with Live Server**.
5. Comprobar las tarjetas, filtros, fichas, quizzes, los tres juegos y el modo claro/oscuro.

## Publicar en GitHub Pages
1. Crear un repositorio público en GitHub.
2. Subir el contenido de la carpeta `hub-3dsa` (no una carpeta comprimida dentro del repositorio).
3. Abrir Settings → Pages.
4. Seleccionar la rama principal y la carpeta raíz (`/root`) y guardar.
5. Esperar la publicación y abrir la URL en una ventana de incógnito.
6. Sustituir el enlace provisional de este README por la URL real.

## Acuerdos de Git
- Hacer commits pequeños y descriptivos, por ejemplo `docs: completa ficha del modulo 3.3`.
- Antes de subir cambios ajenos, actualizar la copia local con `git pull`.
- No subir contraseñas, tokens, datos personales ni información privada.
- Revisar que las rutas de imágenes, CSS y JavaScript sean relativas y respeten mayúsculas/minúsculas.

## Versiones previstas según la guía
| Etiqueta | Entrega | Contenido |
|---|---|---|
| `v0.2` | Día 1 | Portada, navegación y tarjetas generadas desde datos |
| `v0.5` | Día 2 | Fichas verificadas, buscador y progreso |
| `v1.0` | Día 3 | Quiz, modo claro/oscuro, revisión final y README |

## Registro de prompts de IA
Ver `PROMPTS-IA.md`. Los prompts son ejemplos de apoyo; el equipo debe registrar los que realmente utilizó y verificar el contenido generado.

## Bitácora
Ver `BITACORA-dia1-estela.md`. Completar la parte de dificultades con lo que realmente ocurrió durante el trabajo.


## Dinámicas y juegos
- **Reto relámpago:** selecciona al azar preguntas de los quizzes de los módulos y registra la racha de respuestas correctas.
- **Detective de conceptos:** presenta una pista y permite identificar términos de bases de datos, desarrollo móvil, PrestaShop, hardware, software y cooperativismo.
- **Reto cooperativo:** plantea una situación de campesinos que forman una cooperativa y permite reconocer la participación democrática.


## Estado frente a la rúbrica
- Las 10 fichas contienen 2 instrumentos, 2 programas, al menos 2 herramientas, 3 recursos y un quiz de 3 preguntas.
- **Pendiente:** la versión de este ZIP no adjunta ni muestra evidencias por módulo. La rúbrica de contenido solicita al menos una evidencia en cada ficha; no se inventaron evidencias para aparentar cumplimiento.
- **Pendiente:** comprobar que cada instrumento y programa coincide con los materiales realmente utilizados en clase, y verificar los enlaces externos.
- **Pendiente:** publicar en GitHub Pages, reemplazar el enlace provisional, registrar commits de cada integrante y etiquetar la versión `v0.2`.
