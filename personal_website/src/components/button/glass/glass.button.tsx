import { HTMLAttributes } from 'react';

export const GlassButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`glass-button ${props.className}`}
      {...props}
      aria-label={props['aria-label'] || 'acrylic design button'}
    >
      {props.children}
    </button>
  );
};
