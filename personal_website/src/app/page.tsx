import { Hero } from './sections/hero/hero.section';
import { WorkWithSection } from './sections/work_with/works.section';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-primary">
      <Hero />
      <WorkWithSection />
    </div>
  );
}
