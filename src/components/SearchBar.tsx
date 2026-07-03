import { Search } from "lucide-react";
import type { ChangeEventHandler } from "react";
import { cn } from "../utils/cn";
import { Input } from "./ui/input";

interface SearchBarProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  variant?: "default" | "compact" | "hero";
  showShortcut?: boolean;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Pesquise na sua base de conhecimento...",
  variant = "default",
  showShortcut = true,
  className,
}: SearchBarProps) {
  const isCompact = variant === "compact";
  const isHero = variant === "hero";

  return (
    <div className={cn("relative", className)}>
      <Search
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-400",
          isHero && "left-5 text-slate-500 dark:text-slate-400",
          isCompact && "left-3",
          !isHero && !isCompact && "left-4",
        )}
        size={isHero ? 20 : isCompact ? 16 : 19}
        strokeWidth={1.75}
      />
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "shadow-none",
          isHero &&
            "h-14 rounded-sm border-slate-300 bg-white pl-14 pr-20 text-base text-slate-800 placeholder:text-slate-500 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100",
          isCompact &&
            cn(
              "h-9 rounded border-slate-300 bg-white pl-9 text-sm dark:border-slate-600 dark:bg-slate-950",
              showShortcut ? "pr-16" : "pr-3",
            ),
          !isHero &&
            !isCompact &&
            "h-11 rounded border-slate-300 bg-white pl-12 pr-14 dark:border-slate-600 dark:bg-slate-950",
        )}
      />
      {showShortcut && (
        <kbd
          className={cn(
            "pointer-events-none absolute top-1/2 hidden -translate-y-1/2 font-medium",
            isHero &&
              "right-4 inline-flex items-center rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-400 dark:border-slate-700 dark:bg-slate-900",
            isCompact &&
              "right-2.5 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400 md:inline-block dark:border-slate-700 dark:bg-slate-800",
            !isHero &&
              !isCompact &&
              "right-3 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] text-slate-400 sm:inline-block dark:border-slate-700 dark:bg-slate-800",
          )}
        >
          ⌘K
        </kbd>
      )}
    </div>
  );
}
