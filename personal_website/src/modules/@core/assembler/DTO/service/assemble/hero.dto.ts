import { Person } from '@/modules/@core/person/entity/person.entity';

export interface IAssembleHeroDTO {
  person: Person;
  paragraph: string;
  contact: string;
  resume: string;
}
