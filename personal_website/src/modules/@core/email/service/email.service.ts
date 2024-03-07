import { inject, injectable } from 'inversify';
import { IEmailService } from './service.interface';
import { SendEmailUseCase } from '../use_case/send.use_case';
import { MODULE } from '@/modules/app.registry';
import { ISendEmailDTO } from '../DTO/send/email.dto';
import { Email } from '../entity/email.entity';

@injectable()
export class EmailService implements IEmailService {
  constructor(
    @inject(MODULE.EMAIL.USE_CASE.SEND)
    protected readonly send: SendEmailUseCase,
  ) {}

  async sendEmail(email: ISendEmailDTO): Promise<Email> {
    return await this.send.execute(email);
  }
}
