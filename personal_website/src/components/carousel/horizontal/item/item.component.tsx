import { ICarouselItem } from '@/@types/props/carousel/horizontal/item';
import { MotionLI } from '@/components/motion/li.component';

export const InfinityHorizontalCarouselItem = (props: ICarouselItem) => {
  return <MotionLI {...props}>{props.children}</MotionLI>;
};
