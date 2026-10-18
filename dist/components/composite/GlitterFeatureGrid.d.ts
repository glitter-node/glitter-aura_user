export interface GlitterFeature {
    title: string;
    body: string;
}
export interface GlitterFeatureGridProps {
    items?: GlitterFeature[];
    className?: string;
    editorAttrs?: Record<string, unknown>;
    id?: string;
}
export declare function GlitterFeatureGrid({ items, className, editorAttrs, id }: GlitterFeatureGridProps): import("react").JSX.Element;
export declare namespace GlitterFeatureGrid {
    var displayName: string;
}
