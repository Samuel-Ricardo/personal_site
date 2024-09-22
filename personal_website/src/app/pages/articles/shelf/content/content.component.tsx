import { MotionDiv } from '@/components/motion/div.component';
import './content.style.scss';
import { MarkdownRenderer } from '@/components/markdown/markdown.component';
import { MODULES } from '@/modules/app.factory';

export const ArticleShelfContent = async ({ content }: { content: string }) => {
  const ANIMATION = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP()();

  return (
    <div className="article-shelf-content">
      <MotionDiv className="content-body" {...ANIMATION}>
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </MotionDiv>
    </div>
  );
};
