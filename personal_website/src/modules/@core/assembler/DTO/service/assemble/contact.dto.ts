import { IContactDTO } from '@/modules/@core/person/DTO/contact.dto';

export interface IAssembleContactDTO {
  title: Promise<string>;
  subtitle: Promise<string>;
  paragraph: Promise<string>;
  image: Promise<string>;
  form: {
    title: Promise<string>;
  };
  contacts: Promise<IContactDTO>[];
}
