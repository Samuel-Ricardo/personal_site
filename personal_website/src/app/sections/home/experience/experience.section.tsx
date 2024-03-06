import { ExperienceContainer } from '@/components/section/home/experience/container/container.component';
import './experience.style.scss';
import { MODULES } from '@/modules/app.factory';
import { MotionH1 } from '@/components/motion/h1.component';

export const Experience = async () => {
  const { experience, title } =
    await MODULES.ASSEMBLER.MAIN().assembleWorkExperience();

  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.DOWN()();

  return (
    <section id="experience-section" className="section">
      <MotionH1 {...animation}>{await title}</MotionH1>
      <ExperienceContainer
        itens={(await experience).map(async (e, i) => ({
          ...e.toViewDTO(),
          left: i % 2 === 0,
        }))}
      />
    </section>
  );
};
