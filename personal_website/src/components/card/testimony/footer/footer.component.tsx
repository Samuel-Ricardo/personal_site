import { NavigateButton } from '@/components/button/navigate/button.component';
import { GithubLogo } from '@/icons/logo/github/icon.component';

export const TestimonyFooter = () => {
  return (
    <footer className="testimony-footer">
      <button>
        <GithubLogo />
      </button>
      <NavigateButton link={{ href: './' }}>Portfolio</NavigateButton>
    </footer>
  );
};
