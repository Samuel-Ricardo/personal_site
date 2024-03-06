import { IProjectItemPreviewProps } from '@/@types/props/section/project/item';
import Image from 'next/image';

import './preview.style.scss';
import { MODULES } from '@/modules/app.factory';
import { MotionDiv } from '@/components/motion/div.component';

export const ProjectItemPreview = async ({
  image,
}: IProjectItemPreviewProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN()({
    animate: 'inactive',
  });

  return (
    <MotionDiv className="pi-image-container" {...animation}>
      <Image
        src={image}
        alt="project item preview"
        width={1280}
        height={720}
        quality={100}
      />
    </MotionDiv>
  );
};
