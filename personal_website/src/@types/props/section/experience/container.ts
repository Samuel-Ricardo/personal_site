import { IExperienceViewDTO } from '@/modules/@core/experience/DTO/view.dto';

export interface IExperienceContainerProps {
  itens: Promise<IExperienceViewDTO>[];
}
