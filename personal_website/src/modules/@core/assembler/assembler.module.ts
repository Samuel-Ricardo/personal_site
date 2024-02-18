import { GATEWAY_MODULE } from '@/modules/gateway/gateway.module';
import { Container } from 'inversify';
import { OCCUPATION_MODULE } from '../occupations/occupation.module';
import { ASSEMBLER_REGISTRY } from './assembler.registry';
import { FindTitleUseCase } from './use_case/find/title.use_case';
import { FindTextUseCase } from './use_case/find/text.use_case';
import { AssemblerService } from './service/assembler.service';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const ASSEMBLER_MODULE = Container.merge(
  MODULE,
  GATEWAY_MODULE,
  OCCUPATION_MODULE,
);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.USE_CASE.FIND.TITLE).to(
  FindTitleUseCase,
);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.USE_CASE.FIND.TEXT).to(
  FindTextUseCase,
);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.SERVICE.MAIN).to(AssemblerService);
