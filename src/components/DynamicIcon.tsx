import type { LucideIcon, LucideProps } from "lucide-react";
import {
  AlertTriangle,
  AlignLeft,
  BookOpen,
  CircleHelp,
  Code2,
  Cpu,
  FileText,
  History,
  Lightbulb,
  Library,
  Link2,
  ListChecks,
  PencilLine,
} from "lucide-react";

function toPascalCase(name: string): string {
  return name
    .trim()
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

const iconRegistry: Record<string, LucideIcon> = {
  AlertTriangle,
  AlignLeft,
  BookOpen,
  CircleHelp,
  Code2,
  Cpu,
  FileText,
  History,
  Lightbulb,
  Library,
  Link2,
  ListChecks,
  PencilLine,
  "alert-triangle": AlertTriangle,
  "align-left": AlignLeft,
  "book-open": BookOpen,
  "circle-help": CircleHelp,
  "code-2": Code2,
  cpu: Cpu,
  "file-text": FileText,
  history: History,
  lightbulb: Lightbulb,
  library: Library,
  "link-2": Link2,
  "list-checks": ListChecks,
  "pencil-line": PencilLine,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const normalizedName = name.trim().toLowerCase();
  const Icon =
    iconRegistry[name] ??
    iconRegistry[normalizedName] ??
    iconRegistry[toPascalCase(name)] ??
    FileText;

  return <Icon {...props} />;
}

export function registerIcons(icons: Record<string, LucideIcon>) {
  Object.assign(iconRegistry, icons);
}
