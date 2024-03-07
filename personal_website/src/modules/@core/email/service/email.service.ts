import { inject, injectable } from 'inversify';
import { IEmailService } from './service.interface';
import { SendEmailUseCase } from '../use_case/send.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class EmailService implements IEmailService {
  constructor(
    @inject(MODULE.EMAIL.USE_CASE.SEND)
    protected readonly sendEmail: SendEmailUseCase,
  ) {}
}
