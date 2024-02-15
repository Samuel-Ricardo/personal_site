import './globals.scss';

import { AcademicRecord } from './sections/home/AcademicRecord/academic.section';
import { AboutMe } from './sections/home/about/about.section';
import { Articles } from './sections/home/articles/articles.section';
import { Contact } from './sections/home/contact/contact.section';
import { Experience } from './sections/home/experience/experience.section';
import { Hero } from './sections/home/hero/hero.section';
import { Projects } from './sections/home/projects/projects.section';
import { Techs } from './sections/home/techs/techs.section';
import { Testimonials } from './sections/home/testimonials/testimonials.section';
import { WorkWithSection } from './sections/home/work_with/works.section';

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
