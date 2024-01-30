import { HTMLAttributes } from 'react';
import '../../app/style/frosted_glass.scss';

export const FrostedGlassCard = ({
  className,
  children,
  id,
}: HTMLAttributes<HTMLDivElement>) => (
  <div id={id} className={'card frosted-glass ' + className}>
    {children}
  </div>
);
