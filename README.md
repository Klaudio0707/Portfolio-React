# 💻 Portfólio de Engenharia de Software

![Status do Projeto](https://img.shields.io/badge/status-active-brightgreen)
![Tecnologias](https://img.shields.io/badge/stack-React-blue)

Bem-vindo ao repositório do meu portfólio pessoal. Este projeto é uma vitrine de boas práticas em arquitetura de frontend, focado em **performance**, **manutenibilidade** e **Clean Code**.

---

## 🚀 Sobre Mim

Sou **Cláudio Roberto **, Desenvolvedor de Software. Com sólida formação em Análise e Desenvolvimento de Sistemas e experiência prática em rotinas logísticas e operacionais, aplico rigor técnico e otimização de processos para conceber aplicações robustas, escaláveis e eficientes.

Stack principal: **Java, Spring Boot, Angular, TypeScript/JavaScript e React**.

---

## 🏗️ Arquitetura e Decisões Técnicas

O projeto foi estruturado seguindo rigorosos padrões de engenharia de software voltados ao ecossistema frontend:

* **Gerenciamento de Estado e Performance:** Utilização intensiva de Custom Hooks (`useCarousel`, `useContactForm`, `useScrollVisibility`) para o completo isolamento da lógica de negócio da camada de apresentação. Adoção estratégica de `useRef` para controle de eventos contínuos de *drag* e `requestAnimationFrame` para *throttling* de listeners globais de scroll, eliminando re-renderizações desnecessárias e garantindo taxa estável de 60fps.
* **Feedback Contínuo e UX:** Implementação de fluxos assíncronos resilientes com o padrão **useToast** para interações não-bloqueantes. O formulário de contato conta com uma lógica de *UX Throttle* armazenada em `localStorage` (limite de 3 envios a cada 24h) para guiar o comportamento do usuário legítimo, delegando o *rate limiting* estrito por IP e a segurança antispam para a infraestrutura de borda da API do Web3Forms.
* **Design System & Estilização:** Utilização de *CSS Modules* combinados com tokens globais de estilização (:root), blindando os escopos dos componentes contra vazamento de estilo e estabelecendo uma única fonte de verdade (*Single Source of Truth*) para a identidade visual.
* **Acessibilidade (A11y) e SEO:** Adesão estrita às diretrizes da W3C através do respeito à hierarquia semântica do DOM (removendo títulos concorrentes no cabeçalho), silenciamento de ícones puramente decorativos para leitores de tela (`aria-hidden="true"`) e suporte nativo a navegação por teclado nos carrosséis (`tabIndex` e manipulação de eventos `KeyDown`). Injeção de Open Graph Meta Tags para garantir a perfeita indexação e exibição de cartões rich-media em redes profissionais.

---

## ⚙️ Funcionalidades

- **Interface Fluida:** Layout totalmente responsivo construído com Grid e Flexbox modernos.
- **Controle de Fluxo de Envio:** Contador visual dinâmico que limita e notifica tentativas consecutivas de mensagens.
- **Navegação Inclusiva:** Carrosséis operáveis tanto por gestos de arrastar quanto por setas direcionais do teclado.

---

## 🛠️ Como Executar

Siga os passos abaixo para rodar o ambiente de desenvolvimento localmente:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Klaudio0707/Portfolio-React.git](https://github.com/Klaudio0707/Portfolio-React.git)
Entre na pasta:

Bash
cd Portfolio-React
Instale as dependências:

Bash
npm install
Variáveis de Ambiente:
Crie um arquivo .env na raiz e adicione:

Snippet de código
VITE_WEB3FORMS_ACCESS_KEY=sua_chave_aqui
Inicie o projeto:

Bash
npm run dev

📬 Contato
Sinta-se à vontade para enviar uma mensagem através do formulário integrado na aplicação ou conectar-se diretamente através dos canais profissionais.

Desenvolvido por Cláudio Roberto.