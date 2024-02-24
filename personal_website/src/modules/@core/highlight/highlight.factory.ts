import { HighlightController } from './controller/highlight.controller';
import { HIGHLIGHT_MODULE } from './highlight.module';
import { HIGHLIGHT_REGISTRY } from './highlight.registry';
import { HighlightService } from './service/highlight.service';
import { FindAllHighlightsUseCase } from './use_case/find/all.use_case';

export const HIGHLIGHT_FACTORY = {
  MAIN: () =>
    HIGHLIGHT_MODULE.get<HighlightController>(HIGHLIGHT_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () =>
      HIGHLIGHT_MODULE.get<HighlightController>(HIGHLIGHT_REGISTRY.MAIN),
  },
  SERVICE: {
    MAIN: () =>
      HIGHLIGHT_MODULE.get<HighlightService>(HIGHLIGHT_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    FIND: {
      ALL: () =>
        HIGHLIGHT_MODULE.get<FindAllHighlightsUseCase>(
          HIGHLIGHT_REGISTRY.USE_CASE.FIND.ALL,
        ),
    },
  },
};
