import { injectable } from 'inversify';
import { type ITestimonialGateway } from './testimonial.gateway';
import { MODULE } from '@/modules/app.registry';
import { injectGateway } from '@/modules/gateway/gateway.module';

@injectable()
export abstract class TestimonialGatewaySupport {
  @injectGateway(MODULE.GATEWAY.CMS.SANITY.TESTIMONIAL)
  protected readonly gateway: ITestimonialGateway;
}
