import { TestimonialController } from './controller/testimonial.controller';
import { ITestimonialService } from './service/service.interface';
import { ITestimonialModule } from './testimonial.interface';
import { TESTIMONIAL_MODULE } from './testimonial.module';
import { TESTIMONIAL_REGISTRY } from './testimonial.registry';
import { FindAllTestimonialUseCase } from './use_case/find/all.use_case';

export const TESTIMONIAL_FACTORY = {
  MAIN: () =>
    TESTIMONIAL_MODULE.get<ITestimonialModule>(TESTIMONIAL_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () =>
      TESTIMONIAL_MODULE.get<TestimonialController>(
        TESTIMONIAL_REGISTRY.CONTROLLER.MAIN,
      ),
  },
  SERCICE: {
    MAIN: () =>
      TESTIMONIAL_MODULE.get<ITestimonialService>(
        TESTIMONIAL_REGISTRY.SERVICE.MAIN,
      ),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        TESTIMONIAL_MODULE.get<FindAllTestimonialUseCase>(
          TESTIMONIAL_REGISTRY.USE_CASE.FIND.ALL,
        ),
    },
  },
};
