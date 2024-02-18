import { Occupation } from '@/modules/@core/occupations/entity/occupation.entity';

export interface IAssembleOccupationDTO {
  title: string;
  occupations: Occupation[];
}
