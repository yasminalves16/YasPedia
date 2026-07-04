import { Link, Navigate, useParams } from "react-router-dom";
import { contentBySlug } from "../content";
import { notesBySlug } from "../notes";
import { Breadcrumb } from "../components/Breadcrumb";
import { Card } from "../components/ui/card";
import { TableOfContents } from "../components/TableOfContents";
import { contentActionButtonClass } from "../utils/contentActionButton";
import { cn } from "../utils/cn";
import { useScrollToHash } from "../hooks/useScrollToHash";

function NotesParagraph({ text }: { text: string }) {
  if (/^https?:\/\//.test(text.trim())) {
    return (
      <p>
        <a
          href={text.trim()}
          target="_blank"
          rel="noreferrer"
          className="break-all font-medium text-rose-600 underline decoration-rose-300 underline-offset-4 hover:text-rose-800 dark:text-rose-400 dark:decoration-rose-500/50 dark:hover:text-rose-300"
        >
          {text.trim()}
        </a>
      </p>
    );
  }

  return <p>{text}</p>;
}

export function NotesPage() {
  const { slug } = useParams();
  const notes = slug ? notesBySlug.get(slug) : undefined;
  const content = slug ? contentBySlug.get(slug) : undefined;
  useScrollToHash();

  if (!notes || !content) {
    return <Navigate to="/" replace />;
  }

  const tableSections = notes.sections.flatMap((section) => {
    const items = [{ id: section.id, title: section.title }];

    if (section.subsections) {
      items.push(
        ...section.subsections.map((subsection) => ({
          id: subsection.id,
          title: subsection.title,
        })),
      );
    }

    return items;
  });

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_260px]">
      <div className="min-w-0 space-y-8">
        <header className="space-y-4">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              {
                label: content.category,
                href: `/categorias?categoria=${encodeURIComponent(content.category)}`,
              },
              {
                label: content.title,
                href: `/conceitos/${content.slug}`,
              },
              { label: "Anotações originais" },
            ]}
          />

          <div className="space-y-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50 md:text-3xl">
              {notes.title}
            </h1>

            <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Minhas anotações originais sobre este conceito.
            </p>

            <Link
              to={`/conceitos/${content.slug}`}
              className={cn(contentActionButtonClass, "inline-flex w-fit")}
            >
              Voltar ao conteúdo
            </Link>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />
        </header>

        <div className="space-y-10">
          {notes.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                {section.title}
              </h2>

              {section.paragraphs && section.paragraphs.length > 0 && (
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {section.paragraphs.map((paragraph, index) => (
                    <NotesParagraph
                      key={`${section.id}-p-${index}`}
                      text={paragraph}
                    />
                  ))}
                </div>
              )}

              {section.subsections && (
                <div className="mt-6 space-y-8">
                  {section.subsections.map((subsection) => (
                    <div
                      key={subsection.id}
                      id={subsection.id}
                      className="scroll-mt-24"
                    >
                      <Card className="space-y-3 p-5">
                        <h3 className="text-base font-semibold text-slate-950 dark:text-slate-50">
                          {subsection.title}
                        </h3>
                        <div className="space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                          {subsection.paragraphs.map((paragraph, index) => (
                            <NotesParagraph
                              key={`${subsection.id}-p-${index}`}
                              text={paragraph}
                            />
                          ))}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <TableOfContents sections={tableSections} />
    </div>
  );
}
