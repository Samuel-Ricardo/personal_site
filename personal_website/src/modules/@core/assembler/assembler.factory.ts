import { ASSEMBLER_MODULE } from './assembler.module';
import { ASSEMBLER_REGISTRY } from './assembler.registry';
import { AssemblerController } from './controller/assembler.controller';
import { AssemblerService } from './service/assembler.service';
import { FindStaticTextUseCase } from './use_case/static/find/text.use_case';
import { FindStaticTitleUseCase } from './use_case/static/find/title.use_case';

export const ASSEMBLER_FACTORY = {
  MAIN: () =>
    ASSEMBLER_MODULE.get<AssemblerController>(ASSEMBLER_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () =>
      ASSEMBLER_MODULE.get<AssemblerController>(
        ASSEMBLER_REGISTRY.CONTROLLER.MAIN,
      ),
  },
  SERVICE: {
    MAIN: () =>
      ASSEMBLER_MODULE.get<AssemblerService>(ASSEMBLER_REGISTRY.SERVICE.MAIN),
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
