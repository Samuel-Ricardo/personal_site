import { INCONSOLATA } from '@/app/style/fonts';
import './container.style.scss';

export const HeroCardContentContainer = () => {
  return (
    <div className={`${INCONSOLATA.className} container`}>
      <h1>Samuel Ricardo</h1>
      <h2>Full Stack Developer</h2>

      <p>
        I am a Full Stack Developer with a passion for creating innovative and
        user-friendly web applications.
      </p>

      <p>Socials</p>
    </div>
  );
};
