import { injectable } from 'inversify';
import { EmailGatewaySupport } from '../gateway/gateway.support';
import { ISendEmailDTO } from '../DTO/send/email.dto';

@injectable()
export class SendEmailUseCase extends EmailGatewaySupport {
  async execute(email: ISendEmailDTO) {
    return await this.gateway.sendEmail(email);
  }
}
