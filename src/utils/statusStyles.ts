import type { LearningStatus } from "../types/article";

export const statusTextStyles: Record<LearningStatus, string> = {
  Entendido: "text-emerald-600 dark:text-emerald-400",
  Estudando: "text-rose-600 dark:text-rose-400",
  Continuar: "text-blue-600 dark:text-blue-400",
  Revisar: "text-amber-600 dark:text-amber-400",
  "Não estudado": "text-slate-500 dark:text-slate-400",
};
