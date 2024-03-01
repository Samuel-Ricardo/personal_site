import { IPersonDTO } from '../../person/DTO/person.dto';

export interface ITestimonialDTO {
  person: IPersonDTO;
  content: string;
  portfolio: string;
}
