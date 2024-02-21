import { inject, injectable } from 'inversify';
import { IPersonController } from '../controller.interface';
import { type IPersonService } from '../../service/service.interface';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class StaticPersonController implements IPersonController {
  constructor(
    @inject(MODULE.PERSON.SERVICE.STATIC)
    protected readonly service: IPersonService,
  ) {}
}
