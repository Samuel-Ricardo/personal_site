import { IProjectItemPreviewProps } from '@/@types/props/section/project/item';
import Image from 'next/image';

export const ProjectItemPreview = ({ image }: IProjectItemPreviewProps) => (
  <div className="frosted-glass">
    <Image src={image} alt="project item preview" width={500} height={500} />
  </div>
);
