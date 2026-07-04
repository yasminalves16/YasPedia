import { computerNotes } from "../content/computer/notes";
import type { ContentNotes } from "../types/notes";

/**
 * Anotações pessoais — não entram na busca geral nem no glossário.
 * Use /busca?view=notas e searchNotes() para pesquisar notas.
 */
export const contentNotes: ContentNotes[] = [computerNotes];

export const notesBySlug = new Map(
  contentNotes.map((notes) => [notes.slug, notes]),
);

export function hasContentNotes(slug: string): boolean {
  return notesBySlug.has(slug);
}

export type { ContentNotes };
