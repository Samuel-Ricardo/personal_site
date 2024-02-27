import { IPlatformModule } from './platform.interace';
import { PLATFORM_MODULE } from './platform.module';
import { PLATFORM_REGISTRY } from './platform.registry';
import { IPlatformService } from './service/service.interface';
import { FindAllPlatformUseCase } from './use_case/find/all.use_case';
import { FindOnePlatformUseCase } from './use_case/find/one.use_case';

export const PLATFORM_FACTORY = {
  MAIN: () => PLATFORM_MODULE.get<IPlatformModule>(PLATFORM_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () =>
      PLATFORM_MODULE.get<IPlatformModule>(PLATFORM_REGISTRY.CONTROLLER.MAIN),
  },
  SERVICE: {
    MAIN: () =>
      PLATFORM_MODULE.get<IPlatformService>(PLATFORM_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        PLATFORM_MODULE.get<FindAllPlatformUseCase>(
          PLATFORM_REGISTRY.USE_CASE.FIND.ALL,
        ),
      ONE: () =>
        PLATFORM_MODULE.get<FindOnePlatformUseCase>(
          PLATFORM_REGISTRY.USE_CASE.FIND.ONE,
        ),
    },
  },
};
