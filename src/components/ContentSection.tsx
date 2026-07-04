import type { ReactNode } from "react";
import { DynamicIcon } from "./DynamicIcon";

interface ContentSectionProps {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
}

export function ContentSection({
  id,
  title,
  icon,
  children,
}: ContentSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 space-y-3">
      <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50">
        <DynamicIcon
          name={icon}
          size={18}
          strokeWidth={1.75}
          className="shrink-0 text-rose-500 dark:text-rose-400"
          aria-hidden
        />
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
        {children}
      </div>
    </section>
  );
}
