import { injectable } from 'inversify';
import { EmailJSSupport } from '../email.support';
import { IEmailGateway } from '@/modules/@core/email/gateway/email.gateway';
import { Email } from '@/modules/@core/email/entity/email.entity';
import { ISendEmailDTO } from '@/modules/@core/email/DTO/send/email.dto';

@injectable()
export class EmailJSGateway extends EmailJSSupport implements IEmailGateway {
  async sendEmail(email: ISendEmailDTO) {
    return Email.fromDTO(
      await this.client.send(
        this.ENV.MAILER.SERVICE.ID,
        this.ENV.MAILER.TEMPLATE.ID,
        { ...email },
      ),
    );
  }
}
