import { ASSEMBLER_MODULE } from './assembler.module';
import { ASSEMBLER_REGISTRY } from './assembler.registry';
import { AssemblerController } from './controller/assembler.controller';
import { StaticAssemblerController } from './controller/static/assembler.controller';
import { AssemblerService } from './service/assembler.service';
import { FindStaticTextUseCase } from './use_case/static/find/text.use_case';
import { FindStaticTitleUseCase } from './use_case/static/find/title.use_case';

export const ASSEMBLER_FACTORY = {
  MAIN: () =>
    ASSEMBLER_MODULE.get<AssemblerController>(ASSEMBLER_REGISTRY.MAIN),
  STATIC: () =>
    ASSEMBLER_MODULE.get<StaticAssemblerController>(ASSEMBLER_REGISTRY.STATIC),
  CONTROLLER: {
    MAIN: () =>
      ASSEMBLER_MODULE.get<AssemblerController>(
        ASSEMBLER_REGISTRY.CONTROLLER.MAIN,
      ),
    STATIC: () =>
      ASSEMBLER_MODULE.get<StaticAssemblerController>(
        ASSEMBLER_REGISTRY.CONTROLLER.STATIC,
      ),
  },
  SERVICE: {
    MAIN: () =>
      ASSEMBLER_MODULE.get<AssemblerService>(ASSEMBLER_REGISTRY.SERVICE.MAIN),
    STATIC: () =>
      ASSEMBLER_MODULE.get<AssemblerService>(ASSEMBLER_REGISTRY.SERVICE.STATIC),
  },
  USE_CASE: {
    STATIC: {
      FIND: {
        TITLE: () =>
          ASSEMBLER_MODULE.get<FindStaticTitleUseCase>(
            ASSEMBLER_REGISTRY.USE_CASE.STATIC.FIND.TITLE,
          ),
        TEXT: () =>
          ASSEMBLER_MODULE.get<FindStaticTextUseCase>(
            ASSEMBLER_REGISTRY.USE_CASE.STATIC.FIND.TEXT,
          ),
      },
    },
    FIND: {
      TITLE: ASSEMBLER_MODULE.get<AssemblerService>(
        ASSEMBLER_REGISTRY.USE_CASE.FIND.TITLE,
      ),
      TEXT: ASSEMBLER_MODULE.get<AssemblerService>(
        ASSEMBLER_REGISTRY.USE_CASE.FIND.TEXT,
      ),
    },
  },
};
