import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';

export interface ISelectedTestimonyWrapperProps {
  data: ITestimonialDTO;
  children: any;
  className?: string;
}
