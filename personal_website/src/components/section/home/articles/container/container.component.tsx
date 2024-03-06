import { IArticlesContainerProps } from '@/@types/props/section/articles/container';
import { ArticleItem } from '../item/item.component';

import './container.style.scss';

export const ArticlesContainer = async ({
  articles,
}: IArticlesContainerProps) => {
  return (
    <ul id="articles-container">
      {articles.map(a => (
        <ArticleItem key={a.title} article={a} />
      ))}
    </ul>
  );
};
