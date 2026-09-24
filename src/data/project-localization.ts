import type { Locale } from './profile';

export type ProjectTranslation = {
  title: string;
  summary: string;
  context?: string;
  period?: string;
  back: string;
  overview: string;
  overviewText: string;
  work: string;
  bullets: string[];
  tools?: string;
};

type LocalizedProjects = Record<Exclude<Locale, 'en'>, Record<string, ProjectTranslation>>;

export const projectTranslations: LocalizedProjects = {
  de: {
    'unity-avatar-arduino': {
      title: 'Drahtlos gesteuerter Unity-Avatar mit Arduino',
      summary: 'Ein gestengesteuerter 3D-Avatar, der in Echtzeit durch IMU- und Flexsensor-Daten eines WLAN-fahigen Arduino-Handschuhs gesteuert wird.',
      context: 'RWTH Aachen', back: 'Projekte', overview: 'Uberblick', overviewText: 'Ein gestengesteuerter 3D-Avatar mit Echtzeit-Sensordaten, der Arduino zunachst seriell und spater drahtlos mit Unity verbindet.', work: 'Mein Beitrag',
      bullets: ['WLAN-fahigen Arduino-Handschuh mit IMU- und Flexsensoren fur Echtzeit-Gestenerfassung gebaut.', 'Handschuh mit ESP32-basierter drahtloser Kommunikation in Unity 3D integriert.', 'Bewegungszuordnung und Avatarsteuerung in C++ (Firmware) und C# (Unity) programmiert.'],
    },
    'gesture-controlled-car': {
      title: 'Gestengesteuertes Fahrzeug', summary: 'Ein Arduino-basiertes Fahrzeug, das mit Handgesten uber Beschleunigungs- und IMU-Sensoren, Motortreiber und Funkmodule gesteuert wird.', context: 'Persoenliches Projekt', back: 'Projekte', overview: 'Uberblick', overviewText: 'Ein in C++ programmiertes Arduino-System zur gestenbasierten Fahrzeugsteuerung.', work: 'Mein Beitrag',
      bullets: ['Beschleunigungs- und IMU-Sensoren, Motortreiber und Funkmodule zu einem funktionsfahigen Prototyp kombiniert.', 'Hardware-Prototyping und Embedded-Programmierung durchgangig umgesetzt.'],
    },
    'flexfleet-ev-charging': {
      title: 'Hybride ML-basierte Optimierung des EV-Ladens', summary: 'Regelbasierte Steuerung und ML-gestutzte Preisprognosen zur dynamischen Minimierung von Ladekosten im deutschen Stromnetz.', period: '2024 - 2025', context: 'ISEA - RWTH Aachen (Flexfleet)', back: 'Projekte', overview: 'Uberblick', overviewText: 'Projekt als wissenschaftliche Hilfskraft am Institut fur Stromrichtertechnik und Elektrische Antriebe (ISEA), Teil des E.ON Energy Research Center, im Flexfleet-Projekt.', work: 'Mein Beitrag',
      bullets: ['Regelbasierten Steueralgorithmus fur EV-Laden entwickelt und mit realen Ladedaten bewertet.', 'Automatisierte, skalierbare Datenpipeline fur mehr als 1.000 EV-Ladedatensatze aus Deutschland aufgebaut.', 'Prototyp eines Regelalgorithmus entwickelt, der die geschatzten Ladekosten in der Simulation um 18 % reduziert.', 'ML-gestutzte Pipelines mit Scikit-learn, TensorFlow, Statsmodels und Pyomo zur Prognose von Netzpreisen und dynamischen Kostenoptimierung entwickelt.', 'Arbeit an einer wissenschaftlichen Publikation zu einem Reinforcement-Learning-Modell mit synthetischen und historischen Daten.'],
      tools: 'Python, Pandas, NumPy, Jupyter, Scikit-learn, Git, Docker, Flask, SteVe API.',
    },
    'recyclable-3d-printer': {
      title: 'Intelligenter, recycelbarer 3D-Drucker', summary: 'Ein nachhaltiger, kostengunstiger 3D-Drucker aus recycelten Komponenten und wiederverwertbaren Polymeren. Gewinner der IEM Smart Maker Faire 2019.', period: '2019', context: 'IEM Kolkata - Ausgezeichnet', back: 'Projekte', overview: 'Uberblick', overviewText: 'Nachhaltigen, kostengunstigen 3D-Drucker aus recycelten Komponenten und wiederverwertbaren Polymeren (PLA, PETG) entwickelt und gebaut.', work: 'Ergebnis', bullets: ['30 % geringere Prototyping-Kosten erreicht.', 'IEM Smart Maker Faire 2019 gewonnen.'],
    },
  },
  fr: {
    'unity-avatar-arduino': {
      title: 'Avatar Unity controle sans fil avec Arduino', summary: 'Un avatar 3D controle par gestes, pilote en temps reel par les donnees IMU et de capteurs flexibles d un gant Arduino Wi-Fi.', context: 'RWTH Aachen', back: 'Projets', overview: 'Vue d ensemble', overviewText: 'Un avatar 3D controle par gestes utilisant des donnees de capteurs en temps reel, reliant Arduino a Unity via une liaison serie puis sans fil.', work: 'Ma contribution', bullets: ['Gant Arduino Wi-Fi avec IMU et capteurs flexibles pour la capture de gestes en temps reel.', 'Integration du gant dans Unity 3D via une communication sans fil basee sur ESP32.', 'Programmation du mapping des mouvements et du controle de l avatar en C++ (firmware) et C# (Unity).'],
    },
    'gesture-controlled-car': {
      title: 'Voiture controlee par gestes', summary: 'Un vehicule Arduino dirige par gestes de la main avec capteurs accelerometre/IMU, pilotes moteurs et modules sans fil.', context: 'Projet personnel', back: 'Projets', overview: 'Vue d ensemble', overviewText: 'Un systeme Arduino programme en C++ pour le controle d un vehicule par gestes.', work: 'Ma contribution', bullets: ['Assemblage de capteurs accelerometre/IMU, pilotes moteurs et modules sans fil dans un prototype fonctionnel.', 'Prise en charge complete du prototypage materiel et de la programmation embarquee.'],
    },
    'flexfleet-ev-charging': {
      title: 'Optimisation hybride de la recharge EV par ML', summary: 'Commande basee sur des regles et prevision des prix par ML pour minimiser dynamiquement les couts de recharge sur le reseau allemand.', period: '2024 - 2025', context: 'ISEA - RWTH Aachen (Flexfleet)', back: 'Projets', overview: 'Vue d ensemble', overviewText: 'Projet d assistant de recherche a l Institut pour l electronique de puissance et les entrainements electriques (ISEA), au sein du E.ON Energy Research Center et du projet Flexfleet.', work: 'Ma contribution', bullets: ['Developpement d un algorithme de commande base sur des regles pour la recharge EV, evalue sur des donnees de recharge reelles.', 'Creation d une pipeline de donnees automatisee et evolutive pour plus de 1 000 jeux de donnees de recharge EV en Allemagne.', 'Prototype d un algorithme reduisant de 18 % les couts de recharge estimes en simulation.', 'Developpement de pipelines ML avec Scikit-learn, TensorFlow, Statsmodels et Pyomo pour prevoir les prix et optimiser les couts dynamiquement.', 'Preparation d un article sur un modele de reinforcement learning entraine sur des donnees synthetiques et historiques.'], tools: 'Python, Pandas, NumPy, Jupyter, Scikit-learn, Git, Docker, Flask, SteVe API.',
    },
    'recyclable-3d-printer': {
      title: 'Imprimante 3D intelligente et recyclable', summary: 'Une imprimante 3D durable et economique construite avec des composants recycles et des polymeres recyclables. Laur eat de l IEM Smart Maker Faire 2019.', period: '2019', context: 'IEM Kolkata - Prime', back: 'Projets', overview: 'Vue d ensemble', overviewText: 'Conception et fabrication d une imprimante 3D durable et economique a partir de composants recycles et de polymeres recyclables (PLA, PETG).', work: 'Resultat', bullets: ['Reduction de 30 % des couts de prototypage.', 'Victoire a l IEM Smart Maker Faire 2019.'],
    },
  },
  nl: {
    'unity-avatar-arduino': {
      title: 'Draadloos bestuurbare Unity-avatar met Arduino', summary: 'Een gebarenbestuurde 3D-avatar die in realtime wordt aangestuurd door IMU- en flexsensordata van een Wi-Fi Arduino-handschoen.', context: 'RWTH Aachen', back: 'Projecten', overview: 'Overzicht', overviewText: 'Een gebarenbestuurde 3D-avatar met realtime sensordata, die Arduino via een seriele en later draadloze verbinding met Unity integreert.', work: 'Mijn bijdrage', bullets: ['Wi-Fi Arduino-handschoen met IMU- en flexsensoren voor realtime gebarenregistratie gebouwd.', 'Handschoen met ESP32-gebaseerde draadloze communicatie in Unity 3D geintegreerd.', 'Bewegingsmapping en avatarbesturing geprogrammeerd in C++ (firmware) en C# (Unity).'],
    },
    'gesture-controlled-car': {
      title: 'Gebarenbestuurde auto', summary: 'Een Arduino-voertuig dat met handgebaren wordt bestuurd via versnellingsmeter/IMU-sensoren, motordrivers en draadloze modules.', context: 'Persoonlijk project', back: 'Projecten', overview: 'Overzicht', overviewText: 'Een in C++ geprogrammeerd Arduino-systeem voor gebarenbesturing van een voertuig.', work: 'Mijn bijdrage', bullets: ['Versnellingsmeter/IMU-sensoren, motordrivers en draadloze modules samengebracht in een werkend prototype.', 'Hardwareprototyping en embedded-programmering van begin tot eind uitgevoerd.'],
    },
    'flexfleet-ev-charging': {
      title: 'Hybride ML-gebaseerde optimalisatie van EV-laden', summary: 'Regelgebaseerde besturing en ML-gestuurde prijsvoorspelling om laadkosten op het Duitse net dynamisch te minimaliseren.', period: '2024 - 2025', context: 'ISEA - RWTH Aachen (Flexfleet)', back: 'Projecten', overview: 'Overzicht', overviewText: 'Onderzoeksassistentproject bij het Institute for Power Electronics and Electrical Drives (ISEA), onderdeel van het E.ON Energy Research Center, binnen het Flexfleet-project.', work: 'Mijn bijdrage', bullets: ['Regelgebaseerd besturingsalgoritme voor EV-laden ontwikkeld en beoordeeld met echte laaddata.', 'Geautomatiseerde, schaalbare datapipeline gebouwd voor meer dan 1.000 EV-laaddatasets uit Duitsland.', 'Prototype besturingsalgoritme ontwikkeld dat de geschatte laadkosten in simulatie met 18 % verlaagt.', 'ML-pipelines met Scikit-learn, TensorFlow, Statsmodels en Pyomo ontwikkeld voor prijsvoorspelling en dynamische kostenoptimalisatie.', 'Werkt aan een onderzoeksartikel over een reinforcement-learningmodel getraind op synthetische en historische data.'], tools: 'Python, Pandas, NumPy, Jupyter, Scikit-learn, Git, Docker, Flask, SteVe API.',
    },
    'recyclable-3d-printer': {
      title: 'Slimme, recyclebare 3D-printer', summary: 'Een duurzame, goedkope 3D-printer van gerecyclede componenten en recyclebare polymeren. Winnaar van de IEM Smart Maker Faire 2019.', period: '2019', context: 'IEM Kolkata - Bekroond', back: 'Projecten', overview: 'Overzicht', overviewText: 'Duurzame, goedkope 3D-printer ontworpen en gebouwd met gerecyclede componenten en recyclebare polymeren (PLA, PETG).', work: 'Resultaat', bullets: ['30 % lagere prototypingkosten bereikt.', 'IEM Smart Maker Faire 2019 gewonnen.'],
    },
  },
};

export function translatedProject<T extends { id: string; data: { title: string; summary: string; context?: string; period?: string } }>(project: T, locale: Locale) {
  const translation = locale === 'en' ? undefined : projectTranslations[locale][project.id];
  return { ...project.data, ...translation };
}
