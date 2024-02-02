import Image from 'next/image';
import { TechPreview } from './preview/preview.component';
import { FrostedGlassCard } from '@/components/card/glass.card';
import { ITechGalaxyItemProps } from '@/@types/props/section/techs/item';

export const TechsGalaxyItem = ({ icon }: ITechGalaxyItemProps) => {
  return (
    <li id="tech-item">
      <FrostedGlassCard id="tech-item-img-container">
        <Image src={icon} alt="tech icon" width={80} height={80} />
      </FrostedGlassCard>

      <TechPreview />
    </li>
  );
};
