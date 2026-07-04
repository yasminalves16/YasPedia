import { contents } from "../content";

export interface GlossaryConcept {
  title: string;
  slug: string;
  description: string;
}

export function getGlossaryConcepts(): GlossaryConcept[] {
  const concepts = contents.flatMap((content) => [
    {
      title: content.title,
      slug: content.slug,
      description: content.shortAnswer,
    },
    ...content.relatedConcepts,
  ]);

  const unique = new Map<string, GlossaryConcept>();

  for (const concept of concepts) {
    const key = `${concept.slug}:${concept.title}`;
    if (!unique.has(key)) {
      unique.set(key, concept);
    }
  }

  return [...unique.values()].sort((a, b) => a.title.localeCompare(b.title));
}

export function searchGlossaryConcepts(
  concepts: GlossaryConcept[],
  query: string,
) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return concepts;
  }

  return concepts.filter((concept) => {
    const searchableText = [concept.title, concept.description, concept.slug]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
