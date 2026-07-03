import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Article } from "../types/article";
import { Badge } from "./ui/badge";
import { cn } from "../utils/cn";
import { statusTextStyles } from "../utils/statusStyles";

interface CategoryArticleRowProps {
  article: Article;
}

export function CategoryArticleRow({ article }: CategoryArticleRowProps) {
  return (
    <Link
      to={`/conceitos/${article.slug}`}
      className={cn(
        "block rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition",
        "hover:border-rose-300 hover:bg-rose-50/30",
        "dark:border-slate-800 dark:bg-slate-950 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/5",
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              {article.title}
            </h3>
            {article.isFavorite && (
              <Heart
                size={15}
                className="shrink-0 fill-rose-500 text-rose-500 dark:fill-rose-400 dark:text-rose-400"
                aria-label="Favorito"
              />
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {article.shortAnswer}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
        <span
          className={cn(
            "shrink-0 text-sm font-medium",
            statusTextStyles[article.status],
          )}
        >
          {article.status}
        </span>
      </div>
    </Link>
  );
}
