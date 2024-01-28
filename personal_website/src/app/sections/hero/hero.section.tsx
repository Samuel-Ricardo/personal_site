import { Circuit } from '@/components/canvas/circuit.component';
import { HeroCard } from '@/components/hero/card.component';
import './hero.style.scss';

export const Hero = () => {
  return (
    <section id="hero">
      <Circuit className="absolute top-0 left-0 right-0 h-[75vh] w-full bg-primary-foreground z-0" />
      <HeroCard />
    </section>
  );
};
