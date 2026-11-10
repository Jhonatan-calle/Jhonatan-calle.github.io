/* ============================================================================
   cv-data.js — CONTENIDO del CV (puesto en la UNI)
   ----------------------------------------------------------------------------
   Este archivo NO tiene lógica: es el "documento" del CV.
   Podés editarlo a mano acá, o usar el botón "Editar" de la página y después
   bajar los cambios con "Descargar datos" (te devuelve este mismo archivo).
   ========================================================================== */

window.CV_DATA = {
  nombre: "JHONATAN CALLE",
  rol: "LC. EN CS. DE LA COMPUTACIÓN",

  contacto: [
    { texto: "jhonatancallegaleano@gmail.com", url: "mailto:jhonatancallegaleano@gmail.com" },
    { texto: "Portfolio", url: "https://jhonatan-calle.github.io/" },
    { texto: "LinkedIn", url: "https://www.linkedin.com/in/jhonatan-calle-galeano/" },
    { texto: "3585715866", url: "tel:+5493585715866" },
    { texto: "Río Cuarto - Córdoba", url: "" }
  ],

  secciones: [
    {
      tipo: "texto",
      titulo: "Resumen",
      parrafos: [
        "Estudiante avanzado de Ciencias de la Computación con experiencia en sistemas web y móviles, manejo de bases de datos y automatización de procesos en herramientas de gestión, procesamiento de datos y soporte técnico a usuarios."
      ]
    },

    {
      tipo: "experiencia",
      titulo: "Experiencia",
      items: [
        {
          titulo: "Proyecto de extensión UNRC",
          fecha: "06/2025 - 12/2025",
          subtitulo: "A beneficio del club Juan Bautista Alberdi (Plataforma Club Deportivo)",
          vinetas: [
            {
              texto: "Aplicación web para la administración y consulta de reservas del Club Alberdi de la ciudad de Río Cuarto. El proyecto fue supervisado por docentes, pero liderado y ejecutado por un grupo de estudiantes beneficiarios del programa.",
              enlace: { texto: "Ver repo", url: "https://github.com/ddalio/proyecto-alberdi-unrc-2025" }
            }
          ]
        },
        {
          titulo: "Ayudante de Escuela de Verano",
          fecha: "2025",
          subtitulo: "La Rio",
          vinetas: []
        },
        {
          titulo: "Ayudante de Escuela de Verano",
          fecha: "2024",
          subtitulo: "La Rio",
          vinetas: []
        },
        {
          titulo: "Ayudante de Segunda",
          fecha: "03/2024 - 06/2024",
          subtitulo: "",
          vinetas: [
            {
              texto: "Ayudante de segunda en la materia [3410] Introducción a la Computación y Programación I, a cargo de la comisión del profesor Guillermo Rojo.",
              enlace: { texto: "", url: "" }
            }
          ]
        }
      ]
    },

    {
      tipo: "experiencia",
      titulo: "Proyectos destacados",
      items: [
        {
          titulo: "App Chul Hak San — Escuela de Taekwondo",
          fecha: "09/2026 - presente",
          subtitulo: "Publicada en Google Play",
          vinetas: [
            {
              texto: "App para alumnos, instructores y directivos: interfaz interactiva para alumnos y, para instructores y directivos, registro de clases, asistencia, pedidos de indumentaria, auditoría y estadísticas poblacionales.",
              enlace: { texto: "Ver en Play Store", url: "https://play.google.com/store/apps/details?id=com.obvio.chsalfa" }
            }
          ]
        },
        {
          titulo: "La Óptica — E-commerce",
          fecha: "08/2026 - presente",
          subtitulo: "",
          vinetas: [
            {
              texto: "Tienda en línea para óptica: catálogo de lentes y accesorios, carrito, pagos con MercadoPago, cotización de envíos en tiempo real y panel de administración con roles, órdenes y control de stock.",
              enlace: { texto: "Ver repo", url: "https://github.com/Jhonatan-calle/web-optica" }
            }
          ]
        },
        {
          titulo: "Billetera virtual web",
          fecha: "03/2025 - 06/2025",
          subtitulo: "",
          vinetas: [
            {
              texto: "Proyecto universitario de billetera virtual: creación de base de datos con modelos de cada identidad, con tests y validaciones para cada una. Uso de Docker en desarrollo y encriptamiento de información sensible.",
              enlace: { texto: "Ver repo", url: "https://github.com/AlieniAgustin/obvio-wallet" }
            }
          ]
        }
      ]
    },

    {
      tipo: "skills",
      titulo: "Habilidades",
      grupos: [
        { nombre: "Backend", detalle: "Java, API REST, C, Python, Dart, Docker, Postman" },
        { nombre: "Bases de datos", detalle: "MySQL, Firebase, MongoDB, PostgreSQL" },
        { nombre: "Frontend", detalle: "HTML, CSS, JavaScript, JSP, React, Flutter" },
        { nombre: "Otros", detalle: "Git, Linux, Scrum, Agile development, Inglés B2 avanzado" },
        {
          nombre: "IA y desarrollo asistido",
          detalle: "Claude, Gemini Pro, OpenCode Go; especificación de planes, criterios de aceptación y revisión de código"
        }
      ]
    },

    {
      tipo: "experiencia",
      titulo: "Educación",
      items: [
        {
          titulo: "Licenciatura en Ciencias de la Computación",
          fecha: "2021 - presente",
          subtitulo: "Universidad Nacional de Río Cuarto — 86,96 % de la carrera aprobada",
          vinetas: []
        }
      ]
    }
  ]
};
