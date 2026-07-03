import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
}

export function Button({
  className,
  variant = "secondary",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-slate-950 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200",
    secondary:
      "cursor-pointer border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900",
    ghost:
      "cursor-pointer text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",
    outline:
      "cursor-pointer border border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition",
        "focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
