import './card.style.scss';

import { HorizontalLine } from '@/components/line/horizontal/horizontal.component';
import Link from 'next/link';
import { ArticleCardImage } from '../main/image/image.component';
import { IArticlesSyncDTO } from '@/modules/@core/articles/DTO/sync.dto';
import { ArticleFonts } from '../main/fonts/fonts.component';

export const ArticleCard = ({ data }: { data: IArticlesSyncDTO }) => {
  return (
    <div className="article-card">
      <Link className="link-container" href={`/article/${data?.identifier}`}>
        <ArticleCardImage url={data?.image} />
        <HorizontalLine />
        <div className="content-container">
          <h1>{data?.title}</h1>
          <HorizontalLine />
          <p>{data?.description}</p>
        </div>
        <div className="footer-container">
          <ArticleFonts data={data?.platforms} />
        </div>
      </Link>
      <div className="neon-line" />
    </div>
  );
};
