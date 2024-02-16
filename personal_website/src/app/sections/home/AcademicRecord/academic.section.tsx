import { ExperienceContainer } from '@/components/section/home/experience/container/container.component';
import './academic.style.scss';

export const AcademicRecord = () => {
  return (
    <section id="academic-section" className="section">
      <h1>Experience</h1>
      <ExperienceContainer
        itens={[
          {
            title: 'Open Source Dev',
            company: {
              name: 'Github',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            },
            description: '123456789123456789123456789123456789123456789',
            start: new Date(),
            left: true,
          },
          {
            title: 'Open Source Dev',
            company: {
              name: 'Github',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            },
            description: '123456789123456789123456789123456789123456789',
            start: new Date(),
            finish: new Date(),
          },
        ]}
      />
    </section>
  );
};
