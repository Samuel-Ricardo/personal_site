import { Circuit } from '@/components/canvas/circuit.component';
import './article.style.scss';
import { MODULES } from '@/modules/app.factory';
import { redirect } from 'next/navigation';
import { ArticleFonts } from '@/components/card/article/main/fonts/fonts.component';
import { ArticleShelfContent } from './content/content.component';

export const ArticleShelf = async ({ id }: { id: string }) => {
  const article = await MODULES.ARTICLE.CONTROLLER.MAIN().findOneByTitle({
    title: id,
  });

  if (!article) return redirect('/not-found');

  return (
    <div className="article-shelf-container">
      <Circuit className="fixed top-0 left-0 right-0 w-full bg-primary-foreground -z-0" />

      <h1>{article?.title}</h1>

      <div className="article-shelf-body-container">
        <ArticleShelfContent content={article.content || ''} />
        <ArticleFonts data={article.platforms} />
      </div>
    </div>
  );
};
