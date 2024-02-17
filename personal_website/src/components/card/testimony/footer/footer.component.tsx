import './footer.style.scss';

import { NavigateButton } from '@/components/button/navigate/button.component';
import { GithubLogo } from '@/assets/icons/logo/github/icon.component';

export const TestimonyFooter = () => {
  return (
    <footer className="testimony-footer">
      <div className="wrapper">
        <NavigateButton link={{ href: './' }}>Portfolio</NavigateButton>
        <button>
          <GithubLogo />
        </button>
      </div>
    </footer>
  );
};
