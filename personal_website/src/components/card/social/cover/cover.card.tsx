import { GithubLogo } from '@/icons/logo/github/icon.component';

import './cover.style.scss';

export const SocialCardCover = () => {
  return (
    <div className="cover">
      <div className="cover-container">
        <div className={'data '}>
          <h3 className="name">Samuel Ricardo</h3>
          <h4 className="role">Full Stack • Github</h4>
        </div>
        <footer className="footer">
          <ul>
            <li>
              <GithubLogo />
            </li>
            <li>
              <GithubLogo />
            </li>
            <li>
              <GithubLogo />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
