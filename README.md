# Portfólio Pessoal de João Pedro

Landing page e páginas de apoio para apresentar João Pedro como desenvolvedor front-end com foco em e-commerce, mantendo uma direção visual escura, sóbria e com acento azul inspirada na RockBase.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- CSS Modules
- `next/font` com Outfit, Jost e Geist Mono

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_CONTACT_EMAIL=ola@joaopedro.dev
```

## Estrutura principal

- `src/app/page.tsx`: homepage com hero, métricas, parceiros, projetos e contato.
- `src/app/projetos/[slug]/page.tsx`: páginas internas de case.
- `src/app/parcerias/[slug]/page.tsx`: páginas internas de parceiros.
- `src/data/portfolio.ts`: conteúdo centralizado para textos, métricas, projetos, parceiros e links.
- `src/styles/portfolio.module.css`: estilo principal do site.
- `docs/style-guide.md`: guia visual e de composição.

## Customização rápida

1. Atualize `src/data/portfolio.ts` com projetos, parceiros, descrições e métricas reais.
2. Substitua os SVGs de `public/projects` e `public/partners` pelos assets finais.
3. Ajuste `NEXT_PUBLIC_WHATSAPP_NUMBER` e `NEXT_PUBLIC_CONTACT_EMAIL`.
4. Se houver domínio final, atualize `NEXT_PUBLIC_SITE_URL` para refletir SEO e Open Graph.

## Observação

Os logos e cases atuais são demonstrativos para permitir a entrega da interface completa sem depender do material final. A estrutura já está pronta para receber conteúdo real.
