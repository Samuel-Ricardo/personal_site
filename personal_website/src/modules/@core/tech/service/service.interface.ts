import { IFindTechByContextDTO } from '../DTO/use_case/find/by/context.dto';
import { Tech } from '../entity/tech.entity';

export interface ITechService {
  findAll(): Promise<Tech[]>;
  findByContext(context: IFindTechByContextDTO): Promise<Tech[]>;
}
