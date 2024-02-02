import { ITechGalaxyProps } from '@/@types/props/section/techs/galaxy';

import './galaxy.style.scss';

export const TechsGalaxy = ({ children }: ITechGalaxyProps) => {
  return (
    <div id="techs-galaxy" className="frosted-glass-lg">
      <ul className="items-container">
        {children?.map(c => <li key={c?.toString()}>{c}</li>)}
      </ul>
    </div>
  );
};
