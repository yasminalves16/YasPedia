import { useMemo } from "react";
import { articles } from "../articles";
import { useUserArticleState } from "../contexts/UserArticleStateContext";
import type { Article } from "../types/article";

export function useArticlesWithPreferences(): Article[] {
  const { isFavorite, getStatus } = useUserArticleState();

  return useMemo(
    () =>
      articles.map((article) => ({
        ...article,
        isFavorite: isFavorite(article.slug, article.isFavorite),
        status: getStatus(article.slug, article.status),
      })),
    [isFavorite, getStatus],
  );
}
