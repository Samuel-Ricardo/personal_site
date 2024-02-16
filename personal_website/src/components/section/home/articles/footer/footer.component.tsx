import { IArticleSectionFooter } from '@/@types/props/section/articles/footer';
import { Platform } from '@/components/platform/item/item.component';

import './footer.srtyle.scss';

export const ArticlesSectionFooter = ({
  platforms,
  html,
}: IArticleSectionFooter) => {
  return (
    <footer id="article-section-footer" {...html}>
      <h2>I writte articles on this platforms</h2>
      <ul>
        {platforms.map(p => (
          <li key={p.name} className="w-fit h-fit">
            <Platform platform={p} />
          </li>
        ))}
      </ul>
    </footer>
  );
};
