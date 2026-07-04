import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Boxes,
  Braces,
  Code2,
  Cpu,
  FlaskConical,
  Globe,
  Layers,
  Network,
  Palette,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { contents } from "../content";
import {
  getEnabledTopicCount,
  getRoadmapPhaseByTitle,
  roadmapPhases,
} from "../data/roadmap";

export interface CategoryItem {
  name: string;
  id: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
  count: number;
  totalTopics: number;
}

const categoryConfig: Record<
  string,
  { icon: LucideIcon; description: string; iconClassName: string }
> = {
  "Fundamentos da Computação": {
    icon: Cpu,
    description:
      "Como o computador funciona: hardware, memória, periféricos, redes, SO e processos.",
    iconClassName: "text-violet-500",
  },
  "Lógica de Programação": {
    icon: Layers,
    description:
      "Conceitos essenciais para começar a programar com segurança e clareza.",
    iconClassName: "text-violet-500",
  },
  "Estruturas de Dados": {
    icon: Boxes,
    description:
      "Lineares, associativas, hierárquicas e grafos — como organizar dados.",
    iconClassName: "text-indigo-500",
  },
  Algoritmos: {
    icon: Code2,
    description:
      "Técnicas de busca, ordenação, grafos e análise de complexidade.",
    iconClassName: "text-blue-500",
  },
  "Como uma Linguagem Funciona": {
    icon: Braces,
    description:
      "Do código-fonte ao código de máquina: lexer, parser, AST e JIT.",
    iconClassName: "text-amber-500",
  },
  Internet: {
    icon: Network,
    description:
      "Protocolos, rede e comunicação entre cliente, servidor e APIs.",
    iconClassName: "text-emerald-500",
  },
  Browser: {
    icon: Globe,
    description:
      "Essa fase é MUITO importante para Front-end. Renderização, DOM, eventos e CSS no navegador.",
    iconClassName: "text-cyan-500",
  },
  "CSS (aprofundado)": {
    icon: Palette,
    description:
      "Seletores, layout avançado, animações e performance visual na web.",
    iconClassName: "text-rose-500",
  },
  JavaScript: {
    icon: Braces,
    description:
      "Linguagem da web: sintaxe, runtime, DOM e ecossistema JavaScript.",
    iconClassName: "text-amber-500",
  },
  TypeScript: {
    icon: Code2,
    description:
      "Tipagem estática sobre JavaScript para código mais previsível.",
    iconClassName: "text-blue-500",
  },
  React: {
    icon: Atom,
    description:
      "Biblioteca para construir interfaces com componentes reutilizáveis.",
    iconClassName: "text-sky-500",
  },
  "Ecossistema React": {
    icon: Zap,
    description:
      "Ferramentas e bibliotecas que complementam projetos React.",
    iconClassName: "text-sky-500",
  },
  "Animações em React": {
    icon: Sparkles,
    description: "Animações com CSS, Framer Motion e conceitos de motion design.",
    iconClassName: "text-pink-500",
  },
  Testes: {
    icon: FlaskConical,
    description:
      "Estratégias e ferramentas para garantir qualidade do código.",
    iconClassName: "text-green-500",
  },
  "Arquitetura Front-end": {
    icon: Boxes,
    description:
      "Padrões, organização e decisões estruturais para aplicações front-end.",
    iconClassName: "text-indigo-500",
  },
  Ferramentas: {
    icon: Wrench,
    description: "Git, build tools, linting e automação de deploy.",
    iconClassName: "text-orange-600",
  },
};

export function getCategoryItems(): CategoryItem[] {
  return roadmapPhases.map((phase) => {
    const config = categoryConfig[phase.title] ?? {
      icon: Layers,
      description: "Conceitos documentados nesta fase do roadmap.",
      iconClassName: "text-slate-500",
    };

    return {
      name: phase.title,
      id: phase.id,
      description: phase.description ?? config.description,
      icon: config.icon,
      iconClassName: config.iconClassName,
      count: contents.filter((content) => content.category === phase.title)
        .length,
      totalTopics: phase.topics.length,
    };
  });
}

export function getCategoryByName(name: string): CategoryItem | undefined {
  const phase = getRoadmapPhaseByTitle(name);
  if (!phase) return undefined;

  const items = getCategoryItems();
  return items.find((category) => category.name === name);
}

export function getCategoryEnabledCount(name: string): number {
  const phase = getRoadmapPhaseByTitle(name);
  if (!phase) return 0;
  return getEnabledTopicCount(phase);
}
