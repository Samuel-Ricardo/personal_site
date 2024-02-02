import { AboutMe } from './sections/about/about.section';
import { Hero } from './sections/hero/hero.section';
import { Techs } from './sections/techs/techs.section';
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
    </div>
  );
}
