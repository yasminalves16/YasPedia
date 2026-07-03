import { BookOpen, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArticleCard } from "../components/ArticleCard";
import { GlossaryConceptCard } from "../components/GlossaryConceptCard";
import { KnowledgeFilters } from "../components/KnowledgeFilters";
import { KnowledgeSearchField } from "../components/KnowledgeSearchField";
import { useArticlesWithPreferences } from "../hooks/useArticlesWithPreferences";
import type { LearningStatus } from "../types/article";
import { cn } from "../utils/cn";
import {
  getGlossaryConcepts,
  searchGlossaryConcepts,
} from "../utils/glossary";
import { searchArticles } from "../utils/search";

const validStatuses: LearningStatus[] = [
  "Não estudado",
  "Estudando",
  "Entendido",
  "Revisar",
  "Continuar",
];

type SearchView = "busca" | "glossario";

function parseStatus(value: string | null): LearningStatus | null {
  if (!value) return null;
  return validStatuses.includes(value as LearningStatus)
    ? (value as LearningStatus)
    : null;
}

function parseView(value: string | null): SearchView {
  return value === "glossario" ? "glossario" : "busca";
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const articlesWithPreferences = useArticlesWithPreferences();
  const urlQuery = searchParams.get("q") ?? "";
  const urlStatus = parseStatus(searchParams.get("status"));
  const view = parseView(searchParams.get("view"));
  const [query, setQuery] = useState(urlQuery);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<LearningStatus[]>(
    urlStatus ? [urlStatus] : [],
  );

  const glossaryConcepts = useMemo(() => getGlossaryConcepts(), []);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    if (urlStatus) {
      setSelectedStatuses([urlStatus]);
    }
  }, [urlStatus]);

  const articleResults = useMemo(() => {
    return searchArticles(articlesWithPreferences, query).filter((article) => {
      if (favoritesOnly && !article.isFavorite) {
        return false;
      }

      if (
        selectedStatuses.length > 0 &&
        !selectedStatuses.includes(article.status)
      ) {
        return false;
      }

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(article.category)
      ) {
        return false;
      }

      return true;
    });
  }, [articlesWithPreferences, query, selectedCategories, favoritesOnly, selectedStatuses]);

  const glossaryResults = useMemo(() => {
    const matched = searchGlossaryConcepts(glossaryConcepts, query);

    if (view !== "busca" || !query.trim()) {
      return matched;
    }

    const articleSlugs = new Set(articleResults.map((article) => article.slug));

    return matched.filter((concept) => !articleSlugs.has(concept.slug));
  }, [glossaryConcepts, query, view, articleResults]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  };

  const toggleStatus = (status: LearningStatus) => {
    setSelectedStatuses((current) =>
      current.includes(status)
        ? current.filter((item) => item !== status)
        : [...current, status],
    );
  };

  const setView = (nextView: SearchView) => {
    const params = new URLSearchParams(searchParams);
    if (nextView === "glossario") {
      params.set("view", "glossario");
    } else {
      params.delete("view");
    }
    setSearchParams(params);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    const params = new URLSearchParams(searchParams);
    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };

  const showGlossary = view === "glossario";
  const resultCount = showGlossary
    ? glossaryResults.length
    : articleResults.length + glossaryResults.length;

  return (
    <div className="space-y-8">
      <section className="mx-auto max-w-5xl space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
            {showGlossary ? "Glossário" : "Busca"}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400">
            {showGlossary
              ? "Definições curtas para consulta rápida durante o estudo."
              : "Encontre conceitos por título, categoria, tag ou termo do glossário."}
          </p>
        </div>

        <KnowledgeSearchField
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
        />

        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => setView("busca")}
            className={cn(
              "inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition",
              view === "busca"
                ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-400"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
            )}
          >
            <Search size={16} strokeWidth={1.75} />
            Busca
          </button>
          <button
            type="button"
            onClick={() => setView("glossario")}
            className={cn(
              "inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition",
              view === "glossario"
                ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-400"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
            )}
          >
            <BookOpen size={16} strokeWidth={1.75} />
            Glossário
          </button>
        </div>
      </section>

      {!showGlossary && (
        <KnowledgeFilters
          resultCount={resultCount}
          favoritesOnly={favoritesOnly}
          onToggleFavoritesOnly={() => setFavoritesOnly((current) => !current)}
          selectedStatuses={selectedStatuses}
          onToggleStatus={toggleStatus}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
        />
      )}

      {showGlossary ? (
        <div className="grid gap-4 md:grid-cols-2">
          {glossaryResults.length > 0 ? (
            glossaryResults.map((concept) => (
              <GlossaryConceptCard
                key={`${concept.slug}-${concept.title}`}
                concept={concept}
              />
            ))
          ) : (
            <p className="text-slate-500 dark:text-slate-400">
              Nenhum termo encontrado no glossário.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          {articleResults.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Conhecimentos
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {articleResults.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}

          {query.trim() && glossaryResults.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Glossário
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {glossaryResults.map((concept) => (
                  <GlossaryConceptCard
                    key={`${concept.slug}-${concept.title}`}
                    concept={concept}
                  />
                ))}
              </div>
            </section>
          )}

          {articleResults.length === 0 && glossaryResults.length === 0 && (
            <p className="text-slate-500 dark:text-slate-400">
              Nenhum conhecimento encontrado com os filtros atuais.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
