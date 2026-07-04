import { ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Content } from "../types/content";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface ContentCardProps {
  content: Content;
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <Link to={`/conceitos/${content.slug}`} className="block">
      <Card className="h-full transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-700">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {content.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-slate-50">
              {content.title}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {content.isFavorite && (
              <Heart
                size={16}
                className="fill-rose-500 text-rose-500 dark:fill-rose-400 dark:text-rose-400"
                aria-label="Favorito"
              />
            )}
            <ArrowUpRight size={18} className="text-slate-400" />
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {content.shortAnswer}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {content.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
