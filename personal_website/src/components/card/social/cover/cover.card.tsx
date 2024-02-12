import { GithubLogo } from '@/icons/logo/github/icon.component';

import './cover.style.scss';

export const SocialCardCover = () => {
  return (
    <div className="cover opacity-0">
      <h3 className="name">Samuel Ricardo</h3>
      <h4 className="role">Full Stack Developer</h4>
      <footer className="footer">
        <GithubLogo />
        <GithubLogo />
        <GithubLogo />
      </footer>
    </div>
  );
};
