import { HTMLAttributes } from 'react';
import './button.style.scss';

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`${props.className} button`}
      aria-label={props['aria-label'] || 'normal button'}
    >
      {props.children}
    </button>
  );
};
