import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface RoadmapGroupSectionProps {
  title: string;
  children: ReactNode;
}

export function RoadmapGroupSection({
  title,
  children,
}: RoadmapGroupSectionProps) {
  return (
    <details
      className="group rounded-xl border border-slate-200 dark:border-slate-800"
      open
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900/50 [&::-webkit-details-marker]:hidden">
        <ChevronDown
          size={16}
          strokeWidth={1.75}
          className="shrink-0 text-slate-400 transition group-open:rotate-180"
        />
        <span>{title}</span>
      </summary>
      <div className="space-y-3 border-t border-slate-200 px-4 py-3 dark:border-slate-800">
        {children}
      </div>
    </details>
  );
}
