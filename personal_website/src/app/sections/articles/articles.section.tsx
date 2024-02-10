import { ArticlesBackground } from '@/images/background/articles/articles.background';
import './articles.style.scss';
import { MODULES } from '@/modules/app.factory';

export const Articles = () => {
  return (
    <section id="articles-section">
      <ArticlesBackground />
      <div className="z-0 flex flex-1">
        <h1
          className={`${MODULES.FONTS.CLASSIC.LIBRE_BASKERVILLE().className} section-title`}
        >
          Articles that i Wrotte
        </h1>
      </div>
    </section>
  );
};
