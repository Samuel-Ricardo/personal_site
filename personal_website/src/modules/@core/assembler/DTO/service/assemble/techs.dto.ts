import { Tech } from '@/modules/@core/tech/entity/tech.entity';

export interface IAssembleTechHomeSectionDTO {
  title: Promise<string>;
  subtitle: Promise<string>;
  techs: Promise<Tech[]>;
  image: Promise<string>;
}
