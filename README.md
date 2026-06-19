# 💻 Portfólio de Engenharia de Software

![Status do Projeto](https://img.shields.io/badge/status-active-brightgreen)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)

Este repositório contém o código-fonte do meu portfólio pessoal. Desenvolvido como uma vitrine prática de **Arquitetura de Frontend**, o projeto foca em manutenibilidade, escalabilidade e aplicação rigorosa do *Clean Code*.

---

## 🚀 Sobre Mim

Sou **Cláudio Roberto**, Engenheiro de Software Full Stack. Com sólida formação em Análise e Desenvolvimento de Sistemas e experiência resolvendo problemas de rotinas operacionais e logísticas, aplico rigor técnico na construção de soluções *End-to-End*.

* **Stack Principal:** Java, Spring Boot, Angular, React e TypeScript.
* **Infraestrutura e Nuvem:** AWS, Google Cloud, Docker e CI/CD (GitHub Actions).

---

## 🏗️ Arquitetura e Decisões Técnicas

O ecossistema foi estruturado para garantir máxima performance e coesão, utilizando padrões modernos de desenvolvimento:

* **Design Patterns & Reusabilidade (DRY):** Implementação de uma fábrica global de SVGs (`renderTechIcon`) estabelecendo uma *Single Source of Truth* para a renderização de assets. Uso massivo de **React Composition** (ex: componente genérico `Slider`) para desacoplar a lógica de scroll horizontal da camada de dados das seções.
* **Gerenciamento de Estado e Segurança:** Separação de responsabilidades utilizando *Custom Hooks*. O `useContactForm` encapsula toda a lógica de submissão, implementando estratégias de *Fail-Safe* para leitura do `localStorage` e limitando disparos na interface (rate-limiting), delegando a barreira antispam final para a API do Web3Forms.
* **UX Não-Bloqueante:** Utilização do padrão **useToast** para feedbacks assíncronos fluidos, sem travar a jornada do usuário durante o envio de formulários ou interações de cópia de e-mail.
* **Estilização Estrutural (SCSS Modules):** Migração arquitetural para SCSS, aproveitando aninhamento (*nesting*) para um código limpo e escopo modular, garantindo que o CSS de um componente jamais interfira em outro.
* **Acessibilidade (A11y):** Diretrizes rigorosas da W3C implementadas. Silenciamento de SVGs decorativos (`aria-hidden="true"`), roteamento semântico de âncoras e tags ARIA (`aria-controls`, `aria-label`) para total suporte a leitores de tela.

---

## ⚙️ Funcionalidades

- **Layout Responsivo:** Interfaces construídas com Grid/Flexbox avançados que se adaptam desde monitores ultrawide até dispositivos mobile.
- **Navegação Horizontal:** Carrosséis independentes (baseados em Composição) controláveis via *touch*, teclado e botões nativos.
- **Formulário Resiliente:** Validação de campos e prevenção contra abuso de envios repetidos diretamente no *client-side*.

---

## 🛠️ Como Executar o Projeto

Siga as instruções abaixo para rodar o ambiente de desenvolvimento em sua máquina local:

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

### 2. Instalação e Execução
Clone o repositório, instale as dependências e inicie o servidor (Vite):

```bash
# Clone o repositório
git clone [https://github.com/Klaudio0707/Portfolio-React.git](https://github.com/Klaudio0707/Portfolio-React.git)

# Entre no diretório do projeto
cd Portfolio-React

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
3. Variáveis de Ambiente
Para testar o envio de formulários, crie um arquivo .env na raiz do projeto e adicione a sua chave do Web3Forms:

Snippet de código
VITE_WEB3FORMS_ACCESS_KEY=sua_chave_de_acesso_aqui
📬 Contato
Sinta-se à vontade para enviar uma mensagem através do formulário integrado na aplicação ou conectar-se diretamente através do meu LinkedIn.

Desenvolvido por Cláudio Roberto.