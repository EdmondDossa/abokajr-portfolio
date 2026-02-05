
import { Project, Experience, Education, SkillCategory } from './types';

export const TRANSLATIONS = {
  fr: {
    nav: { about: "Profil", experience: "Parcours", projects: "Arsenal", contact: "Lien Neural", deploy: "DÉPLOYER ABJ" },
    hero: {
      status: "ABJ PROTOCOL v3.0.0 - PRÊT AU COMBAT",
      title1: "ARCHITECTE",
      title2: "NUMÉRIQUE",
      subtitle: "Marie Edmond (aboka jr) développe des solutions web et mobiles de haute précision. Code propre. Performance absolue.",
      cta: "LANCER LA MISSION"
    },
    about: {
      label: "Spécifications de l'Unité",
      title: "Identité : Edmond",
      quote: '"Le code est mon épée, l\'architecture est mon bouclier. Je ne construis pas que des sites, je bâtis des empires."',
      expLabel: "Niveau d'XP",
      baseLabel: "Secteur",
      langLabel: "Systèmes de Langue",
      lifestyleLabel: "Modules de Loisirs"
    },
    boot: [
      "Initialisation du système ABJ...",
      "Chargement des modules de combat...",
      "Synchronisation des serveurs de Cotonou...",
      "Optimisation de la mémoire vive...",
      "Audio Engine: ACTIVÉ",
      "BIENVENUE, COMMANDANT."
    ]
  },
  en: {
    nav: { about: "Profile", experience: "Journey", projects: "Arsenal", contact: "Neural Link", deploy: "DEPLOY ABJ" },
    hero: {
      status: "ABJ PROTOCOL v3.0.0 - COMBAT READY",
      title1: "DIGITAL",
      title2: "ARCHITECT",
      subtitle: "Marie Edmond (aboka jr) develops high-precision web and mobile solutions. Clean code. Absolute performance.",
      cta: "START MISSION"
    },
    about: {
      label: "Unit Specifications",
      title: "Identity: Edmond",
      quote: '"Code is my sword, architecture is my shield. I don\'t just build websites, I build empires."',
      expLabel: "XP Level",
      baseLabel: "Sector",
      langLabel: "Language Systems",
      lifestyleLabel: "Hobby Modules"
    },
    boot: [
      "Initializing ABJ System...",
      "Loading combat modules...",
      "Syncing Cotonou servers...",
      "Optimizing RAM...",
      "Audio Engine: ON",
      "WELCOME, COMMANDER."
    ]
  }
};

export const PERSONAL_INFO = {
  name: "Marie Edmond DOSSA HEGNON",
  title: "Web & Mobile Developer",
  email: "marie.edmond.hegnon@gmail.com",
  phone: "+229 0198462982",
  location: "Cotonou, Benin",
  linkedin: "linkedin.com/in/marie-edmond-dossa-hegnon-037b23333",
  github: "github.com/edmondDossa",
  portfolio: "abokajr-portfolio.vercel.app"
};

export const PROJECTS: Project[] = [
  {
    title: "Schedula",
    description: "Solution complète de prise de rendez-vous intelligente pour WordPress. Automatisation totale des calendriers.",
    period: "06/2025 – 08/2025",
    tech: ["WordPress", "PHP", "VueJS"],
    links: [{ label: "WP Plugin", url: "https://wordpress.org/plugins/schedula-smart-appointment-booking/" }],
    details: ["Réservation 24/7", "Gestion d'horaires", "Rappels automatisés"]
  },
  {
    title: "All Sign Options",
    description: "Le configurateur ultime de signalétique pour les e-commerçants (WordPress & Shopify).",
    period: "02/2024 – Present",
    tech: ["VueJS", "REST API", "WooCommerce", "Shopify"],
    links: [
      { label: "WordPress", url: "https://wordpress.org/plugins/all-signs-options-free/" },
      { label: "Shopify", url: "https://apps.shopify.com/all-signs-options" }
    ],
    details: ["Visualisation interactive", "Calcul dynamique", "Intégration multi-plateforme"]
  },
  {
    title: "Signs Designer",
    description: "Plateforme vitrine et interactive pour la présentation de produits de signalétique personnalisés.",
    period: "11/2023 – Present",
    tech: ["Web Design", "Frontend UX"],
    links: [{ label: "Site Officiel", url: "https://signsdesigner.us/" }],
    details: ["Interface immersive", "Performance optimisée"]
  },
  {
    title: "Neon Channel Customizer",
    description: "Plugin spécialisé dans la personnalisation de néons pour les boutiques en ligne.",
    period: "07/2023 – Present",
    tech: ["VueJS", "WordPress REST API"],
    links: [{ label: "WordPress", url: "https://wordpress.org/plugins/neon-channel-product-customizer-free/" }],
    details: ["Effets lumineux temps réel", "Gestion complexe des commandes"]
  },
  {
    title: "SOUABA",
    description: "Système de réservation de résidences et chambres d'hôtels haute performance (En développement).",
    period: "07/2025 – Present",
    tech: ["NestJS", "React", "Next.js"],
    links: [{ label: "Version Test", url: "https://souaba-stage-app.vercel.app/" }],
    details: ["Backend NestJS scalable", "Expérience utilisateur fluide"]
  },
  {
    title: "TonBookTout",
    description: "Application mobile innovante de gestion de rendez-vous pour salons de coiffure et beauté.",
    period: "08/2025 – 12/2026",
    tech: ["React Native", "Laravel"],
    details: ["Paiements intégrés", "Notifications Push", "Gestion de staff"]
  },
  {
    title: "School Manager",
    description: "Application Desktop robuste pour la gestion des notes et bulletins scolaires.",
    period: "07/2025 – 08/2026",
    tech: ["ElectronJS", "NodeJS"],
    details: ["Alternative locale EDUCMASTER", "Gestion base de données locale", "Me contacter pour test"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: "Mobile Ops", skills: ["Flutter", "React Native"] },
  { name: "Frameworks / Logic", skills: ["PHP", "Java", "Python", "JavaScript", "VueJS", "ReactJS", "NestJS", "NodeJS", "AdonisJS"] },
  { name: "CMS Architect", skills: ["WordPress (plugin dev)", "Shopify"] },
  { name: "Data Streams", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { name: "DevOps & Core", skills: ["Git", "Docker", "ElectronJS"] }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Vertim Coders",
    role: "Full Stack Web & Mobile Developer",
    period: "07/2023 – Present",
    location: "Cotonou, Benin",
    highlights: ["Solution Architect", "API Design", "Performance Tuning"]
  },
  {
    company: "41 DEVS",
    role: "Frontend Web Developer",
    period: "03/2023 – 06/2023",
    location: "Cotonou, Benin",
    highlights: ["VueJS Expert", "Tailwind Master", "UI Interaction"]
  }
];

export const EDUCATION: Education[] = [
  { degree: "Master en Architecture Logicielle", school: "ESGIS Benin", period: "2024 – 2025", location: "Cotonou" },
  { degree: "Licence en Architecture Logicielle", school: "ESGIS Benin", period: "2020 – 2023", location: "Cotonou" }
];

export const LANGUAGES = ["French", "English"];
export const INTERESTS = ["Reading", "Sports", "Theater"];
