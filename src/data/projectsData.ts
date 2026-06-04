import Thecomex from '@assets/projects/TheGlobal.JPG';
import PartyTime from '@assets/projects/PartyTime.JPG';
import ImportControl from '@assets/projects/ImportControl.JPG';
import MailSense from '@assets/projects/MailSense.JPG';
import CineTascom from '@assets/projects/CineTascom.JPG';
import Fintech from '@assets/projects/Fintech.JPG';
import BusPay from '@assets/projects/Figma-BusPay.JPG';

export interface ProjectData {
  id: number;
  title: string;
  keyHighlight: string; 
  techStack: string[];
  status: 'completed' | 'in-progress';
  motive: string;
  image: string;
  deployUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'TheGlobal (Thecomex)',
    keyHighlight: 'Internacionalização & Credibilidade B2B',
    techStack: ['React', 'TypeScript', 'CSS', 'Cloudflare'],
    status: 'completed',
    motive: 'Aplicação corporativa para o setor de comércio exterior. Estruturei um sistema de múltiplos idiomas e carrossel dinâmico para transmitir credibilidade em nível global, destacando refinamentos de frontend com o uso de `useToast` para feedback tátil imediato nas interações.',
    image: Thecomex,
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/Klaudio0707/landing-b2b',
    featured: true,
  },
  {
    id: 2,
    title: 'PartyTime',
    keyHighlight: 'Gestão Financeira & Polling Logic',
    techStack: ['React', 'Nestjs', 'TypeScript', 'Neon DB', 'Postgress', 'Resend'],
    status: 'completed',
    motive: 'Plataforma SaaS para gestão de despesas de festas e orquestração de convites. O diferencial de engenharia é a implementação de uma lógica robusta de polling no frontend, mantendo o controle de gastos e respostas atualizados em tempo real na tela do usuário.',
    image: PartyTime,
    deployUrl: 'https://front-partytime.vercel.app/', 
    githubUrl: 'https://github.com/Klaudio0707/front-partytime',
    featured: true,
  },
     {
    id: 3, 
    title: 'Import Control',
    keyHighlight: 'Arquitetura Backend & Automação Logística',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'Maven'],
    status: 'completed',
    motive: 'API RESTful projetada do zero para gestão do ciclo de vida de importações. Aplicando Clean Architecture e modelagem de entidades com UUIDs, a solução converte regras tributárias complexas em rotas consumíveis, eliminando processos manuais do setor de PCP.',
    image: ImportControl, 
    githubUrl: 'https://github.com/Klaudio0707/Import-Control',
    featured: true,
  },
   {
    id: 4,
    title: 'MailSense',
    keyHighlight: 'Integração GenAI (Google Gemini)',
    techStack: ['React', 'Vite', 'Python', 'Prompt Engineering', 'IA'],
    status: 'completed',
    motive: 'Sistema orientado por inteligência artificial. O frontend em React captura arquivos e textos do usuário e os envia para um backend arquitetado em Python, que injeta prompts pré-programados para processamento assíncrono via API do Google Gemini.',
    image: MailSense,
    deployUrl: 'https://mailsense-ai.vercel.app/', 
    githubUrl: 'https://github.com/Klaudio0707/mailsense',
    featured: true,
  },
  {
    id: 5,
    title: 'Cine Tascom',
    keyHighlight: 'E-commerce & Autenticação OAuth',
    techStack: ['React', 'API Rest', 'CSS', 'Firebase Auth'],
    status: 'completed',
    motive: 'Plataforma focada na jornada de e-commerce para compra de ingressos de cinema. A engenharia destacada foi a integração do Firebase Authentication, terceirizando o fluxo de segurança para permitir um login ágil e seguro via conta Google do usuário.',
    image: CineTascom,
    deployUrl: 'https://cine-tascom.vercel.app/', 
    githubUrl: 'https://github.com/Klaudio0707/CineTascom',
    featured: true,
  },
   {
    id: 6,
    title: 'Fintech Dashboard',
    keyHighlight: 'Painel Corporativo & Reatividade',
    techStack: ['React', 'TypeScript', 'Chartjs'],
    status: 'completed',
    motive: 'Dashboard administrativa em React focada no gerenciamento de métricas de uma empresa. A arquitetura faz uso intenso de polling logic para capturar e re-renderizar dados críticos na tela sem a necessidade de recarregar a sessão.',
    image: Fintech,
    deployUrl: 'https://fintech-origamid-omega.vercel.app/', 
    githubUrl: 'https://github.com/Klaudio0707/Fintech-Origamid',
    featured: false,
  },
  {
    id: 7, 
    title: 'BusPay (App de Mobilidade)',
    keyHighlight: 'UX/UI Design & System Flow',
    techStack: ['Figma', 'Prototipagem', 'Wireframing', 'UX/UI'],
    status: 'completed',
    motive: 'Projeto acadêmico focado na arquitetura da experiência do usuário (UX) para mobilidade urbana. O protótipo de alta fidelidade mapeia rotas complexas, como sistemas de login, recarga e bilhetagem digital, provando a capacidade de desenhar as regras de negócio e a interface antes do ciclo de desenvolvimento de software.',
    image: BusPay, 
    deployUrl: 'https://www.figma.com/proto/MHU7uHHhWhXDKZVupkfWRj/Prototipo-alta-fidelidade?node-id=2004-118&t=AgiO2JQUzXUM5f43-1&starting-point-node-id=2004%3A118', 
  }
 
];