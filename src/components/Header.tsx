import { Heart, Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { cn } from "../utils/cn";
import { MobileMenu } from "./MobileMenu";
import { YasPediaLogo } from "./YasPediaLogo";

interface HeaderToolbarProps {
  className?: string;
}

export function HeaderToolbar({ className }: HeaderToolbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={cn(
        "flex h-14 items-center justify-end gap-1 px-6",
        className,
      )}
    >
      <button
        onClick={toggleTheme}
        className="rounded-lg p-2.5 transition hover:bg-slate-100 dark:hover:bg-slate-900"
        aria-label="Alternar tema"
      >
        {theme === "light" ? (
          <Sun size={18} className="text-amber-500" />
        ) : (
          <Moon size={18} className="text-sky-400" />
        )}
      </button>
      <Link
        to="/favoritos"
        className="rounded-lg p-2.5 transition hover:bg-rose-50 dark:hover:bg-rose-500/10"
        aria-label="Favoritos"
      >
        <Heart
          size={18}
          strokeWidth={1.75}
          className="text-rose-500 dark:text-rose-400"
        />
      </Link>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <YasPediaLogo showSubtitle={false} />
          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-300"
            aria-label="Abrir menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
