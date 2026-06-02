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
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'TheGlobal (Thecomex)',
    keyHighlight: 'Internacionalização & Credibilidade B2B',
    techStack: ['React', 'TypeScript', 'CSS', 'Cloudflare'],
    status: 'completed',
    motive: 'Aplicação corporativa para o setor de comércio exterior. Estruturei um sistema de múltiplos idiomas e carrossel dinâmico para transmitir credibilidade em nível global, destacando refinamentos de frontend com o uso de `useToast` para feedback tátil imediato nas interações.',
    image: './src/assets/projects/TheGlobal.JPG',
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/claudioroberto/theglobal',
  },
  {
    id: 2,
    title: 'PartyTime',
    keyHighlight: 'Gestão Financeira & Polling Logic',
    techStack: ['React', 'Nestjs', 'TypeScript', 'Neon DB', 'Postgress', 'Resend'],
    status: 'completed',
    motive: 'Plataforma SaaS para gestão de despesas de festas e orquestração de convites. O diferencial de engenharia é a implementação de uma lógica robusta de polling no frontend, mantendo o controle de gastos e respostas atualizados em tempo real na tela do usuário.',
    image: './src/assets/projects/PartyTime.JPG',
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/claudioroberto/theglobal',
  },
   {
    id: 3,
    title: 'MailSense',
    keyHighlight: 'Integração GenAI (Google Gemini)',
    techStack: ['React', 'Vite', 'Python', 'Prompt Engineering', 'IA'],
    status: 'completed',
    motive: 'Sistema orientado por inteligência artificial. O frontend em React captura arquivos e textos do usuário e os envia para um backend arquitetado em Python, que injeta prompts pré-programados para processamento assíncrono via API do Google Gemini.',
    image: './src/assets/projects/MailSense.JPG',
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/claudioroberto/theglobal',
  },
  {
    id: 4,
    title: 'Fintech Dashboard',
    keyHighlight: 'Painel Corporativo & Reatividade',
    techStack: ['React', 'TypeScript', 'Charts.js'],
    status: 'completed',
    motive: 'Dashboard administrativa em React focada no gerenciamento de métricas de uma empresa. A arquitetura faz uso intenso de polling logic para capturar e re-renderizar dados críticos na tela sem a necessidade de recarregar a sessão.',
    image: './src/assets/projects/Fintech.JPG',
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/claudioroberto/theglobal',
  },
  {
    id: 5,
    title: 'MyContacts',
    keyHighlight: 'Arquitetura Acadêmica de CRUD',
    techStack: ['React', 'Node.js', 'Context API'],
    status: 'completed',
    motive: 'Projeto acadêmico para gestão de contatos, desenhado para consolidar os fundamentos de arquitetura frontend. Foco absoluto na estruturação de um estado global limpo para o controle dinâmico de leitura e gravação de formulários.',
    image: './src/assets/projects/MyContacts.JPG',
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/claudioroberto/theglobal',
  },
  {
    id: 6,
    title: 'Cine Tascom',
    keyHighlight: 'E-commerce & Autenticação OAuth',
    techStack: ['React', 'API Rest', 'CSS', 'Firebase Auth'],
    status: 'completed',
    motive: 'Plataforma focada na jornada de e-commerce para compra de ingressos de cinema. A engenharia destacada foi a integração do Firebase Authentication, terceirizando o fluxo de segurança para permitir um login ágil e seguro via conta Google do usuário.',
    image: './src/assets/projects/CineTascom.JPG',
    deployUrl: 'https://thecomex-deploy.com.br', 
    githubUrl: 'https://github.com/claudioroberto/theglobal',

  },
  {
    id: 7, 
    title: 'Import Control',
    keyHighlight: 'Arquitetura Backend & Automação Logística',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'Maven'],
    status: 'completed',
    motive: 'API RESTful projetada do zero para gestão do ciclo de vida de importações. Aplicando Clean Architecture e modelagem de entidades com UUIDs, a solução converte regras tributárias complexas em rotas consumíveis, eliminando processos manuais do setor de PCP.',
    image: './src/assets/ImportControl.JPG', 
    githubUrl: 'https://github.com/Klaudio0707/Import-Control',
  }
];