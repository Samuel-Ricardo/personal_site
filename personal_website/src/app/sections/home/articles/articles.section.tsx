import { ArticlesBackground } from '@/assets/images/background/articles/articles.background';
import './articles.style.scss';
import { MODULES } from '@/modules/app.factory';
import { ArticlesContainer } from '@/components/section/home/articles/container/container.component';
import { ArticlesSectionFooter } from '@/components/section/home/articles/footer/footer.component';
import { Article } from '@/modules/@core/articles/entity/article.entity';

export const Articles = async () => {
  const { title, platforms_title, articles, platforms } =
    await MODULES.ASSEMBLER.MAIN().assembleArticles();

  return (
    <section
      id="articles-section"
      className={MODULES.FONTS.CLASSIC.LIBRE_BASKERVILLE().className}
    >
      <ArticlesBackground />
      <div className="z-0 flex flex-1 content-container">
        <h1 className={`section-title`}>{await title}</h1>

        <ArticlesContainer
          articles={await Article.toViewList(await articles)}
        />

        <ArticlesSectionFooter platforms={await platforms} />
      </div>
    </section>
  );
};
