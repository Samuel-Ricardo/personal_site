import { HTMLAttributes } from 'react';
import './button.style.scss';

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`${props.className} button`}>
      {props.children}
    </button>
  );
};
