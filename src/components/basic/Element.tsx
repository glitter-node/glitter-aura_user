import React from 'react';

export function element<T extends keyof React.JSX.IntrinsicElements>(tag: T) {
  return React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<T>>(({ className = '', children, ...props }, ref) =>
    React.createElement(tag, { ...props, ref, className }, children));
}
