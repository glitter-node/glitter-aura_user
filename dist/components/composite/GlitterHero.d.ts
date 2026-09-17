export interface GlitterHeroProps {
    eyebrow?: string;
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    className?: string;
    editorAttrs?: Record<string, unknown>;
    id?: string;
}
export declare function GlitterHero({ eyebrow, title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref, className, editorAttrs, id }: GlitterHeroProps): import("react").JSX.Element;
export declare namespace GlitterHero {
    var displayName: string;
}
