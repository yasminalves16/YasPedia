import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Boxes,
  Braces,
  Code2,
  FlaskConical,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Network,
  Palette,
  Zap,
} from "lucide-react";
import { articles, categories } from "../articles";

export interface CategoryItem {
  name: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
  count: number;
}

const categoryConfig: Record<
  string,
  { icon: LucideIcon; description: string; iconClassName: string }
> = {
  Fundamentos: {
    icon: Layers,
    description:
      "Conceitos essenciais para começar a programar com segurança e clareza.",
    iconClassName: "text-violet-500",
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
  HTML: {
    icon: Code2,
    description:
      "Estrutura, semântica e fundamentos das páginas web.",
    iconClassName: "text-orange-500",
  },
  CSS: {
    icon: Palette,
    description:
      "Estilos, layout, responsividade e apresentação visual na web.",
    iconClassName: "text-rose-500",
  },
  Browser: {
    icon: Globe,
    description:
      "Como o navegador renderiza, executa e otimiza aplicações web.",
    iconClassName: "text-cyan-500",
  },
  HTTP: {
    icon: Network,
    description:
      "Protocolo de comunicação entre cliente, servidor e APIs.",
    iconClassName: "text-emerald-500",
  },
  Git: {
    icon: GitBranch,
    description:
      "Controle de versão, branches e colaboração em projetos.",
    iconClassName: "text-orange-600",
  },
  React: {
    icon: Atom,
    description:
      "Biblioteca para construir interfaces com componentes reutilizáveis.",
    iconClassName: "text-sky-500",
  },
  "Next.js": {
    icon: Zap,
    description:
      "Framework React para rotas, SSR e aplicações full-stack.",
    iconClassName: "text-slate-700 dark:text-slate-300",
  },
  Arquitetura: {
    icon: Boxes,
    description:
      "Padrões, organização e decisões estruturais de software.",
    iconClassName: "text-indigo-500",
  },
  Performance: {
    icon: Gauge,
    description:
      "Otimização, métricas e experiência rápida para o usuário.",
    iconClassName: "text-orange-500",
  },
  Testes: {
    icon: FlaskConical,
    description:
      "Estratégias e ferramentas para garantir qualidade do código.",
    iconClassName: "text-green-500",
  },
};

export function getCategoryItems(): CategoryItem[] {
  return categories.map((name) => {
    const config = categoryConfig[name] ?? {
      icon: Layers,
      description: "Conceitos documentados nesta área do conhecimento.",
      iconClassName: "text-slate-500",
    };

    return {
      name,
      description: config.description,
      icon: config.icon,
      iconClassName: config.iconClassName,
      count: articles.filter((article) => article.category === name).length,
    };
  });
}

export function getCategoryByName(name: string): CategoryItem | undefined {
  return getCategoryItems().find((category) => category.name === name);
}
