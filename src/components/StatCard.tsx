import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

interface StatCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
  to: string;
  iconClassName?: string;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  to,
  iconClassName,
}: StatCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex h-14 items-center justify-between rounded-sm border border-slate-300 bg-slate-50 px-4 transition",
        "hover:border-rose-300 hover:bg-rose-50/40",
        "dark:border-slate-600 dark:bg-slate-950 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/5",
      )}
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <Icon
          size={18}
          strokeWidth={1.75}
          className={cn("shrink-0 text-slate-500", iconClassName)}
        />
        <span className="truncate text-sm text-slate-500 dark:text-slate-400">
          {label}
        </span>
      </div>
      <span className="ml-3 shrink-0 text-lg font-semibold tabular-nums text-slate-700 dark:text-slate-200">
        {value}
      </span>
    </Link>
  );
}
