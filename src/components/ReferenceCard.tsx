import { ExternalLink } from "lucide-react";
import type { Reference } from "../types/article";
import { cn } from "../utils/cn";

interface ReferenceCardProps {
  reference: Reference;
}

const typeLabels: Record<Reference["type"], string> = {
  Livro: "Livro",
  Documentação: "Docs",
  Vídeo: "Vídeo",
  Artigo: "Artigo",
};

export function ReferenceCard({ reference }: ReferenceCardProps) {
  const content = (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition",
        "dark:border-slate-800 dark:bg-slate-900",
        reference.url && "hover:border-slate-300 dark:hover:border-slate-700",
      )}
    >
      <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        {typeLabels[reference.type]}
      </span>
      <span className="min-w-0 flex-1 text-sm font-medium text-slate-800 dark:text-slate-200">
        {reference.title}
      </span>
      {reference.url && (
        <ExternalLink
          size={15}
          className="shrink-0 text-slate-400 dark:text-slate-500"
        />
      )}
    </div>
  );

  if (!reference.url) {
    return content;
  }

  return (
    <a
      href={reference.url}
      target="_blank"
      rel="noreferrer"
      className="block cursor-pointer"
    >
      {content}
    </a>
  );
}
