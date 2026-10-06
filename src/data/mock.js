// Datos 100% hardcodeados para el prototipo visual de "Sembrando Capacidades"
// Centrado en la persona de ejemplo: Lucía M. (Murcia capital)

export const MOCK_USER = {
  name: "Lucía M.",
  age: 23,
  city: "Murcia capital",
  neighborhood: "Barrio del Carmen",
  avatarInitials: "LM",
  bio: "Amante de la música acústica, la guitarra y la tranquilidad. Buscando espacios donde aportar con calma, orden y sin prisas.",
  education: [
    { title: "Educación Secundaria Obligatoria (ESO)", center: "IES Floridablanca, Murcia", year: "2019" },
    { title: "Grado Medio en Gestión Administrativa", center: "IES Ingeniero de la Cierva, Murcia", year: "2022" }
  ],
  healthStatus: {
    condition: "Trastorno bipolar",
    visibility: "Solo lo usa la IA para recomendarte mejor. Tú decides quién más lo ve",
    isPrivate: true,
    seasons: {
      low: "En épocas de bajón me cuesta arrancar o hacer tareas cotidianas. Necesito ritmos pausados, flexibilidad horaria y ausencia de presión por respuesta inmediata.",
      good: "En épocas buenas me siento muy activa, ordenada, minuciosa y con gran capacidad de coordinación y catalogación."
    }
  },
  workPreferences: {
    whatHelps: [
      "Espacios con poca gente y poco ruido",
      "Equipos reducidos (2 a 4 personas)",
      "Tareas sin atención directa al público",
      "Horarios flexibles (aprox. 10 h/semana)",
      "Pautas e instrucciones por escrito",
      "Pausas de descompresión cuando sea necesario"
    ],
    whatIsHard: [
      "Aglomeraciones y pasillos concurridos",
      "Atención al cliente o quejas telefónicas",
      "Urgencias de última hora imprevistas",
      "Reuniones multitudinarias sin orden del día"
    ],
    availability: "10 horas semanales (preferencia mañanas)",
    mobility: "Transporte público urbano (hasta 30 min)"
  },
  talents: [
    { name: "Música y Guitarra", level: "Avanzado", icon: "Music", desc: "Toco la guitarra acústica y compongo acordes y melodías suaves." },
    { name: "Composición de Letras", level: "Creativo", icon: "PenTool", desc: "Escribo letras poéticas que expresan emociones y momentos vitales." },
    { name: "Gestión y Digitalización", level: "Técnico", icon: "FileText", desc: "Gran minuciosidad clasificando documentos, facturas y archivos." }
  ],
  supportResources: [
    {
      title: "Línea 024 — Atención a la conducta suicida",
      number: "024",
      desc: "Llamada gratuita, confidencial y disponible las 24 horas del día, los 365 días del año.",
      badge: "Urgente / 24h",
      highlight: true
    },
    {
      title: "Teléfono de la Esperanza (Murcia)",
      number: "968 34 34 00",
      desc: "Escucha activa y apoyo emocional atendido por voluntariado especializado.",
      badge: "Murcia"
    },
    {
      title: "Centro de Salud Mental Murcia (SMS)",
      number: "968 28 80 00",
      desc: "Red pública de salud mental comunitaria del Servicio Murciano de Salud.",
      badge: "Sanidad Pública"
    },
    {
      title: "Emergencias Generales",
      number: "112",
      desc: "Atención inmediata para cualquier situación de riesgo médico o de seguridad.",
      badge: "Emergencias"
    }
  ]
};

export const MOCK_QUESTIONNAIRE = {
  currentStep: 4,
  totalSteps: 6,
  progressPercentage: 70,
  stepTitle: "Tus ritmos y bienestar",
  friendlyNotice: "🌱 No hay respuestas correctas ni incorrectas. Cada detalle ayuda a que el algoritmo encuentre entornos donde puedas florecer a tu propio ritmo.",
  questions: [
    {
      id: "comfort_env",
      title: "¿Dónde y con quién te sientes más cómoda?",
      subtitle: "Selecciona los entornos en los que trabajas o participas con mayor tranquilidad.",
      options: [
        { id: "opt_poca_gente", label: "Poca gente en el espacio", selected: true, icon: "Users" },
        { id: "opt_equipo_peq", label: "Equipos pequeños (2-4 pers.)", selected: true, icon: "Smile" },
        { id: "opt_sin_publico", label: "Sin atención directa al público", selected: true, icon: "ShieldCheck" },
        { id: "opt_individual", label: "Tareas autónomas a mi ritmo", selected: true, icon: "Clock" },
        { id: "opt_gran_equipo", label: "Grandes equipos dinámicos", selected: false, icon: "Users2" },
        { id: "opt_atencion", label: "Atención a clientes o visitas", selected: false, icon: "MessageSquare" }
      ]
    },
    {
      id: "mobility",
      title: "¿Cómo te desplazas habitualmente?",
      subtitle: "Para sugerirte oportunidades accesibles desde tu zona.",
      options: [
        { id: "opt_public_trans", label: "Transporte público (Bus / Tranvía)", selected: true, icon: "Bus" },
        { id: "opt_sin_coche", label: "No tengo vehículo propio", selected: true, icon: "Footprints" },
        { id: "opt_tiempo", label: "Trayectos de hasta 30 minutos", selected: true, icon: "MapPin" },
        { id: "opt_coche", label: "Vehículo propio disponible", selected: false, icon: "Car" }
      ]
    },
    {
      id: "time_dedication",
      title: "¿Cuánto tiempo puedes dedicar?",
      subtitle: "Buscamos compatibilidad horaria real y sostenible para ti.",
      options: [
        { id: "opt_10h", label: "Unas 10 horas a la semana", selected: true, icon: "Clock" },
        { id: "opt_flexible", label: "Horarios flexibles y predecibles", selected: true, icon: "Calendar" },
        { id: "opt_20h", label: "Media jornada (20 horas)", selected: false, icon: "Clock4" },
        { id: "opt_jornada_completa", label: "Jornada completa (35-40 h)", selected: false, icon: "Briefcase" }
      ]
    },
    {
      id: "seasons_support",
      title: "¿Tienes épocas en las que necesitas más tranquilidad o apoyo?",
      subtitle: "Esta información es privada y permite a la IA filtrar entidades con protocolos reales de flexibilidad.",
      hasIntensitySlider: true,
      currentIntensity: "Pausas adaptables en bajones",
      options: [
        { id: "opt_apoyo_si", label: "Sí, paso por etapas donde requiero pausa y menor carga", selected: true, icon: "HeartHandshake" },
        { id: "opt_apoyo_no", label: "Mis ritmos son estables durante todo el año", selected: false, icon: "Check" }
      ]
    }
  ]
};

export const MOCK_RECOMMENDATIONS = [
  {
    id: "rec-empleo-archivo",
    type: "Empleo",
    typeBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    matchPercentage: 90,
    title: "Auxiliar de archivo y digitalización de documentos",
    entity: "Fundación Archivo & Memoria Cultural del Segura",
    location: "Murcia (Ronda Sur) · a 22 min en autobús",
    transitLine: "Línea 9 (Transporte de Murcia)",
    hours: "10 h/semana · Horario flexible",
    salary: "Convenio adaptado (inserción sociolaboral)",
    shortDescription: "Catalogación, escaneado y archivo ordenado de fondos documentales históricos en un entorno protegido y sereno.",
    chips: ["Poca gente", "Sin cliente directo", "Horario flexible", "Equipo de 3 personas"],
    whyItFits: [
      {
        icon: "Users",
        title: "Espacio con poca gente",
        desc: "Trabajarás en una sala de digitalización tranquila con solo 2 compañeras y un tutor de apoyo."
      },
      {
        icon: "ShieldCheck",
        title: "Cero atención al público",
        desc: "Sin llamadas imprevistas ni atención en mostrador. La tarea es minuciosa y focalizada en los documentos."
      },
      {
        icon: "Clock",
        title: "10 horas semanales a tu ritmo",
        desc: "Distribución en 2 o 3 mañanas (ej. martes y jueves de 9:30 a 13:30) acordadas contigo previamente."
      },
      {
        icon: "HeartHandshake",
        title: "Protocolo de flexibilidad en bajones",
        desc: "Si atraviesas una semana difícil, la entidad cuenta con banco de horas recuperables y adaptación de ritmo sin penalizaciones."
      },
      {
        icon: "Bus",
        title: "Transporte público directo (22 min)",
        desc: "Salida desde Plaza Camachos (El Carmen) en Línea 9 directa hasta la puerta de la sede."
      }
    ],
    transitRoute: {
      totalMinutes: 22,
      line: "Línea 9 (Autobús Urbano)",
      steps: [
        { time: "0 min", icon: "Footprints", label: "Tu casa (El Carmen)", detail: "Caminar 4 min hasta parada" },
        { time: "4 min", icon: "Bus", label: "Parada Plaza Camachos", detail: "Subir a Línea 9 dirección Ronda Sur" },
        { time: "18 min", icon: "MapPin", label: "Parada Ronda Sur / Pistas", detail: "Bajada frente al centro cultural" },
        { time: "22 min", icon: "Building2", label: "Archivo & Memoria Cultural", detail: "Entrada accesible y tranquila" }
      ]
    },
    requirements: [
      "Grado Medio en Gestión Administrativa o nociones básicas de ofimática",
      "Gusto por el orden, la clasificación y el detalle",
      "Interés por el patrimonio histórico y la digitalización"
    ],
    adaptations: [
      "Puesto ergonómico individualizado con luz natural regulable",
      "Auriculares permitidos para escuchar música suave mientras se digitaliza",
      "Pausa de 15 minutos de descompresión sensorial en la terraza ajardinada",
      "Tutor laboral de enlace para dudas sin presión"
    ],
    lowSeasonPolicy: "La entidad está certificada en empleo con apoyo. Dispone de un protocolo consensuado donde la persona puede reducir temporalmente horas o pausar tareas en épocas de bajón anímico, reprogramando los objetivos sin pérdida del puesto ni justificaciones incómodas."
  },
  {
    id: "rec-curso-habilidades",
    type: "Curso",
    typeBadgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    matchPercentage: 95,
    title: "Taller de comunicación asertiva en grupos reducidos",
    entity: "Espacio Comunitario La Huerta Creativa",
    location: "Murcia (Vistabella) · a 18 min en autobús",
    transitLine: "Línea 26 (Autobús)",
    hours: "2 h semanales (miércoles 10:30 - 12:30)",
    salary: "Gratuito (100% financiado)",
    shortDescription: "Dinámicas amenas para poner límites saludables, comunicar emociones y convivir en grupos de solo 5 personas.",
    chips: ["Grupo reducido (5 pers.)", "18 min de casa", "Gratuito", "Sin exámenes ni presión"],
    whyItFits: [
      { icon: "Users", title: "Máximo 5 participantes", desc: "Clima íntimo y de confianza mutua." },
      { icon: "ShieldCheck", title: "Sin dinámicas invasivas", desc: "Tú decides cuándo intervenir y cuándo solo escuchar." },
      { icon: "Bus", title: "A 18 min en bus directo", desc: "Parada a escasos metros de la sede." }
    ]
  },
  {
    id: "rec-taller-musica",
    type: "Taller",
    typeBadgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    matchPercentage: 92,
    title: "Ensamble acústico libre y creación de canciones",
    entity: "Colectivo Semilla Sonora Murcia",
    location: "Murcia (San Antolín) · a 14 min a pie",
    transitLine: "A pie o Bus C1",
    hours: "Viernes alternos de 17:00 a 19:00",
    salary: "Aportación voluntaria simbólica",
    shortDescription: "Espacio abierto para compartir acordes de guitarra, escribir letras y cantar sin juicios técnicos.",
    chips: ["Tu talento: Música", "A pie de tu barrio", "Ambiente acogedor", "Creatividad libre"],
    whyItFits: [
      { icon: "Music", title: "Conecta con tu talento de guitarra", desc: "Ideal para compartir tus temas como 'Despertar a mi compás'." },
      { icon: "HeartHandshake", title: "Comunidad de apoyo", desc: "Músicos y aficionados que valoran la expresión emocional." }
    ]
  },
  {
    id: "rec-recurso-refugio",
    type: "Recurso cercano",
    typeBadgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    matchPercentage: 88,
    title: "Espacio de desconexión sensorial y lectura 'El Nido'",
    entity: "Red Solidaria Murcia Serena",
    location: "Murcia (San Juan) · a 12 min",
    transitLine: "Tranvía / Bus 1",
    hours: "Lunes a viernes de 10:00 a 20:00",
    salary: "Acceso libre y confidencial",
    shortDescription: "Sala con luz tenue, sillones cómodos, infusiones y rincón de silencio para momentos de sobrecarga emocional.",
    chips: ["Zona de calma", "Sin cita previa", "Aromaterapia", "Silencio respetuoso"],
    whyItFits: [
      { icon: "Smile", title: "Tu refugio en días de bajón", desc: "Lugar para descansar y tomar aire cuando estás en el centro de Murcia." }
    ]
  }
];

export const MOCK_ALL_OPPORTUNITIES = [
  ...MOCK_RECOMMENDATIONS,
  {
    id: "rec-empleo-vivero",
    type: "Empleo",
    typeBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    matchPercentage: 86,
    title: "Auxiliar de vivero y plantas ornamentales de interior",
    entity: "Viveros Bioclima Murcia",
    location: "Espinardo (Murcia) · a 25 min en Tranvía",
    transitLine: "Tranvía Línea 1 (Murcia)",
    hours: "12 h/semana · Mañanas",
    salary: "Contrato adaptado",
    shortDescription: "Riego, trasplante suave y etiquetado botánico en invernadero luminoso con fondo de música ambiente.",
    chips: ["Contacto con naturaleza", "Ritmo tranquilo", "Poca gente", "Tranvía directo"]
  },
  {
    id: "rec-curso-botanica",
    type: "Curso",
    typeBadgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    matchPercentage: 84,
    title: "Introducción al diseño gráfico digital accesible",
    entity: "Aula Mentor Murcia & San Basilio",
    location: "Murcia (San Basilio) · a 20 min en bus",
    transitLine: "Línea C2",
    hours: "4 semanas (tutorías individuales online o presencial)",
    salary: "Beca 100% disponible",
    shortDescription: "Aprende Canva y herramientas visuales a tu propio ritmo con apoyo de una tutora asignada.",
    chips: ["Tutoría individual", "Ritmo propio", "Sin fechas fijas", "Creativo"]
  },
  {
    id: "rec-taller-ceramica",
    type: "Taller",
    typeBadgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    matchPercentage: 82,
    title: "Cerámica consciente y modelado con barro local",
    entity: "Taller del Barro del Valle del Segura",
    location: "Murcia (Aljucer) · a 28 min en bus",
    transitLine: "Línea 28",
    hours: "Jueves 16:30 - 18:30",
    salary: "Gratuito",
    shortDescription: "Tacto con la tierra, modelado manual de piezas y concentración relajada sin prisa.",
    chips: ["Tacto y calma", "Grupo de 4 personas", "Espacio abierto", "Terapéutico"]
  }
];

export const MOCK_TALENT_SPACE = {
  category: "Música & Composición acústica",
  userBio: "La guitarra es mi forma de hablar cuando las palabras pesan demasiado. Compongo en mi habitación del Barrio del Carmen.",
  featuredVideo: {
    title: "Mi canción: 'Despertar a mi compás'",
    subtitle: "Guitarra acústica y voz grabada en directo",
    duration: "3:42 min",
    plays: 148,
    initialLikes: 34,
    commentsCount: 7,
    gradient: "from-sage-600 via-emerald-700 to-teal-800"
  },
  notebookLyrics: {
    songTitle: "Despertar a mi compás (Fragmento)",
    dateWritten: "Escrito un martes de abril en Murcia",
    lyrics: `A veces el reloj se para en el invierno,
y la ciudad camina sin mirar atrás.
Hoy afiné mi guitarra con calma y con ternura,
que brotan primaveras cuando aprendo a respirar.

No me pidas correr si hoy toca echar raíces,
el río de mi pecho sabe a dónde va.
Tengo notas guardadas para días grises,
y un acorde de luz que mañana nacerá.`
  },
  songsList: [
    { id: "s1", title: "Despertar a mi compás", duration: "3:42", plays: "148", isAcoustic: true },
    { id: "s2", title: "Río Segura al atardecer (Instrumental)", duration: "2:18", plays: "96", isAcoustic: true },
    { id: "s3", title: "Brote en la acera", duration: "4:05", plays: "112", isAcoustic: true },
    { id: "s4", title: "Silencios necesarios", duration: "3:10", plays: "78", isAcoustic: true }
  ],
  initialComments: [
    {
      id: "c1",
      author: "Mateo R.",
      location: "Murcia",
      avatarBg: "bg-amber-100 text-amber-800",
      avatarText: "MR",
      time: "Ayer a las 18:40",
      text: "Qué delicadeza tocando la guitarra, Lucía. El verso de 'echar raíces' me ha llegado al alma. ¡Sigue compartiendo tu arte! 🌱"
    },
    {
      id: "c2",
      author: "Sara P.",
      location: "Cartagena",
      avatarBg: "bg-teal-100 text-teal-800",
      avatarText: "SP",
      time: "Hace 2 días",
      text: "Me ha transmitido una calma inmensa después de un día difícil. Tu voz y los acordes abrazan. Muchas gracias por subirlo."
    },
    {
      id: "c3",
      author: "Carlos V.",
      location: "Murcia",
      avatarBg: "bg-rose-100 text-rose-800",
      avatarText: "CV",
      time: "Hace 4 días",
      text: "¡Bravo! Tienes muchísimo talento componiendo. Enhorabuena por este paso tan bonito de compartirlo con la comunidad."
    }
  ]
};

export const MOCK_COMMUNITY_MEMBERS = [
  {
    id: "mem-1",
    name: "Mateo R.",
    age: 26,
    city: "Murcia (San Juan)",
    talent: "Ilustración botánica & Acuarela",
    icon: "Palette",
    avatarBg: "bg-emerald-100 text-emerald-800",
    avatarText: "MR",
    bio: "Pinto plantas autóctonas y paisajes de Murcia para bajar la ansiedad. Me encantaría ilustrar portadas para canciones o poemas.",
    connected: false,
    mutualInterests: ["Arte tranquilo", "Música acústica"]
  },
  {
    id: "mem-2",
    name: "Elena C.",
    age: 24,
    city: "Molina de Segura",
    talent: "Escritura creativa & Microrrelatos",
    icon: "PenTool",
    avatarBg: "bg-purple-100 text-purple-800",
    avatarText: "EC",
    bio: "Escribo para ponerle orden a mis emociones. Busco personas con quienes compartir textos y apoyarnos en días flojos.",
    connected: true,
    mutualInterests: ["Poesía", "Expresión emocional"]
  },
  {
    id: "mem-3",
    name: "Samuel G.",
    age: 29,
    city: "Murcia (El Palmar)",
    talent: "Cocina tradicional & Repostería",
    icon: "Utensils",
    avatarBg: "bg-orange-100 text-orange-800",
    avatarText: "SG",
    bio: "Hacer pan y bizcochos caseros me da estructura y calma sensorial. Encantado de compartir recetas y charlas tranquilas.",
    connected: false,
    mutualInterests: ["Artesanía", "Rutinas con calma"]
  },
  {
    id: "mem-4",
    name: "Nuria B.",
    age: 22,
    city: "Alcantarilla",
    talent: "Fotografía analógica & urbana",
    icon: "Camera",
    avatarBg: "bg-sky-100 text-sky-800",
    avatarText: "NB",
    bio: "Capturo detalles desapercibidos de nuestras calles. Aprendiendo a vivir un día a la vez con respeto a mis ciclos.",
    connected: false,
    mutualInterests: ["Fotografía", "Espacios serenos"]
  }
];

export const MOCK_COMMUNITY_POSTS = [
  {
    id: "post-1",
    author: "Elena C.",
    authorLocation: "Molina de Segura",
    avatarBg: "bg-purple-100 text-purple-800",
    avatarText: "EC",
    time: "Hace 3 horas",
    content: "Hoy amanecí con poca energía, pero he conseguido escribir tres versos al sol del balcón. Respetar el ritmo propio también es sembrar. 🌿✨",
    likes: 19,
    hasLiked: false,
    tag: "Reflexión del día"
  },
  {
    id: "post-2",
    author: "Mateo R.",
    authorLocation: "Murcia (San Juan)",
    avatarBg: "bg-emerald-100 text-emerald-800",
    avatarText: "MR",
    time: "Hace 6 horas",
    content: "He terminado una pequeña acuarela de un brote de limonero murciano. Dedicada a todos los que hoy estáis luchando en silencio.",
    likes: 28,
    hasLiked: true,
    tag: "Mi proyecto visual"
  }
];
