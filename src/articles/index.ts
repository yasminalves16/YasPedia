import { algorithmArticle } from "./algorithm";
import { variablesArticle } from "./variables";
import { roadmapCategories } from "../data/roadmap";

export const articles = [algorithmArticle, variablesArticle];

export const categories = roadmapCategories;

export const articleBySlug = new Map(
  articles.map((article) => [article.slug, article]),
);
