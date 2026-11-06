# HUB 3DS·A · Portal de módulos · Repaso 2026

Portal educativo estático (HTML, CSS y JavaScript, sin frameworks) para repasar los módulos de 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A», Instituto Nacional Cantón Lourdes (INDEL).

- **Portal:** HUB 3DS·A
- **Enlace público:** <https://estelaaamya.github.io/HUB_3DSA/>
- **Repositorio:** <https://github.com/estelaaamya/HUB_3DSA>
- **Autora:** Estela Amaya
- **Autoría:** individual

## Autoría y roles
| Integrante | Rol |
|---|---|
| Estela Amaya | Todo el trabajo del portal: contenido de las fichas, interfaz y accesibilidad, banco de preguntas, pruebas, documentación, publicación en GitHub y versiones |

> El portal fue desarrollado **individualmente por Estela Amaya**. La empresa Auralix, del proyecto de tesis, se presenta como un equipo de seis personas, pero **los nombres de los otros cinco integrantes no se incluyen porque no están confirmados**. Si el docente exige el listado completo del grupo, agrégalo aquí y pide a cada integrante que haga al menos un commit real.

## Qué incluye
- Portada con navegación y progreso del repaso (se guarda en el navegador).
- Tarjetas de módulos pintadas desde `data/modulos.js`.
- Buscador (atajo: tecla `/`) y filtro por docente.
- Ficha por módulo: resumen, aprendizajes, **actividades realizadas**, instrumentos, programas, herramientas, recursos, evidencias y quiz de 3 preguntas.
- **Práctica general**: 5 preguntas mezcladas de todos los módulos con corrección inmediata y mejor puntaje guardado.
- Quiz por módulo con retroalimentación y mejor puntaje.
- Modo claro y oscuro (respeta la preferencia del sistema la primera vez y recuerda la elección).
- Contador «Mostrando X de Y», porcentaje de progreso e insignias.
- Aviso de los mínimos que le faltan a cada ficha.
- Zona de retos: práctica general, reto relámpago, detective de conceptos y reto cooperativo.
- Diseño adaptable a celular y navegable con teclado.

## Mapa de módulos
| Docente | Módulo o periodo |
|---|---|
| Javier Arturo García Mineros | Semana de adaptación y refuerzo (02-02-2026 al 13-02-2026) |
| Javier Arturo García Mineros | 3.3 · Administración de Bases de Datos (MySQL) |
| Javier Arturo García Mineros | 3.4 · Elaboración de documentación de Sistemas Informáticos |
| Javier Arturo García Mineros | 3.6 · Conversación en inglés sobre mantenimiento de sistemas informáticos |
| Javier Arturo García Mineros | 3.8 · Proyecto innovador de Desarrollo de Software |
| Arcides Canales Sorto | 1 · Desarrollo de aplicaciones de software para la solución de problemas |
| Arcides Canales Sorto | 2 · Desarrollo de componentes para dispositivos móviles |
| Arcides Canales Sorto | Mantenimiento y aseguramiento de la operación del sistema informático |
| Julio Nelson Portillo | Cooperativismo |
| Julio Nelson Portillo (con Arcides Canales Sorto) | Proyecto de tesis · base de datos de una cafetería y empresa Auralix |

## Funciones por nivel
### Nivel Base (obligatorio)
- [x] Portada con nombre propio y navegación clara.
- [x] Todos los módulos pintados desde `data/modulos.js`.
- [x] Ficha por módulo con instrumentos, programas, herramientas, recursos y espacio para evidencias.
- [x] Diseño adaptable a celular.
- [x] Publicado en GitHub Pages: <https://estelaaamya.github.io/HUB_3DSA/>.
- [x] README con autoría, enlace y registro de prompts.

### Nivel Pro (nota completa)
- [x] Buscador y filtros en tiempo real.
- [x] Progreso del repaso guardado en el navegador.
- [x] Quiz interactivo con retroalimentación inmediata y mejor puntaje.
- [x] Modo claro y oscuro.

### Nivel Épico (opcional)
- [x] Insignias por repasar módulos.
- [x] Atajo de teclado para buscar (`/`).
- [ ] Flashcards de repaso.
- [ ] Línea de tiempo animada del año.
- [ ] Nube de tecnologías con clic y filtro.
- [ ] Instalable como app (PWA).
- [ ] Tutoriales cortos en video.

## Estructura de la carpeta
```
portal-modulos/
├── index.html          estructura de la página
├── css/styles.css      estilos (colores en :root, secciones numeradas)
├── js/
│   ├── utils.js        funciones compartidas (almacenamiento, mezclar, etc.)
│   ├── app.js          tarjetas, buscador, filtros, fichas, quiz y progreso
│   ├── practica.js     práctica general de 5 preguntas mezcladas
│   └── arcade.js       los tres juegos
├── data/
│   ├── modulos.js      contenido de los módulos (aquí se edita el contenido)
│   └── juegos.js       pistas y reto cooperativo
├── evidencias/         una carpeta por módulo, con instrucciones en LEEME.md
├── img/                favicon e ilustración de portada
└── docs/               bitácoras, actividades, evidencias, prompts y propuesta de empresa
```

Para agregar un módulo basta con añadir un objeto a `MODULOS` en `data/modulos.js`; la tarjeta aparece sola.

### Campo `actividades`
Cada módulo incluye un arreglo `actividades` con lo que se hizo en clase. La ficha lo muestra como lista numerada **«Actividades realizadas»** y el buscador también lo indexa.

```js
actividades:[
  "Instalación y configuración de MySQL y su cliente de trabajo",
  "Prácticas de consultas SQL: SELECT, INSERT, UPDATE y DELETE"
],
```

El resumen completo está en `docs/actividades-por-modulo.md`.

### Evidencias
Cada carpeta de `evidencias/` tiene un `LEEME.md` con lo que hay que capturar. La guía completa está en `docs/guia-evidencias.md`.

## Abrirlo en local
1. Extrae el ZIP y abre la carpeta `portal-modulos` en Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Clic derecho en `index.html` → **Open with Live Server**.

También funciona con Python instalado:

```bash
python -m http.server 8765
```

Luego abre <http://127.0.0.1:8765/>.

## Publicar en GitHub Pages
1. Sube el **contenido** de la carpeta `portal-modulos` (que `index.html` quede en la raíz del repositorio).
2. En GitHub: **Settings → Pages**.
3. En *Source*, elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y **Save**.
4. Espera un par de minutos y abre `https://estelaaamya.github.io/HUB_3DSA/` en una ventana de incógnito.
5. Comprueba también en un celular.

## Registro de prompts de IA
Está en `docs/prompts-ia.md`. Resume los prompts usados para organizar los módulos, redactar fichas, preparar el quiz y mejorar la accesibilidad. Solo se conservan los prompts realmente enviados.

## Acuerdos de Git
- Commits pequeños y descriptivos, por ejemplo `docs: completa ficha del módulo 3.3`.
- `git pull` antes de subir cambios.
- Nunca subir contraseñas, tokens ni datos personales.
- Rutas relativas y respetando mayúsculas/minúsculas.

## Versiones
| Etiqueta | Día | Contenido |
|---|---|---|
| `v0.2` | 1 | Portada, navegación y tarjetas desde datos |
| `v0.5` | 2 | Fichas verificadas, buscador y progreso |
| `v1.0` | 3 | Quiz, práctica general, modo claro/oscuro, revisión final y README |

## Pendientes antes de entregar
- Comprobar la URL pública en incógnito y en un celular real.
- Verificar con apuntes los datos marcados «por confirmar» (se ven atenuados en las fichas) y comprobar a mano cada enlace de recursos.
- Comprobar que las diez evidencias abran en la URL pública.
- Revisión cruzada: abrir y cerrar al menos un Issue (guía en `docs/revision-cruzada.md`).

## Documentos de apoyo (`docs/`)
- `prompts-ia.md`: registro de prompts de IA.
- `actividades-por-modulo.md`: actividades de clase de los diez módulos.
- `guia-evidencias.md`: qué capturar y cómo enlazarlo.
- `prueba-en-celular.md`: cómo abrir el portal en el celular y qué comprobar.
- `entrega-classroom.md`: pasos para publicar y entregar.
- `informe-lighthouse.md`: auditoría de accesibilidad, buenas prácticas y SEO.
- `defensa.md`: guion de 60 a 90 segundos y preguntas probables.
- `bitacora-dia3.md`: bitácora final y autoevaluación.
- `bitacora-plantilla.md`, `bitacora-dia1-estela.md` y `bitacora-dia2.md`: bitácoras anteriores.
- `historial-cambios-dia1.md`: registro histórico de la revisión del Día 1.
- `revision-cruzada.md`: plantilla de Issues del día 2.
- `propuesta-empresa.md`: Auralix, plan de inversión y punto de equilibrio.
