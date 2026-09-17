export type ColorSchemeMode = 'auto' | 'light' | 'dark';
export type ResolvedColorScheme = 'light' | 'dark';

const STORAGE_KEY = 'g7_color_scheme';
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const readColorScheme = (): ColorSchemeMode => {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'light' || saved === 'dark' || saved === 'auto' ? saved : 'auto';
};

const resolveColorScheme = (mode: ColorSchemeMode): ResolvedColorScheme => mode === 'auto'
  ? (window.matchMedia(DARK_MEDIA_QUERY).matches ? 'dark' : 'light')
  : mode;

const applyColorScheme = (mode: ColorSchemeMode) => {
  const effective = resolveColorScheme(mode);

  document.documentElement.dataset.theme = effective;
  document.documentElement.classList.toggle('dark', effective === 'dark');
};

export const getResolvedColorScheme = (): ResolvedColorScheme => resolveColorScheme(readColorScheme());

export const setColorScheme = (mode: ColorSchemeMode) => {
  window.localStorage.setItem(STORAGE_KEY, mode);
  applyColorScheme(mode);
};

export const initializeColorScheme = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);
  const sync = () => applyColorScheme(readColorScheme());
  const syncSystemPreference = () => {
    if (readColorScheme() === 'auto') sync();
  };
  const syncStoredPreference = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) sync();
  };

  sync();
  mediaQuery.addEventListener('change', syncSystemPreference);
  window.addEventListener('storage', syncStoredPreference);
};
