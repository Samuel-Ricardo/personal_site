import { IInfinityHorizontalCarouselContainer } from '@/@types/props/carousel/horizontal/container';
import { MotionDiv } from '@/components/motion/div.component';

import './container.style.scss';

export const InfinityHorizontalCarouselContainer = (
  props: IInfinityHorizontalCarouselContainer,
) => {
  return (
    <MotionDiv
      {...props}
      className={`${props.className} infinity-horizontal-carousel`}
    >
      {props.children}
    </MotionDiv>
  );
};
