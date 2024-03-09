import { ISliderProps } from '@/@types/props/carousel/horizontal/static/carousel';

import './static.style.scss';
import { SliderBody } from './body/body.component';

export const Slider = async ({ children }: ISliderProps) => {
  return (
    <div className="static-carousel">
      <SliderBody>{children}</SliderBody>
    </div>
  );
};
