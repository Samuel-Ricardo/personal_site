import { IAssembleAboutDTO } from '@/modules/@core/assembler/DTO/service/assemble/about.dto';

export interface IAboutContentProps {
  data: Omit<IAssembleAboutDTO, 'title'>;
}
