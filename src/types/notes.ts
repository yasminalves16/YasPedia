export interface NotesSubsection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface NotesSection {
  id: string;
  title: string;
  paragraphs?: string[];
  subsections?: NotesSubsection[];
}

export interface ContentNotes {
  slug: string;
  title: string;
  paragraphs?: string[];
  sections: NotesSection[];
}
