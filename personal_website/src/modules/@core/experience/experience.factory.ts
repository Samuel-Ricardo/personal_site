import { ExperienceController } from './controller/experience.controller';
import { IExperienceModule } from './experience.interface';
import { EXPERIENCE_MODULE } from './experience.module';
import { EXPERIENCE_REGISTRY } from './experience.registry';
import { IExperienceService } from './service/service.interface';
import { FindAllExperiencesUseCase } from './use_case/find/all.use_case';
import { FindExperienceByContextUseCase } from './use_case/find/by/context.use_case';

export const EXPERIENCE_FACTORY = {
  MAIN: () =>
    EXPERIENCE_MODULE.get<IExperienceModule>(EXPERIENCE_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () =>
      EXPERIENCE_MODULE.get<ExperienceController>(
        EXPERIENCE_REGISTRY.CONTROLLER.MAIN,
      ),
  },
  SERVICE: {
    MAIN: () =>
      EXPERIENCE_MODULE.get<IExperienceService>(
        EXPERIENCE_REGISTRY.SERVICE.MAIN,
      ),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        EXPERIENCE_MODULE.get<FindAllExperiencesUseCase>(
          EXPERIENCE_REGISTRY.USE_CASE.FIND.ALL,
        ),
      BY: {
        CONTEXT: () =>
          EXPERIENCE_MODULE.get<FindExperienceByContextUseCase>(
            EXPERIENCE_REGISTRY.USE_CASE.FIND.BY.CONTEXT,
          ),
      },
    },
  },
};
