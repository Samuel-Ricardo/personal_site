import './result.style.scss';

import { ArticleCard } from '@/components/card/article/item/card.component';
import { MotionLI } from '@/components/motion/li.component';
import { IArticlesSyncDTO } from '@/modules/@core/articles/DTO/sync.dto';
import { MODULES } from '@/modules/app.factory';

export const SearchArticlesResult = async ({
  items,
}: {
  items: IArticlesSyncDTO[];
}) => {
  const UP = MODULES.ANIMATION.FRAMER_MOTION.EMERGE.UP();

  return (
    <ul className="search-result-container">
      {items.map(async (item, index) => (
        <MotionLI
          key={item.title}
          className="search-result-item"
          {...UP({
            transition: { delay: index * 0.25, duration: 1 },
            animate: 'active',
          })}
        >
          <ArticleCard data={item} />
        </MotionLI>
      ))}
    </ul>
  );
};
