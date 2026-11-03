# Qué se revisó y cómo se resolvió (Día 1)

Se comparó el proyecto con la guía «Día 1 · Cimientos del HUB» y con la rúbrica del portal.

## Pedidos directos
| Punto | Cómo se resolvió |
|---|---|
| Letra grande del inicio con «en rosa» | Se quitó la etiqueta `<mark>` (y su CSS) del título. Ahora dice «Todo lo que programé este año, ordenado para repasar.», todo en el color normal del texto. Se agregó el botón «Empezar a repasar» para que en 10 segundos se entienda qué hacer. |
| Módulo del profesor Julio: tesis | En `data/modulos.js` el módulo dice que se trabajó el documento llamado «tesis» y que se defendió: resumen, aprendizajes, evidencia («Documento «tesis» elaborado y defendido»), herramienta («Documento de tesis») y una pregunta nueva del quiz. Se quitó el texto «(nombre oficial por confirmar)» del título. |

## Lo que faltaba según la guía y la rúbrica
| Punto | Cómo se resolvió |
|---|---|
| Imágenes con texto alternativo | La carpeta `img/` estaba vacía. Se agregó `hero-mapa.svg` (ilustración de portada con `alt` descriptivo) y `favicon.svg`. |
| Bitácora por integrante | Solo existía la plantilla vacía. Se creó `BITACORA-dia1-estela.md` con borrador. **Falta que escribas «Lo que me costó».** |
| README completo | Se agregó el mapa del año por docente, cómo correrlo en local, qué significa que el repo sea público, tabla de versiones v0.2/v0.5/v1.0 y una fila nueva en el registro de prompts. |
| `.gitignore` | Se agregó para no subir claves ni archivos de sistema por error. |
| Quiz con la respuesta casi siempre en la primera opción | Casi todas las preguntas tenían la correcta en el primer lugar. Ahora las opciones se mezclan cada vez que se abre la ficha. |
| Etiquetas repetidas en tarjetas | Si algo era programa y herramienta a la vez (p. ej. PrestaShop) salía dos veces. Se quitaron duplicados. |
| Buscador | Ahora ignora tildes («aplicacion» encuentra «aplicaciones») y también busca en instrumentos y evidencias. |
| Texto de portada fijo («Ocho módulos, tres docentes») | Ahora los números se calculan desde los datos, así que no se desactualizan. |
| Accesibilidad y celular | Botones de mínimo 44 px de alto, aviso `<noscript>`, la ficha se cierra al tocar fuera, el tema inicial respeta el del sistema. |

## Probado
Se abrió el portal en pantalla de 1280 px y de 375 px: sin scroll horizontal y sin errores en la consola; 8 tarjetas, buscador, filtro por docente, quiz, progreso y cambio de tema funcionando. Las 8 fichas cumplen el mínimo de la rúbrica (2 instrumentos, 2 programas, 2 herramientas, 3 recursos, 1 evidencia, 3 aprendizajes y quiz de 3).

## Lo que NO se pudo hacer desde aquí (te toca a ti)
1. **Publicar en GitHub Pages y poner la URL real** en el README (hoy es un marcador).
2. **Commits y etiqueta `v0.2`**: se hacen desde tu repositorio con tu usuario.
3. **Verificar a mano cada enlace de recursos**: no hay internet en este entorno, así que no se pudieron comprobar. La rúbrica pide «enlace verificado».
4. **Reescribir las fichas con tus palabras** y confirmar el nombre oficial del módulo de tesis.


## Correcciones académicas realizadas
- Se agregó el módulo 3.4 que no estaba en el borrador inicial.
- Se corrigió el módulo 3.3 para indicar MySQL, según la información proporcionada por la estudiante.
- Se amplió el módulo 3.6 con hardware, software y la dramatización en inglés.
- Se describieron las actividades reales indicadas para el módulo 3.8, el módulo 1, el módulo 2 y el proyecto de mantenimiento/cafetería.
- La tesis y el nombre de empresa se dejaron con advertencia de confirmación cuando no se conoce el título oficial.
- Se marcaron instrumentos y evidencias que requieren cotejo. No deben presentarse como hechos confirmados sin revisar los documentos originales.
- Se añadieron `PROMPTS-IA.md` y `PROPUESTA-EMPRESA-PLAN-INVERSION.md`.


## Actualización con datos confirmados por la estudiante
- Nombre de empresa actualizado a HUB 3DS-A.
- Equipo actualizado a seis integrantes.
- Tesis identificada como documentación de la creación de la base de datos de una cafetería.
- Se agregó el módulo de Cooperativismo impartido por Julio Nelson Portillo.
- Se retiró Git/GitHub de la ficha de adaptación y refuerzo porque la estudiante confirmó que no se trabajó allí.
- Se renombró la identidad del portal a HUB 3DS-A.
- Se incorporó Arcade 3DS-A: reto relámpago, detective de conceptos y reto cooperativo.
- Los instrumentos y evidencias que no fueron confirmados siguen marcados para completar con documentos reales.


## Versión solicitada: sin evidencias adjuntas
- Se eliminaron las secciones de evidencias de las fichas del portal.
- Se retiraron las referencias a evidencias de la búsqueda y de la presentación de cada módulo.
- El portal conserva las explicaciones de los módulos, aprendizajes, instrumentos descritos de forma general, programas, herramientas, recursos y cuestionarios.
- No se agregaron fotografías, capturas ni archivos que aparenten ser evidencias reales.


## Corrección de funcionamiento y rediseño visual
- Se corrigió el error de JavaScript: el código actualizaba `n-doc`, pero ese elemento no existía en el HTML. El error detenía el resto del script antes de inicializar los juegos. Se agregó el contador de docentes a la portada.
- Los juegos ahora presentan una ronda inicial automáticamente; las opciones se mezclan sin modificar las preguntas originales. El reto cooperativo permite volver a jugar después de responder.
- Se redujo la ilustración principal a un tamaño controlado (180 px en escritorio y 110 px en móvil) para que no domine la portada.
- Se renovó la interfaz con tarjetas más limpias, mejor jerarquía tipográfica, fondos suaves, bordes redondeados, estados de interacción y adaptación móvil.
- Se actualizaron los estilos de la zona Arcade para que los retos se distingan visualmente del contenido académico.
- Se amplió el README para indicar las funciones actuales y los pendientes reales de la rúbrica.
