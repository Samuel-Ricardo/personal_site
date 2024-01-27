import './fluorescent.style.scss';
import { PropsWithChildren } from 'react';

export const FluorescentButton = ({ children }: PropsWithChildren) => {
  return (
    <div className="flourescent-container">
      <button>{children}</button>
    </div>
  );
};
