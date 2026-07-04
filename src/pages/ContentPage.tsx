import { Navigate, useParams } from "react-router-dom";
import { contentBySlug } from "../content";
import type { PracticeExample } from "../types/content";
import { ContentHeader } from "../components/ContentHeader";
import { ContentSection } from "../components/ContentSection";
import { CodeBlock } from "../components/CodeBlock";
import { ConceptLink } from "../components/ConceptLink";
import { ExerciseCard } from "../components/ExerciseCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { ReferenceCard } from "../components/ReferenceCard";
import { RichText } from "../components/RichText";
import { SectionHighlightList } from "../components/SectionHighlightList";
import { SelfAssessmentList } from "../components/SelfAssessmentList";
import { TableOfContents } from "../components/TableOfContents";
import { Card } from "../components/ui/card";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function ContentPage() {
  const { slug } = useParams();
  const content = slug ? contentBySlug.get(slug) : undefined;
  useScrollToHash();

  if (!content) {
    return <Navigate to="/" replace />;
  }

  const { blockHeadings } = content;

  const practiceExamples: PracticeExample[] = [
    content.practice.simple,
    content.practice.intermediate,
    content.practice.real,
    ...(content.practice.bad ? [content.practice.bad] : []),
  ];

  const tableSections = [
    ...content.sections.map((section) => ({
      id: section.id,
      title: section.title,
    })),
    ...(content.analogy
      ? [{ id: "analogia", title: blockHeadings.analogy.title }]
      : []),
    { id: "na-pratica", title: blockHeadings.practice.title },
    ...(content.commonMistakes && content.commonMistakes.length > 0
      ? [{ id: "erros-comuns", title: blockHeadings.commonMistakes.title }]
      : []),
    ...(content.behindTheScenes.length > 0
      ? [{ id: "por-tras-dos-panos", title: blockHeadings.behindTheScenes.title }]
      : []),
    ...(content.faq.length > 0
      ? [{ id: "faq", title: blockHeadings.faq.title }]
      : []),
    ...(content.exercises.length > 0
      ? [{ id: "exercicios", title: blockHeadings.exercises.title }]
      : []),
    ...(content.selfAssessment.length > 0
      ? [{ id: "autoavaliacao", title: blockHeadings.selfAssessment.title }]
      : []),
    ...(content.summary
      ? [{ id: "resumo", title: blockHeadings.summary.title }]
      : []),
    ...(content.relatedConcepts.length > 0
      ? [
          {
            id: "conceitos-relacionados",
            title: blockHeadings.relatedConcepts.title,
          },
        ]
      : []),
    ...(content.references.length > 0
      ? [{ id: "referencias", title: blockHeadings.references.title }]
      : []),
    ...(content.revisionHistory.length > 0
      ? [{ id: "historico", title: blockHeadings.revisionHistory.title }]
      : []),
  ];

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_260px]">
      <article className="min-w-0 space-y-8">
        <ContentHeader content={content} />

        {content.sections.map((section) => (
          <ContentSection
            key={section.id}
            id={section.id}
            title={section.title}
            icon={section.icon}
          >
            {section.items ? (
              <SectionHighlightList
                items={section.items}
                sectionId={section.id}
              />
            ) : (
              section.content.map((paragraph, index) => (
                <p key={`${section.id}-${index}`}>
                  <RichText text={paragraph} />
                </p>
              ))
            )}
          </ContentSection>
        ))}

        {content.analogy && (
          <ContentSection
            id="analogia"
            title={blockHeadings.analogy.title}
            icon={blockHeadings.analogy.icon}
          >
            <Card className="border-emerald-200 bg-emerald-50/60 p-4 text-sm dark:border-emerald-500/30 dark:bg-emerald-500/10">
              <p className="font-bold text-emerald-700 dark:text-emerald-400">
                {content.analogy}
              </p>
              {content.illustration && (
                <p className="mt-4 leading-6 text-slate-700 dark:text-slate-300">
                  {content.illustration}
                </p>
              )}
            </Card>
          </ContentSection>
        )}

        <ContentSection
          id="na-pratica"
          title={blockHeadings.practice.title}
          icon={blockHeadings.practice.icon}
        >
          {content.practice.syntax && (
            <div>
              <h3 className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                Sintaxe
              </h3>
              <CodeBlock code={content.practice.syntax} />
            </div>
          )}
          {practiceExamples.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {practiceExamples.map((example) => (
                <Card key={example.title} className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                    {example.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {example.description}
                  </p>
                  {example.code && <CodeBlock code={example.code} />}
                </Card>
              ))}
            </div>
          )}
          {content.practice.bestPractices &&
            content.practice.bestPractices.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                  Boas práticas
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {content.practice.bestPractices.map((practice) => (
                    <li key={practice}>{practice}</li>
                  ))}
                </ul>
              </div>
            )}
        </ContentSection>

        {content.commonMistakes && content.commonMistakes.length > 0 && (
          <ContentSection
            id="erros-comuns"
            title={blockHeadings.commonMistakes.title}
            icon={blockHeadings.commonMistakes.icon}
          >
            <ul className="list-disc space-y-2 pl-5">
              {content.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </ContentSection>
        )}

        {content.behindTheScenes.length > 0 && (
          <ContentSection
            id="por-tras-dos-panos"
            title={blockHeadings.behindTheScenes.title}
            icon={blockHeadings.behindTheScenes.icon}
          >
            {content.behindTheScenes.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>
                <RichText text={paragraph} />
              </p>
            ))}
          </ContentSection>
        )}

        {content.faq.length > 0 && (
          <ContentSection
            id="faq"
            title={blockHeadings.faq.title}
            icon={blockHeadings.faq.icon}
          >
            <FAQAccordion items={content.faq} />
          </ContentSection>
        )}

        {content.exercises.length > 0 && (
          <ContentSection
            id="exercicios"
            title={blockHeadings.exercises.title}
            icon={blockHeadings.exercises.icon}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {content.exercises.map((exercise) => (
                <ExerciseCard key={exercise.title} exercise={exercise} />
              ))}
            </div>
          </ContentSection>
        )}

        {content.selfAssessment.length > 0 && (
          <ContentSection
            id="autoavaliacao"
            title={blockHeadings.selfAssessment.title}
            icon={blockHeadings.selfAssessment.icon}
          >
            <SelfAssessmentList
              slug={content.slug}
              items={content.selfAssessment}
            />
          </ContentSection>
        )}

        {content.summary && (
          <ContentSection
            id="resumo"
            title={blockHeadings.summary.title}
            icon={blockHeadings.summary.icon}
          >
            <Card>
              <p>{content.summary}</p>
            </Card>
          </ContentSection>
        )}

        {content.relatedConcepts.length > 0 && (
          <ContentSection
            id="conceitos-relacionados"
            title={blockHeadings.relatedConcepts.title}
            icon={blockHeadings.relatedConcepts.icon}
          >
            <div className="flex flex-wrap gap-3">
              {content.relatedConcepts.map((concept) => (
                <ConceptLink
                  key={concept.slug}
                  slug={concept.slug}
                  label={concept.title}
                  description={concept.description}
                />
              ))}
            </div>
          </ContentSection>
        )}

        {content.references.length > 0 && (
          <ContentSection
            id="referencias"
            title={blockHeadings.references.title}
            icon={blockHeadings.references.icon}
          >
            <div className="space-y-2">
              {content.references.map((reference) => (
                <ReferenceCard key={reference.title} reference={reference} />
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Este conteúdo foi escrito com base nas referências abaixo, mas
              explicado utilizando minhas próprias palavras para facilitar meu
              aprendizado e futuras consultas.
            </p>
          </ContentSection>
        )}

        {content.revisionHistory.length > 0 && (
          <ContentSection
            id="historico"
            title={blockHeadings.revisionHistory.title}
            icon={blockHeadings.revisionHistory.icon}
          >
            <ul className="space-y-2">
              {content.revisionHistory.map((item) => (
                <li
                  key={`${item.date}-${item.description}`}
                  className="flex flex-wrap gap-x-3 text-sm leading-6"
                >
                  <time
                    dateTime={item.date}
                    className="shrink-0 tabular-nums text-slate-400 dark:text-slate-500"
                  >
                    {item.date}
                  </time>
                  <span className="text-slate-700 dark:text-slate-300">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </ContentSection>
        )}
      </article>

      <TableOfContents sections={tableSections} />
    </div>
  );
}
