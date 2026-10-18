export interface GlitterEditorialSplitProps {
    eyebrow?: string;
    title?: string;
    body?: string;
    linkLabel?: string;
    linkHref?: string;
    note?: string;
    className?: string;
    editorAttrs?: Record<string, unknown>;
    id?: string;
}
export declare function GlitterEditorialSplit({ eyebrow, title, body, linkLabel, linkHref, note, className, editorAttrs, id }: GlitterEditorialSplitProps): import("react").JSX.Element;
export declare namespace GlitterEditorialSplit {
    var displayName: string;
}
