import { inject, injectable } from 'inversify';
import { IEmailModule } from '../email.interface';
import { type IEmailService } from '../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class EmailController implements IEmailModule {
  constructor(
    @inject(MODULE.EMAIL.SERVICE.MAIN)
    protected readonly service: IEmailService,
  ) {}
}
