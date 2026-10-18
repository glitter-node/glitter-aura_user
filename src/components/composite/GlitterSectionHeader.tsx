import { Div } from '../basic/Div';
import { H1 } from '../basic/H1';
import { H2 } from '../basic/H2';
import { P } from '../basic/P';
import { Span } from '../basic/Span';

export interface GlitterSectionHeaderProps { eyebrow?: string; title?: string; description?: string; headingLevel?: 'h1' | 'h2'; className?: string; editorAttrs?: Record<string, unknown>; id?: string; }
export function GlitterSectionHeader({ eyebrow = '', title = '', description = '', headingLevel = 'h2', className = '', editorAttrs, id }: GlitterSectionHeaderProps) {
  const Heading = headingLevel === 'h1' ? H1 : H2;
  return <Div id={id} className={`glitter-section-header ${className}`} {...editorAttrs}><Span className="glitter-kicker">{eyebrow}</Span><Heading className="glitter-display glitter-section-title">{title}</Heading>{description && <P className="glitter-section-description">{description}</P>}</Div>;
}
GlitterSectionHeader.displayName = 'GlitterSectionHeader';
