import { IProjectItemFooterProps } from '@/@types/props/section/project/item';

export const ProjectItemFooter = ({ repo, demo }: IProjectItemFooterProps) => {
  return (
    <div className="footer">
      <button className="btn-repo">{repo}</button>
      <button className="btn-demo">{demo}</button>
    </div>
  );
};
