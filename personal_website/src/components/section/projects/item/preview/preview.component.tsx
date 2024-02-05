import { IProjectItemPreviewProps } from '@/@types/props/section/project/item';
import Image from 'next/image';

import './preview.style.scss';

export const ProjectItemPreview = ({ image }: IProjectItemPreviewProps) => (
  <div className="frosted-glass image-container">
    <Image
      src={image}
      alt="project item preview"
      width={700}
      height={700}
      quality={100}
    />
  </div>
);
