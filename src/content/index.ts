import { algorithmContent } from "./algorithm";
import { computerContent } from "./computer";
import { variablesContent } from "./variables";
import { roadmapCategories } from "../data/roadmap";

export const contents = [algorithmContent, computerContent, variablesContent];

export const categories = roadmapCategories;

export const contentBySlug = new Map(
  contents.map((content) => [content.slug, content]),
);
