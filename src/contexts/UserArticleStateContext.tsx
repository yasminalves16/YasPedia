import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { LearningStatus } from "../types/article";

const STORAGE_KEY = "yaspedia-article-preferences";

interface ArticlePreferences {
  favoriteOverrides: Record<string, boolean>;
  statusOverrides: Record<string, LearningStatus>;
  selfAssessmentChecked: Record<string, string[]>;
}

interface UserArticleStateContextValue {
  isFavorite: (slug: string, defaultValue: boolean) => boolean;
  getStatus: (slug: string, defaultValue: LearningStatus) => LearningStatus;
  isSelfAssessmentChecked: (slug: string, item: string) => boolean;
  toggleFavorite: (slug: string, defaultValue: boolean) => void;
  setStatus: (slug: string, status: LearningStatus) => void;
  toggleSelfAssessment: (slug: string, item: string) => void;
}

const UserArticleStateContext =
  createContext<UserArticleStateContextValue | null>(null);

function readPreferences(): ArticlePreferences {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return {
        favoriteOverrides: {},
        statusOverrides: {},
        selfAssessmentChecked: {},
      };
    }

    const parsed = JSON.parse(stored) as ArticlePreferences;
    return {
      favoriteOverrides: parsed.favoriteOverrides ?? {},
      statusOverrides: parsed.statusOverrides ?? {},
      selfAssessmentChecked: parsed.selfAssessmentChecked ?? {},
    };
  } catch {
    return {
      favoriteOverrides: {},
      statusOverrides: {},
      selfAssessmentChecked: {},
    };
  }
}

export function UserArticleStateProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ArticlePreferences>(
    readPreferences,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const value = useMemo<UserArticleStateContextValue>(
    () => ({
      isFavorite: (slug, defaultValue) =>
        preferences.favoriteOverrides[slug] ?? defaultValue,
      getStatus: (slug, defaultValue) =>
        preferences.statusOverrides[slug] ?? defaultValue,
      isSelfAssessmentChecked: (slug, item) =>
        (preferences.selfAssessmentChecked[slug] ?? []).includes(item),
      toggleFavorite: (slug, defaultValue) => {
        const currentValue = preferences.favoriteOverrides[slug] ?? defaultValue;
        setPreferences((current) => ({
          ...current,
          favoriteOverrides: {
            ...current.favoriteOverrides,
            [slug]: !currentValue,
          },
        }));
      },
      setStatus: (slug, status) => {
        setPreferences((current) => ({
          ...current,
          statusOverrides: { ...current.statusOverrides, [slug]: status },
        }));
      },
      toggleSelfAssessment: (slug, item) => {
        setPreferences((current) => {
          const checked = current.selfAssessmentChecked[slug] ?? [];
          const nextChecked = checked.includes(item)
            ? checked.filter((entry) => entry !== item)
            : [...checked, item];

          return {
            ...current,
            selfAssessmentChecked: {
              ...current.selfAssessmentChecked,
              [slug]: nextChecked,
            },
          };
        });
      },
    }),
    [preferences],
  );

  return (
    <UserArticleStateContext.Provider value={value}>
      {children}
    </UserArticleStateContext.Provider>
  );
}

export function useUserArticleState() {
  const context = useContext(UserArticleStateContext);
  if (!context) {
    throw new Error(
      "useUserArticleState deve ser usado dentro de UserArticleStateProvider",
    );
  }
  return context;
}
