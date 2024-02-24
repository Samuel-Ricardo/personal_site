import { injectable } from 'inversify';
import { type IAssemblerGateway } from './assembler.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class AssemblerGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.ASSEMBLER)
  protected readonly gateway: IAssemblerGateway;
}
