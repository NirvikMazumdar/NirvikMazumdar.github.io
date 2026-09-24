// Single source of truth for everything on the home page.
// Edit this file to update the site; no template changes needed.

export const profile = {
  name: 'Nirvik Mazumdar',
  tagline: 'Robotic Systems Engineering · Machine Learning · AI-driven Control',
  location: 'Aachen, Germany',
  email: 'nirvik.mazumdar@rwth-aachen.de',
  photo: '/pic.png',
  cv: '/Nirvik_CV_Deutsch.pdf',
  links: [
    { label: 'GitHub', href: 'https://github.com/NirvikMazumdar' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nirvikmazumdar' },
  ],

  headline: 'Building intelligent systems for robotics, sensing and real-world infrastructure.',

  summary:
    "Master's student in Robotic Systems Engineering at RWTH Aachen with a B.Tech in Electrical Engineering and hands-on experience in machine learning, firmware and control engineering. I build systems that connect sensing, embedded hardware and intelligent control—from IMU-driven prototypes to real-time data platforms. At ENVIOTECH, I develop EnvioTerminal’s backend, real-time ThingsBoard communication with sensor nodes and border routers, data-ingestion pipelines, and public APIs. Skilled in model-based control, real-time firmware and hardware-in-the-loop integration. Previously at ISEA (E.ON ERC), I developed scalable, simulation-driven approaches to lowering EV charging costs. Seeking a robotics, autonomy or intelligent-hardware role in a multidisciplinary, research-oriented team.",

  stack: [
    'Python', 'C++', 'SQL', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib',
    'OpenCV', 'Docker', 'Git', 'ROS', 'CNNs / RNNs', 'Flask', 'MATLAB',
  ],

  experience: [
    {
      role: 'Machine Learning & Smart Infrastructure Developer',
      org: 'ENVIOTECH',
      period: 'May 2026 – present',
      location: 'Frankfurt, Germany · Hybrid',
      bullets: [
        'Revamped the entire backend of EnvioTerminal, the company’s core platform.',
        'Building smart features such as EnvioChat, an AI assistant on top of the platform.',
        'Enabling real-time backend communication with sensor nodes and border routers via ThingsBoard.',
        'Designing data-ingestion pipelines and public-facing APIs for external data sources.',
      ],
      tools: ['Python', 'ThingsBoard', 'REST APIs', 'Docker'],
    },
    {
      role: 'Research Assistant (HiWi)',
      org: 'Institute for Power Electronics and Electrical Drives (ISEA), RWTH Aachen',
      period: 'Apr 2024 – Dec 2025',
      location: 'Aachen, Germany',
      bullets: [
        'Conducted research at the E.ON Energy Research Center (E.ON ERC) on EV charging optimisation and control-algorithm development.',
        'Automated a scalable data pipeline processing 1,000+ EV charging datasets from Germany, improving data preparation.',
        'Developed and evaluated a prototype control algorithm that cuts estimated charging costs by 18 % in simulation.',
        'Working on a research paper on a reinforcement-learning model that dynamically optimises EV charging costs using synthetic and historical data.',
      ],
      tools: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Scikit-learn', 'Git', 'Docker', 'Flask', 'SteVe API'],
    },
  ],

  education: [
    {
      degree: 'M.Sc. Robotic Systems Engineering',
      school: 'RWTH Aachen University',
      period: 'Oct 2023 – present',
      notes: [],
    },
    {
      degree: 'B.Tech Electrical Engineering',
      school: 'IEM Kolkata',
      period: '2018 – 2022',
      notes: [
        'Thesis: Comparative performance analysis of a Bayesian-regularisation-based artificial neural network and the conventional P&O algorithm in the MPPT controller of a solar PV system.',
        'Final grade: 1.7 (German scale) · CGPA 8.52',
      ],
    },
  ],

  skills: [
    { group: 'Programming', items: ['Python (primary)', 'C++', 'C'] },
    { group: 'Machine Learning & AI', items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face Transformers'] },
    { group: 'Deep Learning', items: ['CNNs', 'RNNs', 'Transformers'] },
    { group: 'Computer Vision', items: ['OpenCV (intro)'] },
    { group: 'Frameworks & Tools', items: ['Docker', 'Kubernetes', 'Grafana', 'Jupyter', 'Git', 'SQL', 'PostgreSQL'] },
    { group: 'Robotics & Middleware', items: ['ROS', 'ROS 2 (learning)', 'NVIDIA Isaac ROS (learning)', 'ThingsBoard'] },
    { group: 'Web & Deployment', items: ['Flask', 'REST APIs', 'AWS (intro)'] },
    { group: 'Hardware & Embedded', items: ['Arduino'] },
    { group: 'Concepts', items: ['LLM / LLMOps basics', 'Agentic AI systems', 'V2G (Vehicle-to-Grid)', 'Digital Twins'] },
  ],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Bengali', level: 'Fluent' },
    { name: 'German', level: 'A2 · learning' },
  ],

  achievements: [
    'Winner – IEM Smart Maker Faire (2019)',
    'Co-founder – Calcutta Care Club: oxygen supply during COVID, now supporting underprivileged children.',
  ],

  interests: ['Reading (technology & business)', 'Puzzles and logic games'],
};

// Current CV update: technical detail aligned with Nirvik_CV_Deutsch.pdf.
Object.assign(profile, {
  summary: "Master’s student in Robotic Systems Engineering at RWTH Aachen with a B.Tech in Electrical Engineering and experience across machine learning, embedded systems, IoT and control engineering. I work on real-time firmware, sensor integration, radar systems, digital twins, and backend and data architectures. At ENVIOTECH, I develop EnvioTerminal’s backend and API/data/system architecture, EnvioChat, device and edge connectivity through ThingsBoard, MQTT and Thread, data-ingestion pipelines and REST APIs, and support 60 GHz FMCW radar telemetry and presence-detection systems. Previously at ISEA (E.ON ERC), I developed scalable, simulation-driven approaches to lowering EV charging costs. Seeking a technical, multidisciplinary and research-oriented role.",
  stack: ['Python', 'C++', 'C', 'SQL', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'Docker', 'Git', 'ROS', 'Fastify / Node.js', 'PostgreSQL', 'ThingsBoard', 'MQTT', 'Thread', 'Grafana', 'Linux / SSH', 'CNNs / RNNs / Transformers', 'Flask', 'MATLAB'],
  experience: [{
    ...profile.experience[0], period: 'May 2026 – present', location: 'Frankfurt, Germany · Hybrid',
    bullets: ['Reworking and extending the backend of EnvioTerminal, the company’s central smart-infrastructure platform, including its API, data and system architecture.', 'Developing EnvioChat, an AI-powered assistant for intelligent interaction with platform, device and sensor data.', 'Integrating IoT devices, sensor nodes and border routers through ThingsBoard, MQTT and Thread, with real-time communication between backend and edge devices.', 'Designing data-ingestion pipelines, REST APIs and interfaces for internal sensor data and external data integration.', 'Working with 60 GHz FMCW radar sensor technology, telemetry and signal data; supporting the analysis, debugging and integration of radar and presence-detection systems.', 'Developing and operating containerised applications with Docker, PostgreSQL, Grafana and Linux, including deployment, monitoring and troubleshooting of distributed backend and IoT systems.'],
    tools: ['Python', 'Fastify / Node.js', 'ThingsBoard', 'MQTT', 'Thread', 'Docker', 'PostgreSQL', 'Grafana', 'Linux / SSH'],
  }, {
    role: 'Computer Vision Engineer (Member)',
    org: 'Frankfurt Robotics Science Team (FRoST) · Freelance',
    period: 'Jun 2026 – present',
    location: 'Frankfurt, Germany',
    bullets: ['Contributing to practical robotics and computer-vision tasks with the Frankfurt Robotics Science Team.', 'Supporting Python-based prototyping, testing and experimentation for robotics applications.', 'Working with machine-learning, perception and robotic-system-integration concepts.', 'Collaborating on technical problem-solving and robotics project ideas.'],
    tools: ['Computer Vision', 'Machine Learning', 'Python', 'Robotics'],
  }, profile.experience[1]],
  achievements: [...profile.achievements, 'IEEE Student Chapter — Content Writer (2019–2020): technical communication and student engineering activities.', 'ASME IEM Student Chapter — Member (2018–2019): student-led technical and interdisciplinary engineering activities.'],
  skills: [
    { group: 'Programming', items: ['Python', 'C++', 'C', 'SQL'] },
    { group: 'Machine Learning & AI', items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face Transformers', 'LLMs / LLMOps (basics)', 'Agentic AI systems (basics)'] },
    { group: 'Deep Learning & Computer Vision', items: ['CNNs', 'RNNs', 'Transformers', 'OpenCV'] },
    { group: 'Backend & APIs', items: ['Fastify / Node.js', 'REST APIs', 'Data-ingestion pipelines', 'Real-time communication', 'API integration'] },
    { group: 'IoT & Data Platforms', items: ['ThingsBoard', 'MQTT', 'Sensor / telemetry data', 'Grafana', 'PostgreSQL'] },
    { group: 'Embedded Systems & Firmware', items: ['Embedded C', 'Firmware flashing and debugging', 'Microcontrollers', 'Bootloader / OTA basics', 'Arduino'] },
    { group: 'Radar & Sensing', items: ['60 GHz FMCW radar (Infineon BGT60TR13C)', 'Presence / motion detection', 'Signal and telemetry analysis'] },
    { group: 'Communication & Protocols', items: ['Thread', 'MQTT', 'SPI', 'RS485', 'DALI / D4i'] },
    { group: 'DevOps & Tools', items: ['Docker', 'Git', 'Jupyter', 'Kubernetes (basic)', 'Linux / SSH'] },
    { group: 'Robotics', items: ['ROS', 'Sensor integration', 'Embedded / IoT systems', 'Digital twins'] },
    { group: 'Web & Deployment', items: ['React', 'Vite', 'Docker-based deployments', 'Flask (basic)', 'AWS (basic)'] },
    { group: 'Concepts', items: ['Vehicle-to-Grid (V2G)', 'Edge / IoT architectures', 'Real-time sensor communication'] },
  ],
});

// Education details aligned with the current academic program and CV.
Object.assign(profile, {
  education: [
    {
      ...profile.education[0],
      period: 'Sep 2023 - Sep 2027',
      notes: [
        "Master's program focused on robotics, machine learning, control systems, perception and intelligent autonomous systems.",
        'Key areas include Reinforcement Learning, learning-based control, computer vision, sensor integration, embedded systems and robotics software. Complementing academic work with practical experience in AI, IoT, radar sensing, real-time systems and backend integration through research and industry projects.',
      ],
    },
    {
      ...profile.education[1],
      degree: 'Bachelor of Technology, Electrical and Electronics Engineering',
      school: 'Institute of Engineering & Management (IEM)',
      period: 'Mar 2018 - Sep 2022',
      notes: [
        'Grade: 8.72/10',
        "Bachelor's degree in Electrical and Electronics Engineering, covering electrical machines, power systems, electronics, control systems, programming and embedded systems.",
        'Built a strong engineering foundation in electrical systems, automation, control and programming, which later supported my specialization in robotics, machine learning and intelligent systems.',
        'Thesis: Comparative performance analysis of a Bayesian-regularisation-based artificial neural network and the conventional P&O algorithm in the MPPT controller of a solar PV system.',
      ],
    },
  ],
});

// Top navigation. Add entries here when you add new pages under src/pages/.
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export const locales = ['en', 'de', 'fr', 'nl'] as const;
export type Locale = (typeof locales)[number];

type Copy = {
  tagline: string;
  headline: string;
  summary: string;
  labels: Record<'downloadCv' | 'primaryStack' | 'about' | 'experience' | 'projects' | 'education' | 'skills' | 'more' | 'languages' | 'achievements' | 'interests' | 'contact', string>;
  focus: { label: string; text: string }[];
  highlights: { value: string; label: string }[];
  explore: string;
  footerHeadline: string;
  present: string;
  availability: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    tagline: profile.tagline,
    headline: profile.headline,
    summary: profile.summary,
    labels: { downloadCv: 'Download CV', primaryStack: 'Primary tech stack', about: 'About', experience: 'Experience', projects: 'Projects', education: 'Education', skills: 'Skills', more: 'More', languages: 'Languages', achievements: 'Achievements & volunteering', interests: 'Interests', contact: 'Contact' },
    focus: [
      { label: 'Embodied systems', text: 'IMU sensing, firmware and real-time hardware integration.' },
      { label: 'Control & learning', text: 'Model-based control, simulation and machine-learning evaluation.' },
      { label: 'From prototype to platform', text: 'Hands-on systems work across hardware, data and APIs.' },
    ],
    highlights: [{ value: 'ROS + C++', label: 'robotics software foundation' }, { value: 'IMU + firmware', label: 'embedded sensing prototypes' }, { value: 'ML control', label: 'learning and optimisation systems' }],
    explore: 'View selected work',
    footerHeadline: 'Let’s build something useful.',
    present: 'present',
    availability: 'Open to collaboration',
  },
  de: {
    tagline: 'Robotiksysteme · Maschinelles Lernen · KI-gestützte Regelung',
    headline: 'Intelligente Robotiksysteme für reale Hardware entwickeln.',
    summary: 'Masterstudent der Robotiksystemtechnik an der RWTH Aachen mit Bachelorabschluss in Elektrotechnik und praktischer Erfahrung in Machine Learning, Firmware und Regelungstechnik. Ich entwickle Systeme, die Sensorik, Embedded Hardware und intelligente Regelung verbinden – von IMU-basierten Prototypen bis zu Echtzeit-Datenplattformen. Bei ENVIOTECH entwickle ich das Backend von EnvioTerminal, Echtzeitkommunikation über ThingsBoard mit Sensorknoten und Border Routern sowie Datenpipelines und öffentliche APIs. Erfahren in modellbasierter Regelung, Echtzeit-Firmware und Hardware-in-the-Loop-Integration. Zuvor am ISEA (E.ON ERC): Entwicklung skalierbarer, simulationsgestützter Ansätze zur Senkung von EV-Ladekosten. Interesse an einer Position in Robotik, Autonomie oder intelligenter Hardware in einem interdisziplinären, forschungsnahen Team.',
    labels: { downloadCv: 'Lebenslauf herunterladen', primaryStack: 'Technischer Schwerpunkt', about: 'Profil', experience: 'Berufserfahrung', projects: 'Projekte', education: 'Ausbildung', skills: 'Kompetenzen', more: 'Weitere Informationen', languages: 'Sprachen', achievements: 'Auszeichnungen & Engagement', interests: 'Interessen', contact: 'Kontakt' },
    focus: [
      { label: 'Verkörperte Systeme', text: 'IMU-Sensorik, Firmware und Echtzeit-Hardwareintegration.' },
      { label: 'Regelung & Lernen', text: 'Modellbasierte Regelung, Simulation und ML-Evaluation.' },
      { label: 'Prototyp bis Plattform', text: 'Hands-on-Systemarbeit über Hardware, Daten und APIs hinweg.' },
    ],
    highlights: [{ value: 'ROS + C++', label: 'Robotik-Softwarebasis' }, { value: 'IMU + Firmware', label: 'Embedded-Sensorikprototypen' }, { value: 'ML-Regelung', label: 'Lern- und Optimierungssysteme' }],
    explore: 'Ausgewählte Arbeiten ansehen',
    footerHeadline: 'Lassen Sie uns etwas Nützliches entwickeln.',
    present: 'heute',
    availability: 'Offen fuer Zusammenarbeit',
  },
  fr: {
    availability: 'Ouvert a la collaboration',
    tagline: 'Systèmes robotiques · Apprentissage automatique · Commande assistée par IA',
    headline: 'Concevoir des systèmes robotiques intelligents pour du matériel réel.',
    summary: 'Étudiant en master de systèmes robotiques à la RWTH Aachen, titulaire d’une licence en génie électrique, avec une expérience pratique en apprentissage automatique, firmware et commande. Je construis des systèmes qui relient capteurs, matériel embarqué et commande intelligente, des prototypes pilotés par IMU aux plateformes de données temps réel. Chez ENVIOTECH, je développe le backend d’EnvioTerminal, des communications ThingsBoard temps réel avec des nœuds capteurs et routeurs frontières, ainsi que des pipelines de données et des API publiques. Compétent en commande basée sur des modèles, firmware temps réel et intégration hardware-in-the-loop. Ancien assistant de recherche à l’ISEA (E.ON ERC), où il a développé des approches évolutives et guidées par simulation pour réduire les coûts de recharge des véhicules électriques. Recherche un poste en robotique, autonomie ou matériel intelligent dans une équipe interdisciplinaire et orientée recherche.',
    labels: { downloadCv: 'Télécharger le CV', primaryStack: 'Technologies principales', about: 'Profil', experience: 'Expérience', projects: 'Projets', education: 'Formation', skills: 'Compétences', more: 'En savoir plus', languages: 'Langues', achievements: 'Réalisations & bénévolat', interests: 'Centres d’intérêt', contact: 'Contact' },
    focus: [
      { label: 'Systèmes incarnés', text: 'Capteurs IMU, firmware et intégration matérielle temps réel.' },
      { label: 'Commande & apprentissage', text: 'Commande basée sur modèles, simulation et évaluation ML.' },
      { label: 'Du prototype à la plateforme', text: 'Travail système concret entre matériel, données et API.' },
    ],
    highlights: [{ value: 'ROS + C++', label: 'base logicielle robotique' }, { value: 'IMU + firmware', label: 'prototypes de capteurs embarqués' }, { value: 'Commande ML', label: 'systèmes d’apprentissage et d’optimisation' }],
    explore: 'Voir une sélection de réalisations',
    footerHeadline: 'Construisons quelque chose d’utile.',
    present: 'aujourd’hui',
  },
  nl: {
    tagline: 'Robotische systemen · Machine learning · AI-gestuurde regeltechniek',
    headline: 'Intelligente robotische systemen bouwen voor echte hardware.',
    summary: 'Masterstudent Robotische Systeemtechniek aan de RWTH Aachen met een bachelor Elektrotechniek en praktijkervaring in machine learning, firmware en regeltechniek. Ik bouw systemen die sensoren, embedded hardware en intelligente regeltechniek verbinden: van IMU-gestuurde prototypes tot realtime dataplatforms. Bij ENVIOTECH ontwikkel ik de backend van EnvioTerminal, realtime ThingsBoard-communicatie met sensorknopen en border routers, plus data-ingestiepijplijnen en publieke API’s. Ervaren met modelgebaseerde regeltechniek, realtime firmware en hardware-in-the-loop-integratie. Werkte eerder bij ISEA (E.ON ERC) aan schaalbare, simulatiegedreven methoden om laadkosten voor elektrische voertuigen te verlagen. Zoekt een functie in robotica, autonomie of intelligente hardware in een multidisciplinair, onderzoeksgericht team.',
    labels: { downloadCv: 'CV downloaden', primaryStack: 'Belangrijkste technologieën', about: 'Profiel', experience: 'Ervaring', projects: 'Projecten', education: 'Opleiding', skills: 'Vaardigheden', more: 'Meer', languages: 'Talen', achievements: 'Prestaties & vrijwilligerswerk', interests: 'Interesses', contact: 'Contact' },
    focus: [
      { label: 'Belichaamde systemen', text: 'IMU-sensoren, firmware en realtime hardwareintegratie.' },
      { label: 'Regeltechniek & leren', text: 'Modelgebaseerde regeltechniek, simulatie en ML-evaluatie.' },
      { label: 'Van prototype tot platform', text: 'Praktisch systeemwerk over hardware, data en API’s.' },
    ],
    highlights: [{ value: 'ROS + C++', label: 'robotica-softwarebasis' }, { value: 'IMU + firmware', label: 'embedded sensorprototypes' }, { value: 'ML-regeltechniek', label: 'leer- en optimalisatiesystemen' }],
    explore: 'Bekijk geselecteerd werk',
    footerHeadline: 'Laten we iets nuttigs bouwen.',
    present: 'heden',
    availability: 'Open voor samenwerking',
  },
};

Object.assign(copy.en, {
  focus: [{ label: 'Radar & sensing', text: '60 GHz FMCW radar, sensor integration and telemetry analysis.' }, { label: 'IoT & connectivity', text: 'ThingsBoard, MQTT, Thread and real-time edge communication.' }, { label: 'Platforms & control', text: 'Backend, data platforms and intelligent control for real systems.' }],
  highlights: [{ value: '60 GHz radar', label: 'sensing and telemetry systems' }, { value: 'MQTT + Thread', label: 'real-time device connectivity' }, { value: 'Fastify + SQL', label: 'backend and data platforms' }],
});
Object.assign(copy.de, {
  headline: 'Intelligente Systeme für Robotik, Sensorik und reale Infrastruktur entwickeln.',
  summary: 'Masterstudent der Robotik an der RWTH Aachen mit B.Tech in Elektrotechnik und Erfahrung in Machine Learning, Embedded Systems, IoT und Regelungstechnik. Praxis in Echtzeit-Firmware, Sensorintegration, Radarsystemen, Digital Twins sowie Backend- und Datenarchitekturen. Bei ENVIOTECH entwickle ich das Backend sowie die API-, Daten- und Systemarchitektur von EnvioTerminal, EnvioChat, Geräte- und Edge-Konnektivität über ThingsBoard, MQTT und Thread, Daten-Ingestion-Pipelines und REST APIs; zudem unterstütze ich 60-GHz-FMCW-Radar-, Telemetrie- und Presence-Detection-Systeme. Zuvor entwickelte ich am ISEA (E.ON ERC) skalierbare, simulationsgestützte Ansätze zur Senkung von EV-Ladekosten. Auf der Suche nach einer Position in einem technischen, multidisziplinären und forschungsnahen Umfeld.',
  focus: [{ label: 'Radar & Sensorik', text: '60-GHz-FMCW-Radar, Sensorintegration und Telemetrieanalyse.' }, { label: 'IoT & Konnektivität', text: 'ThingsBoard, MQTT, Thread und Echtzeitkommunikation am Edge.' }, { label: 'Plattformen & Regelung', text: 'Backend, Datenplattformen und intelligente Regelung für reale Systeme.' }],
  highlights: [{ value: '60-GHz-Radar', label: 'Sensorik- und Telemetriesysteme' }, { value: 'MQTT + Thread', label: 'Echtzeit-Gerätekonnektivität' }, { value: 'Fastify + SQL', label: 'Backend und Datenplattformen' }],
});
Object.assign(copy.fr, {
  headline: 'Concevoir des systèmes intelligents pour la robotique, les capteurs et les infrastructures réelles.',
  summary: 'Étudiant en master de systèmes robotiques à la RWTH Aachen, titulaire d’un B.Tech en génie électrique, avec une expérience en apprentissage automatique, systèmes embarqués, IoT et commande. Je travaille sur le firmware temps réel, l’intégration de capteurs, les systèmes radar, les jumeaux numériques ainsi que les architectures backend et de données. Chez ENVIOTECH, je développe le backend et l’architecture API, données et systèmes d’EnvioTerminal, EnvioChat, la connectivité des appareils et de l’edge via ThingsBoard, MQTT et Thread, les pipelines d’ingestion et les API REST; je contribue aussi aux systèmes radar FMCW 60 GHz, de télémétrie et de détection de présence. Je recherche un poste technique, multidisciplinaire et orienté recherche.',
  focus: [{ label: 'Radar & capteurs', text: 'Radar FMCW 60 GHz, intégration de capteurs et analyse de télémétrie.' }, { label: 'IoT & connectivité', text: 'ThingsBoard, MQTT, Thread et communication edge en temps réel.' }, { label: 'Plateformes & commande', text: 'Backend, plateformes de données et commande intelligente pour des systèmes réels.' }],
  highlights: [{ value: 'Radar 60 GHz', label: 'systèmes de capteurs et télémétrie' }, { value: 'MQTT + Thread', label: 'connectivité d’appareils en temps réel' }, { value: 'Fastify + SQL', label: 'backend et plateformes de données' }],
});
Object.assign(copy.nl, {
  headline: 'Intelligente systemen bouwen voor robotica, sensoren en echte infrastructuur.',
  summary: 'Masterstudent Robotische Systeemtechniek aan de RWTH Aachen met een B.Tech Elektrotechniek en ervaring in machine learning, embedded systemen, IoT en regeltechniek. Ik werk aan realtime firmware, sensorintegratie, radarsystemen, digital twins en backend- en data-architecturen. Bij ENVIOTECH ontwikkel ik de backend en API-, data- en systeemarchitectuur van EnvioTerminal, EnvioChat, apparaat- en edge-connectiviteit via ThingsBoard, MQTT en Thread, data-ingestiepijplijnen en REST API’s; daarnaast ondersteun ik 60-GHz-FMCW-radar-, telemetrie- en aanwezigheidsdetectiesystemen. Ik zoek een technische, multidisciplinaire en onderzoeksgerichte functie.',
  focus: [{ label: 'Radar & sensoren', text: '60-GHz-FMCW-radar, sensorintegratie en telemetrieanalyse.' }, { label: 'IoT & connectiviteit', text: 'ThingsBoard, MQTT, Thread en realtime edge-communicatie.' }, { label: 'Platformen & regeltechniek', text: 'Backend, dataplatformen en intelligente regeltechniek voor echte systemen.' }],
  highlights: [{ value: '60-GHz-radar', label: 'sensor- en telemetriesystemen' }, { value: 'MQTT + Thread', label: 'realtime apparaatconnectiviteit' }, { value: 'Fastify + SQL', label: 'backend en dataplatformen' }],
});

export function localePath(locale: Locale, path = '/') {
  return locale === 'en' ? path : `/${locale}${path === '/' ? '' : path}`;
}

const projectSkills = new Set(['Python', 'C++', 'TensorFlow', 'Scikit-learn', 'Arduino', 'IMU', 'Embedded', 'C#', 'ESP32', 'Unity 3D']);

export function getSkillHref(skill: string) {
  return projectSkills.has(skill) ? '#projects' : '#experience';
}

const localizedProfiles = {
  de: {
    experience: [
      { role: 'Entwickler für Machine Learning & Smart Infrastructure', period: 'Mai 2026 – heute', location: 'Frankfurt, Deutschland · Hybrid', bullets: ['Überarbeitung des Backends von EnvioTerminal, der Kernplattform des Unternehmens.', 'Entwicklung intelligenter Funktionen wie EnvioChat, einem KI-Assistenten auf der Plattform.', 'Aufbau der Echtzeitkommunikation zwischen Backend, Sensorknoten und Border Routern über ThingsBoard.', 'Konzeption von Datenpipelines und öffentlichen APIs für externe Datenquellen.'] },
      { role: 'Wissenschaftlicher Mitarbeiter (HiWi)', period: 'Apr. 2024 – Dez. 2025', location: 'Aachen, Deutschland', bullets: ['Forschung am E.ON Energy Research Center (E.ON ERC) zu Optimierung des EV-Ladens und Regelalgorithmen.', 'Automatisierung einer skalierbaren Pipeline für mehr als 1.000 deutsche Ladedatensätze.', 'Entwicklung und Bewertung eines Regelungsprototyps, der die geschätzten Ladekosten in der Simulation um 18 % senkt.', 'Arbeit an einer Forschungsarbeit zu einem Reinforcement-Learning-Modell für dynamische Ladeoptimierung mit synthetischen und historischen Daten.'] },
    ],
    education: [
      { degree: 'M.Sc. Robotiksystemtechnik', period: 'Okt. 2023 – heute', notes: [] },
      { degree: 'B.Tech Elektrotechnik', period: '2018 – 2022', notes: ['Abschlussarbeit: Vergleichende Leistungsanalyse eines künstlichen neuronalen Netzes mit Bayes-Regularisierung und des konventionellen P&O-Algorithmus in einem MPPT-Regler für PV-Systeme.', 'Abschlussnote: 1,7 (deutsche Skala) · CGPA 8,52'] },
    ],
    skillGroups: ['Programmierung', 'Machine Learning & KI', 'Deep Learning', 'Computer Vision', 'Frameworks & Tools', 'Web & Deployment', 'Hardware & Embedded', 'Konzepte'],
    languages: [{ name: 'Englisch', level: 'Fließend' }, { name: 'Hindi', level: 'Fließend' }, { name: 'Bengali', level: 'Fließend' }, { name: 'Deutsch', level: 'A2 · in Ausbildung' }],
    achievements: ['Gewinner – IEM Smart Maker Faire (2019)', 'Mitgründer – Calcutta Care Club: Sauerstoffversorgung während COVID, heute Unterstützung benachteiligter Kinder.'],
    interests: ['Lesen (Technologie & Wirtschaft)', 'Rätsel und Logikspiele'],
  },
  fr: {
    experience: [
      { role: 'Développeur Machine Learning & Infrastructure intelligente', period: 'mai 2026 – aujourd’hui', location: 'Francfort, Allemagne · Hybride', bullets: ['Refonte du backend d’EnvioTerminal, la plateforme centrale de l’entreprise.', 'Développement de fonctionnalités intelligentes telles qu’EnvioChat, assistant IA intégré à la plateforme.', 'Mise en place de communications backend temps réel avec les nœuds capteurs et routeurs frontières via ThingsBoard.', 'Conception de pipelines d’ingestion de données et d’API publiques pour des sources externes.'] },
      { role: 'Assistant de recherche (HiWi)', period: 'avr. 2024 – déc. 2025', location: 'Aachen, Allemagne', bullets: ['Recherche au E.ON Energy Research Center sur l’optimisation de la recharge des VE et les algorithmes de commande.', 'Automatisation d’un pipeline évolutif traitant plus de 1 000 jeux de données de recharge allemands.', 'Développement et évaluation d’un prototype de commande réduisant les coûts de recharge estimés de 18 % en simulation.', 'Travail sur un article consacré à un modèle d’apprentissage par renforcement pour optimiser dynamiquement les coûts de recharge.'] },
    ],
    education: [
      { degree: 'M.Sc. Systèmes robotiques', period: 'oct. 2023 – aujourd’hui', notes: [] },
      { degree: 'B.Tech Génie électrique', period: '2018 – 2022', notes: ['Mémoire : analyse comparative des performances d’un réseau neuronal artificiel à régularisation bayésienne et de l’algorithme P&O conventionnel dans un contrôleur MPPT photovoltaïque.', 'Note finale : 1,7 (échelle allemande) · CGPA 8,52'] },
    ],
    skillGroups: ['Programmation', 'Machine Learning & IA', 'Deep Learning', 'Vision par ordinateur', 'Frameworks & outils', 'Web & déploiement', 'Matériel & embarqué', 'Concepts'],
    languages: [{ name: 'Anglais', level: 'Courant' }, { name: 'Hindi', level: 'Courant' }, { name: 'Bengali', level: 'Courant' }, { name: 'Allemand', level: 'A2 · en apprentissage' }],
    achievements: ['Lauréat – IEM Smart Maker Faire (2019)', 'Cofondateur – Calcutta Care Club : fourniture d’oxygène pendant la COVID, soutien actuel aux enfants défavorisés.'],
    interests: ['Lecture (technologie & business)', 'Énigmes et jeux de logique'],
  },
  nl: {
    experience: [
      { role: 'Developer Machine Learning & Slimme Infrastructuur', period: 'mei 2026 – heden', location: 'Frankfurt, Duitsland · Hybride', bullets: ['Vernieuwing van de backend van EnvioTerminal, het kernplatform van het bedrijf.', 'Ontwikkeling van slimme functies zoals EnvioChat, een AI-assistent op het platform.', 'Realiseren van realtime backendcommunicatie met sensorknopen en border routers via ThingsBoard.', 'Ontwerp van data-ingestiepijplijnen en publieke API’s voor externe databronnen.'] },
      { role: 'Onderzoeksassistent (HiWi)', period: 'apr. 2024 – dec. 2025', location: 'Aken, Duitsland', bullets: ['Onderzoek bij het E.ON Energy Research Center naar optimalisatie van EV-laden en regelalgoritmen.', 'Automatisering van een schaalbare datapijplijn voor meer dan 1.000 Duitse laad-datasets.', 'Ontwikkeling en evaluatie van een regelprototype dat geschatte laadkosten in simulatie met 18 % verlaagt.', 'Werk aan een onderzoekspaper over een reinforcement-learningmodel voor dynamische optimalisatie van laadkosten.'] },
    ],
    education: [
      { degree: 'M.Sc. Robotische Systeemtechniek', period: 'okt. 2023 – heden', notes: [] },
      { degree: 'B.Tech Elektrotechniek', period: '2018 – 2022', notes: ['Scriptie: vergelijkende prestatieanalyse van een neuraal netwerk met Bayesiaanse regularisatie en het conventionele P&O-algoritme in een MPPT-regelaar voor zonnepanelen.', 'Eindcijfer: 1,7 (Duitse schaal) · CGPA 8,52'] },
    ],
    skillGroups: ['Programmeren', 'Machine Learning & AI', 'Deep Learning', 'Computer Vision', 'Frameworks & tools', 'Web & deployment', 'Hardware & embedded', 'Concepten'],
    languages: [{ name: 'Engels', level: 'Vloeiend' }, { name: 'Hindi', level: 'Vloeiend' }, { name: 'Bengaals', level: 'Vloeiend' }, { name: 'Duits', level: 'A2 · lerend' }],
    achievements: ['Winnaar – IEM Smart Maker Faire (2019)', 'Medeoprichter – Calcutta Care Club: zuurstofvoorziening tijdens COVID, nu steun voor kansarme kinderen.'],
    interests: ['Lezen (technologie & business)', 'Puzzels en logicaspellen'],
  },
} as const;

const localizedCvUpdate = {
  de: { role: 'Entwickler für Machine Learning & Smart Infrastructure', period: 'Mai 2026 – heute', location: 'Frankfurt, Deutschland · Hybrid', bullets: ['Umfassende Überarbeitung und Erweiterung des Backends von EnvioTerminal, der zentralen Smart-Infrastructure-Plattform des Unternehmens, einschließlich API-, Daten- und Systemarchitektur.', 'Entwicklung von EnvioChat, einem KI-gestützten Assistenten für die intelligente Interaktion mit Plattform-, Geräte- und Sensordaten.', 'Integration von IoT-Geräten, Sensorknoten und Border Routern über ThingsBoard, MQTT und Thread sowie Umsetzung von Echtzeitkommunikation zwischen Backend und Edge-Geräten.', 'Konzeption von Daten-Ingestion-Pipelines, REST APIs und Schnittstellen für interne Sensordaten sowie zur Integration externer Datenquellen.', 'Arbeit mit 60-GHz-FMCW-Radarsensorik, Telemetrie- und Signaldaten sowie Unterstützung bei Analyse, Debugging und Integration von Radar- und Presence-Detection-Systemen.', 'Entwicklung und Betrieb containerisierter Anwendungen mit Docker, PostgreSQL, Grafana und Linux, einschließlich Deployment, Monitoring und Fehleranalyse verteilter Backend- und IoT-Systeme.'] },
  fr: { role: 'Développeur Machine Learning & Infrastructure intelligente', period: 'mai 2026 – aujourd’hui', location: 'Francfort, Allemagne · Hybride', bullets: ['Refonte et extension approfondies du backend d’EnvioTerminal, y compris son architecture d’API, de données et de systèmes.', 'Développement d’EnvioChat, un assistant alimenté par l’IA pour interagir avec les données de plateforme, d’appareils et de capteurs.', 'Intégration d’appareils IoT, de nœuds capteurs et de routeurs frontaliers via ThingsBoard, MQTT et Thread, avec une communication temps réel entre backend et appareils edge.', 'Conception de pipelines d’ingestion, d’API REST et d’interfaces pour les données de capteurs internes et l’intégration de données externes.', 'Travail avec des capteurs radar FMCW 60 GHz et des données de télémétrie et de signal; contribution à l’analyse, au débogage et à l’intégration de systèmes radar et de détection de présence.', 'Développement et exploitation d’applications conteneurisées avec Docker, PostgreSQL, Grafana et Linux, y compris déploiement, supervision et dépannage.'] },
  nl: { role: 'Developer Machine Learning & Slimme Infrastructuur', period: 'mei 2026 – heden', location: 'Frankfurt, Duitsland · Hybride', bullets: ['Grondige herwerking en uitbreiding van de backend van EnvioTerminal, inclusief API-, data- en systeemarchitectuur.', 'Ontwikkeling van EnvioChat, een AI-gestuurde assistent voor intelligente interactie met platform-, apparaat- en sensordata.', 'Integratie van IoT-apparaten, sensorknopen en border routers via ThingsBoard, MQTT en Thread, met realtime communicatie tussen backend en edge-apparaten.', 'Ontwerp van data-ingestiepijplijnen, REST API’s en interfaces voor interne sensordata en externe dataintegratie.', 'Werken met 60-GHz-FMCW-radarsensoren en telemetrie- en signaaldata; ondersteuning bij analyse, debugging en integratie van radar- en aanwezigheidsdetectiesystemen.', 'Ontwikkeling en beheer van gecontaineriseerde toepassingen met Docker, PostgreSQL, Grafana en Linux, inclusief deployment, monitoring en probleemoplossing.'] },
} as const;

const localizedFrost = {
  de: { role: 'Computer-Vision-Ingenieur (Mitglied)', period: 'Juni 2026 - heute', location: 'Frankfurt, Deutschland', bullets: ['Mitarbeit an praxisnahen Robotik- und Computer-Vision-Aufgaben im Frankfurt Robotics Science Team.', 'Unterst\u00fctzung von Python-basiertem Prototyping, Tests und Experimenten f\u00fcr Robotikanwendungen.', 'Arbeit mit Konzepten aus Machine Learning, Perzeption und Robotiksystemintegration.', 'Zusammenarbeit an technischen Probleml\u00f6sungen und Robotik-Projektideen.'] },
  fr: { role: 'Ing\u00e9nieur vision par ordinateur (membre)', period: 'juin 2026 - aujourd\u2019hui', location: 'Francfort, Allemagne', bullets: ['Contribution \u00e0 des t\u00e2ches pratiques de robotique et de vision par ordinateur au sein de Frankfurt Robotics Science Team.', 'Soutien au prototypage, aux tests et \u00e0 l\u2019exp\u00e9rimentation en Python pour des applications robotiques.', 'Travail sur des concepts d\u2019apprentissage automatique, de perception et d\u2019int\u00e9gration de syst\u00e8mes robotiques.', 'Collaboration \u00e0 la r\u00e9solution de probl\u00e8mes techniques et \u00e0 des id\u00e9es de projets robotiques.'] },
  nl: { role: 'Computer Vision Engineer (lid)', period: 'juni 2026 - heden', location: 'Frankfurt, Duitsland', bullets: ['Bijdrage aan praktische robotica- en computer-visiontaken binnen Frankfurt Robotics Science Team.', 'Ondersteuning van Python-gebaseerd prototypen, testen en experimenteren voor robotica-toepassingen.', 'Werken met concepten rond machine learning, perceptie en roboticasysteemintegratie.', 'Samenwerking aan technische probleemoplossing en robotica-projectidee\u00ebn.'] },
} as const;

const localizedEducationUpdate = {
  de: [
    { degree: 'M.Sc. Robotiksystemtechnik', period: 'Sep. 2023 - Sep. 2027', notes: ['Masterstudiengang mit Schwerpunkt Robotik, Machine Learning, Regelungstechnik, Perzeption und intelligenten autonomen Systemen.', 'Kernbereiche: Reinforcement Learning, lernbasierte Regelung, Computer Vision, Sensorintegration, Embedded Systems und Robotiksoftware; erg\u00e4nzt durch Praxis in KI, IoT, Radarsensorik, Echtzeitsystemen und Backend-Integration.'] },
    { degree: 'Bachelor of Technology, Electrical and Electronics Engineering', period: 'M\u00e4rz 2018 - Sep. 2022', notes: ['Note: 8,72/10', 'Bachelorstudium der Electrical and Electronics Engineering mit Grundlagen in elektrischen Maschinen, Energiesystemen, Elektronik, Regelungstechnik, Programmierung und Embedded Systems.', 'Fundierte Basis in elektrischen Systemen, Automatisierung, Regelung und Programmierung als Grundlage f\u00fcr die Spezialisierung auf Robotik, Machine Learning und intelligente Systeme.', 'Abschlussarbeit: Vergleichende Leistungsanalyse eines neuronalen Netzes mit Bayes-Regularisierung und des konventionellen P&O-Algorithmus in einem MPPT-Regler f\u00fcr PV-Systeme.'] },
  ],
  fr: [
    { degree: 'M.Sc. Syst\u00e8mes robotiques', period: 'sept. 2023 - sept. 2027', notes: ['Master ax\u00e9 sur la robotique, l\u2019apprentissage automatique, les syst\u00e8mes de commande, la perception et les syst\u00e8mes autonomes intelligents.', 'Domaines cl\u00e9s : apprentissage par renforcement, commande fond\u00e9e sur l\u2019apprentissage, vision par ordinateur, int\u00e9gration de capteurs, syst\u00e8mes embarqu\u00e9s et logiciels robotiques; compl\u00e9t\u00e9s par une exp\u00e9rience pratique en IA, IoT, radar, temps r\u00e9el et int\u00e9gration backend.'] },
    { degree: 'Bachelor of Technology, Electrical and Electronics Engineering', period: 'mars 2018 - sept. 2022', notes: ['Note : 8,72/10', 'Licence en g\u00e9nie \u00e9lectrique et \u00e9lectronique couvrant les machines \u00e9lectriques, syst\u00e8mes \u00e9nerg\u00e9tiques, \u00e9lectronique, commande, programmation et syst\u00e8mes embarqu\u00e9s.', 'Base solide en syst\u00e8mes \u00e9lectriques, automatisation, commande et programmation, ayant soutenu la sp\u00e9cialisation ult\u00e9rieure en robotique, apprentissage automatique et syst\u00e8mes intelligents.', 'M\u00e9moire : analyse comparative des performances d\u2019un r\u00e9seau neuronal \u00e0 r\u00e9gularisation bay\u00e9sienne et de l\u2019algorithme P&O conventionnel dans un contr\u00f4leur MPPT photovolta\u00efque.'] },
  ],
  nl: [
    { degree: 'M.Sc. Robotische Systeemtechniek', period: 'sep. 2023 - sep. 2027', notes: ['Masteropleiding gericht op robotica, machine learning, regeltechniek, perceptie en intelligente autonome systemen.', 'Kerngebieden zijn reinforcement learning, lerende regeltechniek, computer vision, sensorintegratie, embedded systemen en roboticasoftware, aangevuld met praktijkervaring in AI, IoT, radarsensoren, realtime systemen en backendintegratie.'] },
    { degree: 'Bachelor of Technology, Electrical and Electronics Engineering', period: 'mrt. 2018 - sep. 2022', notes: ['Cijfer: 8,72/10', 'Bacheloropleiding Electrical and Electronics Engineering met elektrische machines, energiesystemen, elektronica, regeltechniek, programmeren en embedded systemen.', 'Een sterke basis in elektrische systemen, automatisering, regeltechniek en programmeren, die de latere specialisatie in robotica, machine learning en intelligente systemen ondersteunde.', 'Scriptie: vergelijkende prestatieanalyse van een neuraal netwerk met Bayesiaanse regularisatie en het conventionele P&O-algoritme in een MPPT-regelaar voor zonnepanelen.'] },
  ],
} as const;

const localizedVolunteering = {
  de: ['IEEE Student Chapter - Content Writer (2019-2020): technische Kommunikation und studentische Ingenieuraktivit\u00e4ten.', 'ASME IEM Student Chapter - Mitglied (2018-2019): studentische technische und interdisziplin\u00e4re Ingenieuraktivit\u00e4ten.'],
  fr: ['IEEE Student Chapter - R\u00e9dacteur de contenu (2019-2020) : communication technique et activit\u00e9s d\u2019ing\u00e9nierie \u00e9tudiantes.', 'ASME IEM Student Chapter - Membre (2018-2019) : activit\u00e9s techniques et interdisciplinaires men\u00e9es par des \u00e9tudiants.'],
  nl: ['IEEE Student Chapter - Content Writer (2019-2020): technische communicatie en technische studentenactiviteiten.', 'ASME IEM Student Chapter - Lid (2018-2019): technische en interdisciplinaire studentenactiviteiten.'],
} as const;

const localizedSkillGroups = {
  de: ['Programmierung', 'Machine Learning & KI', 'Deep Learning & Computer Vision', 'Backend & APIs', 'IoT & Datenplattformen', 'Embedded Systems & Firmware', 'Radar & Sensorik', 'Kommunikation & Protokolle', 'DevOps & Tools', 'Robotik', 'Web & Deployment', 'Weitere Konzepte'],
  fr: ['Programmation', 'Machine Learning & IA', 'Deep Learning & Vision par ordinateur', 'Backend & API', 'IoT & plateformes de données', 'Systèmes embarqués & firmware', 'Radar & capteurs', 'Communication & protocoles', 'DevOps & outils', 'Robotique', 'Web & déploiement', 'Concepts complémentaires'],
  nl: ['Programmeren', 'Machine Learning & AI', 'Deep Learning & Computer Vision', 'Backend & API’s', 'IoT & dataplatformen', 'Embedded systemen & firmware', 'Radar & sensoren', 'Communicatie & protocollen', 'DevOps & tools', 'Robotica', 'Web & deployment', 'Overige concepten'],
} as const;

export function getProfile(locale: Locale) {
  if (locale === 'en') return profile;
  const translation = localizedProfiles[locale];
  return {
    ...profile,
    experience: profile.experience.map((job, index) => ({
      ...job,
      ...(index === 0 ? localizedCvUpdate[locale] : index === 1 ? localizedFrost[locale] : translation.experience[index - 1]),
    })),
    education: profile.education.map((education, index) => ({ ...education, ...localizedEducationUpdate[locale][index] })),
    skills: profile.skills.map((skill, index) => ({ ...skill, group: localizedSkillGroups[locale][index] })),
    languages: translation.languages,
    achievements: [...translation.achievements, ...localizedVolunteering[locale]],
    interests: translation.interests,
  };
}
