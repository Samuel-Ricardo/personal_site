import { Container } from 'inversify';
import { FindAllTestimonialUseCase } from './use_case/find/all.use_case';
import { TestimonialService } from './service/testimonial.service';
import { TESTIMONIAL_REGISTRY } from './testimonial.registry';
import { TestimonialController } from './controller/testimonial.controller';

export const TESTIMONIAL_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

TESTIMONIAL_MODULE.bind(TESTIMONIAL_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllTestimonialUseCase,
);

TESTIMONIAL_MODULE.bind(TESTIMONIAL_REGISTRY.SERVICE.MAIN).to(
  TestimonialService,
);

TESTIMONIAL_MODULE.bind(TESTIMONIAL_REGISTRY.CONTROLLER.MAIN).to(
  TestimonialController,
);

TESTIMONIAL_MODULE.bind(TESTIMONIAL_REGISTRY.MAIN).to(TestimonialController);
