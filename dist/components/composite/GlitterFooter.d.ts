export interface GlitterFooterLink {
    label: string;
    href: string;
}
export interface GlitterFooterProps {
    siteName?: string;
    description?: string;
    primaryLinks?: GlitterFooterLink[];
    utilityLinks?: GlitterFooterLink[];
    primaryNavLabel?: string;
    utilityNavLabel?: string;
    copyright?: string;
    className?: string;
    editorAttrs?: Record<string, unknown>;
    id?: string;
}
export declare function GlitterFooter({ siteName, description, primaryLinks, utilityLinks, primaryNavLabel, utilityNavLabel, copyright, className, editorAttrs, id }: GlitterFooterProps): import("react").JSX.Element;
export declare namespace GlitterFooter {
    var displayName: string;
}
