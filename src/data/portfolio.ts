export type NavItem = {
  href: string;
  label: string;
};

export type Metric = {
  label: string;
  caption: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

export type Partner = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  quote: string;
  logo: string;
  logoAlt: string;
  capabilities: string[];
};

export type Project = {
  slug: string;
  name: string;
  segment: string;
  summary: string;
  overview: string;
  impact: string[];
  deliverables: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  partnerSlug: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-joao-pedro.vercel.app";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "ola@joaopedro.dev";

const whatsappMessage =
  "Olá, João Pedro! Vim pelo seu portfólio e gostaria de conversar sobre um projeto de e-commerce.";

export const siteConfig = {
  name: "João Pedro",
  role: "Desenvolvedor Front-end",
  siteUrl,
  contactEmail,
  whatsappNumber,
  whatsappLink: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappMessage,
};

export const navItems: NavItem[] = [
  { href: "/#metricas", label: "Números" },
  { href: "/#parcerias", label: "Parcerias" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/#contato", label: "Contato" },
];

export const heroData = {
  eyebrow: "Front-end para e-commerce em operação contínua",
  lead:
    "Desenvolvo interfaces para e-commerce que precisam carregar bem, vender com clareza e continuar evoluindo sem retrabalho.",
  support:
    "Ao longo de 8 anos, atuei com marcas, agências e squads transformando direção visual em front-end sólido, legível e pronto para produção.",
  specialties: [
    "React e Next.js",
    "Shopify e Shopify Plus",
    "Performance e Core Web Vitals",
    "Design systems e UX de conversão",
  ],
};

export const metricItems: Metric[] = [
  {
    value: 8,
    suffix: "+",
    label: "anos de experiência em e-commerce",
    caption: "Atuação em sustentação, redesign e evolução contínua.",
  },
  {
    value: 30,
    suffix: "+",
    label: "projetos entregues",
    caption: "Lojas, landing pages e frentes de otimização em produção.",
  },
  {
    value: 5,
    suffix: "+",
    label: "agências parceiras",
    caption: "Parcerias recorrentes com times que precisam de execução confiável.",
  },
  {
    value: 10,
    suffix: "+",
    label: "tecnologias dominadas",
    caption: "React, Next.js, Shopify, TypeScript, CSS e performance.",
  },
];

export const partners: Partner[] = [
  {
    slug: "base-commerce",
    name: "Base Commerce",
    role: "Squad partner",
    summary:
      "Parceria contínua em sprints de sustentação, campanhas e refino de UX para lojas de alto giro.",
    quote:
      "Confiança para entrar rápido no contexto, resolver o que importa e manter ritmo de entrega.",
    logo: "/partners/base-commerce.svg",
    logoAlt: "Logo da Base Commerce",
    capabilities: [
      "Sustentação front-end",
      "Campanhas sazonais",
      "Melhorias de performance",
    ],
  },
  {
    slug: "layer-studio",
    name: "Layer Studio",
    role: "Design to build",
    summary:
      "Integração próxima entre design e desenvolvimento para transformar direção visual em interface pronta para produção.",
    quote:
      "Execução refinada, consistente com o layout e sem abrir mão de acessibilidade.",
    logo: "/partners/layer-studio.svg",
    logoAlt: "Logo da Layer Studio",
    capabilities: [
      "Design system",
      "Implementação pixel-precise",
      "Motion e interação",
    ],
  },
  {
    slug: "north-agency",
    name: "North Agency",
    role: "Growth partner",
    summary:
      "Projetos com foco em conversão, testes de interface e otimização das principais etapas do funil.",
    quote:
      "Boa leitura de negócio e velocidade para transformar hipótese em entrega mensurável.",
    logo: "/partners/north-agency.svg",
    logoAlt: "Logo da North Agency",
    capabilities: [
      "CRO",
      "Experimentos visuais",
      "Landing pages para mídia",
    ],
  },
  {
    slug: "orbit-performance",
    name: "Orbit Performance",
    role: "Performance partner",
    summary:
      "Ajustes finos de carregamento, renderização e estabilidade visual em operações de catálogo amplo.",
    quote:
      "Foco técnico com visão prática sobre impacto real em experiência e receita.",
    logo: "/partners/orbit-performance.svg",
    logoAlt: "Logo da Orbit Performance",
    capabilities: [
      "Core Web Vitals",
      "Bundles críticos",
      "Observabilidade de front-end",
    ],
  },
  {
    slug: "retail-lab",
    name: "Retail Lab",
    role: "E-commerce partner",
    summary:
      "Projetos de replatform, novas vitrines e evolução visual de operações digitais em expansão.",
    quote:
      "Parceria sólida para acelerar lançamentos sem perder padrão de qualidade.",
    logo: "/partners/retail-lab.svg",
    logoAlt: "Logo da Retail Lab",
    capabilities: [
      "Replatform",
      "Shopify",
      "Arquitetura front-end",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "replatform-shopify-plus",
    name: "Replatform Shopify Plus",
    segment: "Moda premium",
    summary:
      "Redesenho front-end para uma operação de moda com foco em velocidade, consistência visual e autonomia comercial.",
    overview:
      "Uma base visual mais sólida, componentes reutilizáveis e performance tratada como parte do produto, não como etapa final.",
    impact: [
      "Arquitetura preparada para campanhas sazonais e mudanças rápidas de conteúdo.",
      "Experiência mobile refinada para navegação de coleção, busca e página de produto.",
      "Melhor legibilidade do design system para preservar consistência em novas entregas.",
    ],
    deliverables: [
      "Hero e vitrines editoriais",
      "Página de produto com blocos modulares",
      "Ajustes de carregamento e estabilidade visual",
    ],
    stack: ["Shopify Plus", "React", "TypeScript", "SCSS"],
    image: "/projects/replatform-shopify-plus.svg",
    imageAlt: "Visual abstrato do projeto Replatform Shopify Plus",
    partnerSlug: "retail-lab",
  },
  {
    slug: "storefront-next-commerce",
    name: "Storefront Next Commerce",
    segment: "Cosméticos D2C",
    summary:
      "Storefront headless com narrativa editorial, filtros enxutos e uma experiência visual pensada para reforçar marca e conversão.",
    overview:
      "O projeto equilibra atmosfera de marca com uma arquitetura front-end robusta, preparada para expansão de catálogo e campanhas.",
    impact: [
      "Seções modulares para lançamentos rápidos sem retrabalho em cada campanha.",
      "Fluxos de navegação mais claros entre editorial, categoria e produto.",
      "Base pronta para evoluções futuras com conteúdo localizado e novas coleções.",
    ],
    deliverables: [
      "Landing pages de coleção",
      "Blocos de storytelling",
      "Integração com analytics e eventos-chave",
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS Modules"],
    image: "/projects/storefront-next-commerce.svg",
    imageAlt: "Visual abstrato do projeto Storefront Next Commerce",
    partnerSlug: "layer-studio",
  },
  {
    slug: "portal-b2b-escalavel",
    name: "Portal B2B escalável",
    segment: "Distribuição e catálogo técnico",
    summary:
      "Portal de catálogo com grande volume de SKUs, foco em desempenho e clareza para jornadas consultivas de compra.",
    overview:
      "Uma experiência mais limpa para consulta de produtos, filtros avançados e área autenticada com base pronta para evolução contínua.",
    impact: [
      "Estrutura de componentes desenhada para crescimento de catálogo sem perda de consistência.",
      "Navegação otimizada para reduzir atrito em buscas e comparações técnicas.",
      "Melhor base para acompanhamento de comportamento e priorização de próximos ciclos.",
    ],
    deliverables: [
      "Listagem de produtos com filtros",
      "Área logada com foco em usabilidade",
      "Aprimoramentos de carregamento e renderização",
    ],
    stack: ["Next.js", "React", "Shopify", "Analytics"],
    image: "/projects/portal-b2b-escalavel.svg",
    imageAlt: "Visual abstrato do projeto Portal B2B escalável",
    partnerSlug: "orbit-performance",
  },
];

export const contactData = {
  title: "Vamos conversar sobre a próxima entrega?",
  description:
    "Se você precisa de alguém para tocar o front-end com clareza técnica, bom ritmo e cuidado visual, eu posso entrar no projeto.",
  note:
    "O WhatsApp é o canal principal. Se preferir, o e-mail também fica disponível.",
};

export function getPartnerBySlug(slug: string) {
  return partners.find((partner) => partner.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
