import type { Exercise } from "../types/article";
import { Card } from "./ui/card";

interface ExerciseCardProps {
  exercise: Exercise;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-400">
        {exercise.level}
      </p>
      <h3 className="font-semibold text-slate-950 dark:text-slate-50">
        {exercise.title}
      </h3>
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
        {exercise.prompt}
      </p>
    </Card>
  );
}
