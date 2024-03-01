import { ICompanyDTO } from '../../company/DTO/company.dto';
import { IContactDTO } from './contact.dto';

export interface IPersonDTO {
  identifier?: string;
  name: string;
  title: string;
  avatar: string;
  company: ICompanyDTO;
  contacts: IContactDTO[];
}
