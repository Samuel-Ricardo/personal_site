import { Testimonial } from './entity/testimonial.entity';

export interface ITestimonalModule {
  findAll(): Promise<Testimonial[]>;
}
