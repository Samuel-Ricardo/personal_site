import { HTMLAttributes } from 'react';
import './mobile.style.scss';

export const MobileWrapper = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} id="mobile-wrapper">
      {props.children}
    </div>
  );
};
