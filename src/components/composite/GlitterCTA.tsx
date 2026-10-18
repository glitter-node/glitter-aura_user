import { A } from '../basic/A';
import { Div } from '../basic/Div';
import { H2 } from '../basic/H2';
import { P } from '../basic/P';
import { Section } from '../basic/Section';

export interface GlitterCTAProps { title?: string; body?: string; label?: string; href?: string; className?: string; editorAttrs?: Record<string, unknown>; id?: string; }
export function GlitterCTA({ title = '', body = '', label = '', href = '#', className = '', editorAttrs, id }: GlitterCTAProps) {
  return <Section id={id} className={`glitter-cta ${className}`} {...editorAttrs}><Div className="glitter-container glitter-cta-inner"><Div><H2 className="glitter-display glitter-cta-title">{title}</H2><P className="glitter-cta-body">{body}</P></Div><A href={href} className="glitter-solid glitter-action-link">{label}</A></Div></Section>;
}
GlitterCTA.displayName = 'GlitterCTA';
