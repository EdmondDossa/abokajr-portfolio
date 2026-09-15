import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'school-suite',
    title: 'School Suite',
    brand: '#2f6bff',
    kind: { fr: 'Logiciel de gestion scolaire · Desktop + Cloud', en: 'School management software · Desktop + Cloud' },
    period: { fr: '02/2025 – aujourd’hui', en: '02/2025 – present' },
    year: '2025',
    role: { fr: 'Co-concepteur et développeur principal, en binôme', en: 'Co-designer and lead developer, in a team of two' },
    tagline: {
      fr: 'Gérer une école, sa comptabilité et ses notes, même sans Internet.',
      en: 'Run a school, its accounts and its grades, even offline.',
    },
    context: {
      fr: 'Une école a besoin d’outils qui tournent sur ses propres postes, même quand la connexion est instable, tout en ouvrant certaines tâches au web : saisie des notes par les professeurs, sauvegardes, licences. La suite réunit trois applications qui partagent les mêmes élèves, classes et années scolaires, pensées pour les écoles du Bénin.',
      en: 'A school needs tools that run on its own computers, even with an unreliable connection, while opening some tasks to the web: teachers entering grades, backups, licences. The suite brings together three applications sharing the same students, classes and school years, designed for schools in Benin.',
    },
    highlights: {
      fr: [
        'Offline-first : SQLite embarqué, synchronisation vers le cloud toutes les 3 h et sauvegarde quotidienne vérifiée par SHA-256.',
        'Licences signées Ed25519, vérifiées hors ligne : activation par poste, poste maître, suspension et prolongation depuis une console.',
        'Comptabilité SYSCOHADA en partie double : triggers SQLite qui rendent les pièces non modifiables, numérotation continue, annulation par extourne.',
        'Notes saisies par les professeurs sur téléphone, validées dans School Manager avec un journal de chaque modification.',
        'Bulletins PDF, classements, import Excel, mises à jour automatiques et installateurs Windows, Linux et macOS.',
      ],
      en: [
        'Offline-first: embedded SQLite, cloud sync every 3 hours and a daily backup verified with SHA-256.',
        'Ed25519-signed licences checked offline: per-workstation activation, master workstation, suspension and renewal from a console.',
        'SYSCOHADA double-entry accounting: SQLite triggers make vouchers immutable, gapless numbering, reversal entries.',
        'Grades entered by teachers on their phone and approved in School Manager, with a log of every change.',
        'PDF report cards, rankings, Excel import, automatic updates and Windows, Linux and macOS installers.',
      ],
    },
    metrics: [
      { value: '3', label: { fr: 'applications connectées', en: 'connected apps' } },
      { value: '146', label: { fr: 'tests automatisés', en: 'automated tests' } },
      { value: '142', label: { fr: 'commits', en: 'commits' } },
    ],
    stack: ['Electron', 'React 19', 'SQLite · Knex', 'Next.js 16', 'Drizzle ORM', 'PostgreSQL', 'Vercel Blob', 'Tailwind CSS'],
    links: [{ label: { fr: 'Site et téléchargements', en: 'Website & downloads' }, url: 'https://school-cloud-abj.vercel.app' }],
    gallery: [
      {
        src: '/projects/school-suite/manager-dashboard',
        device: 'desktop',
        frame: 'School Manager',
        label: { fr: 'Tableau de bord', en: 'Dashboard' },
        caption: {
          fr: 'School Manager : effectifs, taux de réussite par promotion et actions rapides.',
          en: 'School Manager: headcount, pass rate per year group and quick actions.',
        },
      },
      {
        src: '/projects/school-suite/manager-notes',
        device: 'desktop',
        frame: 'School Manager',
        label: { fr: 'Saisie des notes', en: 'Grade entry' },
        caption: {
          fr: 'Grille de saisie par classe et par matière, moyennes coefficientées calculées en direct.',
          en: 'Grade grid per class and subject, with weighted averages computed live.',
        },
      },
      {
        src: '/projects/school-suite/manager-bulletin',
        device: 'desktop',
        frame: 'School Manager',
        label: { fr: 'Bulletins', en: 'Report cards' },
        caption: {
          fr: 'Bulletin trimestriel généré en PDF, prêt à imprimer pour toute la classe.',
          en: 'Term report card generated as a PDF, ready to print for the whole class.',
        },
      },
      {
        src: '/projects/school-suite/compta-dashboard',
        device: 'desktop',
        frame: 'School Compta',
        label: { fr: 'Comptabilité', en: 'Accounting' },
        caption: {
          fr: 'School Compta : encaissements, impayés, trésorerie et dépenses en FCFA.',
          en: 'School Compta: payments received, outstanding fees, cash and expenses in CFA francs.',
        },
      },
      {
        src: '/projects/school-suite/cloud-direction',
        device: 'desktop',
        frame: 'school-cloud-abj.vercel.app',
        label: { fr: 'School Cloud', en: 'School Cloud' },
        caption: {
          fr: 'Espace direction en ligne : synchronisation, licences et notes des professeurs à valider.',
          en: 'Online management area: sync status, licences and teacher grades awaiting approval.',
        },
      },
    ],
    companion: {
      src: '/projects/school-suite/cloud-teacher',
      device: 'phone',
      label: { fr: 'Espace professeur', en: 'Teacher area' },
      caption: { fr: 'Saisie des notes par un professeur sur téléphone', en: 'A teacher entering grades on a phone' },
    },
  },
  {
    id: 'all-sign-customizer',
    title: 'All Sign Customizer',
    brand: '#10b981',
    kind: { fr: 'App Shopify & plugin WooCommerce', en: 'Shopify app & WooCommerce plugin' },
    period: { fr: '02/2024 – aujourd’hui · Vertim Coders', en: '02/2024 – present · Vertim Coders' },
    year: '2024',
    role: { fr: 'Développeur full stack dans l’équipe produit', en: 'Full stack developer on the product team' },
    tagline: {
      fr: 'Vendre des enseignes sur mesure, du design en ligne au fichier de fabrication.',
      en: 'Sell custom signs, from online design to the production file.',
    },
    context: {
      fr: 'Anciennement All Sign Options. Une boutique d’enseignes reçoit des demandes toutes différentes : taille, matériau, texte, éclairage. Sans outil, chaque devis se calcule à la main et chaque fichier se redessine. L’app laisse le client concevoir son enseigne (néon, LED, lettres découpées, panneaux, bannières, stickers) avec un prix juste, et livre à l’atelier un fichier exploitable.',
      en: 'Formerly All Sign Options. A sign shop receives requests that are all different: size, material, text, lighting. Without tooling, every quote is worked out by hand and every file is redrawn. The app lets customers design their sign (neon, LED, channel letters, panels, banners, stickers) at a fair price, and hands the workshop a usable file.',
    },
    highlights: {
      fr: [
        'Éditeur visuel en Vue 3 et Fabric.js : formes, textes multiples, polices Google et TTF, import d’image avec détourage automatique.',
        'Tarification dynamique selon les lettres, les dimensions, la surface, le volume et le matériau. Le mode « preset » verrouille ce que le client peut modifier.',
        'Fichiers de production SVG, PDF, PNG et JPEG générés automatiquement et joints à la commande.',
        'Un même moteur, deux intégrations : app Shopify (Remix, Polaris, Prisma, PostgreSQL, extensions de thème et d’admin) et plugin WooCommerce.',
      ],
      en: [
        'Vue 3 + Fabric.js visual editor: shapes, multiple text areas, Google and TTF fonts, image upload with automatic background removal.',
        'Dynamic pricing by letters, dimensions, area, volume and material. Preset mode locks what customers can edit.',
        'SVG, PDF, PNG and JPEG production files generated automatically and attached to the order.',
        'One engine, two integrations: a Shopify app (Remix, Polaris, Prisma, PostgreSQL, theme and admin extensions) and a WooCommerce plugin.',
      ],
    },
    metrics: [
      { value: 'Shopify', label: { fr: 'App Store, depuis 09/2024', en: 'App Store, since 09/2024' } },
      { value: '1 500+', label: { fr: 'téléchargements WordPress.org', en: 'WordPress.org downloads' } },
    ],
    stack: ['Vue 3', 'Fabric.js', 'opentype.js', 'Remix', 'Shopify Polaris', 'Prisma', 'PostgreSQL', 'PHP', 'WooCommerce'],
    links: [
      { label: { fr: 'Site officiel', en: 'Website' }, url: 'https://allsigncustomizer.com' },
      { label: { fr: 'Shopify App Store', en: 'Shopify App Store' }, url: 'https://apps.shopify.com/all-signs-options' },
      { label: { fr: 'WordPress.org', en: 'WordPress.org' }, url: 'https://wordpress.org/plugins/all-signs-customizer-for-woocommerce/' },
    ],
    gallery: [
      {
        src: '/projects/all-sign-customizer/editor',
        device: 'desktop',
        frame: 'demos.signsdesigner.us',
        label: { fr: 'Éditeur', en: 'Editor' },
        caption: {
          fr: 'L’éditeur en action : forme, couleurs, texte, éclairage et fixations, avec le prix mis à jour en direct.',
          en: 'The editor in action: shape, colours, text, lighting and fixings, with the price updated live.',
        },
      },
      {
        src: '/projects/all-sign-customizer/home',
        device: 'desktop',
        frame: 'allsigncustomizer.com',
        label: { fr: 'Site produit', en: 'Product site' },
        caption: {
          fr: 'allsigncustomizer.com, la vitrine de l’app publiée sur le Shopify App Store.',
          en: 'allsigncustomizer.com, the showcase of the app published on the Shopify App Store.',
        },
      },
      {
        src: '/projects/all-sign-customizer/pricing',
        device: 'desktop',
        frame: 'allsigncustomizer.com',
        label: { fr: 'Tarification', en: 'Pricing engine' },
        caption: {
          fr: 'Les modèles de prix : par lettre, dimensions, surface, volume, longueur de matériau et options.',
          en: 'Pricing models: per letter, dimensions, area, volume, material length and options.',
        },
      },
      {
        src: '/projects/all-sign-customizer/files',
        device: 'desktop',
        frame: 'allsigncustomizer.com',
        label: { fr: 'Fichiers de production', en: 'Production files' },
        caption: {
          fr: 'SVG, PDF, PNG et récapitulatif du design joints automatiquement à chaque commande.',
          en: 'SVG, PDF, PNG and a design recap attached automatically to every order.',
        },
      },
    ],
  },
  {
    id: 'signs-designer',
    title: 'Signs Designer',
    brand: '#a855f7',
    kind: { fr: 'Plateforme produit · Configurateur néon WooCommerce', en: 'Product platform · WooCommerce neon configurator' },
    period: { fr: '07/2023 – aujourd’hui · Vertim Coders', en: '07/2023 – present · Vertim Coders' },
    year: '2023',
    role: { fr: 'Principal contributeur du configurateur néon, développement du site', en: 'Main contributor to the neon configurator, website development' },
    tagline: {
      fr: 'Des néons et des lettres lumineuses configurés en temps réel sur WooCommerce.',
      en: 'Neon signs and channel letters configured in real time on WooCommerce.',
    },
    context: {
      fr: 'Un néon ou une lettre lumineuse se fabrique à la commande : le client veut voir le rendu, connaître les dimensions exactes et le prix avant d’acheter. Signs Designer est la plateforme où Vertim Coders présente ses configurateurs. Son produit phare, Neon Channel Product Customizer, devait produire un aperçu fidèle, des cotes précises et un fichier que le fabricant peut découper.',
      en: 'A neon sign or channel letter is made to order: customers want to see the result, know the exact size and the price before buying. Signs Designer is the platform where Vertim Coders presents its configurators. Its flagship, Neon Channel Product Customizer, had to deliver a faithful preview, precise dimensions and a file the manufacturer can cut.',
    },
    highlights: {
      fr: [
        'Configurateur néon et lettres lumineuses : texte, police, taille, couleurs et dégradés, fond, aperçu allumé ou éteint, cotes affichées en direct.',
        'Moteur géométrique en Vue 3, Fabric.js, maker.js et clipper-lib : contours, découpes (lettres, contour, caisson, rail), précision au millimètre.',
        'Plusieurs modèles de prix (par lettre, largeur ou hauteur fixe, avancé), export SVG, e-mail au fabricant et estimation d’expédition volumétrique.',
        'Site produit : démos en ligne, documentation, offres Starter et Pro.',
      ],
      en: [
        'Neon and channel letter configurator: text, font, size, colours and gradients, backboard, lights on/off preview, live dimensions.',
        'Geometry engine built with Vue 3, Fabric.js, maker.js and clipper-lib: outlines, cut types (letters, contour, box, raceway), millimetre precision.',
        'Several pricing models (per letter, fixed width or height, advanced), SVG export, manufacturer e-mail and volumetric shipping estimate.',
        'Product website: live demos, documentation, Starter and Pro plans.',
      ],
    },
    metrics: [
      { value: '3 900+', label: { fr: 'téléchargements', en: 'downloads' } },
      { value: '40+', label: { fr: 'boutiques actives', en: 'active stores' } },
      { value: '5/5', label: { fr: 'note WordPress.org', en: 'WordPress.org rating' } },
    ],
    stack: ['Vue 3', 'Fabric.js', 'maker.js', 'clipper-lib', 'Element Plus', 'Tailwind CSS', 'PHP', 'WooCommerce', 'WordPress REST API'],
    links: [
      { label: { fr: 'Signs Designer', en: 'Signs Designer' }, url: 'https://signsdesigner.us' },
      { label: { fr: 'Démo en ligne', en: 'Live demo' }, url: 'https://demos.signsdesigner.us/ncpc-live-demo/' },
      { label: { fr: 'WordPress.org', en: 'WordPress.org' }, url: 'https://wordpress.org/plugins/neon-channel-product-customizer-free/' },
    ],
    gallery: [
      {
        src: '/projects/signs-designer/acrylic',
        device: 'desktop',
        frame: 'demos.signsdesigner.us',
        label: { fr: 'Lettres acryliques', en: 'Acrylic letters' },
        caption: {
          fr: 'Lettres en acrylique rétroéclairées sur panneau, avec cotes, options de fixation et prix en direct.',
          en: 'Backlit acrylic letters on a backboard, with dimensions, mounting options and a live price.',
        },
      },
      {
        src: '/projects/signs-designer/neon-flow',
        device: 'desktop',
        frame: 'demos.signsdesigner.us',
        label: { fr: 'Néon multicolore', en: 'Multicolour neon' },
        caption: {
          fr: 'Néon aux couleurs en dégradé : police, taille et palette choisies par le client.',
          en: 'Gradient-coloured neon: font, size and palette picked by the customer.',
        },
      },
      {
        src: '/projects/signs-designer/graphics',
        device: 'desktop',
        frame: 'demos.signsdesigner.us',
        label: { fr: 'Mise en situation', en: 'Room preview' },
        caption: {
          fr: 'Néon avec contour, prévisualisé dans une pièce pour juger du rendu final.',
          en: 'Outlined neon sign previewed in a room to judge the final look.',
        },
      },
      {
        src: '/projects/signs-designer/home',
        device: 'desktop',
        frame: 'signsdesigner.us',
        label: { fr: 'Plateforme', en: 'Platform' },
        caption: {
          fr: 'signsdesigner.us présente les deux configurateurs, avec démos, documentation et offres.',
          en: 'signsdesigner.us presents both configurators, with demos, documentation and plans.',
        },
      },
    ],
  },
  {
    id: 'souaba-one',
    title: 'Souaba One',
    brand: '#f59e0b',
    kind: { fr: 'SaaS B2B · Gestion hôtelière et résidences', en: 'B2B SaaS · Hotel & residence management' },
    period: { fr: '05/2025 – aujourd’hui', en: '05/2025 – present' },
    year: '2025',
    role: { fr: 'Développeur backend principal (API)', en: 'Lead backend developer (API)' },
    tagline: {
      fr: 'Toute la gestion d’un hôtel ou d’une résidence, en un seul endroit.',
      en: 'Everything a hotel or residence needs to run, in one place.',
    },
    context: {
      fr: 'Beaucoup d’établissements d’Afrique de l’Ouest suivent leurs réservations et leurs paiements entre cahiers, WhatsApp et Mobile Money, sans vue d’ensemble. Souaba One réunit réservations, séjours, encaissements et revenus dans un logiciel en ligne pensé pour les hôtels, résidences meublées et appartements, facturé en franc CFA.',
      en: 'Many West African properties track bookings and payments across notebooks, WhatsApp and Mobile Money, with no overall view. Souaba One brings bookings, stays, payments and revenue together in online software built for hotels, furnished residences and apartments, billed in CFA francs.',
    },
    highlights: {
      fr: [
        'API NestJS 11 et Prisma sur PostgreSQL (41 modèles) : établissements, chambres et unités, réservations, paiements, avis, messagerie, recherche.',
        'Abonnements par paliers (Starter, Pro, Business) : droits par fonctionnalité, gardes d’accès, renouvellements planifiés.',
        'Lien de réservation direct avec QR code, suivi des paiements Mobile Money (MTN, Moov, Orange Money, Wave), facturation en FCFA.',
        'Temps réel et tâches de fond : WebSockets, files Bull, planificateur, limitation de débit, documentation Swagger.',
      ],
      en: [
        'NestJS 11 + Prisma API on PostgreSQL (41 models): properties, rooms and units, bookings, payments, reviews, messaging, search.',
        'Tiered subscriptions (Starter, Pro, Business): per-feature entitlements, access guards, scheduled renewals.',
        'Direct booking link with QR code, Mobile Money payment tracking (MTN, Moov, Orange Money, Wave), invoicing in CFA francs.',
        'Real time and background jobs: WebSockets, Bull queues, scheduler, rate limiting, Swagger docs.',
      ],
    },
    metrics: [
      { value: '41', label: { fr: 'modèles de données', en: 'data models' } },
      { value: '20+', label: { fr: 'modules d’API', en: 'API modules' } },
      { value: '123', label: { fr: 'commits sur l’API', en: 'commits on the API' } },
    ],
    stack: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.IO', 'Bull · Redis', 'Next.js', 'Swagger'],
    links: [{ label: { fr: 'pro.souaba.com', en: 'pro.souaba.com' }, url: 'https://pro.souaba.com' }],
    gallery: [
      {
        src: '/projects/souaba-one/home',
        device: 'desktop',
        frame: 'pro.souaba.com',
        label: { fr: 'Accueil', en: 'Home' },
        caption: {
          fr: 'pro.souaba.com : demandes reçues via le lien de réservation, confirmation WhatsApp et revenu du jour.',
          en: 'pro.souaba.com: requests from the booking link, WhatsApp confirmation and daily revenue.',
        },
      },
      {
        src: '/projects/souaba-one/product',
        device: 'desktop',
        frame: 'pro.souaba.com',
        label: { fr: 'Tableau de bord', en: 'Dashboard' },
        caption: {
          fr: 'Revenus, taux d’occupation et arrivées du jour sur un seul écran.',
          en: 'Revenue, occupancy and today’s arrivals on a single screen.',
        },
      },
      {
        src: '/projects/souaba-one/features',
        device: 'desktop',
        frame: 'pro.souaba.com',
        label: { fr: 'Fonctionnalités', en: 'Features' },
        caption: {
          fr: 'Lien de réservation, Mobile Money, WhatsApp, planning, extras et mandats propriétaires.',
          en: 'Booking link, Mobile Money, WhatsApp, planning, extras and owner mandates.',
        },
      },
      {
        src: '/projects/souaba-one/pricing',
        device: 'desktop',
        frame: 'pro.souaba.com',
        label: { fr: 'Abonnements', en: 'Subscriptions' },
        caption: {
          fr: 'Formules par paliers en FCFA, adossées au module d’abonnements de l’API.',
          en: 'Tiered plans in CFA francs, backed by the API’s subscription module.',
        },
      },
    ],
  },
  {
    id: 'tonbooktout',
    title: 'TonBookTout',
    brand: '#ff2d55',
    kind: { fr: 'Application mobile · Rendez-vous beauté', en: 'Mobile app · Beauty appointments' },
    period: { fr: '08/2025 – aujourd’hui', en: '08/2025 – present' },
    year: '2025',
    role: { fr: 'Développeur mobile et backend', en: 'Mobile and backend developer' },
    tagline: {
      fr: 'La prise de rendez-vous beauté, pour les salons comme pour les indépendants.',
      en: 'Beauty appointment booking, for salons and independents alike.',
    },
    context: {
      fr: 'Coiffeurs, tresseuses, manucures et esthéticiennes gèrent souvent leurs rendez-vous par téléphone ou par message. L’application donne à ces professionnels, en salon ou indépendants, un agenda en ligne, et permet à leurs clients de réserver seuls, en salon ou à domicile. La version Android est disponible, la version iOS est en préparation.',
      en: 'Hairdressers, braiders, nail technicians and beauticians often handle bookings by phone or text. The app gives these professionals, in a salon or independent, an online schedule and lets their clients book on their own, in the salon or at home. The Android version is live, iOS is on the way.',
    },
    highlights: {
      fr: [
        'Côté client : recherche de salons et d’indépendants, catalogue de prestations, réservation sur plusieurs créneaux, avis.',
        'Côté professionnel : horaires, disponibilités et congés des employés, zones de déplacement avec un tarif par zone pour le service à domicile.',
        'Notifications push (Firebase Cloud Messaging), calendrier, espace d’administration et modération.',
        'App Flutter, réécriture de la première version React Native, connectée à une API Laravel 12 (Sanctum) déployée avec Docker.',
      ],
      en: [
        'For clients: search for salons and independents, service catalogue, multi-slot booking, reviews.',
        'For professionals: opening hours, staff availability and time off, travel zones with per-zone pricing for home services.',
        'Push notifications (Firebase Cloud Messaging), calendar, admin area and moderation.',
        'Flutter app, rewritten from the first React Native version, backed by a Laravel 12 API (Sanctum) deployed with Docker.',
      ],
    },
    metrics: [
      { value: 'Android', label: { fr: 'disponible', en: 'available' } },
      { value: 'iOS', label: { fr: 'bientôt', en: 'coming soon' } },
      { value: '2', label: { fr: 'profils : client et pro', en: 'profiles: client & pro' } },
    ],
    stack: ['Flutter', 'Dart', 'React Native', 'Laravel 12', 'Sanctum', 'Firebase', 'Docker'],
    links: [],
    gallery: [
      {
        src: '/projects/tonbooktout/home',
        device: 'phone',
        statusBar: 'linear-gradient(90deg, #fe3c69, #ff2f5c, #ff214f)',
        label: { fr: 'Accueil', en: 'Home' },
        caption: {
          fr: 'Recherche d’un salon ou d’une prestation : coiffure, tresses, soins, manucure, à domicile.',
          en: 'Find a salon or a service: hair, braids, treatments, nails, at home.',
        },
      },
      {
        src: '/projects/tonbooktout/categories',
        device: 'phone',
        statusBar: 'linear-gradient(90deg, #fe1844, #c12f4c, #9d2e41, #7e2b3e, #5d1723)',
        label: { fr: 'Catégories', en: 'Categories' },
        caption: {
          fr: 'Les univers beauté et les salons populaires, chargés depuis l’API Laravel.',
          en: 'Beauty categories and popular salons, loaded from the Laravel API.',
        },
      },
      {
        src: '/projects/tonbooktout/register',
        device: 'phone',
        statusBar: 'linear-gradient(90deg, #fd3d69, #ff305d, #ff2551)',
        label: { fr: 'Inscription', en: 'Sign-up' },
        caption: {
          fr: 'Création d’un compte client ou professionnel, avec le numéro béninois pré-rempli.',
          en: 'Client or professional sign-up, with the Benin phone prefix pre-filled.',
        },
      },
    ],
  },
];
