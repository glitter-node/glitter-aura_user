import { Div } from '../basic/Div';
import { H3 } from '../basic/H3';
import { P } from '../basic/P';
import { Span } from '../basic/Span';

export interface GlitterFeature { title: string; body: string; }
export interface GlitterFeatureGridProps { items?: GlitterFeature[]; className?: string; editorAttrs?: Record<string, unknown>; id?: string; }
export function GlitterFeatureGrid({ items = [], className = '', editorAttrs, id }: GlitterFeatureGridProps) {
  return <Div id={id} className={`glitter-feature-grid ${className}`} {...editorAttrs}>{items.map((item, index) => <Div className="glitter-feature-item" key={`${item.title}-${index}`}><Span className="glitter-feature-index">0{index + 1}</Span><Div><H3 className="glitter-feature-title">{item.title}</H3><P className="glitter-feature-body">{item.body}</P></Div></Div>)}</Div>;
}
GlitterFeatureGrid.displayName = 'GlitterFeatureGrid';
