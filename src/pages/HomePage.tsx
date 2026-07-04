import { BookOpen, Brain, Compass, Heart, Layers } from "lucide-react";
import { useMemo, useState } from "react";
import { ContentCard } from "../components/ContentCard";
import { CategoryCard } from "../components/CategoryCard";
import { KnowledgeSearchField } from "../components/KnowledgeSearchField";
import { StatCard } from "../components/StatCard";
import { useContentsWithPreferences } from "../hooks/useContentsWithPreferences";
import { getCategoryItems } from "../utils/categories";
import { getContentStats, searchContents } from "../utils/search";

export function HomePage() {
  const [query, setQuery] = useState("");
  const contentsWithPreferences = useContentsWithPreferences();
  const stats = getContentStats(contentsWithPreferences);
  const categoryItems = getCategoryItems();
  const results = useMemo(
    () => searchContents(contentsWithPreferences, query),
    [contentsWithPreferences, query],
  );

  return (
    <div className="space-y-12">
      <section className="mx-auto max-w-5xl pt-8 text-center md:pt-14">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
          Minha base de conhecimento
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400">
          O YasPedia documenta conceitos com minhas próprias palavras para
          transformar estudo em entendimento consultável.
        </p>
        <div className="mt-10">
          <KnowledgeSearchField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </section>

      {query && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Resultados
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {results.map( (content) => (
              <ContentCard key={content.slug} content={content} />
            ))}
          </div>
        </section>
      )}

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total de conceitos"
          value={stats.total}
          icon={Layers}
          to="/busca"
        />
        <StatCard
          label="Continuar estudando"
          value={stats.continuing}
          icon={BookOpen}
          iconClassName="text-blue-500"
          to="/busca?status=Continuar"
        />
        <StatCard
          label="Dominados"
          value={stats.mastered}
          icon={Brain}
          iconClassName="text-emerald-500"
          to="/busca?status=Entendido"
        />
        <StatCard
          label="Favoritos"
          value={stats.favorites}
          icon={Heart}
          iconClassName="text-rose-500 dark:text-rose-400"
          to="/favoritos"
        />
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2">
          <Compass
            size={20}
            strokeWidth={1.75}
            className="text-rose-500 dark:text-rose-400"
          />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Categorias
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
