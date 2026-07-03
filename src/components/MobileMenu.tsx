import {
  Heart,
  Home,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { cn } from "../utils/cn";
import { SidebarCategories } from "./SidebarCategories";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Início", href: "/", icon: Home },
  { label: "Busca", href: "/busca", icon: Search },
  { label: "Favoritos", href: "/favoritos", icon: Heart },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { theme, toggleTheme } = useTheme();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        className="absolute inset-0 bg-slate-950/40"
        aria-label="Fechar menu"
        onClick={onClose}
      />
      <aside className="absolute right-0 top-0 flex h-full w-72 flex-col border-l border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Menu
          </p>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-6 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                    isActive
                      ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                      : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900",
                  )
                }
              >
                <Icon size={18} strokeWidth={1.75} />
                {item.label}
              </NavLink>
            );
          })}

          <SidebarCategories onNavigate={onClose} />
        </nav>

        <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            {theme === "light" ? "Modo escuro" : "Modo claro"}
          </button>
        </div>
      </aside>
    </div>
  );
}
