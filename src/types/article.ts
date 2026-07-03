export type LearningStatus =
  | "Não estudado"
  | "Estudando"
  | "Entendido"
  | "Revisar"
  | "Continuar";

export type ExerciseLevel = "Fácil" | "Médio" | "Difícil";

export type ReferenceType = "Livro" | "Documentação" | "Vídeo" | "Artigo";

export interface SectionHeading {
  title: string;
  icon: string;
}

export interface ArticleSection extends SectionHeading {
  id: string;
  content: string[];
}

export interface PracticeExample {
  title: string;
  description: string;
  code?: string;
}

export interface Exercise {
  level: ExerciseLevel;
  title: string;
  prompt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Reference {
  type: ReferenceType;
  title: string;
  url?: string;
}

export interface RevisionHistoryItem {
  date: string;
  description: string;
}

export interface RelatedConcept {
  title: string;
  slug: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  question: string;
  shortAnswer: string;
  category: string;
  subcategory?: string;
  tags: string[];
  updatedAt: string;
  status: LearningStatus;
  isFavorite: boolean;
  sections: ArticleSection[];
  blockHeadings: {
    analogy: SectionHeading;
    practice: SectionHeading;
    commonMistakes: SectionHeading;
    behindTheScenes: SectionHeading;
    relatedConcepts: SectionHeading;
    faq: SectionHeading;
    exercises: SectionHeading;
    selfAssessment: SectionHeading;
    summary: SectionHeading;
    references: SectionHeading;
    revisionHistory: SectionHeading;
  };
  analogy?: string;
  illustration?: string;
  practice: {
    syntax?: string;
    simple: PracticeExample;
    intermediate: PracticeExample;
    real: PracticeExample;
    bad: PracticeExample;
    bestPractices: string[];
  };
  commonMistakes: string[];
  behindTheScenes: string[];
  relatedConcepts: RelatedConcept[];
  faq: FAQItem[];
  exercises: Exercise[];
  selfAssessment: string[];
  summary: string;
  references: Reference[];
  revisionHistory: RevisionHistoryItem[];
}
