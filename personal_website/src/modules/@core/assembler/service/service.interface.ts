import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';
import { IAssembledHeroDTO } from '../DTO/service/assemble/hero.dto';
import { IAssembleOccupationDTO } from '../DTO/service/assemble/occupation.dto';

export interface IAssemblerService {
  findTitle: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
  findText: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
  assembleOccupation: () => Promise<IAssembleOccupationDTO>;
  assembleHero: () => Promise<IAssembledHeroDTO>;
}
