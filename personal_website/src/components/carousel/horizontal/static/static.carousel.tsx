import { IStaticCarouselProps } from '@/@types/props/carousel/horizontal/static/carousel';

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
