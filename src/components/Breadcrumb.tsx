import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
    >
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          {item.href ? (
            <Link
              className="transition hover:text-slate-900 dark:hover:text-slate-100"
              to={item.href}
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && <ChevronRight size={13} />}
        </span>
      ))}
    </nav>
  );
}
