import { IProjectItemFooterProps } from '@/@types/props/section/project/item';

export const ProjectItemFooter = ({ repo, demo }: IProjectItemFooterProps) => {
  return (
    <div>
      <button>{repo}</button>
      <button>{demo}</button>
    </div>
  );
};
