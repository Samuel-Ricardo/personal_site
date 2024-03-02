import { Testimonial } from '@/modules/@core/testimonial/entity/testimonial.entity';

export interface IAssembleTestimonials {
  title: Promise<string | undefined>;
  testimonials: Promise<Testimonial[]>;
}
