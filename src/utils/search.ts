import type { Content } from "../types/content";

export function searchContents(contents: Content[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return contents;
  }

  return contents.filter((content) => {
    const searchableText = [
      content.title,
      content.question,
      content.shortAnswer,
      content.category,
      content.subcategory,
      ...content.tags,
      ...content.relatedConcepts.map((concept) => concept.title),
      ...content.relatedConcepts.map((concept) => concept.description),
      ...content.relatedConcepts.map((concept) => concept.slug),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function getContentStats(contents: Content[]) {
  return {
    total: contents.length,
    continuing: contents.filter((content) => content.status === "Continuar")
      .length,
    mastered: contents.filter((content) => content.status === "Entendido")
      .length,
    favorites: contents.filter((content) => content.isFavorite).length,
  };
}
