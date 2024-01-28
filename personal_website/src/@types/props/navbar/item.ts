import { HTMLMotionProps } from 'framer-motion';

export interface INavbarItemProps extends React.PropsWithChildren {
  href: string;
  li: HTMLMotionProps<'li'>;
}
