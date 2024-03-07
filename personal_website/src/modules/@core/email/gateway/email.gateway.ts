import { IEmailDTO } from '../DTO/email.dto';
import { Email } from '../entity/email.entity';

export interface IEmailGateway {
  sendEmail: (email: IEmailDTO) => Promise<Email>;
}
