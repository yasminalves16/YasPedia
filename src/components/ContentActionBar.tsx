import { NotebookPen, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { LearningStatus } from "../types/content";
import { useUserContentState } from "../contexts/UserContentStateContext";
import { copyToClipboard, contentActionButtonClass } from "../utils/contentActionButton";
import { FavoriteButton } from "./FavoriteButton";
import { StatusSelect } from "./StatusSelect";

interface ContentActionBarProps {
  slug: string;
  defaultFavorite: boolean;
  defaultStatus: LearningStatus;
  title: string;
  shareText: string;
  showNotesLink?: boolean;
}

export function ContentActionBar({
  slug,
  defaultFavorite,
  defaultStatus,
  title,
  shareText,
  showNotesLink = false,
}: ContentActionBarProps) {
  const { isFavorite, getStatus, toggleFavorite, setStatus } =
    useUserContentState();
  const favorite = isFavorite(slug, defaultFavorite);
  const status = getStatus(slug, defaultStatus);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await copyToClipboard(url);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      window.prompt("Copie o link:", url);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <FavoriteButton
        active={favorite}
        onClick={() => toggleFavorite(slug, defaultFavorite)}
      />
      <button
        type="button"
        onClick={handleShare}
        aria-live="polite"
        className={contentActionButtonClass}
      >
        <Share2 size={14} strokeWidth={1.9} />
        {linkCopied ? "Link copiado!" : "Compartilhar"}
      </button>
      {showNotesLink && (
        <Link
          to={`/conceitos/${slug}/anotacoes`}
          className={contentActionButtonClass}
        >
          <NotebookPen size={14} strokeWidth={1.9} />
          Ver Anotações Originais
        </Link>
      )}
      <StatusSelect
        value={status}
        onChange={(nextStatus) => setStatus(slug, nextStatus)}
      />
    </div>
  );
}
