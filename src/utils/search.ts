import type { Article } from "../types/article";

export function searchArticles(articles: Article[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return articles;
  }

  return articles.filter((article) => {
    const searchableText = [
      article.title,
      article.question,
      article.shortAnswer,
      article.category,
      article.subcategory,
      ...article.tags,
      ...article.relatedConcepts.map((concept) => concept.title),
      ...article.relatedConcepts.map((concept) => concept.description),
      ...article.relatedConcepts.map((concept) => concept.slug),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function getArticleStats(articles: Article[]) {
  return {
    total: articles.length,
    continuing: articles.filter((article) => article.status === "Continuar")
      .length,
    mastered: articles.filter((article) => article.status === "Entendido")
      .length,
    favorites: articles.filter((article) => article.isFavorite).length,
  };
}
