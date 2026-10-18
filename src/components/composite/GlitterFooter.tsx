import { A } from '../basic/A';
import { Div } from '../basic/Div';
import { Footer } from '../basic/Footer';
import { Nav } from '../basic/Nav';
import { P } from '../basic/P';
import { Span } from '../basic/Span';

export interface GlitterFooterLink { label: string; href: string; }
export interface GlitterFooterProps { siteName?: string; description?: string; primaryLinks?: GlitterFooterLink[]; utilityLinks?: GlitterFooterLink[]; primaryNavLabel?: string; utilityNavLabel?: string; copyright?: string; className?: string; editorAttrs?: Record<string, unknown>; id?: string; }

export function GlitterFooter({ siteName = '', description = '', primaryLinks = [], utilityLinks = [], primaryNavLabel = '', utilityNavLabel = '', copyright = '', className = '', editorAttrs, id }: GlitterFooterProps) {
  return <Footer id={id} className={`glitter-footer-shell ${className}`} {...editorAttrs}>
    <Div className="glitter-container glitter-footer-grid">
      <Div className="glitter-footer-identity"><A href="/" className="glitter-brand">{siteName}</A><P className="glitter-footer-description">{description}</P></Div>
      <Nav aria-label={primaryNavLabel || siteName} className="glitter-footer-links">{primaryLinks.map(link => <A key={link.href} href={link.href}>{link.label}</A>)}</Nav>
      <Nav aria-label={utilityNavLabel || siteName} className="glitter-footer-links glitter-footer-utility">{utilityLinks.map(link => <A key={link.href} href={link.href}>{link.label}</A>)}</Nav>
      <Span className="glitter-footer-copyright">{copyright}</Span>
    </Div>
  </Footer>;
}

GlitterFooter.displayName = 'GlitterFooter';
