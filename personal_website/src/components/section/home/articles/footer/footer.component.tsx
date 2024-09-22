import { IArticleSectionFooter } from '@/@types/props/section/articles/footer';
import { Platform } from '@/components/platform/item/item.component';

import './footer.style.scss';
import { MotionH2 } from '@/components/motion/h2.component';
import { MODULES } from '@/modules/app.factory';
import { MotionLI } from '@/components/motion/li.component';

export const ArticlesSectionFooter = async ({
  platforms,
  html,
}: IArticleSectionFooter) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN()({
    animate: 'inactive',
  });

  const itemAnimation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP();

  return (
    <footer id="article-section-footer" {...html}>
      <MotionH2 {...animation}>I writte articles on this platforms</MotionH2>
      <ul>
        {platforms.map((p, i) => (
          <MotionLI
            {...itemAnimation({ transition: { delay: i * 0.35 } })}
            key={p.name}
            className="w-fit h-fit"
          >
            <Platform platform={p} />
          </MotionLI>
        ))}
      </ul>
    </footer>
  );
};
