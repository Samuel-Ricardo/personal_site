'use client';

import './preview.style.scss';

import { IPreviewProps } from '@/@types/props/section/techs/preview';
import { MotionDiv } from '@/components/motion/div.component';
import Image from 'next/image';

export const TechPreview = (props: IPreviewProps) => {
  return (
    <MotionDiv
      id="tech-item-preview"
      {...props}
      className={`frosted-glass-md top-10 ${props.preview?.left ? 'right-5' : 'left-5'}`}
    >
      <h4>{props.preview?.name}</h4>
      <div className="line" />
      <p>{props.preview?.description}</p>
      <Image
        src={props.preview?.images[0]}
        alt="tech icon"
        width={80}
        height={80}
      />
    </MotionDiv>
  );
};
