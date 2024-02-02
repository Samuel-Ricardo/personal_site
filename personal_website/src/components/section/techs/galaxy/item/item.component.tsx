import Image from 'next/image';
import { TechPreview } from './preview/preview.component';
import { ITechGalaxyItemProps } from '@/@types/props/section/techs/item';

import './item.style.scss';

export const TechsGalaxyItem = ({ icon }: ITechGalaxyItemProps) => {
  return (
    <li id="tech-item" className="frosted-glass-lg">
      <div id="tech-item-img-container">
        <Image src={icon} alt="tech icon" width={80} height={80} />
      </div>

      <TechPreview />
    </li>
  );
};
