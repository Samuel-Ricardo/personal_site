import { injectable } from 'inversify';
import { HighlightGatewaySupport } from '../../gateway/gateway.support';

@injectable()
export class FindAllHighlightsUseCase extends HighlightGatewaySupport {
  async execute() {
    return await this.gateway.findAll();
  }
}
