import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CategoryItem } from "../utils/categories";
import { cn } from "../utils/cn";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;
  const countLabel =
    category.count === 0
      ? `${category.totalTopics} no roadmap`
      : category.count === 1
        ? `1 de ${category.totalTopics} disponível`
        : `${category.count} de ${category.totalTopics} disponíveis`;

  return (
    <Link
      to={`/categorias?categoria=${encodeURIComponent(category.name)}`}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-5 transition",
        "hover:border-rose-300 hover:bg-rose-50/40",
        "dark:border-slate-800 dark:bg-slate-950 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/5",
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900",
            category.iconClassName,
          )}
        >
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <ArrowRight
          size={16}
          className="text-slate-300 transition group-hover:text-rose-400 dark:text-slate-600"
        />
      </div>

      <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
        {category.name}
      </h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {category.description}
      </p>
      <p className="mt-4 text-sm text-slate-400 dark:text-slate-500">
        {countLabel}
      </p>
    </Link>
  );
}
