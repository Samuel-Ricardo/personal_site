import { inject, injectable } from 'inversify';
import { type IAssemblerGateway } from './assembler.gateway';
import { MODULE } from '@/modules/app.registry';

@injectable()
export abstract class AssemblerGatewaySupport {
  constructor(
    @inject(MODULE.GATEWAY.CMS.SANITY.ASSEMBLER)
    protected readonly gateway: IAssemblerGateway,
  ) {}
}
