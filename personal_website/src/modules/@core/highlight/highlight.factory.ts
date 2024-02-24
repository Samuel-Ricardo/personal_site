import { HIGHLIGHT_MODULE } from './highlight.module';
import { HIGHLIGHT_REGISTRY } from './highlight.registry';
import { HighlightService } from './service/highlight.service';
import { FindAllHighlightsUseCase } from './use_case/find/all.use_case';

export const HIGHLIGHT_FACTORY = {
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
