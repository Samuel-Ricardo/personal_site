import { InfinityHorizontalCarousel } from '@/components/carousel/horizontal/infity.component';

import './works.style.scss';
import { InfinityHorizontalCarouselItem } from '@/components/carousel/horizontal/item/item.component';

export const WorkWithSection = () => {
  return (
    <section id="i-work-with">
      <h1>I Work With</h1>
      <InfinityHorizontalCarousel>
        <InfinityHorizontalCarouselItem>
          AAAAAAAAAAAAAAAAAAA
        </InfinityHorizontalCarouselItem>
        <InfinityHorizontalCarouselItem>
          BBBBBBBBBBBBBBBBBBB
        </InfinityHorizontalCarouselItem>
        <InfinityHorizontalCarouselItem>
          CCCCCCCCCCCCCCCCCCC
        </InfinityHorizontalCarouselItem>
        <InfinityHorizontalCarouselItem>
          DDDDDDDDDDDDDDDDDDD
        </InfinityHorizontalCarouselItem>
      </InfinityHorizontalCarousel>
    </section>
  );
};
