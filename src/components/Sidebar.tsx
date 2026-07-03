import { Heart, Home, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn";
import { SidebarCategories } from "./SidebarCategories";

const navItems = [
  { label: "Início", href: "/", icon: Home },
  { label: "Busca", href: "/busca", icon: Search },
  { label: "Favoritos", href: "/favoritos", icon: Heart },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col overflow-y-auto border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900",
        className,
      )}
    >
      <nav className="space-y-0.5 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                  isActive
                    ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100",
                )
              }
            >
              <Icon size={18} strokeWidth={1.75} />
              {item.label}
            </NavLink>
          );
        })}

        <SidebarCategories />
      </nav>
    </aside>
  );
}
