import { Testimonial } from '../entity/testimonial.entity';

export interface ITestimonialService {
  findAll(): Promise<Testimonial[]>;
}
