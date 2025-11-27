export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    duration: string;
    location: string;
    summary: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    features: string[];
    technologies: string[];
    githubUrl?: string;
  }
  
  export interface Skill {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Beginner';
    icon?: string;
  }
  
  export interface Education {
    id: string;
    institution: string;
    degree: string;
    period: string;
    url?: string;
  }
  
  export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    url?: string;
  }