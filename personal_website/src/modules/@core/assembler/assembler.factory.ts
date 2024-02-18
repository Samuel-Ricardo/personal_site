import { ASSEMBLER_MODULE } from './assembler.module';
import { ASSEMBLER_REGISTRY } from './assembler.registry';
import { AssemblerService } from './service/assembler.service';

export const ASSEMBLER_FACTORY = {
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
