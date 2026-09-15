export type Lang = 'fr' | 'en';

/** Texte disponible dans les deux langues du site. */
export type Localized<T = string> = Record<Lang, T>;

export interface ProjectLink {
  label: Localized;
  url: string;
}

export interface ProjectMetric {
  value: string;
  label: Localized;
}

/**
 * Capture d'écran d'un projet. `src` est le chemin sans suffixe : les fichiers
 * existent en `-1200.webp` / `-2400.webp` (bureau) ou `-390.webp` / `-780.webp` (mobile).
 */
export interface Shot {
  src: string;
  device: 'desktop' | 'phone';
  label: Localized;
  caption: Localized;
  /** Texte affiché dans la barre d'adresse du cadre navigateur. */
  frame?: string;
  /** Fond CSS de la barre d'état d'un téléphone, prolongeant le haut de la capture (texte clair). */
  statusBar?: string;
}

export interface Project {
  id: string;
  title: string;
  /** Couleur de marque du produit, utilisée pour le halo de la galerie. */
  brand: string;
  kind: Localized;
  period: Localized;
  year: string;
  role: Localized;
  tagline: Localized;
  context: Localized;
  highlights: Localized<string[]>;
  metrics: ProjectMetric[];
  stack: string[];
  links: ProjectLink[];
  gallery: Shot[];
  /** Écran mobile superposé à la galerie bureau (ex. l'espace professeur de School Cloud). */
  companion?: Shot;
}

export interface Experience {
  company: string;
  url?: string;
  role: Localized;
  period: Localized;
  location: Localized;
  summary: Localized;
  highlights: Localized<string[]>;
}

export interface Education {
  degree: Localized;
  school: string;
  period: string;
}

export interface SkillGroup {
  name: Localized;
  skills: string[];
}
