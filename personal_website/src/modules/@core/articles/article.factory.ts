import { ARTICLE_MODULE } from './article.module';
import { ARTICLE_REGISTRY } from './article.registry';
import { FindAllArticleUseCase } from './use_case/find/all.use_case';
import { FindMainArticleUseCase } from './use_case/find/main.use_case';

export const ARTICLE_FACTORY = {
  USE_CASE: {
    FIND: {
      ALL: () =>
        ARTICLE_MODULE.get<FindAllArticleUseCase>(
          ARTICLE_REGISTRY.USE_CASE.FIND.ALL,
        ),
      MAIN: () =>
        ARTICLE_MODULE.get<FindMainArticleUseCase>(
          ARTICLE_REGISTRY.USE_CASE.FIND.MAIN,
        ),
    },
  },
};
