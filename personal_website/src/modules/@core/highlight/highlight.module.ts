import { Container } from 'inversify';
import { HIGHLIGHT_REGISTRY } from './highlight.registry';
import { FindAllHighlightsUseCase } from './use_case/find/all.use_case';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const HIGHLIGHT_MODULE = MODULE;

HIGHLIGHT_MODULE.bind(HIGHLIGHT_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllHighlightsUseCase,
);
