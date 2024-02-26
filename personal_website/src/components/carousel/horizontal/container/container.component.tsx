import { IInfinityHorizontalCarouselContainer } from '@/@types/props/carousel/horizontal/container';
import { MotionDiv } from '@/components/motion/div.component';

import './container.style.scss';
import { MODULES } from '@/modules/app.factory';
import { MotionUL } from '@/components/motion/ul.component';

export const InfinityHorizontalCarouselContainer = async (
  props: IInfinityHorizontalCarouselContainer,
) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.INFINITY.SLIDE();

  return (
    <MotionDiv
      {...props}
      className={`${props.className} infinity-horizontal-carousel`}
    >
      {/* <div className=" h-full min-w-[10%] z-20 justify-start bg-gradient-to-r from-primary to-transparent" /> */}
      {/* <div className=" h-full min-w-[10%] translate-x-[80vw] z-20 justify-start bg-gradient-to-l from-primary to-transparent" /> */}
      <MotionUL {...animation()}>{props.children as any}</MotionUL>
      <MotionUL {...animation()}>{props.children as any}</MotionUL>
    </MotionDiv>
  );
};
