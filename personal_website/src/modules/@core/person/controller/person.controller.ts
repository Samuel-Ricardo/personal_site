import { inject, injectable } from 'inversify';
import { PersonService } from '../service/person.service';
import { MODULE } from '@/modules/app.registry';
import { IFindAllPersonDTO } from '../DTO/gateway/find/all.dto';

@injectable()
export class PersonController {
  constructor(
    @inject(MODULE.PERSON.SERVICE.MAIN)
    protected readonly service: PersonService,
  ) {}
}
