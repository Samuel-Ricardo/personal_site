import { Testimonial } from '../entity/testimonial.entity';

export interface ITestimonialGateway {
  findAll(): Promise<Testimonial[]>;
}
