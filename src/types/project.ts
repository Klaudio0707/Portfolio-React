export type ProjectStatus = 'completed' | 'developing';

export interface Project {
  id: string | number;
  title: string;
  motive: string;
  keyHighlight: string;
  image: string;
  status: ProjectStatus;
  techStack: string[];
  deployUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}