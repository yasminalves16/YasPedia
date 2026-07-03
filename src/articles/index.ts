import { algorithmArticle } from "./algorithm";
import { variablesArticle } from "./variables";

export const articles = [algorithmArticle, variablesArticle];

export const categories = [
  "Fundamentos",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Browser",
  "HTTP",
  "Git",
  "React",
  "Next.js",
  "Arquitetura",
  "Performance",
  "Testes",
];

export const articleBySlug = new Map(
  articles.map((article) => [article.slug, article]),
);
