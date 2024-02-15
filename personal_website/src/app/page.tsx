import { AcademicRecord } from './sections/AcademicRecord/academic.section';
import { AboutMe } from './sections/about/about.section';
import { Articles } from './sections/articles/articles.section';
import { Contact } from './sections/contact/contact.section';
import { Experience } from './sections/experience/experience.section';
import { Hero } from './sections/hero/hero.section';
import { Projects } from './sections/projects/projects.section';
import { Techs } from './sections/techs/techs.section';
import { Testimonials } from './sections/testimonials/testimonials.section';
import { WorkWithSection } from './sections/work_with/works.section';

export default function Home() {
  return (
    <div
      id="home-page"
      className="flex flex-col overflow-x-hidden bg-primary-foreground"
    >
      <Hero />
      <WorkWithSection />
      <AboutMe />
      <Techs />
      <Projects />
      <Articles />
      <Experience />
      <AcademicRecord />
      <Testimonials />
      <Contact />
    </div>
  );
}
