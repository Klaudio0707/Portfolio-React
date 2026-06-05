# 💻 Portfólio de Engenharia de Software

![Status do Projeto](https://img.shields.io/badge/status-active-brightgreen)
![Tecnologias](https://img.shields.io/badge/stack-React-blue)

Bem-vindo ao repositório do meu portfólio pessoal. Este projeto é uma vitrine de boas práticas em arquitetura de frontend, focado em **performance**, **manutenibilidade** e **Clean Code**.

---

## 🚀 Sobre Mim

Sou **Cláudio Roberto da Silva**, Desenvolvedor Software. Com base em Análise e Desenvolvimento de Sistemas e experiência em logística, aplico o rigor técnico e a otimização de processos para criar aplicações robustas.

Stack principal: **Java, Spring Boot, Angular, Typescript/Javascript e React**.

---

## 🏗️ Decisões de Arquitetura

O projeto utiliza **React + TypeScript**, priorizando padrões de engenharia:

* **Separation of Concerns:** Lógica de negócio isolada em **Custom Hooks** (`useContactForm`, `useCarousel`).
* **Design System:** Uso de *CSS Modules* com variáveis de tema (`:root`), garantindo Single Source of Truth.
* **Segurança e Estabilidade:** Roteamento SPA otimizado para Vercel e sistema de *Rate Limiting* (client-side) para proteção do formulário de contato.
* **Performance:** Integração assíncrona de recursos e redução de bundle size.

---

## ⚙️ Funcionalidades

- **UX Responsiva:** Layout flexível com Grid/Flexbox moderno.
- **Motor de Scroll:** Navegação horizontal fluida com *scroll-snap*.
- **Formulário Seguro:** Integração com Web3Forms, contendo trava de segurança de 3 envios a cada 24h.
- **Microinterações:** Feedbacks táteis e visuais via `Sonner`.

---

## 🛠️ Como Executar

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
Sinta-se à vontade para enviar uma mensagem através do formulário ou conectar-se no LinkedIn.

Desenvolvido com dedicação por Cláudio Roberto.