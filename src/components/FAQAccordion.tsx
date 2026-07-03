import type { FAQItem } from "../types/article";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900"
        >
          <summary className="cursor-pointer text-sm font-medium text-slate-950 dark:text-slate-100">
            {item.question}
          </summary>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
