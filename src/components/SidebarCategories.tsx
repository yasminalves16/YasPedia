import { ChevronDown, Library } from "lucide-react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { categories } from "../articles";
import { cn } from "../utils/cn";
import { getCategoryItems } from "../utils/categories";

interface SidebarCategoriesProps {
  onNavigate?: () => void;
}

const navItemClass = (isActive: boolean) =>
  cn(
    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
    isActive
      ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100",
  );

export function SidebarCategories({ onNavigate }: SidebarCategoriesProps) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("categoria") ?? categories[0];
  const isCategoriesPage = location.pathname === "/categorias";
  const items = getCategoryItems();

  return (
    <details className="group" open>
      <summary
        className={cn(
          navItemClass(isCategoriesPage),
          "cursor-pointer list-none [&::-webkit-details-marker]:hidden",
        )}
      >
        <Library size={18} strokeWidth={1.75} />
        <span className="flex-1">Categorias</span>
        <ChevronDown
          size={16}
          strokeWidth={1.75}
          className="shrink-0 transition group-open:rotate-180"
        />
      </summary>

      <div className="mt-0.5 space-y-0.5 pl-3">
        {items.map(({ name, icon: Icon, count }) => {
          const isActive = isCategoriesPage && selectedCategory === name;

          return (
            <NavLink
              key={name}
              to={`/categorias?categoria=${encodeURIComponent(name)}`}
              onClick={onNavigate}
              className={() =>
                cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100",
                )
              }
            >
              <Icon
                size={16}
                strokeWidth={1.75}
                className={cn(
                  "shrink-0",
                  isActive ? "text-rose-600 dark:text-rose-400" : "text-slate-500",
                )}
              />
              <span className="min-w-0 flex-1 truncate">{name}</span>
              <span className="shrink-0 text-xs tabular-nums text-slate-400 dark:text-slate-500">
                {count}
              </span>
            </NavLink>
          );
        })}
      </div>
    </details>
  );
}
