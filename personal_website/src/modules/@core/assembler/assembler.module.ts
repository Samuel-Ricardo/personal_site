import { Container } from 'inversify';
import { OCCUPATION_MODULE } from '../occupations/occupation.module';
import { ASSEMBLER_REGISTRY } from './assembler.registry';
import { FindTitleUseCase } from './use_case/find/title.use_case';
import { FindTextUseCase } from './use_case/find/text.use_case';
import { AssemblerService } from './service/assembler.service';
import { AssemblerController } from './controller/assembler.controller';
import { PERSON_MODULE } from '../person/person.module';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const ASSEMBLER_MODULE = Container.merge(
  MODULE,
  OCCUPATION_MODULE,
  PERSON_MODULE,
);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.USE_CASE.FIND.TITLE).to(
  FindTitleUseCase,
);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.USE_CASE.FIND.TEXT).to(
  FindTextUseCase,
);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.SERVICE.MAIN).to(AssemblerService);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.CONTROLLER.MAIN).to(
  AssemblerController,
);

ASSEMBLER_MODULE.bind(ASSEMBLER_REGISTRY.MAIN).to(AssemblerController);
