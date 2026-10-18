import { default as React } from 'react';
export declare function element<T extends keyof React.JSX.IntrinsicElements>(tag: T): React.ForwardRefExoticComponent<React.PropsWithoutRef<React.PropsWithoutRef<React.ComponentProps<T>>> & React.RefAttributes<HTMLElement>>;
