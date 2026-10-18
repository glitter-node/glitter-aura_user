export interface GlitterNavItem {
    label: string;
    href: string;
    activePaths?: string[];
}
export interface GlitterHeaderProps {
    brandName?: string;
    navItems?: GlitterNavItem[];
    loginLabel?: string;
    accountLabel?: string;
    logoutLabel?: string;
    adminLabel?: string;
    myPageLabel?: string;
    nickname?: string | null;
    name?: string | null;
    isAdmin?: boolean;
    authenticated?: boolean;
    menuLabel?: string;
    closeLabel?: string;
    loginHref?: string;
    myPageHref?: string;
    onLogout?: () => void;
    myPageActivePaths?: string[];
    themeToggleDarkLabel?: string;
    themeToggleLightLabel?: string;
    className?: string;
    editorAttrs?: Record<string, unknown>;
    id?: string;
}
export declare function GlitterHeader({ brandName, navItems, loginLabel, accountLabel, logoutLabel, adminLabel, myPageLabel, myPageActivePaths, nickname, name, isAdmin, authenticated, menuLabel, closeLabel, loginHref, myPageHref, onLogout, themeToggleDarkLabel, themeToggleLightLabel, className, editorAttrs, id }: GlitterHeaderProps): import("react").JSX.Element;
export declare namespace GlitterHeader {
    var displayName: string;
}
