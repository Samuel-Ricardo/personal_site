import { ISendEmailDTO } from '../DTO/send/email.dto';
import { Email } from '../entity/email.entity';

export interface IEmailService {
  sendEmail: (email: ISendEmailDTO) => Promise<Email>;
}
