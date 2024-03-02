import { IPersonDTO } from '@/modules/@core/person/DTO/person.dto';
import { ITestimonialDTO } from '@/modules/@core/testimonial/DTO/testimonial.dto';

export interface ISocialCardProps {
  data: ITestimonialDTO;
}

export interface ISocialCardCoverProps {
  data: IPersonDTO;
}

export interface ISocialCardFooterProps {
  name: string;
  title: string;
  company: string;
}
