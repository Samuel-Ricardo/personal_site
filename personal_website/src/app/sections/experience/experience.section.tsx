import { ExperienceContainer } from '@/components/section/experience/container/container.component';
import './experience.style.scss';

export const Experience = () => {
  return (
    <section id="experience-section">
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
