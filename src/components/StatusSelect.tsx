import { ChevronDown, CircleDot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LearningStatus } from "../types/content";
import { cn } from "../utils/cn";
import { contentActionButtonClass } from "../utils/contentActionButton";

const statusOptions: LearningStatus[] = [
  "Não estudado",
  "Estudando",
  "Entendido",
  "Revisar",
  "Continuar",
];

interface StatusSelectProps {
  value: LearningStatus;
  onChange: (status: LearningStatus) => void;
}

export function StatusSelect({ value, onChange }: StatusSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={cn(contentActionButtonClass, "pr-2")}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Status: ${value}`}
      >
        <CircleDot size={14} strokeWidth={1.9} />
        {value}
        <ChevronDown
          size={14}
          strokeWidth={1.9}
          className={cn("text-slate-400 transition", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-20 mt-1 min-w-[9.5rem] overflow-hidden rounded-md border border-slate-200 bg-white py-0.5 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/40"
        >
          {statusOptions.map((status) => (
            <li key={status} role="option" aria-selected={status === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(status);
                  setOpen(false);
                }}
                className={cn(
                  "w-full cursor-pointer px-2.5 py-1.5 text-left text-[12px] text-slate-900 hover:bg-slate-50",
                  "dark:text-slate-100 dark:hover:bg-slate-800",
                  status === value &&
                    "bg-slate-50 font-medium dark:bg-slate-800",
                )}
              >
                {status}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
