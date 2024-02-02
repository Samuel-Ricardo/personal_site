import { TechsGalaxy } from '@/components/section/techs/galaxy/galaxy.component';
import './techs.style.scss';
import { TechsBackground } from '@/images/background/techs/techs.background';
import { TechsIlustration } from '@/images/section/tech.asset';

export const Techs = () => {
  return (
    <section id="techs-section">
      <TechsBackground />

      <h1 id="techs-title">A UNIVERSE OF POSSIBILITIES</h1>
      <h2 id="techs-subtitle">THE BEST SOLUTIONS FOR EACH CHALLENGE</h2>

      <div id="techs-container-layer-1">
        <TechsGalaxy
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
          ]}
        />
        <TechsGalaxy
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
          ]}
        />
      </div>
      <div id="techs-container-layer-2">
        <div id="tech-ilustration">
          <TechsIlustration />
        </div>
      </div>
      <div id="techs-container-layer-3">
        <TechsGalaxy
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
          ]}
        />
        <TechsGalaxy
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
          ]}
        />
      </div>
    </section>
  );
};
