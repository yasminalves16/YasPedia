import { Heart } from "lucide-react";
import { cn } from "../utils/cn";

interface FavoriteButtonProps {
  active?: boolean;
  onClick?: () => void;
}

export function FavoriteButton({ active = false, onClick }: FavoriteButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md bg-slate-50 px-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
    >
      <Heart
        size={15}
        strokeWidth={1.9}
        className={cn(active && "fill-current")}
      />
      {active ? "Favoritado" : "Favoritar"}
    </button>
  );
}
