import { Testimonial } from '@/modules/@core/testimonial/entity/testimonial.entity';

export interface IAssembleTestimonials {
  title: Promise<string>;
  testimonials: Promise<Testimonial[]>;
}
