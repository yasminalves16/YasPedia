import { Navigate, Route, Routes } from "react-router-dom";
import { Header, HeaderToolbar } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { YasPediaLogo } from "./components/YasPediaLogo";
import { ArticlePage } from "./pages/ArticlePage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/busca" element={<SearchPage />} />
      <Route path="/categorias" element={<CategoriesPage />} />
      <Route path="/glossario" element={<Navigate to="/busca?view=glossario" replace />} />
      <Route path="/favoritos" element={<FavoritesPage />} />
      <Route path="/conceitos/:slug" element={<ArticlePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="lg:hidden">
        <Header />
        <main className="px-5 py-8">
          <div className="mx-auto max-w-6xl">
            <AppRoutes />
          </div>
        </main>
      </div>

      <div className="hidden h-screen lg:grid lg:grid-cols-[16rem_1fr] lg:grid-rows-[3.5rem_1fr]">
        <div className="flex h-14 items-center border-b border-r border-slate-200 bg-slate-50 px-5 dark:border-slate-800 dark:bg-slate-900">
          <YasPediaLogo showSubtitle={false} />
        </div>

        <div className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
          <HeaderToolbar />
        </div>

        <Sidebar className="min-h-0 border-r" />

        <main className="min-h-0 overflow-y-auto bg-white px-8 py-8 dark:bg-slate-950">
          <div className="mx-auto max-w-6xl">
            <AppRoutes />
          </div>
        </main>
      </div>
    </div>
  );
}
