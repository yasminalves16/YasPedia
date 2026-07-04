import { Navigate, useParams } from "react-router-dom";
import { articleBySlug } from "../articles";
import { ArticleHeader } from "../components/ArticleHeader";
import { ArticleSection } from "../components/ArticleSection";
import { CodeBlock } from "../components/CodeBlock";
import { ConceptLink } from "../components/ConceptLink";
import { ExerciseCard } from "../components/ExerciseCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { ReferenceCard } from "../components/ReferenceCard";
import { SelfAssessmentList } from "../components/SelfAssessmentList";
import { TableOfContents } from "../components/TableOfContents";
import { Card } from "../components/ui/card";

export function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? articleBySlug.get(slug) : undefined;

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const { blockHeadings } = article;

  const tableSections = [
    ...article.sections.map((section) => ({
      id: section.id,
      title: section.title,
    })),
    { id: "analogia", title: blockHeadings.analogy.title },
    { id: "na-pratica", title: blockHeadings.practice.title },
    { id: "erros-comuns", title: blockHeadings.commonMistakes.title },
    { id: "por-tras-dos-panos", title: blockHeadings.behindTheScenes.title },
    { id: "conceitos-relacionados", title: blockHeadings.relatedConcepts.title },
    { id: "faq", title: blockHeadings.faq.title },
    { id: "exercicios", title: blockHeadings.exercises.title },
    { id: "autoavaliacao", title: blockHeadings.selfAssessment.title },
    { id: "resumo", title: blockHeadings.summary.title },
    { id: "referencias", title: blockHeadings.references.title },
    { id: "historico", title: blockHeadings.revisionHistory.title },
  ];

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_260px]">
      <article className="min-w-0 space-y-8">
        <ArticleHeader article={article} />

        {article.sections.map((section) => (
          <ArticleSection
            key={section.id}
            id={section.id}
            title={section.title}
            icon={section.icon}
          >
            {section.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ArticleSection>
        ))}

        {article.analogy && (
          <ArticleSection
            id="analogia"
            title={blockHeadings.analogy.title}
            icon={blockHeadings.analogy.icon}
          >
            <Card className="border-emerald-200 bg-emerald-50/60 p-4 text-sm dark:border-emerald-500/30 dark:bg-emerald-500/10">
              <p>
                <strong className="text-emerald-700 dark:text-emerald-400">
                  Analogia:{" "}
                </strong>
                {article.analogy}
              </p>
              {article.illustration && (
                <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {article.illustration}
                </p>
              )}
            </Card>
          </ArticleSection>
        )}

        <ArticleSection
          id="na-pratica"
          title={blockHeadings.practice.title}
          icon={blockHeadings.practice.icon}
        >
          {article.practice.syntax && (
            <div>
              <h3 className="text-sm font-semibold text-slate-950 dark:text-slate-50">Sintaxe</h3>
              <CodeBlock code={article.practice.syntax} />
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {[
              article.practice.simple,
              article.practice.intermediate,
              article.practice.real,
              article.practice.bad,
            ].map((example) => (
              <Card key={example.title} className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-950 dark:text-slate-50">{example.title}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {example.description}
                </p>
                {example.code && <CodeBlock code={example.code} />}
              </Card>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-950 dark:text-slate-50">Boas práticas</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {article.practice.bestPractices.map((practice) => (
                <li key={practice}>{practice}</li>
              ))}
            </ul>
          </div>
        </ArticleSection>

        <ArticleSection
          id="erros-comuns"
          title={blockHeadings.commonMistakes.title}
          icon={blockHeadings.commonMistakes.icon}
        >
          <ul className="list-disc space-y-2 pl-5">
            {article.commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </ArticleSection>

        <ArticleSection
          id="por-tras-dos-panos"
          title={blockHeadings.behindTheScenes.title}
          icon={blockHeadings.behindTheScenes.icon}
        >
          {article.behindTheScenes.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ArticleSection>

        <ArticleSection
          id="conceitos-relacionados"
          title={blockHeadings.relatedConcepts.title}
          icon={blockHeadings.relatedConcepts.icon}
        >
          <div className="flex flex-wrap gap-3">
            {article.relatedConcepts.map((concept) => (
              <ConceptLink
                key={concept.slug}
                slug={concept.slug}
                label={concept.title}
                description={concept.description}
              />
            ))}
          </div>
        </ArticleSection>

        <ArticleSection
          id="faq"
          title={blockHeadings.faq.title}
          icon={blockHeadings.faq.icon}
        >
          <FAQAccordion items={article.faq} />
        </ArticleSection>

        <ArticleSection
          id="exercicios"
          title={blockHeadings.exercises.title}
          icon={blockHeadings.exercises.icon}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {article.exercises.map((exercise) => (
              <ExerciseCard key={exercise.title} exercise={exercise} />
            ))}
          </div>
        </ArticleSection>

        <ArticleSection
          id="autoavaliacao"
          title={blockHeadings.selfAssessment.title}
          icon={blockHeadings.selfAssessment.icon}
        >
          <SelfAssessmentList
            slug={article.slug}
            items={article.selfAssessment}
          />
        </ArticleSection>

        <ArticleSection
          id="resumo"
          title={blockHeadings.summary.title}
          icon={blockHeadings.summary.icon}
        >
          <Card>
            <p>{article.summary}</p>
          </Card>
        </ArticleSection>

        <ArticleSection
          id="referencias"
          title={blockHeadings.references.title}
          icon={blockHeadings.references.icon}
        >
          <div className="space-y-2">
            {article.references.map((reference) => (
              <ReferenceCard key={reference.title} reference={reference} />
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
            Este artigo foi escrito com base nas referências abaixo, mas explicado
            utilizando minhas próprias palavras para facilitar meu aprendizado e
            futuras consultas.
          </p>
        </ArticleSection>

        <ArticleSection
          id="historico"
          title={blockHeadings.revisionHistory.title}
          icon={blockHeadings.revisionHistory.icon}
        >
          <ul className="space-y-2">
            {article.revisionHistory.map((item) => (
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
        </ArticleSection>
      </article>

      <TableOfContents sections={tableSections} />
    </div>
  );
}
