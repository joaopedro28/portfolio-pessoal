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

export type HeroOrbitItem = {
  label: string;
  orbit?: number;
  angle?: number;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-joao-pedro.vercel.app";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5555999536991";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "joao.pedro@rockbase.com.br";

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
  { href: "/#parcerias", label: "Parcerias" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/#contato", label: "Contato" },
];

export const heroData = {
  // Ajuste de posicionamento: enfatiza o foco em e-commerce e apresenta o serviço de forma mais comercial
  eyebrow: "Freelancer especializado em e-commerce",
  lead:
    "Front-end para e-commerce com foco em performance, conversão e operação sem retrabalho.",
  // Complementa o texto de apoio com contexto de experiência, tipos de serviço oferecidos e clareza de processo
  support:
    "Atuo há 8 anos desenvolvendo e evoluindo lojas virtuais para marcas e agências que precisam de execução confiável, cuidado visual e velocidade para colocar projetos no ar. Entro bem em sustentação, implementação, replatform e melhorias contínuas, transformando layout em entrega pronta para produção, com base técnica clara e pensada para o dia a dia da operação.",
  // Lista reorganizada de especialidades com foco em plataformas, stack e serviços essenciais
  specialties: [
    "Shopify",
    "Olist",
    "NuvemShop",
    "React e Next.js",
    "Performance",
    "CRO",
    "Sustentação front-end",
    "Melhorias pontuais",
  ],
};

export const heroOrbitItems: HeroOrbitItem[] = [
  { label: "Olist by Vnda", orbit: 2, angle: 1 },
  { label: "Shopify", orbit: 2, angle: 40 },
  { label: "NuvemShop", orbit: 2, angle: 80 },
  { label: "Performance", orbit: 2, angle: 120 },
  { label: "Uappi", orbit: 2, angle: 160 },
  { label: "E-commerce", orbit: 2, angle: 200 },
  { label: "Melhorias", orbit: 2, angle: 240 },
  { label: "Análise de CRO", orbit: 2, angle: 280 },
  { label: "Sustentação", orbit: 2, angle: 320 },
];

export const metricItems: Metric[] = [
  {
    value: 8,
    suffix: "+",
    label: "anos de experiência em e-commerce",
    // Amplia o escopo da atuação, destacando sustentação e evolução contínua em lojas virtuais
    caption: "Atuação em sustentação, implementação, redesign e evolução contínua de lojas virtuais.",
  },
  {
    value: 80,
    suffix: "+",
    label: "projetos entregues",
    // Foca nos resultados tangíveis dos projetos em produção
    caption: "Projetos publicados com foco em usabilidade, performance e execução confiável.",
  },
  {
    value: 8,
    suffix: "+",
    label: "agências parceiras",
    // Explica o valor da parceria sob a ótica de apoio técnico especializado
    caption: "Parcerias recorrentes com times que precisam de apoio técnico forte no front-end.",
  },
  {
    value: 10,
    suffix: "+",
    label: "plataformas e stacks no repertório",
    // Detalha as plataformas e aponta a expertise em arquiteturas React/Next.js
    caption: "Experiência com Shopify, Olist, NuvemShop, Wake, Tray, Uappi e arquiteturas em React/Next.js.",
  },
];

export const partners: Partner[] = [
  {
    slug: "base-commerce",
    name: "Base Commerce",
    role: "Squad partner",
    summary:
      // Esclarece o tipo de apoio fornecido em operações de grande volume
      "Apoio recorrente em sustentação front-end, campanhas sazonais e melhorias de experiência para operações com alto volume de atualização.",
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
      // Foca na entrega de interfaces prontas com consistência visual e atenção à acessibilidade
      "Integração próxima entre design e desenvolvimento para entregar interfaces prontas para produção, com consistência visual e atenção a acessibilidade.",
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
      // Acentua a ênfase em conversão e experimentação contínua ao longo do funil
      "Projetos voltados para conversão, testes de interface e otimização das etapas-chave do funil.",
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
      // Destaca o foco em impacto real e em operações com catálogos extensos
      "Ajustes de carregamento, renderização e estabilidade visual em operações com catálogos amplos e foco em impacto real.",
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
      // Aponta para o ritmo e a qualidade mantidos em projetos de expansão
      "Projetos de replatform, novas vitrines e evolução visual para operações digitais em expansão, mantendo ritmo e qualidade.",
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
      // Realça objetivos claros: experiência mobile, ritmo de campanhas e base previsível para evolução
      "Redesenho front-end de uma operação de moda premium, com foco em melhorar a experiência mobile, acelerar campanhas e criar uma base mais previsível para evolução da loja.",
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
      // Sinaliza a implementação em Next.js e descreve melhor a navegação entre seções da loja
      "Implementação de storefront em Next.js com foco em marca, organização de conteúdo e uma navegação mais eficiente entre coleção, categoria e produto.",
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
      // Explica a estrutura do portal ressaltando desempenho, usabilidade e base para crescimento
      "Estruturação de um portal com grande volume de SKUs, priorizando desempenho, usabilidade em jornadas técnicas e uma base sólida para crescimento do catálogo.",
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
  // Chamada mais direta para quem precisa de apoio especializado no front-end
  title: "Precisa de apoio no front-end do seu e-commerce?",
  // Esclarece os tipos de serviço oferecidos e reforça a forma de atuação
  description:
    "Posso atuar em sustentação, implementação, replatform ou melhorias pontuais, entrando no projeto com visão técnica, cuidado visual e foco em execução.",
  // Incentiva o contato pelo canal mais rápido e oferece alternativa
  note:
    "O caminho mais rápido é pelo WhatsApp. Se preferir, também pode me chamar por e-mail.",
};

export function getPartnerBySlug(slug: string) {
  return partners.find((partner) => partner.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
