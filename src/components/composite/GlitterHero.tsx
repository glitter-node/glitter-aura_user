import { A } from '../basic/A';
import { Div } from '../basic/Div';
import { H1 } from '../basic/H1';
import { P } from '../basic/P';
import { Section } from '../basic/Section';
import { Span } from '../basic/Span';

export interface GlitterHeroProps { eyebrow?: string; title?: string; description?: string; primaryLabel?: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string; className?: string; editorAttrs?: Record<string, unknown>; id?: string; }

export function GlitterHero({ eyebrow = '', title = '', description = '', primaryLabel = '', primaryHref = '#', secondaryLabel = '', secondaryHref = '#', className = '', editorAttrs, id }: GlitterHeroProps) {
  return <Section id={id} className={`glitter-hero ${className}`} {...editorAttrs}><Div className="glitter-container glitter-hero-grid"><Div className="glitter-hero-copy"><Span className="glitter-kicker">{eyebrow}</Span><H1 className="glitter-display glitter-hero-title">{title}</H1><P className="glitter-hero-description">{description}</P><Div className="glitter-hero-actions"><A href={primaryHref} className="glitter-solid glitter-action-link">{primaryLabel}</A>{secondaryLabel && <A href={secondaryHref} className="glitter-text-link">{secondaryLabel}</A>}</Div></Div><Div className="glitter-hero-visual" aria-hidden="true"><Div className="glitter-hero-orbit glitter-hero-orbit-one" /><Div className="glitter-hero-orbit glitter-hero-orbit-two" /><Span className="glitter-hero-mark">GA</Span></Div></Div></Section>;
}

GlitterHero.displayName = 'GlitterHero';
