import { ISliderProps } from '@/@types/props/carousel/horizontal/static/carousel';

import './static.style.scss';
import { RightArrow } from '@/assets/icons/arrow/right/arrow.icon';
import { LeftArrow } from '@/assets/icons/arrow/left/arrow.icon';

export const Slider = async ({ children }: ISliderProps) => {
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
