import { ItechGateway } from '@/modules/@core/tech/gateway/tech.gateway';
import { SanitySupport } from '../sanity.gateway';
import { Tech } from '@/modules/@core/tech/entity/tech.entity';
import { injectable } from 'inversify';

@injectable()
export class SanityTechGateway extends SanitySupport implements ItechGateway {
  async findAll(): Promise<Tech[]> {
    const result = await this.client.fetch(
      `*[_type == "tech" && lang == "en" ]{identifier, name, icon, preview, description, context}`,
    );

    return Tech.fromDTOs(result);
  }

  async findByContext(context: string): Promise<Tech[]> {
    const result = await this.client.fetch(
      `*[_type == "tech" && lang == "en" && "${context}" in context ]{name, icon, preview, description}`,
    );

    return Tech.fromDTOs(result);
  }
}
