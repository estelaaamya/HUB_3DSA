// Datos de la Zona de retos (la zona de retos).
// El reto relámpago no necesita datos propios: usa las preguntas de los quizzes de MODULOS.
// Formato igual que en el quiz: p = texto, o = opciones, c = posición de la respuesta correcta.

const PISTAS = [
  { p: "Sistema gestor que utilizaste para administrar bases de datos.", o: ["MySQL", "Bootstrap", "PrestaShop"], c: 0 },
  { p: "Tecnología usada para desarrollar aplicaciones móviles multiplataforma.", o: [".NET MAUI", "Microsoft Access", "HTML solamente"], c: 0 },
  { p: "Operaciones para crear, leer, actualizar y eliminar registros.", o: ["CRUD", "CSS", "PWA"], c: 0 },
  { p: "Plataforma de comercio electrónico que utilizaste para tu tienda de spa.", o: ["PrestaShop", "MySQL Workbench", "Git Bash"], c: 0 },
  { p: "Componentes físicos de una computadora.", o: ["Hardware", "Software", "Base de datos"], c: 0 },
  { p: "Programas y aplicaciones que funcionan en un dispositivo.", o: ["Software", "Hardware", "Cooperativa"], c: 0 },
  { p: "Organización en la que sus miembros colaboran y participan en decisiones comunes.", o: ["Cooperativa", "Compilador", "Navegador"], c: 0 },
  { p: "Base de datos documentada en el proyecto de tesis.", o: ["Base de datos de una cafetería", "Base de datos de un hospital", "Catálogo de videojuegos"], c: 0 }
];

const RETO_COOPERATIVO = {
  enunciado: "Imagina que seis campesinos forman una cooperativa. Cada integrante aporta una tarea: producción, registro, compras, distribución, ventas o comunicación. ¿Qué principio permite tomar decisiones entre todos?",
  o: [
    "Que una sola persona decida siempre",
    "Participación y decisión democrática",
    "Que cada quien trabaje sin coordinarse"
  ],
  c: 1,
  acierto: "¡Exacto! Una cooperativa se basa en participación y decisiones democráticas. 🌱",
  error: "No es esa. La respuesta correcta es participación y decisión democrática."
};
