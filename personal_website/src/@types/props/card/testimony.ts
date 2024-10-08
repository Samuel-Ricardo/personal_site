import { IContactDTO } from '@/modules/@core/person/DTO/contact.dto';
import { IPersonDTO } from '@/modules/@core/person/DTO/person.dto';
import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';

export interface ITestimonyCardProps {
  data: ITestimonialDTO;
}

export interface ITestimonyCardHeaderProps {
  data?: IPersonDTO;
}

export interface ITestimonyCardFooterProps {
  portfolio: string;
  contacts: IContactDTO[];
}
