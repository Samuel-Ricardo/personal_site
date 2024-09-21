import './articles.style.scss';

import SearchBar from '@/components/search/search.component';
import { Slider } from '@/components/slider/slider.component';
import { ProjectsBackground } from '@/assets/images/background/project/projects.background';
import { MODULES } from '@/modules/app.factory';
import { handleArticleSearch } from '@/actions/search/article.action';
import { filterArticles } from '@/actions/filter/articles.action';
import { MainArticleCard } from '@/components/card/article/main/card.component';
import { SearchArticlesResult } from '@/components/search/result/article/result.component';

export const ArticlesPage = async ({ search }: { search: string }) => {
  const articles = await MODULES.ARTICLE.CONTROLLER.MAIN().findAllSync();

  const main = articles.filter(article => article.main);
  const list = await filterArticles({ articles, search });

  return (
    <div className="articles-page-container">
      <ProjectsBackground />
      <Slider>
        {main.map(article => (
          <MainArticleCard key={article.title} data={article} />
        ))}
      </Slider>
      <div className="articles-page-search-container">
        <SearchBar action={handleArticleSearch} />
        <SearchArticlesResult items={list} />
      </div>
    </div>
  );
};
