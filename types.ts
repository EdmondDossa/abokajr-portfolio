
export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  period: string;
  tech: string[];
  links?: ProjectLink[];
  details: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
