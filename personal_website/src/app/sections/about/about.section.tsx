import './about.style.scss';
import { AboutMeTitle } from '@/components/about/title/title.component';
import { AboutMeContent } from '@/components/about/content/content.component';

export const AboutMe = () => {
  return (
    <section id="about-me" className="flex flex-col w-screen h-screen ">
      <AboutMeTitle />
      <AboutMeContent />
    </section>
  );
};
