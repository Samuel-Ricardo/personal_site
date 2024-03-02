import { ExperienceContainer } from '@/components/section/home/experience/container/container.component';
import './experience.style.scss';
import { MODULES } from '@/modules/app.factory';

export const Experience = async () => {
  const { experience, title } =
    await MODULES.ASSEMBLER.MAIN().assembleWorkExperience();

  return (
    <section id="experience-section" className="section">
      <h1>{await title}</h1>
      <ExperienceContainer
        itens={(await experience).map(async (e, i) => ({
          ...e.toViewDTO(),
          left: i % 2 === 0,
        }))}
      />
    </section>
  );
};
