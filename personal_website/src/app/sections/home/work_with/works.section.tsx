import { InfinityHorizontalCarousel } from '@/components/carousel/horizontal/infity.component';

import './works.style.scss';
import { SimpleCard } from '@/components/card/simple/card.component';
import { MODULES } from '@/modules/app.factory';
import { FrostedGlassCard } from '@/components/card/glass.card';

export const WorkWithSection = async () => {
  const { occupations, title } =
    await MODULES.ASSEMBLER.MAIN().assembleOccupation();

  return (
    <section id="i-work-with">
      <FrostedGlassCard
        className={`${MODULES.FONTS.MONO.INCONSOLATA().className} title-container`}
      >
        <h1 className="title">{title}</h1>
      </FrostedGlassCard>
      <InfinityHorizontalCarousel>
        {occupations.map(occupation => (
          <SimpleCard
            key={occupation.title}
            title={occupation.title}
            image={occupation.image}
          >
            {occupation.description}
          </SimpleCard>
        ))}
      </InfinityHorizontalCarousel>
    </section>
  );
};
