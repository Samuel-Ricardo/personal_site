'use client';

import { IPreviewProps } from '@/@types/props/section/techs/preview';
import { MotionDiv } from '@/components/motion/div.component';
import Image from 'next/image';

export const TechPreview = (props: IPreviewProps) => {
  return (
    <MotionDiv
      id="tech-item-preview"
      {...props}
      className="absolute -top-12 left-20 z-10"
    >
      <h4>{props.preview.name}</h4>

      <p>{props.preview.description}</p>

      {/*props.preview.images.map((image, index) => */}

      <Image
        src={props.preview.images[0]}
        alt="tech preview image"
        width={250}
        height={250}
      />
    </MotionDiv>
  );
};
