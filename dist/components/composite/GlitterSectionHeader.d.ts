export interface GlitterSectionHeaderProps {
    eyebrow?: string;
    title?: string;
    description?: string;
    headingLevel?: 'h1' | 'h2';
    className?: string;
    editorAttrs?: Record<string, unknown>;
    id?: string;
}
export declare function GlitterSectionHeader({ eyebrow, title, description, headingLevel, className, editorAttrs, id }: GlitterSectionHeaderProps): import("react").JSX.Element;
export declare namespace GlitterSectionHeader {
    var displayName: string;
}
