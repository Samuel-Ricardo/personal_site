import { IArticlesContainerProps } from '@/@types/props/section/articles/container';

export const ArticlesContainer = ({ articles }: IArticlesContainerProps) => {
  return (
    <ul id="articles-container">
      {articles.map(a => (
        <li key={a.title}>{a.title}</li>
      ))}
    </ul>
  );
};
