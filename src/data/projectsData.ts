import Thecomex from '@/assets/projects/theglobal.jpg';
import PartyTime from '@/assets/projects/partytime.jpg';
import ImportControl from '@/assets/projects/importcontrol.jpg';
import MailSense from '@/assets/projects/mailsense.jpg';
import CineTascom from '@/assets/projects/cinetascom.jpg';
import Fintech from '@/assets/projects/fintech.jpg';
import BusPay from '@/assets/projects/figmabuspay.jpg';
import type { Project } from '@/types/project';


export const projectsData: Project[] = [
  {
    id: 1,
    title: 'TheGlobal (Thecomex)',
    keyHighlight: 'Internacionalização & Credibilidade B2B',
    techStack: ['React', 'TypeScript', 'CSS', 'Cloudflare'],
    status: 'completed',
    motive: 'Landing page institucional e de conversão para o setor de Comércio Exterior. (O Impacto): Maximizou a presença digital da marca com foco em captação de leads e tempo de carregamento otimizado. (A Engenharia): Desenvolvida com React e TypeScript, focando em componentização limpa e tipagem estrita, com a esteira de CI/CD e distribuição global servidas através da infraestrutura de edge da Cloudflare.',
    image: Thecomex,
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/Klaudio0707/landing-b2b',
    featured: true,
  },
  {
    id: 2,
    title: 'PartyTime',
    keyHighlight: 'Gestão Financeira & Polling Logic',
    techStack: ['React', 'NestJS', 'TypeScript', 'Neon DB', 'PostgreSQL', 'Resend'],
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
    motive: 'API RESTful em Java + Spring Boot com Clean Architecture para gestão do ciclo logístico completo de importação. Eliminou processos manuais críticos e reduziu o tempo de análise de PCP — construída com domínio real do negócio, não apenas da tecnologia.',
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