import { Calendar, Share2, Tag } from "lucide-react";
import type { Article } from "../types/article";
import { useUserArticleState } from "../contexts/UserArticleStateContext";
import { Breadcrumb } from "./Breadcrumb";
import { FavoriteButton } from "./FavoriteButton";
import { StatusSelect } from "./StatusSelect";
import { Badge } from "./ui/badge";

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const { isFavorite, getStatus, toggleFavorite, setStatus } =
    useUserArticleState();
  const favorite = isFavorite(article.slug, article.isFavorite);
  const status = getStatus(article.slug, article.status);

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.shortAnswer,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
    } catch {
      // Usuário cancelou o compartilhamento ou a API não está disponível.
    }
  };

  return (
    <header className="space-y-4">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          {
            label: article.category,
            href: `/categorias?categoria=${article.category}`,
          },
          { label: article.title },
        ]}
      />

      <div className="space-y-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50 md:text-3xl">
            {article.title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-zinc-400">
            {article.shortAnswer}
          </p>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Calendar size={13} strokeWidth={1.75} />
          Atualizado em{" "}
          {new Date(article.updatedAt).toLocaleDateString("pt-BR")}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          <Tag
            size={14}
            strokeWidth={1.75}
            className="text-slate-400 dark:text-slate-500"
            aria-hidden
          />
          {article.tags.map((tag) => (
            <Badge key={tag} variant="tag">
              {tag.toLowerCase()}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <FavoriteButton
              active={favorite}
              onClick={() => toggleFavorite(article.slug, article.isFavorite)}
            />
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md bg-slate-50 px-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              <Share2 size={15} strokeWidth={1.9} />
              Compartilhar
            </button>
          </div>
          <div className="ml-auto">
            <StatusSelect
              value={status}
              onChange={(nextStatus) => setStatus(article.slug, nextStatus)}
            />
          </div>
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-800" />
    </header>
  );
}
