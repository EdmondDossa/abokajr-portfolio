import type { Education, Experience, SkillGroup } from "./types";

export const PROFILE = {
  name: "Marie Edmond DOSSA HEGNON",
  shortName: "Edmond DOSSA",
  alias: "ABOKA JR",
  email: "marie.edmond.hegnon@gmail.com",
  phone: "+229 01 98 46 29 82",
  whatsapp: "https://wa.me/22998462982",
  linkedin: "https://www.linkedin.com/in/marie-edmond-dossa-hegnon-037b23333",
  github: "https://github.com/EdmondDossa",
  cv: "/cv/Marie-Edmond-DOSSA-HEGNON-CV.pdf",
};

export const UI = {
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      experience: "Parcours",
      skills: "Compétences",
      contact: "Contact",
    },
    cv: "CV",
    downloadCv: "Télécharger le CV",
    menu: "Menu",
    hero: {
      status: "Ouvert aux opportunités · CDI, freelance, remote",
      titleTop: "Développeur full\u00A0stack",
      titleAccent: "web & mobile.",
      intro:
        "Je conçois et livre des produits complets, de l'API à l'interface : apps Shopify et plugins WordPress vendus à l'international, un SaaS de gestion hôtelière, une app mobile de réservation et une suite de gestion scolaire qui fonctionne sans Internet.",
      rotatingPrefix: "Spécialités :",
      rotating: [
        "APIs NestJS & Laravel",
        "éditeurs visuels Vue 3",
        "apps Shopify",
        "plugins WooCommerce",
        "apps Flutter",
        "logiciels Electron",
      ],
      ctaProjects: "Voir les projets",
      stats: [
        { value: "3+", label: "années d'expérience en entreprise" },
        { value: "5", label: "produits livrés et en ligne" },
        { value: "5 000+", label: "téléchargements sur WordPress.org" },
        { value: "146", label: "tests automatisés sur la suite School" },
      ],
    },
    about: {
      label: "À propos",
      text: "Je construis des produits, pas seulement des écrans. J'analyse le besoin, je conçois l'architecture et les données, je développe l'API et l'interface, puis je déploie et je maintiens. Mon terrain : les éditeurs visuels exigeants, les SaaS métier et les logiciels qui doivent tenir même quand la connexion ne suit pas.",
      facts: [
        { label: "Basé à", value: "Cotonou, Bénin · remote" },
        { label: "Poste actuel", value: "Full stack chez Vertim Coders" },
        { label: "Formation", value: "Master Architecture Logicielle, ESGIS" },
        { label: "Langues", value: "Français, anglais" },
      ],
    },
    projects: {
      label: "Projets sélectionnés",
      title: "Des produits utilisés,",
      titleAccent: "pas des maquettes.",
      intro:
        "Cinq produits en production sur lesquels je travaille, du besoin métier jusqu’à la mise en ligne.",
      index: "Sommaire des projets",
      need: "Le besoin",
      built: "Ce que j’ai construit",
      impact: "En chiffres",
      role: "Rôle",
      period: "Période",
      stack: "Technologies",
      gallery: "Captures d’écran",
      enlarge: "Agrandir la capture",
      close: "Fermer",
      previous: "Capture précédente",
      next: "Capture suivante",
      of: "sur",
    },
    experience: {
      label: "Parcours",
      title: "Expérience",
      education: "Formation",
    },
    skills: { label: "Compétences", title: "Ma boîte à outils" },
    contact: {
      label: "Contact",
      title: "Un poste, une mission,",
      titleAccent: "un produit à lancer ?",
      text: "Écrivez-moi : je réponds personnellement à chaque message.",
      emailMe: "M’écrire",
      copy: "Copier l’adresse",
      copied: "Adresse copiée",
    },
    footer: {
      built: "Conçu et développé par moi · React, Tailwind CSS, Framer Motion",
      top: "Haut de page",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Journey",
      skills: "Skills",
      contact: "Contact",
    },
    cv: "Resume",
    downloadCv: "Download resume (FR)",
    menu: "Menu",
    hero: {
      status: "Open to opportunities · full-time, freelance, remote",
      titleTop: "Full\u00A0stack developer",
      titleAccent: "web & mobile.",
      intro:
        "I design and ship complete products, from the API to the interface: Shopify apps and WordPress plugins sold worldwide, a hotel management SaaS, a mobile booking app and a school management suite that works without an internet connection.",
      rotatingPrefix: "Focus:",
      rotating: [
        "NestJS & Laravel APIs",
        "Vue 3 visual editors",
        "Shopify apps",
        "WooCommerce plugins",
        "Flutter apps",
        "Electron software",
      ],
      ctaProjects: "See the projects",
      stats: [
        { value: "3+", label: "years of professional experience" },
        { value: "5", label: "products shipped and live" },
        { value: "5,000+", label: "downloads on WordPress.org" },
        { value: "146", label: "automated tests on the School suite" },
      ],
    },
    about: {
      label: "About",
      text: "I build products, not just screens. I analyse the need, design the architecture and the data, build the API and the interface, then deploy and maintain. My playground: demanding visual editors, business SaaS and software that keeps working when the connection does not.",
      facts: [
        { label: "Based in", value: "Cotonou, Benin · remote" },
        { label: "Currently", value: "Full stack at Vertim Coders" },
        {
          label: "Education",
          value: "Master's in Software Architecture, ESGIS",
        },
        { label: "Languages", value: "French, English" },
      ],
    },
    projects: {
      label: "Selected work",
      title: "Products people use,",
      titleAccent: "not mockups.",
      intro:
        "Five products in production that I work on, from the business need all the way to launch.",
      index: "Project index",
      need: "The need",
      built: "What I built",
      impact: "By the numbers",
      role: "Role",
      period: "Period",
      stack: "Technologies",
      gallery: "Screenshots",
      enlarge: "Enlarge screenshot",
      close: "Close",
      previous: "Previous screenshot",
      next: "Next screenshot",
      of: "of",
    },
    experience: {
      label: "Journey",
      title: "Experience",
      education: "Education",
    },
    skills: { label: "Skills", title: "My toolbox" },
    contact: {
      label: "Contact",
      title: "A role, a contract,",
      titleAccent: "a product to launch?",
      text: "Drop me a line: I personally answer every message.",
      emailMe: "Email me",
      copy: "Copy address",
      copied: "Address copied",
    },
    footer: {
      built: "Designed and built by me · React, Tailwind CSS, Framer Motion",
      top: "Back to top",
    },
  },
} as const;

export const EXPERIENCES: Experience[] = [
  {
    company: "Vertim Coders",
    url: "https://vertimcoders.com",
    role: {
      fr: "Développeur full stack web & mobile",
      en: "Full stack web & mobile developer",
    },
    period: { fr: "07/2023 – aujourd’hui", en: "07/2023 – present" },
    location: { fr: "Cotonou, Bénin", en: "Cotonou, Benin" },
    summary: {
      fr: "Éditeur d’apps Shopify et de plugins WordPress vendus à l’international.",
      en: "Publisher of Shopify apps and WordPress plugins sold worldwide.",
    },
    highlights: {
      fr: [
        "Développe et maintient les configurateurs d’enseignes de l’entreprise, All Sign Customizer et Neon Channel Product Customizer, publiés sur le Shopify App Store et WordPress.org.",
        "Conçoit des éditeurs visuels en Vue 3 et Fabric.js : rendu en temps réel, calcul de prix, export de fichiers de production.",
        "Intègre les plateformes e-commerce : API REST WordPress, hooks WooCommerce, app Shopify en Remix avec Prisma et PostgreSQL.",
        "Participe à l’analyse des besoins clients, au cahier des charges et à l’optimisation des performances.",
      ],
      en: [
        "Build and maintain the company’s sign configurators, All Sign Customizer and Neon Channel Product Customizer, published on the Shopify App Store and WordPress.org.",
        "Design Vue 3 + Fabric.js visual editors: real-time rendering, price calculation, production file export.",
        "Integrate e-commerce platforms: WordPress REST API, WooCommerce hooks, Remix Shopify app with Prisma and PostgreSQL.",
        "Take part in client requirements analysis, specifications and performance optimisation.",
      ],
    },
  },
  {
    company: "Freelance",
    role: {
      fr: "Développeur full stack indépendant",
      en: "Independent full stack developer",
    },
    period: { fr: "02/2025 – aujourd’hui", en: "02/2025 – present" },
    location: { fr: "Remote", en: "Remote" },
    summary: {
      fr: "Produits menés en parallèle, seul ou en petite équipe.",
      en: "Products run alongside my job, solo or in small teams.",
    },
    highlights: {
      fr: [
        "Souaba One : développeur backend principal de l’API NestJS du SaaS hôtelier.",
        "TonBookTout : application mobile Flutter et API Laravel de prise de rendez-vous.",
        "School Suite : conception et développement de trois applications de gestion scolaire.",
      ],
      en: [
        "Souaba One: lead backend developer of the hotel SaaS NestJS API.",
        "TonBookTout: Flutter mobile app and Laravel booking API.",
        "School Suite: design and development of three school management applications.",
      ],
    },
  },
  {
    company: "41 DEVS",
    role: { fr: "Développeur web front-end", en: "Front-end web developer" },
    period: { fr: "03/2023 – 06/2023", en: "03/2023 – 06/2023" },
    location: { fr: "Cotonou, Bénin", en: "Cotonou, Benin" },
    summary: {
      fr: "Première expérience professionnelle en développement web.",
      en: "First professional role in web development.",
    },
    highlights: {
      fr: [
        "Intégration d’interfaces web en Vue.js et Tailwind CSS à partir de maquettes.",
        "Premiers pas en développement mobile avec Flutter.",
      ],
      en: [
        "Built web interfaces from mockups with Vue.js and Tailwind CSS.",
        "First steps in mobile development with Flutter.",
      ],
    },
  },
];

export const EDUCATION: Education[] = [
  {
    degree: {
      fr: "Master en Architecture Logicielle",
      en: "Master's in Software Architecture",
    },
    school: "ESGIS Bénin",
    period: "2024 – 2026",
  },
  {
    degree: {
      fr: "Licence professionnelle en Architecture Logicielle",
      en: "Bachelor's in Software Architecture",
    },
    school: "ESGIS Bénin",
    period: "2020 – 2023",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: { fr: "Langages", en: "Languages" },
    skills: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "Dart",
      "SQL",
      "Java",
      "Python",
    ],
  },
  {
    name: { fr: "Front-end", en: "Front-end" },
    skills: [
      "React",
      "Next.js",
      "Vue 3",
      "Tailwind CSS",
      "Fabric.js (canvas)",
      "Framer Motion",
    ],
  },
  {
    name: { fr: "Back-end & API", en: "Back-end & APIs" },
    skills: [
      "NestJS",
      "Node.js",
      "Laravel",
      "AdonisJS",
      "REST",
      "WebSockets",
      "Prisma",
      "Drizzle",
      "Knex",
    ],
  },
  {
    name: { fr: "Mobile & desktop", en: "Mobile & desktop" },
    skills: ["Flutter", "React Native (Expo)", "Electron"],
  },
  {
    name: { fr: "E-commerce & CMS", en: "E-commerce & CMS" },
    skills: [
      "Apps Shopify (Remix, Polaris)",
      "Plugins WordPress",
      "WooCommerce",
    ],
  },
  {
    name: { fr: "Bases de données", en: "Databases" },
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"],
  },
  {
    name: { fr: "DevOps & qualité", en: "DevOps & quality" },
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "Firebase",
      "Tests automatisés",
      "Swagger",
    ],
  },
];

export const MARQUEE = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue 3",
  "NestJS",
  "Laravel",
  "Flutter",
  "React Native",
  "Electron",
  "Shopify",
  "WooCommerce",
  "PostgreSQL",
  "Prisma",
  "Docker",
];
