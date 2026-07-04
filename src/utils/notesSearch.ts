import type { ContentNotes } from "../types/notes";

function collectNotesText(notes: ContentNotes): string[] {
  const parts: string[] = [notes.title, notes.slug];

  for (const section of notes.sections) {
    parts.push(section.title);
    parts.push(...(section.paragraphs ?? []));

    for (const subsection of section.subsections ?? []) {
      parts.push(subsection.title);
      parts.push(...subsection.paragraphs);
    }
  }

  return parts.filter(Boolean);
}

export function getNotesSearchableText(notes: ContentNotes): string {
  return collectNotesText(notes).join(" ").toLowerCase();
}

export function searchNotes(notesList: ContentNotes[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return notesList;
  }

  return notesList.filter((notes) =>
    getNotesSearchableText(notes).includes(normalizedQuery),
  );
}
