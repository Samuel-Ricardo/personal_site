import { IPlatformGateway } from '@/modules/@core/platforms/gateway/platform.gateway';
import { SanitySupport } from '../sanity.gateway';
import { IFindOnePlatformDTO } from '@/modules/@core/platforms/DTO/gateway/find/one.dto';
import { Platform } from '@/modules/@core/platforms/entity/platform.entity';
import { injectable } from 'inversify';

@injectable()
export class PlatformGateway extends SanitySupport implements IPlatformGateway {
  findAll(): Promise<Platform> {
    throw new Error('Method not implemented.');
  }
  findOne(DTO: IFindOnePlatformDTO): Promise<Platform> {
    throw new Error('Method not implemented.');
  }
}
