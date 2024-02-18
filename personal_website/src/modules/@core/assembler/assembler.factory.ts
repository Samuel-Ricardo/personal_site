import { ASSEMBLER_MODULE } from './assembler.module';
import { ASSEMBLER_REGISTRY } from './assembler.registry';
import { AssemblerController } from './controller/assembler.controller';
import { AssemblerService } from './service/assembler.service';

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
