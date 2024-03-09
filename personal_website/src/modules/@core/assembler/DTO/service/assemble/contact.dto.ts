import { IContactDTO } from '@/modules/@core/person/DTO/contact.dto';

export interface IAssembleContactDTO {
  title: Promise<string | undefined>;
  subtitle: Promise<string | undefined>;
  paragraph: Promise<string | undefined>;
  image: Promise<string | undefined>;
  form: {
    title: Promise<string | undefined>;
  };
  contacts: Promise<IContactDTO[] | undefined>;
}
