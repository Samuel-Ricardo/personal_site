import { Container } from 'inversify';
import { HIGHLIGHT_REGISTRY } from './highlight.registry';
import { FindAllHighlightsUseCase } from './use_case/find/all.use_case';
import { HighlightService } from './service/highlight.service';
import { HighlightController } from './controller/highlight.controller';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const HIGHLIGHT_MODULE = MODULE;

HIGHLIGHT_MODULE.bind(HIGHLIGHT_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllHighlightsUseCase,
);

HIGHLIGHT_MODULE.bind(HIGHLIGHT_REGISTRY.SERVICE.MAIN).to(HighlightService);
HIGHLIGHT_MODULE.bind(HIGHLIGHT_REGISTRY.CONTROLLER.MAIN).to(
  HighlightController,
);
HIGHLIGHT_MODULE.bind(HIGHLIGHT_REGISTRY.MAIN).to(HighlightController);
