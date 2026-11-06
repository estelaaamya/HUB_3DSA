// Fuente única de datos del portal: para agregar un módulo, añade un objeto a MODULOS.
// Campos de cada módulo: id, docente, colabora (opcional), nombre, periodo (opcional),
// resumen, aprendizajes[], instrumentos[], programas[], herramientas[], recursos[],
// evidencias[] (opcional pero obligatorio para la nota: rec("Captura de la práctica","evidencias/archivo.png")), quiz[].
// En el quiz: p = pregunta, o = opciones, c = posición de la respuesta correcta (0 = primera).
// Los textos entre paréntesis que empiezan con «confirmar», «completar» o «agregar» se muestran
// atenuados en la ficha: son pendientes por verificar con apuntes y materiales reales.

const rec = (t, u) => ({ t, u });
const MDN = rec("MDN Web Docs en español", "https://developer.mozilla.org/es/");

const MODULOS = [
 { id:"adaptacion", docente:"Javier Arturo García Mineros", nombre:"Semana de adaptación y refuerzo",
   periodo:"02-02-2026 al 13-02-2026",
   resumen:"Periodo inicial para adaptarse al ritmo de trabajo de tercer año, recuperar conocimientos previos y reforzar contenidos necesarios para los módulos técnicos.",
   actividades:["Diagnóstico inicial y puesta en común de lo que recordábamos del año anterior","Repaso guiado de contenidos básicos y organización del equipo de trabajo","Actividades de integración y acuerdos de convivencia y trabajo","Revisión de metas y expectativas para tercer año (confirmar actividades exactas)"],
   aprendizajes:["Reconocí los conocimientos previos que necesitaba reforzar","Me adapté a la dinámica de trabajo de tercer año","Identifiqué contenidos y habilidades importantes para continuar aprendiendo desarrollo de software"],
   instrumentos:["Actividades y guías de adaptación y refuerzo (confirmar con los materiales de clase)","Evaluación diagnóstica o instrumento aplicado (confirmar si se utilizó)"],
   programas:["Herramientas y programas indicados por el docente durante las actividades (completar al verificar apuntes)","No se atribuye un programa específico sin evidencia"],
   herramientas:["Actividades de repaso","Apuntes y materiales de clase","Dinámicas de integración o refuerzo (agregar el nombre si se recuerda)"],
   recursos:[MDN, rec("Microsoft Learn","https://learn.microsoft.com/es-es/"), rec("W3Schools","https://www.w3schools.com/")],
   evidencias:[rec("Carpeta de la semana de adaptación (Google Drive)","https://drive.google.com/file/d/1U0SihKGVemSF5F0W1obzm_8iRW5JiIv-/view")],
   quiz:[
    {p:"¿En qué fechas se desarrolló la semana de adaptación y refuerzo?",o:["Del 2 al 13 de febrero de 2026","Del 2 al 13 de marzo de 2026","Del 1 al 15 de noviembre de 2026"],c:0},
    {p:"¿Cuál era el propósito principal del periodo?",o:["Adaptarse y reforzar conocimientos","Publicar la versión final del portal","Defender la tesis"],c:0},
    {p:"¿Qué conviene hacer si no se recuerda con certeza un dato del módulo?",o:["Consultar apuntes o materiales de clase","Inventarlos","Copiarlos de otro grupo"],c:0}
   ]},

 { id:"m33-bd", docente:"Javier Arturo García Mineros", nombre:"Módulo 3.3 · Administración de Bases de Datos",
   resumen:"Se trabajó la administración de bases de datos utilizando MySQL. El enfoque de la ficha es registrar lo estudiado sobre creación, organización y consulta de datos; completa los temas específicos con tus prácticas.",
   actividades:["Instalación y configuración de MySQL y su cliente de trabajo","Creación de bases de datos y tablas con tipos de datos y llaves","Prácticas de consultas SQL: SELECT, INSERT, UPDATE y DELETE","Relación entre tablas y consultas con JOIN (confirmar si se trabajó)","Administración básica: usuarios, permisos y respaldo (confirmar)"],
   aprendizajes:["Reconocí la función de un sistema gestor de bases de datos","Practiqué el trabajo con bases de datos en MySQL","Comprendí que las consultas permiten administrar y recuperar información"],
   instrumentos:["Guías o prácticas de MySQL (confirmar nombres y números)","Rúbrica, lista de cotejo o evaluación aplicada (confirmar cuál se utilizó)"],
   programas:["MySQL","MySQL Workbench (si fue el cliente utilizado; confirmar)"],
   herramientas:["SQL","Tablas y relaciones","Consultas de bases de datos"],
   recursos:[rec("Documentación oficial de MySQL","https://dev.mysql.com/doc/"), rec("MySQL Workbench","https://dev.mysql.com/doc/workbench/en/"), rec("W3Schools: SQL","https://www.w3schools.com/sql/")],
   evidencias:[
    rec("Prueba del Módulo 3.3: Administración de Bases de Datos","evidencias/02-m33-bd/prueba-modulo-3.3.pdf"),
    rec("Tablas de empleados, clientes y préstamos","evidencias/02-m33-bd/tablas-empleados-clientes-prestamos.pdf")
   ],
   quiz:[
    {p:"¿Qué sistema gestor se utilizó en este módulo según lo trabajado en clase?",o:["MySQL","Access exclusivamente","PrestaShop"],c:0},
    {p:"¿Para qué sirve SQL?",o:["Consultar y administrar datos","Editar fotografías","Diseñar animaciones"],c:0},
    {p:"¿Qué representa una tabla en una base de datos relacional?",o:["Datos organizados en filas y columnas","Una diapositiva","Un archivo de audio"],c:0}
   ]},

 { id:"m34-documentacion", docente:"Javier Arturo García Mineros", nombre:"Módulo 3.4 · Elaboración de documentación de Sistemas Informáticos",
   resumen:"Se desarrollaron sistemas y documentación utilizando distintas alternativas tecnológicas. Entre las opciones trabajadas o consideradas estuvieron aplicaciones de escritorio y web conectadas a bases de datos.",
   actividades:["Análisis de alternativas de desarrollo: Windows Forms/WPF, ASP.NET Core MVC, Web Forms, PHP + MySQL, Java Swing + MySQL y web con HTML, CSS y JavaScript","Conexión de aplicaciones con SQL Server y MySQL","Elaboración de documentación de un sistema: requerimientos, diseño y manual (confirmar entregables)","Presentación de la propuesta técnica del sistema"],
   aprendizajes:["Relacioné la documentación con el funcionamiento de un sistema informático","Reconocí distintas tecnologías para desarrollar aplicaciones conectadas a bases de datos","Comprendí la importancia de documentar procesos y componentes del sistema"],
   instrumentos:["Guía de trabajo o práctica de documentación (confirmar)","Rúbrica o lista de cotejo del proyecto (confirmar)"],
   programas:["Visual Studio (para proyectos .NET, si fue el entorno utilizado)","Visual Studio Code (para proyectos web, si fue utilizado)"],
   herramientas:["Windows Forms o WPF + SQL Server","ASP.NET Core MVC o ASP.NET Web Forms + SQL Server","PHP + MySQL, Java Swing + MySQL o aplicación web con HTML, CSS y JavaScript"],
   recursos:[rec("Microsoft Learn: .NET","https://learn.microsoft.com/es-es/dotnet/"), rec("Documentación PHP","https://www.php.net/manual/es/"), rec("Documentación MySQL","https://dev.mysql.com/doc/")],
   evidencias:[rec("Repositorio del entorno gráfico en Python","https://github.com/estelaaamya/ENTORNO-GRAFICO-Python")],
   quiz:[
    {p:"¿Cuál es una finalidad de documentar un sistema?",o:["Explicar su estructura y funcionamiento","Ocultar cómo funciona","Eliminar la necesidad de probarlo"],c:0},
    {p:"¿Cuál de estas opciones puede conectarse a una base de datos?",o:["ASP.NET Core MVC","Un archivo de imagen por sí solo","Un fondo de pantalla"],c:0},
    {p:"¿Qué debe hacerse antes de afirmar que una tecnología se utilizó?",o:["Verificarlo en los materiales de clase","Suponerlo","Copiarlo de otro equipo"],c:0}
   ]},

 { id:"m36-ingles", docente:"Javier Arturo García Mineros", nombre:"Módulo 3.6 · Conversación en inglés sobre mantenimiento de sistemas informáticos",
   resumen:"Se conversó en inglés sobre hardware y software. También se preparó un guion para una dramatización en inglés sobre un software creado por el equipo; podía desarrollarse con tecnologías como ASP.NET, Visual Studio o .NET MAUI.",
   actividades:["Vocabulario técnico en inglés sobre hardware y software","Conversaciones guiadas sobre mantenimiento de sistemas informáticos","Redacción de un guion en inglés para una dramatización sobre un software creado por el equipo","Ensayo y presentación de la dramatización (confirmar fecha)"],
   aprendizajes:["Utilicé vocabulario en inglés relacionado con hardware y software","Practiqué conversaciones sobre mantenimiento de sistemas informáticos","Preparé un guion para representar en inglés un software desarrollado por el equipo"],
   instrumentos:["Guion de dramatización en inglés","Evaluación de conversación o exposición (confirmar el instrumento exacto)"],
   programas:["Visual Studio (según la tecnología elegida)","ASP.NET o .NET MAUI (según el software representado)"],
   herramientas:["Vocabulario técnico en inglés","Diálogo y dramatización (role-play)","Conceptos de hardware y software"],
   recursos:[rec("BBC Learning English","https://www.bbc.co.uk/learningenglish"), rec("Cambridge Dictionary","https://dictionary.cambridge.org/"), rec("Microsoft Learn: .NET MAUI","https://learn.microsoft.com/es-es/dotnet/maui/")],
   evidencias:[rec("Annex A: mapa de anatomía del sistema (inglés)","evidencias/04-m36-ingles/annex-a-system-anatomy.pdf")],
   quiz:[
    {p:"¿Qué significa hardware?",o:["Componentes físicos de una computadora","Programas y aplicaciones","Conexión a internet"],c:0},
    {p:"¿Qué significa software?",o:["Programas y sistemas informáticos","Teclado y monitor","Cableado eléctrico"],c:0},
    {p:"¿Qué se preparó para practicar la conversación?",o:["Un guion para una dramatización","Un plan de inversión","Una tienda en línea"],c:0}
   ]},

 { id:"m38-proyecto", docente:"Javier Arturo García Mineros", nombre:"Módulo 3.8 · Proyecto innovador de Desarrollo de Software",
   resumen:"Para la feria de logros se desarrolló una galería de arte ambientada en la temática de salud mental. El proyecto incorporó una IA con mensajes motivacionales y juegos relacionados.",
   actividades:["Diseño de una galería de arte con temática de salud mental para la feria de logros","Integración de una IA que genera mensajes motivacionales","Desarrollo de juegos relacionados con la temática","Programación del proyecto en Visual Studio Code","Montaje del stand y presentación en la feria de logros"],
   aprendizajes:["Diseñé una propuesta de software con una temática social","Integré una experiencia de mensajes motivacionales mediante IA","Participé en la preparación y presentación del proyecto para la feria de logros"],
   instrumentos:["Criterios o rúbrica de la feria de logros (confirmar documento)","Lista de cotejo o evaluación del proyecto (confirmar)"],
   programas:["Visual Studio Code","Navegador web"],
   herramientas:["Desarrollo web (confirmar lenguajes exactos usados)","IA para mensajes motivacionales","Juegos relacionados con la temática"],
   recursos:[MDN, rec("Organización Mundial de la Salud: salud mental","https://www.who.int/es/health-topics/mental-health"), rec("Documentación de Visual Studio Code","https://code.visualstudio.com/docs")],
   evidencias:[rec("Repositorio del proyecto Mi-proyecto","https://github.com/estelaaamya/Mi-proyecto")],
   quiz:[
    {p:"¿Cuál fue la temática de la galería de arte?",o:["Salud mental","Contabilidad comercial","Mantenimiento automotriz"],c:0},
    {p:"¿Qué función se incorporó mediante IA?",o:["Mensajes motivacionales","Control de inventario de una tienda","Edición de hardware"],c:0},
    {p:"¿En qué contexto se presentó el proyecto?",o:["Feria de logros","Torneo deportivo","Prueba de mecanografía"],c:0}
   ]},

 { id:"m1-aplicaciones", docente:"Arcides Canales Sorto", nombre:"Módulo 1 · Desarrollo de aplicaciones de software para la solución de problemas",
   resumen:"Se trabajó el desarrollo de aplicaciones con ASPX/ASP.NET y Bootstrap, además de aplicaciones Windows Forms conectadas con Access para realizar operaciones CRUD.",
   actividades:["Desarrollo de páginas y formularios con ASPX/ASP.NET y Bootstrap","Prácticas CRUD en Windows Forms conectadas a Microsoft Access","Resolución de problemas con aplicaciones de software","Pruebas de las aplicaciones y corrección de errores (confirmar prácticas)"],
   aprendizajes:["Desarrollé interfaces web utilizando ASPX/ASP.NET y Bootstrap","Comprendí las operaciones CRUD en aplicaciones","Relacioné Windows Forms con una base de datos Access"],
   instrumentos:["Prácticas o guías de desarrollo (confirmar títulos)","Evaluación o lista de cotejo de los CRUD (confirmar)"],
   programas:["Visual Studio","Microsoft Access"],
   herramientas:["ASPX / ASP.NET","Bootstrap","Windows Forms","CRUD (crear, leer, actualizar y eliminar)"],
   recursos:[rec("Documentación ASP.NET","https://learn.microsoft.com/es-es/aspnet/"), rec("Bootstrap","https://getbootstrap.com/docs/"), rec("Microsoft Access: ayuda y aprendizaje","https://support.microsoft.com/es-es/access")],
   evidencias:[
    rec("Repositorio AbsoluteModificado6376149","https://github.com/estelaaamya/AbsoluteModificado6376149"),
    rec("Ejercicio complementario de la Guía 5","evidencias/06-m1-aplicaciones/ejercicio-complementario-guia5.pdf")
   ],
   quiz:[
    {p:"¿Para qué se utilizó Bootstrap?",o:["Para apoyar el diseño de interfaces web","Para administrar electricidad","Para reemplazar Access"],c:0},
    {p:"¿Qué significa CRUD?",o:["Crear, leer, actualizar y eliminar","Copiar, restaurar, unir y descargar","Configurar, reiniciar, usar y diseñar"],c:0},
    {p:"¿Con qué base de datos se trabajaron los CRUD de Windows Forms?",o:["Microsoft Access","MySQL exclusivamente","Una hoja de dibujo"],c:0}
   ]},

 { id:"m2-moviles", docente:"Arcides Canales Sorto", nombre:"Módulo 2 · Desarrollo de componentes para dispositivos móviles",
   resumen:"Se aprendió a utilizar .NET MAUI y se crearon aplicaciones móviles, entre ellas un juego de adivinar palabras en inglés con imágenes y pronunciación. También se trabajó con ASP y PrestaShop; cada estudiante configuró su tienda y la temática personal de este proyecto fue un spa.",
   actividades:["Desarrollo de una app móvil en .NET MAUI para adivinar palabras en inglés con imagen y pronunciación","Prácticas con ASP","Configuración de una tienda en PrestaShop con temática de spa: categorías, productos y plantilla","Pruebas de la app y de la tienda (confirmar dispositivo o emulador)"],
   aprendizajes:["Utilicé .NET MAUI para desarrollar aplicaciones móviles","Diseñé una actividad para aprender palabras en inglés mediante imágenes y pronunciación","Configuré una tienda en PrestaShop con temática de spa"],
   instrumentos:["Prácticas de desarrollo móvil (confirmar números y títulos)","Evaluación o lista de cotejo de la aplicación y la tienda (confirmar)"],
   programas:["Visual Studio","PrestaShop"],
   herramientas:[".NET MAUI","C# y XAML (si se utilizaron en la aplicación)","ASP","Administración de categorías, productos y plantilla en PrestaShop"],
   recursos:[rec("Documentación de .NET MAUI","https://learn.microsoft.com/es-es/dotnet/maui/"), rec("Documentación de PrestaShop","https://devdocs.prestashop-project.org/"), rec("Documentación de Bootstrap","https://getbootstrap.com/docs/")],
   evidencias:[
    rec("Repositorio MauiSqliteDemoEstela","https://github.com/estelaaamya/MauiSqliteDemoEstela"),
    rec("Repositorio StackLayout6376149","https://github.com/estelaaamya/StackLayout6376149"),
    rec("Repositorio DataBinding6376149","https://github.com/estelaaamya/DataBinding6376149"),
    rec("Captura de la app móvil (1)","evidencias/07-m2-moviles/app-maui-1.png"),
    rec("Captura de la app móvil (2)","evidencias/07-m2-moviles/app-maui-2.png")
   ],
   quiz:[
    {p:"¿Qué tecnología se aprendió para crear aplicaciones móviles?",o:[".NET MAUI","Microsoft Access únicamente","Bootstrap solamente"],c:0},
    {p:"¿Qué característica tenía el juego de vocabulario en inglés?",o:["Palabra, imagen y pronunciación","Solo operaciones contables","Únicamente fotografías sin texto"],c:0},
    {p:"¿Qué temática tuvo la tienda personal en PrestaShop?",o:["Un spa","Una ferretería","Una librería"],c:0}
   ]},

 { id:"mantenimiento", docente:"Arcides Canales Sorto", nombre:"Mantenimiento y aseguramiento de la operación del sistema informático",
   resumen:"Se compartió trabajo con el módulo del profesor Julio relacionado con la tesis. En el proyecto personal se elaboró una base de datos para una cafetería; también se contemplaban evidencias como bases de datos, páginas web o banners, según el trabajo desarrollado.",
   actividades:["Trabajo compartido con el módulo del profesor Julio Nelson Portillo","Diseño de la base de datos de una cafetería: tablas, campos y relaciones","Documentación del proyecto y de la base de datos","Entrega de evidencias del proyecto (confirmar si fue base de datos, página web o banner)"],
   aprendizajes:["Apliqué conocimientos de sistemas informáticos en un proyecto","Diseñé una base de datos para una cafetería","Relacioné los entregables técnicos con la documentación del proyecto"],
   instrumentos:["Documento o guía del proyecto compartido (confirmar nombre)","Rúbrica, lista de cotejo o evaluación del proyecto (confirmar)"],
   programas:["Gestor de bases de datos utilizado en el proyecto (confirmar si fue MySQL, SQL Server u otro)","Herramienta de desarrollo utilizada (confirmar)"],
   herramientas:["Diseño de bases de datos","Tablas, campos y relaciones","Documentación técnica del proyecto"],
   recursos:[rec("Documentación MySQL","https://dev.mysql.com/doc/"), rec("Microsoft Learn: SQL Server","https://learn.microsoft.com/es-es/sql/"), MDN],
   evidencias:[rec("Caso de mantenimiento del sistema Coffee House (cafetería)","evidencias/08-mantenimiento/caso-mantenimiento-coffee-house.pdf")],
   quiz:[
    {p:"¿Qué proyecto individual se describe en el módulo?",o:["Base de datos de una cafetería","Una red social mundial","Un videojuego de carreras"],c:0},
    {p:"¿Qué permite explicar la documentación de un proyecto?",o:["El proceso y la estructura del trabajo","Una actividad inventada","Solo el nombre del estudiante"],c:0},
    {p:"¿Por qué es importante documentar una base de datos?",o:["Para explicar su estructura y organización","Para ocultar sus tablas","Para evitar respaldos"],c:0}
   ]},

 { id:"cooperativismo", docente:"Julio Nelson Portillo", nombre:"Módulo · Cooperativismo",
   resumen:"Se estudió el cooperativismo y la forma en que las personas se organizan para trabajar en conjunto mediante cooperativas. Se abordó el ejemplo de campesinos y productores agrícolas que unen esfuerzos para apoyarse, organizar su producción y buscar beneficios comunes.",
   actividades:["Estudio del concepto de cooperativa y sus valores","Análisis del caso de campesinos y productores agrícolas que se organizan en cooperativas","Discusión grupal sobre solidaridad, participación y beneficios comunes","Actividad o evaluación sobre cooperativismo (confirmar instrumento)"],
   aprendizajes:["Comprendí que una cooperativa es una organización basada en la participación y colaboración de sus miembros","Reconocí cómo campesinos y productores pueden asociarse para trabajar y apoyarse mutuamente","Identifiqué la importancia de la solidaridad, la responsabilidad y la toma de decisiones en grupo"],
   instrumentos:["Guías, apuntes o actividades sobre cooperativismo (confirmar el material exacto)","Evaluación, cuestionario o actividad grupal aplicada (confirmar cuál se utilizó)"],
   programas:["Procesador de texto o presentación utilizado en clase (confirmar)","No se atribuye software especializado sin evidencia"],
   herramientas:["Trabajo colaborativo","Análisis de ejemplos de cooperativas agrícolas","Discusión y reflexión sobre organización comunitaria"],
   recursos:[rec("Alianza Cooperativa Internacional","https://ica.coop/es"), rec("Organización Internacional del Trabajo: cooperativas","https://www.ilo.org/es"), rec("FAO: cooperativas y organizaciones de productores","https://www.fao.org/home/es")],
   evidencias:[rec("Presentación: INSAFOCOOP y el cooperativismo en El Salvador","evidencias/09-cooperativismo/presentacion-insafocoop.pdf")],
   quiz:[
    {p:"¿Qué es una cooperativa?",o:["Una organización de personas que colaboran para alcanzar objetivos comunes","Una empresa donde nadie participa","Un programa para editar imágenes"],c:0},
    {p:"¿Por qué los campesinos pueden formar cooperativas?",o:["Para organizarse, apoyarse y fortalecer su trabajo","Para evitar toda colaboración","Para dejar de producir"],c:0},
    {p:"¿Qué valor es importante en el cooperativismo?",o:["Solidaridad","Competencia desleal","Aislamiento"],c:0}
   ]},

 { id:"tesis-empresa", docente:"Julio Nelson Portillo", colabora:"Arcides Canales Sorto",
   nombre:"Proyecto de tesis · Base de datos de una cafetería y empresa Auralix",
   resumen:"El equipo de seis integrantes consolidó la propuesta de una empresa de software llamada Auralix y trabajó un plan de inversión que debía consensuarse entre todos. La tesis consistió en documentar la creación de la base de datos de una cafetería, desarrollada en el trabajo relacionado con el profesor Arcides Canales Sorto.",
   actividades:["Consolidación del nombre de la empresa de software: Auralix","Trabajo del plan de inversión inicial para consensuarlo entre los seis integrantes","Documentación de la creación de la base de datos de una cafetería","Revisión del documento de tesis y de sus anexos (confirmar avances)"],
   aprendizajes:["Organizar la propuesta de una empresa de desarrollo de software llamada Auralix","Comprender que el plan de inversión debe acordarse entre los seis integrantes","Documentar la creación de una base de datos para una cafetería"],
   instrumentos:["Documento de tesis sobre la creación de la base de datos de una cafetería","Plan de inversión grupal de Auralix (agregar versión final aprobada)"],
   programas:["Procesador de texto utilizado para el documento (confirmar)","Herramienta de bases de datos usada en el proyecto (confirmar)"],
   herramientas:["Documento de tesis","Plan de inversión","Diseño y documentación de bases de datos"],
   recursos:[rec("Guía de planes de negocio de la SBA","https://www.sba.gov/business-guide/plan-your-business"), rec("Documentación MySQL","https://dev.mysql.com/doc/"), rec("Microsoft Learn: SQL","https://learn.microsoft.com/es-es/sql/")],
   evidencias:[rec("Documento de tesis: base de datos de una cafetería (36 páginas)","evidencias/10-tesis-auralix/documento-tesis.pdf")],
   quiz:[
    {p:"¿Qué debía acordarse entre los integrantes del grupo?",o:["El plan de inversión","La contraseña personal de cada uno","Las notas de otros estudiantes"],c:0},
    {p:"¿Qué se documentó en el trabajo de tesis descrito?",o:["La creación de una base de datos","La instalación de un videojuego","Un catálogo de películas"],c:0},
    {p:"¿Qué dato debe confirmarse antes de publicar la ficha?",o:["El nombre oficial del módulo y de la empresa","El color favorito de cada estudiante","El modelo de cada teléfono"],c:0}
   ]}
];
