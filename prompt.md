Você vai criar um projeto completo para uma atividade acadêmica: uma landing page de produto fictício, tema ACADEMIA/FITNESS, em React.

## ETAPA 0: Especificação primeiro
Antes de escrever qualquer código, crie o arquivo SPEC.md na raiz com: produto, público, identidade visual (paleta, tipografia, tom de voz), lista de seções, estrutura de pastas FSD e decisões de CTA. Depois implemente seguindo a SPEC.md. Se mudar algo durante o desenvolvimento, atualize a SPEC.md.

## PRODUTO (fictício)
Nome: SpotMe
Ideia: app que conecta você a um parceiro de treino (ou "spotter") compatível na sua academia, no mesmo horário e com o mesmo objetivo. Público: pessoas que treinam sozinhas e perdem a motivação ou não têm quem ajude em séries pesadas.
Tom: motivador, direto, com humor leve. Nada de conteúdo sensível, adulto, político ou ilegal.

## STACK E REGRAS
- React + Vite (JavaScript, não TypeScript), CSS Modules (arquivos *.module.css).
- 100% client-side: sem backend, banco ou APIs. Todos os dados mockados em arquivos locais.
- NÃO instale bibliotecas extras (sem Tailwind, styled-components, framer-motion, UI kits ou router). Só react, react-dom e o que o Vite já traz. Use apenas recursos básicos de React: componentes, props, useState, useEffect, listas com map.
- Fontes: use Google Fonts via <link> no index.html ou fontes do sistema.
- Imagens: não use imagens externas protegidas por direitos autorais. Represente o produto com SVGs inline, CSS (gradientes, formas) e mockups de celular feitos em CSS/SVG.

## ARQUITETURA: Feature-Sliced Design (FSD)
Use esta estrutura em src/, respeitando a regra de que camadas superiores importam das inferiores e nunca o contrário, sem imports entre slices da mesma camada:

src/
├── app/        (App.jsx, estilos globais, tokens CSS em variáveis)
├── pages/
│   └── landing/        (compõe os widgets)
├── widgets/    (blocos grandes: header, hero, benefits, how-it-works, product-showcase, testimonials, pricing, faq, footer)
├── features/
│   └── join-waitlist/  (modal + formulário de lista de espera, com validação e estado de sucesso)
├── entities/
│   ├── benefit/  plan/  testimonial/  faq-item/   (cada uma com model/ para os dados mockados e ui/ para o card)
└── shared/
    ├── ui/ (Button, Modal, Accordion, Section, Container, Icon)
    └── lib/ (helpers, ex.: validação de e-mail)

Cada slice expõe uma API pública via index.js. Use alias de import "@" apontando para src/ (configure no vite.config.js).

## SEÇÕES OBRIGATÓRIAS (todas devem existir)
1. Header fixo com logo e navegação por âncoras (scroll suave) + botão CTA.
2. Hero: nome, proposta de valor, subtítulo, CTA principal e mockup do app.
3. Benefícios e diferenciais (mínimo 6 cards).
4. Representação do produto: mockups das telas do app (match, chat, check-in na academia) feitos em CSS/SVG.
5. Como funciona: 3 a 4 passos numerados.
6. Prova social: depoimentos fictícios (mínimo 4) e números de impacto fictícios.
7. Oferta/preço: 3 planos (um destacado), com lista de recursos.
8. FAQ: accordion funcional com mínimo 6 perguntas.
9. CTA final + footer.

## CTA FUNCIONAL
Todos os botões "Entrar na lista de espera" e "Escolher plano" abrem o modal da feature join-waitlist. O formulário tem nome, e-mail e academia onde treina, com validação, mensagem de erro, e tela de sucesso ao enviar (simulada, sem envio real). Fechar o modal com ESC, clique fora e botão X. O plano escolhido aparece no modal.

## DESIGN
- Identidade forte e própria: escolha uma paleta (ex.: fundo escuro com um acento vibrante), defina tokens em variáveis CSS (:root) e use tipografia com personalidade (um título display + um texto legível).
- Responsivo, mobile-first (testar em 360px, 768px e 1280px).
- Acessibilidade básica: HTML semântico, alt/aria-label, foco visível, contraste adequado, accordion e modal acessíveis por teclado.
- Pequenas animações em CSS (hover, transições, fade-in ao rolar com IntersectionObserver é opcional).

## README.md (jornada de construção)
Crie o README.md seguindo EXATAMENTE este modelo de seções:

# Nome do Produto
## Integrantes
## Sobre o produto
## Jornada de construção
### Ideia inicial
### Pesquisa e referências
### Ferramentas utilizadas
### Uso de IA
### Evolução da solução
### Resultado final

Regras do README:
- Preencha o que você sabe com fatos reais deste projeto (produto, stack, arquitetura FSD, decisões de design, ferramentas usadas, o que foi gerado por você como modelo de IA).
- NÃO invente pesquisas, referências, tentativas, erros ou opiniões dos alunos. Onde precisar do relato pessoal dos integrantes (como surgiu a ideia, alternativas consideradas, referências pesquisadas, o que foi descartado, avaliação final, o que fariam diferente), deixe perguntas guia e um marcador "<!-- PREENCHER: ... -->" para eles completarem.
- Na seção "Uso de IA", registre o modelo usado, para que foi usado e as decisões de arquitetura e design que você propôs.
- Integrantes: deixe "- Nome Sobrenome" como placeholder.

## ENTREGA
1. Rode npm install e npm run build e corrija qualquer erro ou warning.
2. Garanta .gitignore (node_modules, dist).
3. Inicialize o git e faça commits pequenos e descritivos por etapa (SPEC, estrutura FSD, shared/ui, entities, widgets, feature, README).
4. No final, mostre um resumo curto: como rodar (npm run dev), a árvore de pastas e o que falta eu preencher no README.

Comece pela SPEC.md e me mostre antes de seguir para o código.
