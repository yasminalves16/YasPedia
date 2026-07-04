import { ArrowUpRight, NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface NoteCardProps {
  slug: string;
  title: string;
  contentTitle: string;
  category: string;
}

export function NoteCard({
  slug,
  title,
  contentTitle,
  category,
}: NoteCardProps) {
  return (
    <Link to={`/conceitos/${slug}/anotacoes`} className="block">
      <Card className="h-full transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-700">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <NotebookPen size={15} strokeWidth={1.75} />
              Anotações pessoais
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-slate-50">
              {title}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Conceito: {contentTitle}
            </p>
          </div>
          <ArrowUpRight size={18} className="shrink-0 text-slate-400" />
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          Minhas anotações originais sobre este conceito.
        </p>
        <div className="mt-5">
          <Badge>{category}</Badge>
        </div>
      </Card>
    </Link>
  );
}
