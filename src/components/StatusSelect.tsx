import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LearningStatus } from "../types/article";
import { cn } from "../utils/cn";

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
    <div className="flex items-center gap-2">
      <span className="text-sm text-slate-500 dark:text-slate-400">Status</span>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-8 cursor-pointer items-center gap-1.5 rounded-md bg-slate-50 py-0 pl-2.5 pr-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {value}
          <ChevronDown
            size={14}
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
                    "w-full cursor-pointer px-2.5 py-1.5 text-left text-sm text-slate-900 hover:bg-slate-50",
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
    </div>
  );
}
