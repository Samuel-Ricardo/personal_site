import { TechsGalaxy } from '@/components/section/home/techs/galaxy/galaxy.component';
import './techs.style.scss';
import { TechsBackground } from '@/assets/images/background/techs/techs.background';
import { TechsIlustration } from '@/assets/images/section/tech.asset';
import { MODULES } from '@/modules/app.factory';

import { AND_MORE } from '@/local/data/static/techs.data';
import { MotionH1 } from '@/components/motion/h1.component';
import { MotionH2 } from '@/components/motion/h2.component';

export const Techs = async () => {
  const { title, subtitle, techs, image } =
    await MODULES.ASSEMBLER.MAIN().assembleTechHomeSection();

  const titleAnimation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN()({
    animate: 'inactive',
  });
  const subtitleAnimation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()();

  return (
    <section id="techs-section" className="section">
      <TechsBackground />

      <MotionH1 {...titleAnimation} id="techs-title">
        {await title}
      </MotionH1>
      <MotionH2 {...subtitleAnimation} id="techs-subtitle">
        {await subtitle}
      </MotionH2>

      <div id="techs-container-layer-1">
        <TechsGalaxy
          title="Frontend"
          items={(await techs.frontend)
            .map(item => item.toView())
            .concat([AND_MORE])}
        />
        <TechsGalaxy
          title="Backend"
          items={(await techs.backend)
            .map(item => ({
              ...item.toView(),
              preview: { ...item.toView().preview, left: true },
            }))
            .concat([AND_MORE])}
        />
      </div>
      <div id="techs-container-layer-2">
        <div id="tech-ilustration">
          <TechsIlustration />
        </div>
      </div>
      <div id="techs-container-layer-3">
        <TechsGalaxy
          title="Devops + Databases"
          items={(await techs.devops)
            .concat(await techs.database)
            .map(item => item.toView())
            .concat([AND_MORE])}
        />
        <TechsGalaxy
          title="Quality Assurance"
          items={(await techs.QA)
            .map(i => ({
              ...i.toView(),
              preview: { ...i.toView().preview, left: true },
            }))
            .concat([AND_MORE])}
        />
      </div>
    </section>
  );
};
