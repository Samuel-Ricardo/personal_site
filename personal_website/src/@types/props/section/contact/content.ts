import { IContactDTO } from '@/modules/@core/person/DTO/contact.dto';

export interface IContactContentProps {
  image: Promise<string | undefined>;
  paragraph: Promise<string | undefined>;
  contacts: Promise<IContactDTO[] | undefined>;
}
