import { Heart } from "lucide-react";
import { contentActionButtonClass } from "../utils/contentActionButton";
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
      className={contentActionButtonClass}
    >
      <Heart
        size={14}
        strokeWidth={1.9}
        className={cn(active && "fill-current")}
      />
      {active ? "Favoritado" : "Favoritar"}
    </button>
  );
}
