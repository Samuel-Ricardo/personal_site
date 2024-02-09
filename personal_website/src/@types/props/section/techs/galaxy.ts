import { ITechGalaxyItemProps } from './item';

export interface ITechGalaxyProps {
  title: string;
  items?: ITechGalaxyItemProps[];
  className?: string;
}
