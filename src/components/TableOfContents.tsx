interface TableOfContentsProps {
  sections: Array<{ id: string; title: string }>;
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <aside className="sticky top-8 hidden h-fit border-l border-slate-200 pl-5 dark:border-slate-700 xl:block">
      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Neste conceito
      </p>
      <nav className="mt-4 space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block text-sm leading-relaxed text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100"
          >
            {section.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
