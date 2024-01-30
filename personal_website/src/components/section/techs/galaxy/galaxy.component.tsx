import { ITechGalaxyProps } from '@/@types/props/section/techs/galaxy';

import './galaxy.style.scss';

export const TechsGalaxy = ({ children }: ITechGalaxyProps) => {
  return (
    <ul id="techs-galaxy" className="frosted-glass-lg">
      {children?.map(c => <li key={c?.toString()}>{c}</li>)}
    </ul>
  );
};
