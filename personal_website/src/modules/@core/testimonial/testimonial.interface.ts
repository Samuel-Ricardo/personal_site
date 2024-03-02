import { Testimonial } from './entity/testimonial.entity';

export interface ITestimonialModule {
  findAll(): Promise<Testimonial[]>;
}
