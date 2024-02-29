import { Container } from 'inversify';
import { FindAllExperiencesUseCase } from './use_case/find/all.use_case';
import { EXPERIENCE_REGISTRY } from './experience.registry';
import { FindExperienceByContextUseCase } from './use_case/find/by/context.use_case';
import { ExperienceService } from './service/experience.service';

export const EXPERIENCE_MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

EXPERIENCE_MODULE.bind(EXPERIENCE_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllExperiencesUseCase,
);
EXPERIENCE_MODULE.bind(EXPERIENCE_REGISTRY.USE_CASE.FIND.BY.CONTEXT).to(
  FindExperienceByContextUseCase,
);

EXPERIENCE_MODULE.bind(EXPERIENCE_REGISTRY.SERVICE.MAIN).toConstantValue(
  ExperienceService,
);
