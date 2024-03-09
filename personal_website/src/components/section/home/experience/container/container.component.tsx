import { ExperienceItem } from '../item/item.component';
import './container.style.scss';
import { IExperienceContainerProps } from '@/@types/props/section/experience/container';

export const ExperienceContainer = async ({
  itens,
}: IExperienceContainerProps) => {
  return (
    <ul id="experience-section-container">
      {await Promise.all(
        (await Promise.all(itens)).map(async (item, i) => (
          <ExperienceItem data={item} key={item.company.name} />
        )),
      )}
    </ul>
  );
};
