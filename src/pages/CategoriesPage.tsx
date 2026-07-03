import { FileText } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { articles, categories } from "../articles";
import { Breadcrumb } from "../components/Breadcrumb";
import { CategoryArticleRow } from "../components/CategoryArticleRow";
import { KnowledgeFilters } from "../components/KnowledgeFilters";
import { useArticlesWithPreferences } from "../hooks/useArticlesWithPreferences";
import type { LearningStatus } from "../types/article";
import { getCategoryByName } from "../utils/categories";

export function CategoriesPage() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("categoria") ?? categories[0];
  const category = getCategoryByName(selectedCategory);
  const articlesWithPreferences = useArticlesWithPreferences();
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<LearningStatus[]>([]);

  const categoryArticles = useMemo(
    () =>
      articlesWithPreferences.filter(
        (article) => article.category === selectedCategory,
      ),
    [articlesWithPreferences, selectedCategory],
  );

  const filteredArticles = useMemo(() => {
    return categoryArticles.filter((article) => {
      if (favoritesOnly && !article.isFavorite) {
        return false;
      }

      if (
        selectedStatuses.length > 0 &&
        !selectedStatuses.includes(article.status)
      ) {
        return false;
      }

      return true;
    });
  }, [categoryArticles, favoritesOnly, selectedStatuses]);

  const toggleStatus = (status: LearningStatus) => {
    setSelectedStatuses((current) =>
      current.includes(status)
        ? current.filter((item) => item !== status)
        : [...current, status],
    );
  };

  if (!category) {
    return null;
  }

  const Icon = category.icon;
  const countLabel =
    category.count === 1
      ? "1 conhecimento"
      : `${category.count} conhecimentos`;

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          { label: category.name },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-start gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 ${category.iconClassName}`}
          >
            <Icon size={24} strokeWidth={1.75} />
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
              {category.name}
            </h1>
            <p className="mt-2 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
              {category.description}
            </p>
          </div>
        </div>

        <p className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <FileText size={15} />
          {countLabel}
        </p>
      </header>

      <KnowledgeFilters
        favoritesOnly={favoritesOnly}
        onToggleFavoritesOnly={() => setFavoritesOnly((current) => !current)}
        selectedStatuses={selectedStatuses}
        onToggleStatus={toggleStatus}
        resultCount={filteredArticles.length}
      />

      <section className="space-y-3">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <CategoryArticleRow key={article.slug} article={article} />
          ))
        ) : categoryArticles.length > 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 px-5 py-10 text-center dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400">
              Nenhum conhecimento encontrado com os filtros atuais.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 px-5 py-10 text-center dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400">
              Ainda não há conhecimentos cadastrados nesta categoria.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
