import { Container } from 'inversify';
import { ARTICLE_REGISTRY } from './article.registry';
import { FindAllArticleUseCase } from './use_case/find/all.use_case';
import { FindMainArticleUseCase } from './use_case/find/main.use_case';
import { ArticleService } from './service/article.service';
import { ArticleController } from './controller/article.controller';

export const ARTICLE_MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

ARTICLE_MODULE.bind(ARTICLE_REGISTRY.USE_CASE.FIND.ALL).to(
  FindAllArticleUseCase,
);
ARTICLE_MODULE.bind(ARTICLE_REGISTRY.USE_CASE.FIND.MAIN).to(
  FindMainArticleUseCase,
);

ARTICLE_MODULE.bind(ARTICLE_REGISTRY.SERVICE.MAIN).to(ArticleService);

ARTICLE_MODULE.bind(ARTICLE_REGISTRY.CONTROLLER.MAIN).to(ArticleController);

ARTICLE_MODULE.bind(ARTICLE_REGISTRY.MAIN).to(ArticleController);
