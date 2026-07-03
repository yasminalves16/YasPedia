import { Link } from "react-router-dom";
import type { GlossaryConcept } from "../utils/glossary";
import { Card } from "./ui/card";

interface GlossaryConceptCardProps {
  concept: GlossaryConcept;
}

export function GlossaryConceptCard({ concept }: GlossaryConceptCardProps) {
  return (
    <Link to={`/conceitos/${concept.slug}`} className="block">
      <Card className="h-full transition hover:border-rose-300 hover:bg-rose-50/30 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/5">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
          {concept.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {concept.description}
        </p>
      </Card>
    </Link>
  );
}
