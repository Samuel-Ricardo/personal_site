import './about.style.scss';
import { AboutMeTitle } from '@/components/section/home/about/title/title.component';
import { AboutMeContent } from '@/components/section/home/about/content/content.component';

export const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <AboutMeTitle />
      <AboutMeContent />
    </section>
  );
};
