import { Heart, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { categories } from "../articles";
import type { LearningStatus } from "../types/article";
import { cn } from "../utils/cn";

const statusOptions: LearningStatus[] = [
  "Não estudado",
  "Estudando",
  "Entendido",
  "Revisar",
  "Continuar",
];

const pillClass = (isSelected: boolean) =>
  cn(
    "rounded-full border px-4 py-1.5 text-sm font-medium transition",
    isSelected
      ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-400"
      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-600",
  );

interface KnowledgeFiltersProps {
  resultCount: number;
  favoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  selectedStatuses: LearningStatus[];
  onToggleStatus: (status: LearningStatus) => void;
  selectedCategories?: string[];
  onToggleCategory?: (category: string) => void;
}

export function KnowledgeFilters({
  resultCount,
  favoritesOnly,
  onToggleFavoritesOnly,
  selectedStatuses,
  onToggleStatus,
  selectedCategories = [],
  onToggleCategory,
}: KnowledgeFiltersProps) {
  const [open, setOpen] = useState(false);
  const showCategories = Boolean(onToggleCategory);

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition",
          open
            ? "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400"
            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
        )}
      >
        <SlidersHorizontal size={16} strokeWidth={1.75} />
        Filtros
      </button>

      {open && (
        <div className="space-y-5 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
              Favoritos
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onToggleFavoritesOnly}
                className={cn(
                  "inline-flex items-center gap-2",
                  pillClass(favoritesOnly),
                )}
              >
                <Heart size={14} strokeWidth={1.75} />
                Apenas favoritos
              </button>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
              Status
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => onToggleStatus(status)}
                  className={pillClass(selectedStatuses.includes(status))}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {showCategories && onToggleCategory && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                Categoria
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => onToggleCategory(category)}
                    className={pillClass(selectedCategories.includes(category))}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <p className="text-sm text-slate-500 dark:text-slate-400">
        Mostrando{" "}
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {resultCount}
        </span>{" "}
        {resultCount === 1 ? "conhecimento" : "conhecimentos"}
      </p>
    </div>
  );
}
