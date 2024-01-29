import { InfinityHorizontalCarousel } from '@/components/carousel/horizontal/infity.component';

import './works.style.scss';
import { IWorkWithCard } from '@/components/card/work_with/card.component';
import { MODULES } from '@/modules/app.factory';
import { FrostedGlassCard } from '@/components/card/glass.card';

export const WorkWithSection = () => {
  return (
    <section id="i-work-with">
      <FrostedGlassCard
        className={`${MODULES.FONTS.MONO.INCONSOLATA().className} title-container`}
      >
        <h1 className="title">I Work With</h1>
      </FrostedGlassCard>
      <InfinityHorizontalCarousel>
        <IWorkWithCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          title="Open Source"
        >
          Building, sharing and contributing to open source.
        </IWorkWithCard>
        <IWorkWithCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          title="Frontend"
        >
          {' '}
          Building websites with the best technologies.
        </IWorkWithCard>
      </InfinityHorizontalCarousel>
    </section>
  );
};
