import { Link } from "react-router-dom";
import type { Content } from "../types/content";
import type { RoadmapTopic } from "../types/roadmap";
import { Badge } from "./ui/badge";
import { cn } from "../utils/cn";
import { statusTextStyles } from "../utils/statusStyles";

interface RoadmapTopicRowProps {
  topic: RoadmapTopic;
  content?: Content;
}

export function RoadmapTopicRow({ topic, content }: RoadmapTopicRowProps) {
  if (topic.enabled && content) {
    return (
      <Link
        to={`/conceitos/${content.slug}`}
        className={cn(
          "block rounded-xl border border-slate-200 bg-white px-5 py-4 transition",
          "hover:border-rose-300 hover:bg-rose-50/30",
          "dark:border-slate-800 dark:bg-slate-950 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/5",
        )}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              {content.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {content.shortAnswer}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {content.tags.slice(0, 3).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          <span
            className={cn(
              "shrink-0 text-sm font-medium",
              statusTextStyles[content.status],
            )}
          >
            {content.status}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-5 py-4",
        "dark:border-slate-800 dark:bg-slate-900/30",
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-slate-500 dark:text-slate-400">
            {topic.title}
          </h3>
          {topic.group && (
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              {topic.group}
            </p>
          )}
        </div>
        <span className="shrink-0 text-sm text-slate-400 dark:text-slate-500">
          Em breve
        </span>
      </div>
    </div>
  );
}
