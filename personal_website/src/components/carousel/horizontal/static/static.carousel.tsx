import { IStaticCarouselProps } from '@/@types/props/carousel/horizontal/static/carousel';

import './static.style.scss';

export const StaticCarousel = ({ children }: IStaticCarouselProps) => {
  return (
    <ul className="static-carousel">
      {children.map(child => (
        <li key={child?.toString()} className="h-fit w-fit">
          {child}
        </li>
      ))}
    </ul>
  );
};
