# Registro de prompts de IA · Portal de módulos

Este documento registra prompts que pueden utilizarse para apoyar el trabajo. Conserva únicamente los prompts que realmente hayas enviado y añade la respuesta útil y la verificación que realizaste.

## 1. Organizar el mapa de módulos
**Prompt:**
> Actúa como asistente académico. Ayúdame a organizar los módulos de 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A» del INDEL. Usa únicamente la información que te proporcionaré. Separa docente, nombre del módulo, programas, herramientas, aprendizajes y evidencias. Si falta un dato, escribe «por confirmar»; no inventes instrumentos ni prácticas.

**Uso y verificación:** comparar la lista con el horario, apuntes y Classroom.

## 2. Redactar una ficha de módulo
**Prompt:**
> Con esta información de mi módulo: [pegar información real], redacta una ficha breve en primera persona. Incluye un resumen, tres aprendizajes, instrumentos, programas, herramientas, tres recursos oficiales o educativos. No incluyas evidencias. No inventes actividades. Marca lo que no esté confirmado.

**Uso y verificación:** revisar que cada afirmación corresponda a una actividad realizada.

## 3. Crear preguntas de repaso
**Prompt:**
> Crea tres preguntas de opción múltiple sobre este módulo: [tema]. Cada pregunta debe tener tres opciones, una sola respuesta correcta y una explicación breve. Usa únicamente los contenidos que te comparto y evita preguntas ambiguas.

**Uso y verificación:** responder las preguntas y corregirlas con los apuntes.

## 4. Revisar el código del portal
**Prompt:**
> Revisa este código HTML, CSS o JavaScript de mi portal educativo. Explícame los errores paso a paso, indica en qué archivo y sección están y propone cambios sencillos. No cambies tecnologías ni agregues dependencias. Después explica cómo puedo probar cada corrección.

**Uso y verificación:** probar en Live Server y en la consola del navegador.

## 5. Mejorar accesibilidad y diseño adaptable
**Prompt:**
> Evalúa esta página para que sea clara, accesible y usable en celular. Revisa contraste, etiquetas, navegación con teclado, texto alternativo y tamaño de botones. Señala primero los problemas y luego propone cambios concretos sin alterar el contenido académico.

**Uso y verificación:** probar en computadora y en una pantalla estrecha.

## 6. Preparar explicación para la feria
**Prompt:**
> Ayúdame a preparar una explicación oral de mi portal. Describe su propósito, estructura de archivos, cómo se generan las tarjetas desde el archivo de datos, cómo funciona el buscador y cómo se guarda el progreso. Usa lenguaje sencillo y agrega preguntas que un docente podría hacerme. No afirmes que una función existe si no aparece en el código.

**Uso y verificación:** practicar la explicación sin leer y demostrar cada función en el navegador.


## 7. Preparar una dinámica educativa
**Prompt:**
> Diseña una dinámica breve, creativa y respetuosa para repasar [tema del módulo] con estudiantes de bachillerato técnico. Debe tener instrucciones claras, reglas, duración, materiales y forma de comprobar el aprendizaje. No uses datos personales ni inventes contenidos del módulo.

**Uso y verificación:** realizar la dinámica y comprobar que las respuestas estén de acuerdo con los apuntes.

## 8. Explicar cooperativismo con un caso agrícola
**Prompt:**
> Explica el cooperativismo con un ejemplo ficticio de campesinos que se organizan para producir, distribuir y vender sus productos. Incluye participación democrática, solidaridad, responsabilidades y beneficios comunes. Distingue el ejemplo inventado de los contenidos exactos vistos en clase.

## 9. Ordenar las actividades de cada módulo
**Prompt:**
> Con estas notas de clase, escribe para cada módulo una lista numerada de actividades realizadas, en orden cronológico y en primera persona. Usa solo la información que te doy; si un dato no está confirmado, agrégalo entre paréntesis con la palabra «confirmar». No inventes prácticas ni instrumentos.

**Uso y verificación:** comparar cada lista con el cuaderno y corregir en `data/modulos.js`.

## 10. Armar el plan de inversión de Auralix
**Prompt:**
> Con estos servicios y precios de referencia, arma un plan de inversión inicial para una empresa académica de software de seis integrantes. Separa inversión inicial y costos mensuales, calcula el punto de equilibrio y un flujo de caja conservador a seis meses. Indica que los montos son estimados y que deben cotizarse. No inventes clientes ni ingresos reales.

**Uso y verificación:** revisar las operaciones y ajustar los montos con cotizaciones locales antes de presentarlo al grupo.

## 11. Agregar una práctica general al quiz
**Prompt:**
> Agrega al portal un botón «Practicar» que mezcle cinco preguntas de todos los módulos sin repetirlas, corrija al instante, muestre el puntaje final y guarde el mejor resultado en `localStorage`. Debe funcionar con teclado y no romper el quiz por módulo. Explícame cómo probarlo.

**Uso y verificación:** responder la práctica completa con teclado, recargar la página y comprobar que el mejor puntaje sigue guardado.
