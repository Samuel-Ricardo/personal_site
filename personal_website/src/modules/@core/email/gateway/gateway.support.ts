import { injectable } from 'inversify';
import { type IEmailGateway } from './email.gateway';
import { injectGateway } from '@/modules/gateway/gateway.module';
import { MODULE } from '@/modules/app.registry';

@injectable()
export abstract class EmailGatewaySupport {
  @injectGateway(MODULE.GATEWAY.EMAIL.EMAILJS)
  protected readonly gateway: IEmailGateway;
}
