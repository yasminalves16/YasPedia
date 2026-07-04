import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { LearningStatus } from "../types/content";

const STORAGE_KEY = "yaspedia-content-preferences";
const LEGACY_STORAGE_KEY = "yaspedia-article-preferences";

interface ContentPreferences {
  favoriteOverrides: Record<string, boolean>;
  statusOverrides: Record<string, LearningStatus>;
  selfAssessmentChecked: Record<string, string[]>;
}

interface UserContentStateContextValue {
  isFavorite: (slug: string, defaultValue: boolean) => boolean;
  getStatus: (slug: string, defaultValue: LearningStatus) => LearningStatus;
  isSelfAssessmentChecked: (slug: string, item: string) => boolean;
  toggleFavorite: (slug: string, defaultValue: boolean) => void;
  setStatus: (slug: string, status: LearningStatus) => void;
  toggleSelfAssessment: (slug: string, item: string) => void;
}

const UserContentStateContext =
  createContext<UserContentStateContextValue | null>(null);

function readPreferences(): ContentPreferences {
  try {
    const stored =
      localStorage.getItem(STORAGE_KEY) ??
      localStorage.getItem(LEGACY_STORAGE_KEY);

    if (!stored) {
      return {
        favoriteOverrides: {},
        statusOverrides: {},
        selfAssessmentChecked: {},
      };
    }

    const parsed = JSON.parse(stored) as ContentPreferences;
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

export function UserContentStateProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ContentPreferences>(
    readPreferences,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const value = useMemo<UserContentStateContextValue>(
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
    <UserContentStateContext.Provider value={value}>
      {children}
    </UserContentStateContext.Provider>
  );
}

export function useUserContentState() {
  const context = useContext(UserContentStateContext);
  if (!context) {
    throw new Error(
      "useUserContentState deve ser usado dentro de UserContentStateProvider",
    );
  }
  return context;
}
