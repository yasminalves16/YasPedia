import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

interface YasPediaLogoProps {
  showSubtitle?: boolean;
  iconOnly?: boolean;
  className?: string;
}

export function YasPediaLogo({
  showSubtitle = true,
  iconOnly = false,
  className,
}: YasPediaLogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-rose-300 dark:bg-rose-400/30">
        <BookOpen
          size={16}
          strokeWidth={2}
          className="text-rose-700 dark:text-rose-300"
        />
      </span>
      {!iconOnly && (
        <span className="min-w-0">
          <span className="block text-[15px] font-extrabold leading-none tracking-tight text-slate-900 dark:text-slate-100">
            YasPedia
          </span>
          {showSubtitle && (
            <span className="mt-1 block text-[10px] font-semibold uppercase leading-none tracking-[0.14em] text-slate-400 dark:text-slate-500">
              Base de Conhecimento
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
