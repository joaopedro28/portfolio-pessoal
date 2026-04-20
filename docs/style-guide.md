# Guia de Estilos

## Direção visual

- Atmosfera: escura, sóbria e técnica, com sensação de profundidade controlada.
- Referência: linguagem visual inspirada na RockBase, adaptada para uma marca pessoal.
- Objetivo: transmitir autoridade, clareza e maturidade de execução.

## Paleta

- Fundo principal: `#0B1220`
- Fundo profundo: `#060B14`
- Superfície: `rgba(14, 23, 40, 0.78)`
- Texto principal: `rgba(255,255,255,0.94)`
- Texto secundário: `#93A4C8`
- Acento: `#3156B6`
- Acento forte: `#4F74D4`
- Linhas: `rgba(147,164,200,0.18)`

## Tipografia

- Base: `Outfit`
- Títulos: `Jost`
- Números e microcopy técnica: `Geist Mono`

## Layout

- Container: `min(1120px, calc(100vw - 2rem))`
- Grid hero: 2 colunas no desktop, 1 coluna no mobile
- Grid projetos: 1 coluna no mobile, 2 no tablet, 3 no desktop
- Grid parceiros: 1, 2 ou 5 colunas conforme viewport

## Componentes

- Hero: full bleed, sem card de destaque, com ilustração abstrata orbital.
- Métricas: painéis escuros com borda translúcida e número em mono.
- Parceiros: grade com logo em escala de cinza e quote revelada no hover.
- Projetos: cards 16:9 com overlay escuro, stack em chips e dupla CTA.
- Contato: painel de fechamento com glow sutil e CTA principal em azul.

## Movimento

- Entrada: `fade-up` via `IntersectionObserver`
- Hero: anéis orbitais com rotação contínua
- Hover: lift leve em projetos, parceiros e botões
- Acessibilidade: todas as animações respeitam `prefers-reduced-motion`

## Conteúdo

- Headline curta e direta
- Texto de apoio enxuto, com foco em negócio e execução
- Seções com uma responsabilidade clara: apresentar, provar, aprofundar e converter
