import { IFindOnePlatformDTO } from '../DTO/gateway/find/one.dto';
import { Platform } from '../entity/platform.entity';

export interface IPlatformService {
  findAll(): Promise<Platform[]>;
  findOne(DTO: IFindOnePlatformDTO): Promise<Platform>;
}
