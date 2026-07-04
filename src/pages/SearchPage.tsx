import { BookOpen, NotebookPen, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contentBySlug } from "../content";
import { contentNotes } from "../notes";
import { ContentCard } from "../components/ContentCard";
import { GlossaryConceptCard } from "../components/GlossaryConceptCard";
import { KnowledgeFilters } from "../components/KnowledgeFilters";
import { KnowledgeSearchField } from "../components/KnowledgeSearchField";
import { NoteCard } from "../components/NoteCard";
import { useContentsWithPreferences } from "../hooks/useContentsWithPreferences";
import type { LearningStatus } from "../types/content";
import { cn } from "../utils/cn";
import {
  getGlossaryConcepts,
  searchGlossaryConcepts,
} from "../utils/glossary";
import { searchNotes } from "../utils/notesSearch";
import { searchContents } from "../utils/search";

const validStatuses: LearningStatus[] = [
  "Não estudado",
  "Estudando",
  "Entendido",
  "Revisar",
  "Continuar",
];

type SearchView = "busca" | "glossario" | "notas";

function parseStatus(value: string | null): LearningStatus | null {
  if (!value) return null;
  return validStatuses.includes(value as LearningStatus)
    ? (value as LearningStatus)
    : null;
}

function parseView(value: string | null): SearchView {
  if (value === "glossario") return "glossario";
  if (value === "notas") return "notas";
  return "busca";
}

const viewTabs: Array<{
  id: SearchView;
  label: string;
  icon: typeof Search;
}> = [
  { id: "busca", label: "Busca", icon: Search },
  { id: "glossario", label: "Glossário", icon: BookOpen },
  { id: "notas", label: "Notas", icon: NotebookPen },
];

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const contentsWithPreferences = useContentsWithPreferences();
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

  const contentResults = useMemo(() => {
    return searchContents(contentsWithPreferences, query).filter((content) => {
      if (favoritesOnly && !content.isFavorite) {
        return false;
      }

      if (
        selectedStatuses.length > 0 &&
        !selectedStatuses.includes(content.status)
      ) {
        return false;
      }

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(content.category)
      ) {
        return false;
      }

      return true;
    });
  }, [
    contentsWithPreferences,
    query,
    selectedCategories,
    favoritesOnly,
    selectedStatuses,
  ]);

  const glossaryResults = useMemo(() => {
    const matched = searchGlossaryConcepts(glossaryConcepts, query);

    if (view !== "busca" || !query.trim()) {
      return matched;
    }

    const contentSlugs = new Set(contentResults.map((content) => content.slug));

    return matched.filter((concept) => !contentSlugs.has(concept.slug));
  }, [glossaryConcepts, query, view, contentResults]);

  const notesResults = useMemo(
    () => searchNotes(contentNotes, query),
    [query],
  );

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
    if (nextView === "busca") {
      params.delete("view");
    } else {
      params.set("view", nextView);
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

  const pageTitle =
    view === "glossario"
      ? "Glossário"
      : view === "notas"
        ? "Notas"
        : "Busca";

  const pageDescription =
    view === "glossario"
      ? "Definições curtas para consulta rápida durante o estudo."
      : view === "notas"
        ? "Suas anotações pessoais, separadas do conteúdo publicado. Pesquise dentro das notas organizadas por conceito."
        : "Encontre conceitos por título, categoria, tag ou termo do glossário.";

  const searchPlaceholder =
    view === "notas"
      ? "Buscar nas suas anotações..."
      : undefined;

  const resultCount =
    view === "glossario"
      ? glossaryResults.length
      : view === "notas"
        ? notesResults.length
        : contentResults.length + glossaryResults.length;

  return (
    <div className="space-y-8">
      <section className="mx-auto max-w-5xl space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
            {pageTitle}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400">
            {pageDescription}
          </p>
        </div>

        <KnowledgeSearchField
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          placeholder={searchPlaceholder}
        />

        <div className="flex flex-wrap justify-center gap-2">
          {viewTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setView(tab.id)}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition",
                  view === tab.id
                    ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-400"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
                )}
              >
                <Icon size={16} strokeWidth={1.75} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {view === "busca" && (
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

      {view === "glossario" && (
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
      )}

      {view === "notas" && (
        <>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            {notesResults.length === 1
              ? "1 conjunto de anotações"
              : `${notesResults.length} conjuntos de anotações`}
          </p>
          {notesResults.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {notesResults.map((notes) => {
                const content = contentBySlug.get(notes.slug);

                return (
                  <NoteCard
                    key={notes.slug}
                    slug={notes.slug}
                    title={notes.title}
                    contentTitle={content?.title ?? notes.title}
                    category={content?.category ?? "Sem categoria"}
                  />
                );
              })}
            </div>
          ) : (
            <p className="text-center text-slate-500 dark:text-slate-400">
              Nenhuma anotação encontrada com esse termo.
            </p>
          )}
        </>
      )}

      {view === "busca" && (
        <div className="space-y-8">
          {contentResults.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Conhecimentos
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {contentResults.map((content) => (
                  <ContentCard key={content.slug} content={content} />
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

          {contentResults.length === 0 && glossaryResults.length === 0 && (
            <p className="text-slate-500 dark:text-slate-400">
              Nenhum conhecimento encontrado com os filtros atuais.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
