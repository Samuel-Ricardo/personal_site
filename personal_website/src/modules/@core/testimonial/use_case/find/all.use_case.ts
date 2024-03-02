import { injectable } from 'inversify';
import { TestimonialGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllTestimonialUseCase extends TestimonialGatewaySupport {
  async execute() {
    return this.gateway.findAll();
  }
}
