import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';
import { MotionProps } from 'framer-motion';

export interface ISelectedTestimonyWrapperProps {
  data: ITestimonialDTO;
  children: any;
  className?: string;
  animation?: MotionProps;
}
