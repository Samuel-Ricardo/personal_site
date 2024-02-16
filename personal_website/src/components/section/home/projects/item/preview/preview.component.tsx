import { IProjectItemPreviewProps } from '@/@types/props/section/project/item';
import Image from 'next/image';

import './preview.style.scss';

export const ProjectItemPreview = ({ image }: IProjectItemPreviewProps) => (
  <div className="pi-image-container">
    <Image
      src={image}
      alt="project item preview"
      width={1280}
      height={720}
      quality={100}
    />
  </div>
);
