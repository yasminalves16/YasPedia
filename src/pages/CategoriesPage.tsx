import { FileText } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../content";
import { Breadcrumb } from "../components/Breadcrumb";
import { KnowledgeFilters } from "../components/KnowledgeFilters";
import { RoadmapGroupSection } from "../components/RoadmapGroupSection";
import { RoadmapTopicRow } from "../components/RoadmapTopicRow";
import { getRoadmapPhaseByTitle } from "../data/roadmap";
import { useContentsWithPreferences } from "../hooks/useContentsWithPreferences";
import type { LearningStatus } from "../types/content";
import { getCategoryByName } from "../utils/categories";

export function CategoriesPage() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("categoria") ?? categories[0];
  const category = getCategoryByName(selectedCategory);
  const phase = getRoadmapPhaseByTitle(selectedCategory);
  const contentsWithPreferences = useContentsWithPreferences();
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<LearningStatus[]>([]);

  const contentBySlug = useMemo(
    () =>
      new Map(
        contentsWithPreferences.map((content) => [content.slug, content]),
      ),
    [contentsWithPreferences],
  );

  const visibleTopics = useMemo(() => {
    if (!phase) return [];

    return phase.topics.filter((topic) => {
      if (!topic.enabled) return true;

      const content = topic.slug ? contentBySlug.get(topic.slug) : undefined;
      if (!content) return false;

      if (favoritesOnly && !content.isFavorite) return false;

      if (
        selectedStatuses.length > 0 &&
        !selectedStatuses.includes(content.status)
      ) {
        return false;
      }

      return true;
    });
  }, [phase, contentBySlug, favoritesOnly, selectedStatuses]);

  const enabledInPhase = phase?.topics.filter((topic) => topic.enabled) ?? [];

  const toggleStatus = (status: LearningStatus) => {
    setSelectedStatuses((current) =>
      current.includes(status)
        ? current.filter((item) => item !== status)
        : [...current, status],
    );
  };

  if (!category || !phase) {
    return null;
  }

  const Icon = category.icon;
  const countLabel =
    category.count === 1
      ? "1 disponível"
      : `${category.count} disponíveis`;
  const totalLabel = `${category.totalTopics} no roadmap`;

  const groupedTopics = phase.topics.some((topic) => topic.group)
    ? phase.topics.reduce<Map<string | undefined, typeof phase.topics>>(
        (groups, topic) => {
          const key = topic.group;
          const current = groups.get(key) ?? [];
          groups.set(key, [...current, topic]);
          return groups;
        },
        new Map(),
      )
    : null;

  const renderTopic = (topic: (typeof phase.topics)[number]) => {
    const content = topic.slug ? contentBySlug.get(topic.slug) : undefined;
    const isFilteredOut =
      topic.enabled &&
      !visibleTopics.some((visible) => visible.id === topic.id);

    if (isFilteredOut) return null;

    return (
      <RoadmapTopicRow key={topic.id} topic={topic} content={content} />
    );
  };

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
          {countLabel} · {totalLabel}
        </p>
      </header>

      {enabledInPhase.length > 0 && (
        <KnowledgeFilters
          favoritesOnly={favoritesOnly}
          onToggleFavoritesOnly={() => setFavoritesOnly((current) => !current)}
          selectedStatuses={selectedStatuses}
          onToggleStatus={toggleStatus}
          resultCount={visibleTopics.filter((topic) => topic.enabled).length}
        />
      )}

      <section className="space-y-3">
        {groupedTopics ? (
          [...groupedTopics.entries()].map(([group, topics]) => {
            const visibleInGroup = topics
              .map(renderTopic)
              .filter((node) => node !== null);

            if (visibleInGroup.length === 0) return null;

            if (!group) {
              return (
                <div key="default" className="space-y-3">
                  {visibleInGroup}
                </div>
              );
            }

            return (
              <RoadmapGroupSection key={group} title={group}>
                {visibleInGroup}
              </RoadmapGroupSection>
            );
          })
        ) : visibleTopics.length > 0 ? (
          visibleTopics.map(renderTopic)
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 px-5 py-10 text-center dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400">
              Nenhum conceito disponível com os filtros atuais.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
