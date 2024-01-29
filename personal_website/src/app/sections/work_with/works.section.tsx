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
          title="Freelancer"
          image="https://th.bing.com/th/id/OIG2.S1ygsRnG1jar4RwHFbgG?pid=ImgGn"
        >
          The Best Solutions for your bussines
        </IWorkWithCard>
        <IWorkWithCard
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          title="Frontend"
        >
          {' '}
          Building websites with the best technologies.
        </IWorkWithCard>
        <IWorkWithCard
          title="Backend"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
        >
          Scalable API&#39;s with healthy architecture.
        </IWorkWithCard>
        <IWorkWithCard
          title="Devops"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        >
          Containerization and CI/CD.
        </IWorkWithCard>
        <IWorkWithCard
          title="Microsservice"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
        >
          Building scalable microservices.
        </IWorkWithCard>

        <IWorkWithCard
          title="Mobile"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
        >
          Building responsive and fast mobile applications.
        </IWorkWithCard>
      </InfinityHorizontalCarousel>
    </section>
  );
};
