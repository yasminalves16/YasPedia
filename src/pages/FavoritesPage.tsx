import { ContentCard } from "../components/ContentCard";
import { useContentsWithPreferences } from "../hooks/useContentsWithPreferences";

export function FavoritesPage() {
  const contentsWithPreferences = useContentsWithPreferences();
  const favorites = contentsWithPreferences.filter( (content) => content.isFavorite);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
          Favoritos
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Conceitos marcados para consulta recorrente.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {favorites.length > 0 ? (
          favorites.map( (content) => (
            <ContentCard key={content.slug} content={content} />
          ))
        ) : (
          <p className="text-slate-500 dark:text-slate-400">
            Nenhum conhecimento favoritado ainda.
          </p>
        )}
      </div>
    </div>
  );
}
