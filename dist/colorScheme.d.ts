export type ColorSchemeMode = 'auto' | 'light' | 'dark';
export type ResolvedColorScheme = 'light' | 'dark';
export declare const readColorScheme: () => ColorSchemeMode;
export declare const getResolvedColorScheme: () => ResolvedColorScheme;
export declare const setColorScheme: (mode: ColorSchemeMode) => void;
export declare const initializeColorScheme: () => void;
