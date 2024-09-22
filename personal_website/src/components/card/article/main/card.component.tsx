import { HorizontalLine } from '@/components/line/horizontal/horizontal.component';
import { IArticlesSyncDTO } from '@/modules/@core/articles/DTO/sync.dto';
import Link from 'next/link';
import { ArticleCardImage } from './image/image.component';
import { MainCardContent } from '../../project/main/content/content.component';

import './card.style.scss';
import { MainCardFooter } from '../../project/main/footer/footer.component';
import { ArticleFonts } from './fonts/fonts.component';

export const MainArticleCard = async ({ data }: { data: IArticlesSyncDTO }) => {
  return (
    <div className="main-article-card-container">
      <Link className="link-container" href={`/article/${data?.identifier}`}>
        <ArticleCardImage url={data?.image} />
        <div className="content-container">
          <h1>{data?.title}</h1>
          <HorizontalLine />
          <MainCardContent>{data?.description}</MainCardContent>
          <MainCardFooter>
            <ArticleFonts data={data?.platforms} />
          </MainCardFooter>
        </div>
      </Link>
    </div>
  );
};
