import { HTMLAttributes } from 'react';
import '../../app/style/frosted_glass.scss';

export const FrostedGlassCard = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={'card frosted-glass ' + className}>{children}</div>
);
