import { Link } from "react-router-dom";

interface ConceptLinkProps {
  slug: string;
  label: string;
  description: string;
}

export function ConceptLink({ slug, label, description }: ConceptLinkProps) {
  return (
    <span className="group relative inline-flex">
      <Link
        to={`/conceitos/${slug}`}
        className="font-semibold text-rose-600 underline decoration-rose-300 underline-offset-4 hover:text-rose-800 dark:text-rose-400 dark:decoration-rose-500/50 dark:hover:text-rose-300"
      >
        {label}
      </Link>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 hidden w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-normal leading-6 text-slate-600 shadow-xl group-hover:block dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:shadow-black/40">
        <strong className="block text-slate-950 dark:text-slate-100">{label}</strong>
        {description}
      </span>
    </span>
  );
}
