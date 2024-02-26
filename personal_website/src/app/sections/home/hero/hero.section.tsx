import { Circuit } from '@/components/canvas/circuit.component';
import './hero.style.scss';
import { HeroCard } from '@/components/section/home/hero/card.component';

export const Hero = async () => {
  return (
    <section id="hero">
      <Circuit className="absolute top-0 left-0 right-0 h-screen w-full bg-primary-foreground z-0" />
      <HeroCard />
    </section>
  );
};
