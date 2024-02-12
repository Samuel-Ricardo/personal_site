import { IStaticCarouselProps } from '@/@types/props/carousel/horizontal/static/carousel';

import './static.style.scss';
import { RightArrow } from '@/icons/arrow/right/arrow.icon';
import { LeftArrow } from '@/icons/arrow/left/arrow.icon';

export const StaticCarousel = ({ children }: IStaticCarouselProps) => {
  return (
    <div className="static-carousel">
      <button className="left-button">
        <LeftArrow />
      </button>

      <ul className="static-carousel-container">
        {children.map(child => (
          <li key={child?.toString()} className="h-fit w-fit">
            {child}
          </li>
        ))}
      </ul>

      <button className="right-button">
        <RightArrow />
      </button>
    </div>
  );
};
