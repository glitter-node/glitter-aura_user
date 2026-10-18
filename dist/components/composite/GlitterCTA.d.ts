export interface GlitterCTAProps {
    title?: string;
    body?: string;
    label?: string;
    href?: string;
    className?: string;
    editorAttrs?: Record<string, unknown>;
    id?: string;
}
export declare function GlitterCTA({ title, body, label, href, className, editorAttrs, id }: GlitterCTAProps): import("react").JSX.Element;
export declare namespace GlitterCTA {
    var displayName: string;
}
