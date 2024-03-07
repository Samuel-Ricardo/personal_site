import { ISendEmailDTO } from './DTO/send/email.dto';
import { Email } from './entity/email.entity';

export interface IEmailModule {
  sendEmail: (email: ISendEmailDTO) => Promise<Email>;
}
