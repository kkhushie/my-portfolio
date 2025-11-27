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
    github:string;
    features: string[];
    technologies: string[];
  }
  
  export interface Skill {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Beginner';
    icon: string;
  }