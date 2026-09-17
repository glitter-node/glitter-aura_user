import { A } from '../basic/A';
import { Div } from '../basic/Div';
import { H2 } from '../basic/H2';
import { P } from '../basic/P';
import { Section } from '../basic/Section';
import { Span } from '../basic/Span';

export interface GlitterEditorialSplitProps { eyebrow?: string; title?: string; body?: string; linkLabel?: string; linkHref?: string; note?: string; className?: string; editorAttrs?: Record<string, unknown>; id?: string; }
export function GlitterEditorialSplit({ eyebrow = '', title = '', body = '', linkLabel = '', linkHref = '#', note = '', className = '', editorAttrs, id }: GlitterEditorialSplitProps) {
  return <Section id={id} className={`glitter-editorial-split ${className}`} {...editorAttrs}><Div className="glitter-editorial-label"><Span className="glitter-kicker">{eyebrow}</Span><Span className="glitter-editorial-note">{note}</Span></Div><Div className="glitter-editorial-content"><H2 className="glitter-display glitter-editorial-title">{title}</H2><P className="glitter-editorial-body">{body}</P>{linkLabel && <A href={linkHref} className="glitter-text-link">{linkLabel}</A>}</Div></Section>;
}
GlitterEditorialSplit.displayName = 'GlitterEditorialSplit';
