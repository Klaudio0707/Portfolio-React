export type SkillLevel = 'Principal' | 'Avançado' | 'Intermediário' | 'Básico';

export interface Technology {
  name: string;
  icon?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
}
