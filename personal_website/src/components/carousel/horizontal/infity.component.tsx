import { ICarouselHorizontalInfinity } from '@/@types/props/carousel/horizontal/infinity';
import { InfinityHorizontalCarouselContainer } from './container/container.component';
import { InfinityHorizontalCarouselItem } from './item/item.component';
import { MODULES } from '@/modules/app.factory';

export const InfinityHorizontalCarousel = async (
  props: ICarouselHorizontalInfinity,
) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN();
  return (
    <InfinityHorizontalCarouselContainer {...props.container}>
      {props.children?.map((child, i) => (
        <InfinityHorizontalCarouselItem
          key={child?.toString()}
          {...animation({ transition: { delay: i * 2 } })}
        >
          {child}
        </InfinityHorizontalCarouselItem>
      ))}
    </InfinityHorizontalCarouselContainer>
  );
};
