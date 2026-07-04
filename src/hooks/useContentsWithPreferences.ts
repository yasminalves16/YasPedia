import { useMemo } from "react";
import { contents } from "../content";
import { useUserContentState } from "../contexts/UserContentStateContext";
import type { Content } from "../types/content";

export function useContentsWithPreferences(): Content[] {
  const { isFavorite, getStatus } = useUserContentState();

  return useMemo(
    () =>
      contents.map((content) => ({
        ...content,
        isFavorite: isFavorite(content.slug, content.isFavorite),
        status: getStatus(content.slug, content.status),
      })),
    [isFavorite, getStatus],
  );
}
