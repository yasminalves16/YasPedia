import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import type { Article } from "../types/article";
import type { RoadmapTopic } from "../types/roadmap";
import { Badge } from "./ui/badge";
import { cn } from "../utils/cn";
import { statusTextStyles } from "../utils/statusStyles";

interface RoadmapTopicRowProps {
  topic: RoadmapTopic;
  article?: Article;
}

export function RoadmapTopicRow({ topic, article }: RoadmapTopicRowProps) {
  if (topic.enabled && article) {
    return (
      <Link
        to={`/conceitos/${article.slug}`}
        className={cn(
          "block rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition",
          "hover:border-rose-300 hover:bg-rose-50/30",
          "dark:border-slate-800 dark:bg-slate-950 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/5",
        )}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              {topic.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {article.shortAnswer}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          <span
            className={cn(
              "shrink-0 text-sm font-medium",
              statusTextStyles[article.status],
            )}
          >
            {article.status}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <div
      aria-disabled="true"
      className={cn(
        "rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-5 py-4",
        "dark:border-slate-800 dark:bg-slate-950/50",
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-400 dark:text-slate-500">
              {topic.title}
            </h3>
            <Badge className="border-dashed text-slate-400 dark:text-slate-500">
              Em breve
            </Badge>
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-400 dark:text-slate-600">
            Este conceito ainda não foi documentado.
          </p>
        </div>
        <Lock
          size={16}
          className="mt-0.5 shrink-0 text-slate-300 dark:text-slate-600"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
