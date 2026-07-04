import { Calendar, Tag } from "lucide-react";
import type { Content } from "../types/content";
import { hasContentNotes } from "../notes";
import { Breadcrumb } from "./Breadcrumb";
import { ContentActionBar } from "./ContentActionBar";
import { Badge } from "./ui/badge";

interface ContentHeaderProps {
  content: Content;
}

export function ContentHeader({ content }: ContentHeaderProps) {
  return (
    <header className="space-y-4">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          {
            label: content.category,
            href: `/categorias?categoria=${encodeURIComponent(content.category)}`,
          },
          { label: content.title },
        ]}
      />

      <div className="space-y-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50 md:text-3xl">
            {content.title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-zinc-400">
            {content.shortAnswer}
          </p>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Calendar size={13} strokeWidth={1.75} />
          Atualizado em{" "}
          {new Date(content.updatedAt).toLocaleDateString("pt-BR")}
        </p>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <Tag
              size={14}
              strokeWidth={1.75}
              className="text-slate-400 dark:text-slate-500"
              aria-hidden
            />
            {content.tags.map((tag) => (
              <Badge key={tag} variant="tag">
                {tag.toLowerCase()}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            ✍️ Conteúdo autoral
          </p>
        </div>

        <ContentActionBar
          slug={content.slug}
          defaultFavorite={content.isFavorite}
          defaultStatus={content.status}
          title={content.title}
          shareText={content.shortAnswer}
          showNotesLink={hasContentNotes(content.slug)}
        />
      </div>

      <hr className="border-slate-200 dark:border-slate-800" />
    </header>
  );
}
