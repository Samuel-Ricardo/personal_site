import { MODULES } from '@/modules/app.factory';
import './title.style.scss';

export const AboutMeTitle = () => (
  <h1 className={`${MODULES.FONTS.MONO.INCONSOLATA().className} title`}>
    BRING THE POWER OF <span>CREATIVITY</span> TO THE WORLD
  </h1>
);
