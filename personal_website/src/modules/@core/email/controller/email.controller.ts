import { inject, injectable } from 'inversify';
import { IEmailModule } from '../email.interface';
import { type IEmailService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';
import { Email } from '../entity/email.entity';
import { ISendEmailDTO } from '../DTO/send/email.dto';

@injectable()
export class EmailController implements IEmailModule {
  constructor(
    @inject(MODULE.EMAIL.SERVICE.MAIN)
    protected readonly service: IEmailService,
  ) {}

  async sendEmail(email: ISendEmailDTO): Promise<Email> {
    return await this.service.sendEmail(email);
  }
}
