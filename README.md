# 💻 Portfólio de Engenharia de Software

Bem-vindo ao repositório do meu portfólio pessoal. Este projeto não é apenas uma vitrine visual, mas uma demonstração prática dos meus princípios de arquitetura de frontend, focado em performance, componentização e Clean Code.

## 🚀 Sobre Mim

Sou **Cláudio Roberto da Silva Filho**, um Desenvolvedor Fullstack baseado no Recife, Pernambuco. Com uma base sólida em Análise e Desenvolvimento de Sistemas e uma trajetória que une a precisão das operações logísticas corporativas à engenharia de software, dedico-me a construir aplicações robustas, testáveis e escaláveis.

Minha stack principal de atuação engloba **Java, Spring Boot, Angular e React**.

## 🏗️ Arquitetura e Decisões Técnicas

Este portfólio foi arquitetado em **React com TypeScript**, priorizando as seguintes abordagens de engenharia:

* **Design Tokens e CSS Modules:** Todo o sistema de "Glow Dark Theme" é guiado por variáveis globais de CSS (`:root`), consumidas através de SCSS Modules para evitar colisão de escopo e garantir escalabilidade (Single Source of Truth).
* **Custom Hooks (Separation of Concerns):** A lógica de negócios e os eventos de janela (como o motor de rolagem infinita de carrosséis e o monitoramento de scroll) foram extraídos para Hooks isolados (`useCarousel`, `useScrollVisibility`), mantendo os componentes visuais estritamente focados em renderização de UI.
* **Componentização Semântica:** Uso de mapeadores utilitários como o `renderTechIcon` integrado à CDN do *Devicon* para renderização assíncrona de gráficos vetoriais pesados (SVGs), reduzindo o bundle size final da aplicação.
* **Foco em Microinterações (UX):** Implementação de feedbacks táteis imediatos com `useToast` e tratamento inteligente de overflow em layouts reativos.

## ⚙️ Funcionalidades em Destaque

- Layout responsivo baseado em Grid e Flexbox modernos.
- Carrossel horizontal com matemática de *scroll-snap* customizada.
- Motor de navegação reativo que monitora o eixo Y para controle de estado.
- Integração fluida entre UI Components e base de dados estática tipada.

## 🛠️ Como Executar Localmente

Certifique-se de ter o Node.js instalado em sua máquina.

1. Clone o repositório:
   ```bash
   git clone [https://github.com/klaudio0707/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)