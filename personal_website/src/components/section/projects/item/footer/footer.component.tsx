import { IProjectItemFooterProps } from '@/@types/props/section/project/item';
import { NavigateButton } from '@/components/button/navigate/button.component';

import './footer.style.scss';

export const ProjectItemFooter = ({ repo, demo }: IProjectItemFooterProps) => {
  return (
    <div className="footer">
      <NavigateButton link={{ href: repo, target: '_blank' }}>
        Code
      </NavigateButton>
      {demo && (
        <NavigateButton link={{ href: demo, target: '_blank' }}>
          Demo
        </NavigateButton>
      )}
    </div>
  );
};
