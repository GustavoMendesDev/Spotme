# SpotMe

## Integrantes

- Guilherme Mesquita
- Gustavo Mendes

## Sobre o produto

**SpotMe** é um produto fictício: um app que conecta pessoas que treinam sozinhas a um parceiro de treino (o "spotter") compatível na mesma academia, no mesmo horário e com o mesmo objetivo.

- **Público:** quem treina sozinho, perde a motivação ou não tem ninguém para ajudar em séries pesadas.
- **Proposta:** nunca mais treinar sozinho, com match por academia, horário e objetivo, chat e check-in.
- **Tom:** motivador, direto, com humor leve.

A página é uma landing page 100% client-side (sem backend, banco ou APIs), com dados mockados. Seções: header com navegação, hero, benefícios, telas do app, como funciona, depoimentos fictícios, planos e preços, FAQ, CTA final e footer. O CTA principal abre um modal de lista de espera, com formulário validado e tela de sucesso simulada.


### Ideia inicial

Como surgiu a ideia do SpotMe? Quem sugeriu?

R: Bom, eu e o Gui gostamos muito de academia, então essa ideia parte muito do nossos gostos e necessidades.
Não atoa fizemos 2 projetos individuais sobre isso rsrs...

Que outras ideias de produto de academia vocês consideraram e por que foram descartadas?

R: Nos pensamos muito e. algo vinculado a acompanhamento de carga e evolução de metricas, mas descartamos por ser a ideia dos individuais anteriores

### Pesquisa e referências

O que vocês pesquisaram? Quais sites, apps de treino, landing pages ou estilos serviram de referência? 

R: Usamos o Claude para nos dar referencias.

O que vocês aproveitaram de cada referência? 

R: pegamos pontoas fortes de cada um paraajudar no desenvolvimento e no MD.

### Ferramentas utilizadas

- **React** com **Vite** (JavaScript)
- **CSS Modules** para estilização
- **Feature-Sliced Design (FSD)** como arquitetura
- **OpenCode** (terminal) para gerar o projeto
- **Claude** (chat) para escrever o prompt e a especificação inicial
- **Git e GitHub** para versionamento e entrega
- Visual: sem imagens externas. O produto é representado por SVGs inline e mockups de celular feitos em CSS.
- <!-- PREENCHER: Outras ferramentas (Figma, VS Code, gerador de imagens, etc.), se usaram -->

### Uso de IA

**Claude (chat).** Foi usado para escrever o prompt que guiou toda a construção. O prompt definiu o produto, a stack (React, Vite, CSS Modules, sem bibliotecas extras), a estrutura FSD, as seções obrigatórias, o CTA funcional e as regras de acessibilidade e responsividade. Também orientou a abordagem de Desenvolvimento Orientado a Especificação: o projeto começa por um `SPEC.md`, que deve ser aprovado antes do código.

**OpenCode.** Foi a ferramenta usada no terminal para executar o prompt e gerar o projeto. Modelo usado no OpenCode: Usei BigPicke e o GLM-5.3 durante o desenvolvimento.

- Arquitetura FSD com camadas `app`, `pages`, `widgets`, `features`, `entities` e `shared`, e API pública por `index.js` em cada slice.
- Alias `@` apontando para `src/`.
- Nome e conceito do produto (SpotMe).

O que o modelo gerou que vocês mudaram ou descartaram? Houve algo que não funcionou de primeira? Trocaram de modelo? Por quê? o Bigle Picke travou algumas vezes, provavelmente por usar muitos agentes, então troquei para o GLM, ai percebi lentidão, e mudei pra Big Picke e tudo voltou ao normal.

### Evolução da solução

O que mudou entre a primeira versão gerada e a versão final? (cores, textos, CTA, ordem das seções, planos, mockups, etc.) -->

R: A versão final é mais compacta, mais bem feita, se alinha com a ideia do começo

Houve alguma sugestão da IA que vocês decidiram não seguir? Qual e por quê? -->

R:As ideias do começo com outras stacks e com propostas ja utilizadas em outros projetos, como individuais

Problemas encontrados durante o processo (ex.: permissões na instalação, erros de build) e como resolveram. -->

### Resultado final

Como vocês avaliam o resultado? O que ficou bom? 

R: Eu gostei de praticamente tudo, mas faria alterações no Css e algumas funcionalidades, mas pontos bem pequenos..

O que fariam diferente ou melhorariam com mais tempo? 

R: Com toda certeza uma organização maior no desenvolvimento com a I.A, com mais detalhes ficaria melhor, creio eu.

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.
