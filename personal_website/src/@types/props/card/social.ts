import { IContactDTO } from '@/modules/@core/person/DTO/contact.dto';
import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';

export interface ISocialCardProps {
  data: ITestimonialDTO;
}

export interface ISocialCardCoverProps {
  name: string;
  title: string;
  contacts: IContactDTO[];
}
