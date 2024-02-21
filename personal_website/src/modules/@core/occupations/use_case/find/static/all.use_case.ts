import { MODULE } from '@/modules/app.registry';
import { inject, injectable } from 'inversify';
import { type IOccupationGateway } from '../../../gateway/occupation.gateway';

@injectable()
export class FindAllStaticOccupationsUseCase {
  constructor(
    @inject(MODULE.GATEWAY.CMS.STATIC.OCCUPATION)
    protected readonly gateway: IOccupationGateway,
  ) {}

  async execute() {
    return this.gateway.findAll();
  }
}
