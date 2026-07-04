import { RichText } from "./RichText";

interface SectionHighlightListProps {
  items: Array<{ lead: string; body: string }>;
  sectionId: string;
}

export function SectionHighlightList({
  items,
  sectionId,
}: SectionHighlightListProps) {
  return (
    <ul className="space-y-5">
      {items.map((item, index) => (
        <li
          key={`${sectionId}-${index}`}
          className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/50"
        >
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500 dark:bg-rose-400"
            aria-hidden
          />
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-semibold leading-6 text-slate-950 dark:text-slate-50">
              {item.lead}
            </p>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              <RichText text={item.body} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
