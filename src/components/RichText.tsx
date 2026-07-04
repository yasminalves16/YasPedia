import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { contentBySlug } from "../content";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

export const conceptLinkClassName =
  "font-semibold text-rose-600 underline decoration-rose-300 underline-offset-4 hover:text-rose-800 dark:text-rose-400 dark:decoration-rose-500/50 dark:hover:text-rose-300";

function isExternalLink(target: string) {
  return /^(https?:\/\/|mailto:)/i.test(target);
}

interface RichTextProps {
  text: string;
}

export function RichText({ text }: RichTextProps) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const label = match[1];
    const target = match[2];
    const key = `${match.index}-${label}`;

    if (isExternalLink(target)) {
      parts.push(
        <a
          key={key}
          href={target}
          target="_blank"
          rel="noreferrer"
          className={conceptLinkClassName}
        >
          {label}
        </a>,
      );
    } else {
      const concept = contentBySlug.get(target);
      parts.push(
        <Link
          key={key}
          to={`/conceitos/${target}`}
          title={concept?.shortAnswer}
          className={conceptLinkClassName}
        >
          {label}
        </Link>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
