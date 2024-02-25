import { IFindTechByContextDTO } from '../DTO/use_case/find/by/context.dto';
import { Tech } from '../entity/tech.entity';

export interface ItechGateway {
  findAll(): Promise<Tech[]>;
  findByContext(context: IFindTechByContextDTO): Promise<Tech[]>;
}
