import { PropsWithChildren } from 'react';
import './content.style.scss';

export const TestimonyContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="testimony-content">
      <p>{children}</p>
    </div>
  );
};
