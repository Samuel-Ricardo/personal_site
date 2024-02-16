import { HTMLAttributes } from 'react';

export const GlassButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`glass-button ${props.className}`} {...props}>
      {props.children}
    </button>
  );
};
