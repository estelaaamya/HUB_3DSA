# Portal de módulos · Repaso integral 2026

Portal educativo estático (HTML, CSS y JavaScript, sin frameworks) para repasar los módulos de 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A», Instituto Nacional Cantón Lourdes (INDEL).

- **Autora:** Estela Amaya
- **Equipo:** 6 integrantes
- **Enlace público:** pendiente de publicar → `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

## Qué incluye
- Portada con navegación y progreso del repaso (se guarda en el navegador).
- Tarjetas de módulos pintadas desde `data/modulos.js`.
- Buscador (atajo: tecla `/`) y filtro por docente.
- Ficha por módulo: resumen, aprendizajes, instrumentos, programas, herramientas, recursos y quiz de 3 preguntas.
- Modo claro y oscuro.
- Contador «Mostrando X de Y», porcentaje de progreso y celebración al 100 %.
- Sección de evidencias y aviso de los mínimos que le faltan a cada ficha.
- Zona de retos: reto relámpago, detective de conceptos y reto cooperativo.
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

## Estructura de la carpeta
```
portal-modulos/
├── index.html          estructura de la página
├── css/styles.css      estilos (colores en :root, secciones numeradas)
├── js/
│   ├── utils.js        funciones compartidas (almacenamiento, mezclar, etc.)
│   ├── app.js          tarjetas, buscador, filtros, fichas, quiz y progreso
│   └── arcade.js       los tres juegos
├── data/
│   ├── modulos.js      contenido de los módulos (aquí se edita el contenido)
│   └── juegos.js       pistas y reto cooperativo
├── evidencias/         capturas y archivos de evidencia por módulo
├── img/                favicon e ilustración de portada
└── docs/               bitácoras, registro de prompts y propuesta de empresa
```

Para agregar un módulo basta con añadir un objeto a `MODULOS` en `data/modulos.js`; la tarjeta aparece sola.

## Abrirlo en local
1. Extrae el ZIP y abre la carpeta `portal-modulos` en Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Clic derecho en `index.html` → **Open with Live Server**.

## Publicar en GitHub Pages
1. Crea un repositorio público en GitHub.
2. Sube el **contenido** de la carpeta `portal-modulos` (que `index.html` quede en la raíz del repositorio).
3. Ve a Settings → Pages, elige la rama principal y la carpeta `/ (root)`.
4. Espera un par de minutos y abre la URL en una ventana de incógnito.
5. Reemplaza el enlace provisional de este README por la URL real.

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
| `v1.0` | 3 | Quiz, modo claro/oscuro, revisión final y README |

## Pendientes antes de entregar
- Publicar en GitHub Pages y poner la URL real.
- Commits de cada integrante y etiqueta `v0.2`.
- Verificar con apuntes los instrumentos y programas marcados «por confirmar» (se ven atenuados en las fichas) y comprobar a mano cada enlace de recursos.
- Agregar al menos una evidencia real por ficha (carpeta `evidencias/`); hoy ninguna ficha la tiene.
- Revisión cruzada: abrir y cerrar al menos un Issue (guía en `docs/revision-cruzada.md`) y etiquetar `v0.5`.

## Documentos de apoyo (`docs/`)
- `prompts-ia.md`: registro de prompts de IA (deja solo los que realmente usaste).
- `bitacora-plantilla.md`, `bitacora-dia1-estela.md` y `bitacora-dia2.md`: bitácoras.
- `revision-cruzada.md`: plantilla de Issues del día 2.
- `propuesta-empresa.md`: borrador de la empresa Auralix y plan de inversión.
