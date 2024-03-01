import { ExperienceContainer } from '@/components/section/home/experience/container/container.component';
import './academic.style.scss';
import { MODULES } from '@/modules/app.factory';

export const AcademicRecord = async () => {
  const { title, experience } =
    await MODULES.ASSEMBLER.MAIN().assembleAcademicExperience();

  return (
    <section id="academic-section" className="section">
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
