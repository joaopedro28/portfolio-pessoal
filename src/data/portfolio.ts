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

export type Agency = {
  slug: string;
  name: string;
  website: string;
  logo: string;
  logoAlt: string;
  summary: string;
  platforms: string[];
};

export type ProjectKind = "store" | "landing-page";

export type Project = {
  slug: string;
  name: string;
  website: string;
  platform: string;
  agencySlug: string;
  agencyCreditText?: string;
  image: string;
  imageAlt: string;
  kind: ProjectKind;
  featuredOnHome: boolean;
  summary: string;
};

export type HeroOrbitItem = {
  label: string;
  orbit?: number;
  angle?: number;
};

export type PlatformSlug =
  | "olist"
  | "wake"
  | "shopify"
  | "nuvemshop"
  | "uappi";

export type Platform = {
  slug: PlatformSlug;
  name: string;
  description: string;
};

export type PlatformSummary = Platform & {
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-joao-pedro.vercel.app";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5555999536991";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "joao.pedro.28.rocha@gmail.com";

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
  { href: "/#agencias", label: "Agências" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/#contato", label: "Contato" },
];

export const heroData = {
  eyebrow: "Freelancer especializado em e-commerce",
  lead:
    "Front-end para e-commerce com foco em performance, conversão e operação sem retrabalho.",
  support:
    "Atuo há 8 anos desenvolvendo, refinando e publicando experiências de compra para marcas e agências que precisam de ritmo, clareza técnica e cuidado visual. Entro bem em sustentação, implementação, replatform e melhorias contínuas, tirando projetos do layout para produção com consistência.",
  specialties: [
    "Olist",
    "Wake",
    "Shopify",
    "NuvemShop",
    "Uappi",
    "React e Next.js",
    "Sustentação front-end",
    "Melhorias contínuas",
  ],
};

export const heroOrbitItems: HeroOrbitItem[] = [
  { label: "Olist", orbit: 2, angle: 4 },
  { label: "Wake", orbit: 2, angle: 42 },
  { label: "Shopify", orbit: 2, angle: 82 },
  { label: "NuvemShop", orbit: 2, angle: 121 },
  { label: "Uappi", orbit: 2, angle: 160 },
  { label: "E-commerce", orbit: 2, angle: 201 },
  { label: "Performance", orbit: 2, angle: 241 },
  { label: "Landing Pages", orbit: 2, angle: 281 },
  { label: "Sustentação", orbit: 2, angle: 321 },
];

const platformDefinitions: Platform[] = [
  {
    slug: "olist",
    name: "Olist",
    description:
      "Projetos publicados para operações que pedem sustentação contínua, catálogo vivo e frente estável em produção.",
  },
  {
    slug: "wake",
    name: "Wake",
    description:
      "Implementações para operações mais estruturadas, com foco em clareza técnica e entrega confiável.",
  },
  {
    slug: "shopify",
    name: "Shopify",
    description:
      "Landing pages e frentes de campanha orientadas a conversão, velocidade de publicação e autonomia do time.",
  },
  {
    slug: "nuvemshop",
    name: "NuvemShop",
    description:
      "Lojas publicadas para marcas em crescimento, com ritmo ágil de entrega e ajustes contínuos de front-end.",
  },
  {
    slug: "uappi",
    name: "Uappi",
    description:
      "Projetos em ambiente mais customizado, com foco em experiência, performance e implementação consistente.",
  },
];

export const metricItems: Metric[] = [
  {
    value: 8,
    suffix: "+",
    label: "anos de experiência em e-commerce",
    caption:
      "Atuação em sustentação, implementação, redesign e evolução contínua de lojas virtuais.",
  },
  {
    value: 50,
    label: "projetos publicados nesta seleção",
    caption:
      "Recorte real de lojas e landing pages entregues em parceria com agências de e-commerce.",
  },
  {
    value: 5,
    label: "agências parceiras nesta vitrine",
    caption:
      "Parcerias recorrentes com times que precisam de apoio técnico forte no front-end.",
  },
  {
    value: 5,
    label: "plataformas representadas",
    caption:
      "Projetos publicados em Olist, Wake, Shopify, NuvemShop e Uappi.",
  },
];

export const agencies: Agency[] = [
  {
    slug: "mahara",
    name: "Mahara",
    website: "https://mahara.marketing",
    logo: "/agencies/mahara-mark.svg",
    logoAlt: "Símbolo da Mahara",
    summary:
      "Agência com foco em estratégia, branding e performance digital para marcas que precisam crescer com direção clara.",
    platforms: ["Olist"],
  },
  {
    slug: "tec3ecommerce",
    name: "Tec3ecommerce",
    website: "https://tec3commerce.com.br",
    logo: "/agencies/tec3commerce.png",
    logoAlt: "Marca da Tec3ecommerce",
    summary:
      "Operação digital focada em implementação e evolução de lojas virtuais, com repertório forte em Olist e NuvemShop.",
    platforms: ["Olist", "NuvemShop"],
  },
  {
    slug: "auaha",
    name: "Auaha",
    website: "https://auaha.com.br",
    logo: "/agencies/auaha.svg",
    logoAlt: "Logo da Auaha",
    summary:
      "Agência com foco em marketing digital e e-commerce, atuando na construção e evolução de operações digitais.",
    platforms: ["Olist", "Wake"],
  },
  {
    slug: "TEC4U",
    name: "TEC4U",
    website: "https://www.tec4udigital.com",
    logo: "/agencies/tec4u.svg",
    logoAlt: "Logo da TEC4U",
    summary:
      "Agência 360º especializada em e-commerce, marketing digital e desenvolvimento web para marcas em crescimento.",
    platforms: ["NuvemShop", "Uappi"],
  },
  {
    slug: "orbit",
    name: "Orbit",
    website: "https://orbitads.com.br/",
    logo: "/agencies/orbitads.png",
    logoAlt: "Marca da Orbit",
    summary:
      "Agência parceira voltada a mídia e performance para operações de e-commerce, aqui representada com identidade local estável.",
    platforms: ["Olist", "Shopify"],
  }
];

export const projects: Project[] = [
  {
    slug: "paisano-brew-co",
    name: "Paisano Brew Co",
    website: "https://paisanobrew.co",
    platform: "Olist",
    agencySlug: "auaha",
    image: "/projects/sites/paisano-brew.png",
    imageAlt: "Preview do site Paisano Brew Co",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Paisano Brew Co, entregue em parceria com a Auaha.",
  },
  {
    slug: "coisas-da-lu-sigaud",
    name: "Coisas da Lu Sigaud",
    website: "https://www.coisasdalusigaud.com.br",
    platform: "Olist",
    agencySlug: "auaha",
    image: "/projects/sites/coisas-da-lu-sigaud.png",
    imageAlt: "Preview do site Coisas da Lu Sigaud",
    kind: "store",
    featuredOnHome: true,
    summary:
      "Loja publicada em Olist para a Coisas da Lu Sigaud, entregue em parceria com a Auaha.",
  },
  {
    slug: "karla-vivian-atelier",
    name: "Karla Vivian Atelier",
    website: "https://www.karlavivianatelier.com.br",
    platform: "Olist",
    agencySlug: "auaha",
    image: "/projects/sites/karla-vivian-atelier.png",
    imageAlt: "Preview do site Karla Vivian Atelier",
    kind: "store",
    featuredOnHome: true,
    summary:
      "Loja publicada em Olist para o atelier Karla Vivian, entregue em parceria com a Auaha.",
  },
  {
    slug: "indauto",
    name: "Indauto",
    website: "https://indauto.com.br",
    platform: "Wake",
    agencySlug: "auaha",
    image: "/projects/sites/indauto.png",
    imageAlt: "Preview do site Indauto",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Operação publicada em Wake para a Indauto, entregue em parceria com a Auaha.",
  },
  {
    slug: "let-me-be-sem-pausa",
    name: "Let Me Be — Sem Pausa",
    website: "https://www.letmebe.com.br/pages/lp-sem-pausa",
    platform: "Shopify",
    agencySlug: "orbit",
    image: "/projects/sites/let-me-be-sem-pausa.png",
    imageAlt: "Preview da landing page Sem Pausa da Let Me Be",
    kind: "landing-page",
    featuredOnHome: true,
    summary:
      "Landing page em Shopify para a campanha Sem Pausa da Let Me Be, entregue em parceria com a Auaha.",
  },
  {
    slug: "crayons",
    name: "Crayons São Paulo",
    website: "https://www.crayons.com.br",
    platform: "Olist",
    agencySlug: "orbit",
    image: "/projects/sites/crayons.png",
    imageAlt: "Preview do site Crayons São Paulo",
    kind: "store",
    featuredOnHome: true,
    summary:
      "Loja publicada em Olist para a Crayons São Paulo, entregue em parceria com a Orbit.",
  },
  {
    slug: "abu-dhabi-professional",
    name: "Abu Dhabi Professional",
    website: "https://www.abudhabiprofessional.com",
    platform: "Olist",
    agencySlug: "tec3ecommerce",
    image: "/projects/sites/abu-dhabi-professional.png",
    imageAlt: "Preview do site Abu Dhabi Professional",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Abu Dhabi Professional, entregue em parceria com a Tec3ecommerce.",
  },
  {
    slug: "salty-vibe",
    name: "Salty Vibe",
    website: "https://www.saltyvibe.com.br",
    platform: "Olist",
    agencySlug: "tec3ecommerce",
    image: "/projects/sites/salty-vibe.png",
    imageAlt: "Preview do site Salty Vibe",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Salty Vibe, entregue em parceria com a Tec3ecommerce.",
  },
  {
    slug: "subliarte-sublimacao",
    name: "SubliArte Sublimação",
    website: "https://www.subliartesublimacao.com.br",
    platform: "NuvemShop",
    agencySlug: "tec3ecommerce",
    image: "/projects/sites/subliarte-sublimacao.png",
    imageAlt: "Preview do site SubliArte Sublimação",
    kind: "store",
    featuredOnHome: true,
    summary:
      "Loja publicada em NuvemShop para a SubliArte Sublimação, entregue em parceria com a Tec3ecommerce.",
  },
  {
    slug: "midias2",
    name: "Mídias 2 Print",
    website: "https://www.midias2.com.br",
    platform: "Olist",
    agencySlug: "tec3ecommerce",
    image: "/projects/sites/midias2.png",
    imageAlt: "Preview do site Mídias 2 Print",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Mídias 2 Print, entregue em parceria com a Tec3ecommerce.",
  },
  {
    slug: "use-ofelia",
    name: "Use Ofélia",
    website: "https://www.useofelia.com.br",
    platform: "Olist",
    agencySlug: "tec3ecommerce",
    image: "/projects/sites/use-ofelia.png",
    imageAlt: "Preview do site Use Ofélia",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Use Ofélia, entregue em parceria com a Tec3ecommerce.",
  },
  {
    slug: "flexpop",
    name: "FlexPop",
    website: "https://www.flexpop.com.br",
    platform: "Olist",
    agencySlug: "mahara",
    image: "/projects/sites/flexpop.png",
    imageAlt: "Preview do site FlexPop",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a FlexPop, entregue em parceria com a Mahara.",
  },
  {
    slug: "musky-parfum",
    name: "Musky Parfum",
    website: "https://www.muskyparfum.com.br",
    platform: "Olist",
    agencySlug: "mahara",
    image: "/projects/sites/musky-parfum.png",
    imageAlt: "Preview do site Musky Parfum",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Musky Parfum, entregue em parceria com a Mahara.",
  },
  {
    slug: "nous-joalheria",
    name: "Nous Joalheria",
    website: "https://www.nousjoalheria.com.br",
    platform: "Olist",
    agencySlug: "mahara",
    image: "/projects/sites/nous-joalheria.png",
    imageAlt: "Preview do site Nous Joalheria",
    kind: "store",
    featuredOnHome: true,
    summary:
      "Loja publicada em Olist para a Nous Joalheria, entregue em parceria com a Mahara.",
  },
  {
    slug: "ju-bochner",
    name: "Ju Bochner",
    website: "https://www.jubochner.com.br",
    platform: "Olist",
    agencySlug: "mahara",
    image: "/projects/sites/ju-bochner.png",
    imageAlt: "Preview do site Ju Bochner",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Ju Bochner, entregue em parceria com a Mahara.",
  },
  {
    slug: "tramadas",
    name: "Tramadas",
    website: "https://www.tramadas.com.br",
    platform: "Olist",
    agencySlug: "mahara",
    image: "/projects/sites/tramadas.png",
    imageAlt: "Preview do site Tramadas",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Tramadas, entregue em parceria com a Mahara.",
  },
  {
    slug: "los-borbas",
    name: "Los Borbas",
    website: "https://www.losborbas.com.br",
    platform: "Olist",
    agencySlug: "mahara",
    image: "/projects/sites/los-borbas.png",
    imageAlt: "Preview do site Los Borbas",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em Olist para a Los Borbas, entregue em parceria com a Mahara.",
  },
  {
    slug: "cafe-com-deus-pai",
    name: "Café com Deus Pai",
    website: "https://www.cafecomdeuspai.com",
    platform: "NuvemShop",
    agencySlug: "TEC4U",
    image: "/projects/sites/cafe-com-deus-pai.png",
    imageAlt: "Preview do site Café com Deus Pai",
    kind: "store",
    featuredOnHome: true,
    summary:
      "Loja publicada em NuvemShop para o Café com Deus Pai, entregue em parceria com a TEC4U.",
  },
  {
    slug: "loja-kings",
    name: "Loja Kings",
    website: "https://www.lojakings.com.br",
    platform: "NuvemShop",
    agencySlug: "TEC4U",
    image: "/projects/sites/loja-kings.png",
    imageAlt: "Preview do site Loja Kings",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em NuvemShop para a Loja Kings, entregue em parceria com a TEC4U.",
  },
  {
    slug: "ls-decor",
    name: "LS Decor",
    website: "https://lsdecor.com.br",
    platform: "Uappi",
    agencySlug: "TEC4U",
    image: "/projects/sites/ls-decor.png",
    imageAlt: "Preview do site LS Decor",
    kind: "store",
    featuredOnHome: true,
    summary:
      "Loja publicada em Uappi para a LS Decor, entregue em parceria com a TEC4U.",
  },
  {
    slug: "talgui",
    name: "Talgui",
    website: "https://talgui.com.br",
    platform: "NuvemShop",
    agencySlug: "TEC4U",
    image: "/projects/sites/talgui.png",
    imageAlt: "Preview do site Talgui",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em NuvemShop para a Talgui, entregue em parceria com a TEC4U.",
  },
  {
    slug: "gbw-rio",
    name: "GBW Rio",
    website: "https://gbwrio.com.br",
    platform: "NuvemShop",
    agencySlug: "TEC4U",
    image: "/projects/sites/gbw-rio.png",
    imageAlt: "Preview do site GBW Rio",
    kind: "store",
    featuredOnHome: false,
    summary:
      "Loja publicada em NuvemShop para a GBW Rio, entregue em parceria com a TEC4U.",
  },
];

export const platforms: PlatformSummary[] = platformDefinitions.map((platform) => {
  return {
    ...platform,
  };
});

export const featuredProjects = projects.filter((project) => project.featuredOnHome);

export const contactData = {
  title: "Precisa de apoio no front-end do seu e-commerce?",
  description:
    "Posso atuar em sustentação, implementação, replatform ou melhorias pontuais, entrando no projeto com visão técnica, cuidado visual e foco em execução.",
  note:
    "O caminho mais rápido é pelo WhatsApp. Se preferir, também pode me chamar por e-mail.",
};

export function getAgencyBySlug(slug: string) {
  return agencies.find((agency) => agency.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPlatformBySlug(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}

export function getPlatformByName(name: string) {
  return platforms.find((platform) => platform.name === name);
}

export function getProjectAgencyCreditText(
  project: Project,
  agency?: Agency,
  overrideText?: string,
) {
  if (overrideText) {
    return overrideText;
  }

  if (project.agencyCreditText) {
    return project.agencyCreditText;
  }

  if (agency) {
    return `Este projeto pertence à ${agency.name}. Minha atuação aconteceu exclusivamente como desenvolvedor freelancer, com foco na implementação e entrega técnica do projeto.`;
  }

  return "Minha atuação aconteceu exclusivamente como desenvolvedor freelancer, com foco na implementação e entrega técnica do projeto.";
}

export function getProjectsByAgencySlug(agencySlug: string) {
  return projects.filter((project) => project.agencySlug === agencySlug);
}

export function getProjectsByPlatform(platformName: string) {
  return projects.filter((project) => project.platform === platformName);
}

export function getProjectsByPlatformSlug(slug: string) {
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    return [];
  }

  return getProjectsByPlatform(platform.name);
}

export function getRelatedProjects(project: Project, limit = 3) {
  const sameAgency = projects.filter(
    (item) => item.slug !== project.slug && item.agencySlug === project.agencySlug,
  );
  const samePlatform = projects.filter(
    (item) =>
      item.slug !== project.slug &&
      item.agencySlug !== project.agencySlug &&
      item.platform === project.platform,
  );

  return [...sameAgency, ...samePlatform].slice(0, limit);
}

export function getHostnameLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function getKindLabel(kind: ProjectKind) {
  return kind === "landing-page" ? "Landing Page" : "Loja";
}
