import { IPlatformGateway } from '@/modules/@core/platforms/gateway/platform.gateway';
import { SanitySupport } from '../sanity.gateway';
import { IFindOnePlatformDTO } from '@/modules/@core/platforms/DTO/gateway/find/one.dto';
import { Platform } from '@/modules/@core/platforms/entity/platform.entity';
import { injectable } from 'inversify';

@injectable()
export class PlatformGateway extends SanitySupport implements IPlatformGateway {
  async findAll() {
    const result = await this.client.fetch(
      `*[_type == "platform" ]{name,link,icon}`,
    );

    return Platform.fromDTOs(result);
  }
  findOne({ id }: IFindOnePlatformDTO): Promise<Platform> {}
}
