export type ProjectCategory = "Full Stack" | "Backend" | "IoT";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  github: { frontend?: string; backend?: string };
  live: { frontend?: string; backend?: string };
  category: ProjectCategory;
  featured: boolean;
}
