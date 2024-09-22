import { IArticlesSyncDTO } from '@/modules/@core/articles/DTO/sync.dto';

interface props {
  search?: string;
  articles: IArticlesSyncDTO[];
}

export const filterArticles = async ({ articles, search }: props) =>
  !search || search.trim() === ''
    ? articles
    : articles.filter(
        articles =>
          articles.title.toLowerCase().includes(search.toLowerCase()) ||
          articles.description.toLowerCase().includes(search.toLowerCase()) ||
          articles.platforms.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase()),
          ).length > 0,
      );
