import { IProjectItemContentProps } from '@/@types/props/section/project/item';

export const ProjectItemContent = ({
  title,
  description,
}: IProjectItemContentProps) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
