import { ICarouselHorizontalInfinity } from '@/@types/props/carousel/horizontal/infinity';
import { InfinityHorizontalCarouselContainer } from './container/container.component';
import { InfinityHorizontalCarouselItem } from './item/item.component';

export const InfinityHorizontalCarousel = (
  props: ICarouselHorizontalInfinity,
) => {
  return (
    <InfinityHorizontalCarouselContainer>
      {props.children
        ?.concat(props.children)
        .map(child => (
          <InfinityHorizontalCarouselItem key={child?.toString()}>
            {child}
          </InfinityHorizontalCarouselItem>
        ))}
    </InfinityHorizontalCarouselContainer>
  );
};
