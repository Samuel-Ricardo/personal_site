import { Container } from 'inversify';
import { FindAllTestimonialUseCase } from './use_case/find/all.use_case';
import { TestimonialService } from './service/testimonial.service';

export const TESTIMONIAL_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

TESTIMONIAL_MODULE.bind('MODULE::TESTIMONIAL::USE_CASE::FIND::ALL').to(
  FindAllTestimonialUseCase,
);

TESTIMONIAL_MODULE.bind('MODULE::TESTIMONIAL::SERVICE::MAIN').to(
  TestimonialService,
);
