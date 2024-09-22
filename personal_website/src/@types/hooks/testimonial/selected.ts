import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';

export interface ISelectedTestimonialState {
  selected?: ISelected;
  setSelected: (selected: ISelected) => void;
}

interface ISelected {
  data: ITestimonialDTO;
  ref?: React.RefObject<HTMLElement>;
}
