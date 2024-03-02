import { ITestimonialService } from './service/service.interface';
import { TESTIMONIAL_MODULE } from './testimonial.module';
import { TESTIMONIAL_REGISTRY } from './testimonial.registry';
import { FindAllTestimonialUseCase } from './use_case/find/all.use_case';

export const TESTIMONIAL_FACTORY = {
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
