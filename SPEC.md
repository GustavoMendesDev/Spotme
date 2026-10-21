# SPEC - SpotMe

## Produto
- **Nome:** SpotMe
- **Categoria:** Landing page para app fictício de academia/fitness
- **Ideia:** App que conecta você a um parceiro de treino (spotter) compatível na sua academia, no mesmo horário e com o mesmo objetivo.
- **Público-alvo:** Pessoas que treinam sozinhas e perdem a motivação ou não têm quem ajude em séries pesadas.
- **Tom de voz:** Motivador, direto, com humor leve. Nada de conteúdo sensível, adulto, político ou ilegal.

## Identidade Visual

### Paleta de cores
Definida com base em tema academia/fitness com fundo escuro e acento vibrante:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --bg-tertiary: #1f1f1f;
  --accent-primary: #ff3366;
  --accent-secondary: #ff6b35;
  --accent-gradient: linear-gradient(135deg, #ff3366 0%, #ff6b35 100%);
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --text-tertiary: #808080;
  --border-color: #2a2a2a;
  --success: #22c55e;
  --error: #ef4444;
  --focus-color: #ff3366;
}
```

### Tipografia
- **Display/Títulos:** `Tourney`, cursiva, peso 700-900 - fonte com personalidade para títulos
- **Corpo de texto:** `Inter`, sans-serif, peso 400-600 - legível e moderna

Carregadas via Google Fonts no `index.html`.

### Tom e personalidade
- Energético e motivador sem ser agressivo
- Direto ao ponto
- Humor sutil (ex: "Não precisa levantar sozinho", "Seu spotter está a um clique")
- Foco em solução para um problema real

## Lista de Seções
Todas obrigatórias e presentes na ordem:

1. **Header** - Fixo com logo "SpotMe", navegação por âncoras (scroll suave), botão "Entrar na lista de espera"
2. **Hero** - Nome, proposta de valor, subtítulo, CTA principal, mockup do app
3. **Benefícios e Diferenciais** - Mínimo 6 cards com ícones
4. **Representação do Produto** - Mockups das telas (match, chat, check-in na academia) em CSS/SVG
5. **Como Funciona** - 3-4 passos numerados
6. **Prova Social** - Mínimo 4 depoimentos fictícios + números de impacto
7. **Oferta/Preço** - 3 planos (plano intermediário destacado), com lista de recursos
8. **FAQ** - Accordion funcional com mínimo 6 perguntas
9. **CTA Final + Footer** - Chamada final e informações do rodapé

## Estrutura de Pastas FSD
Seguiremos rigorosamente Feature-Sliced Design:

```
src/
├── app/        # Configuração da aplicação
│   ├── App.jsx
│   ├── index.css        # Estilos globais
│   └── styles/
│       └── tokens.css   # Variáveis CSS
├── pages/
│   └── landing/         # Página principal que compõe widgets
│       ├── ui/
│       │   └── LandingPage.jsx
│       └── index.js
├── widgets/    # Blocos grandes e independentes
│   ├── header/
│   ├── hero/
│   ├── benefits/
│   ├── product-showcase/
│   ├── how-it-works/
│   ├── testimonials/
│   ├── pricing/
│   ├── faq/
│   └── footer/
├── features/
│   └── join-waitlist/   # Feature com lógica de negócio
│       ├── ui/
│       │   ├── JoinWaitlistModal.jsx
│       │   └── WaitlistForm.jsx
│       ├── model/
│       │   └── useJoinWaitlist.js
│       └── index.js
├── entities/
│   ├── benefit/
│   │   ├── model/
│   │   │   └── benefits.js  # Dados mockados
│   │   └── ui/
│   │       └── BenefitCard.jsx
│   ├── plan/
│   ├── testimonial/
│   └── faq-item/
└── shared/
    ├── ui/              # Componentes reutilizáveis
    │   ├── Button/
    │   ├── Modal/
    │   ├── Accordion/
    │   ├── Section/
    │   ├── Container/
    │   └── Icon/
    └── lib/              # Utilitários
        ├── validation/
        │   └── email.js
        └── hooks/
            └── useScrollLock.js
```

**Regra FSD:** Camadas superiores importam das inferiores, nunca o contrário. Sem imports entre slices da mesma camada. Cada slice expõe API pública via `index.js`. Alias `@` apontando para `src/` configurado no `vite.config.js`.

## Decisões de CTA
- **CTA primário:** "Entrar na lista de espera" - abre modal da feature join-waitlist
- **CTA em planos:** "Escolher plano" - abre modal com plano pré-selecionado
- **CTA final:** "Garantir meu spot" - abre modal
- **Navegação:** Botões no header e CTAs em hero/final

### Comportamento do Modal (join-waitlist)
- Abre ao clicar em qualquer botão "Entrar na lista de espera" ou "Escolher plano"
- Formulário com campos: **Nome**, **E-mail**, **Academia onde treina**
- Validação:
  - Nome: obrigatório, mínimo 2 caracteres
  - E-mail: obrigatório, formato válido
  - Academia: obrigatório
- Exibe mensagens de erro abaixo de cada campo inválido
- Ao enviar com sucesso: exibe tela de sucesso (simulada, sem envio real)
- Fechar modal: ESC, clique fora (overlay), botão X
- Quando vem de "Escolher plano", exibe qual plano foi escolhido no modal

## Stack e Regras
- **Framework:** React + Vite
- **Linguagem:** JavaScript (não TypeScript)
- **Estilos:** CSS Modules (`*.module.css`)
- **100% client-side:** Sem backend, banco ou APIs. Dados mockados em arquivos locais
- **Sem bibliotecas extras:** Apenas react, react-dom e o que o Vite já traz
- **Hooks permitidos:** componentes, props, useState, useEffect, listas com map
- **Fontes:** Google Fonts via `<link>` no index.html
- **Imagens:** SVGs inline, CSS (gradientes, formas), mockups CSS/SVG - sem imagens externas com copyright

## Responsividade
- Mobile-first
- Breakpoints testados: 360px, 768px, 1280px
- Layout adaptativo em todas as seções

## Acessibilidade
- HTML semântico
- `alt` em elementos relevantes, `aria-label` quando necessário
- Foco visível em elementos interativos
- Contraste adequado
- Accordion e Modal acessíveis por teclado
- Navegação por âncoras funcional

## Decisões de Design
- **Fundo:** Escuro (#0a0a0a) para transmitir energia e modernidade
- **Acento:** Rosa vibrante (#ff3366) com laranja (#ff6b35) em gradiente - chamativo sem exagero
- **Tipografia:** Tourney para títulos (impacto, lembra academia) + Inter para texto (legibilidade)
- **Elementos visuais:** Gradientes, formas geométricas, mockups de celular em CSS puro
- **Microanimações:** Transições suaves em hover/focus, sem bibliotecas externas
- **Espaçamento:** Sistema consistente baseado em rem

## Mudanças Durante Desenvolvimento
Qualquer alteração nos requisitos ou decisões aqui documentadas será registrada nesta seção.
