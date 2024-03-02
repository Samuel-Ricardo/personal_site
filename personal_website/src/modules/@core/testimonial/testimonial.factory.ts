import { TESTIMONIAL_MODULE } from './testimonial.module';
import { TESTIMONIAL_REGISTRY } from './testimonial.registry';
import { FindAllTestimonialUseCase } from './use_case/find/all.use_case';

export const TESTIMONIAL_FACTORY = {
  USE_CASE: {
    FIND: {
      ALL: () =>
        TESTIMONIAL_MODULE.get<FindAllTestimonialUseCase>(
          TESTIMONIAL_REGISTRY.USE_CASE.FIND.ALL,
        ),
    },
  },
};
