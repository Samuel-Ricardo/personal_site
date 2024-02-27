import { Container } from 'inversify';
import { PLATFORM_REGISTRY } from './platform.registry';
import { FindAllPlatformUseCase } from './use_case/find/all.use_case';
import { FindOnePlatformUseCase } from './use_case/find/one.use_case';
import { PlatformService } from './service/platform.service';

export const PLATFORM_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

PLATFORM_MODULE.bind(PLATFORM_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllPlatformUseCase,
);
PLATFORM_MODULE.bind(PLATFORM_REGISTRY.USE_CASE.FIND.ONE).to(
  FindOnePlatformUseCase,
);

PLATFORM_MODULE.bind(PLATFORM_REGISTRY.SERVICE.MAIN).to(PlatformService);
