import { ITechGalaxyProps } from '@/@types/props/section/techs/galaxy';

import './galaxy.style.scss';
import { TechsGalaxyItem } from './item/item.component';

export const TechsGalaxy = ({ items, title }: ITechGalaxyProps) => {
  return (
    <div id="techs-galaxy" className="frosted-glass-lg">
      <h1 id="techs-galaxy-title">{title}</h1>
      <ul className="items-container">
        {items?.map((item, index) => (
          <TechsGalaxyItem index={index} key={item?.icon} {...item} />
        ))}
      </ul>
    </div>
  );
};
