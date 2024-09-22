import { ARTICLE_MODULE } from './article.module';
import { ARTICLE_REGISTRY } from './article.registry';
import { IArticleModule } from './articles.interface';
import { ArticleController } from './controller/article.controller';
import { IArticleService } from './service/service.interface';
import { FindAllArticleUseCase } from './use_case/find/all.use_case';
import { FindOneArticleByTitleUseCase } from './use_case/find/by/title.use_case';
import { FindMainArticleUseCase } from './use_case/find/main.use_case';

export const ARTICLE_FACTORY = {
  MAIN: () => ARTICLE_MODULE.get<IArticleModule>(ARTICLE_REGISTRY.MAIN),
  CONTROLLER: {
    MAIN: () =>
      ARTICLE_MODULE.get<ArticleController>(ARTICLE_REGISTRY.CONTROLLER.MAIN),
  },
  SERVICE: {
    MAIN: () =>
      ARTICLE_MODULE.get<IArticleService>(ARTICLE_REGISTRY.SERVICE.MAIN),
  },
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
      BY: {
        TITLE: () =>
          ARTICLE_MODULE.get<FindOneArticleByTitleUseCase>(
            ARTICLE_REGISTRY.USE_CASE.FIND.BY.TITLE,
          ),
      },
    },
  },
};
