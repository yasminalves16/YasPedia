import { useUserArticleState } from "../contexts/UserArticleStateContext";
import { cn } from "../utils/cn";

interface SelfAssessmentListProps {
  slug: string;
  items: string[];
}

export function SelfAssessmentList({ slug, items }: SelfAssessmentListProps) {
  const { isSelfAssessmentChecked, toggleSelfAssessment } =
    useUserArticleState();

  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const checked = isSelfAssessmentChecked(slug, item);

        return (
          <li key={item}>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleSelfAssessment(slug, item)}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-rose-500 focus:ring-rose-500/30 dark:border-slate-600"
              />
              <span
                className={cn(
                  "text-sm leading-6",
                  checked
                    ? "text-slate-500 dark:text-slate-400"
                    : "text-slate-700 dark:text-slate-300",
                )}
              >
                {item}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
