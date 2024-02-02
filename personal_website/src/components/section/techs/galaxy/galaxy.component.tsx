import { ITechGalaxyProps } from '@/@types/props/section/techs/galaxy';

import './galaxy.style.scss';
import { TechsGalaxyItem } from './item/item.component';

export const TechsGalaxy = ({ items }: ITechGalaxyProps) => {
  return (
    <div id="techs-galaxy" className="frosted-glass-lg">
      <ul className="items-container">
        {items?.map(item => <TechsGalaxyItem key={item?.icon} {...item} />)}
      </ul>
    </div>
  );
};
