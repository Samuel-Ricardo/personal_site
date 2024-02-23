import { injectable } from 'inversify';
import { type IHighlightGateway } from './highlight.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class HighlightGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.HIGHLIGHT)
  protected readonly gateway: IHighlightGateway;
}
