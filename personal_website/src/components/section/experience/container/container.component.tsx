import { ExperienceItem } from '../item/item.component';
import './container.style.scss';
import { IExperienceContainerProps } from '@/@types/props/section/experience/container';

export const ExperienceContainer = ({ itens }: IExperienceContainerProps) => {
  return (
    <ul id="experience-section-container">
      {itens.map(item => (
        <ExperienceItem data={item} key={item.company.name} />
      ))}
    </ul>
  );
};
