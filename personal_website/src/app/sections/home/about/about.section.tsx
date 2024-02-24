import './about.style.scss';
import { AboutMeTitle } from '@/components/section/home/about/title/title.component';
import { AboutMeContent } from '@/components/section/home/about/content/content.component';
import { MODULES } from '@/modules/app.factory';

export const AboutMe = async () => {
  const { title, image, subtitle, paragraph, highlights } =
    await MODULES.ASSEMBLER.MAIN().assembleAbout();
  return (
    <section id="about-me" className="section">
      <AboutMeTitle>{await title}</AboutMeTitle>
      <AboutMeContent data={{ image, subtitle, paragraph, highlights }} />
    </section>
  );
};
