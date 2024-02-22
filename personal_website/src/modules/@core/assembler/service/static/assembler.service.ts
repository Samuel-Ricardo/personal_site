import { injectable } from 'inversify';
import { FindStaticTitleUseCase } from '../../use_case/static/find/title.use_case';
import { FindStaticTextUseCase } from '../../use_case/static/find/text.use_case';
import { IAssemblerService } from '../service.interface';
import { StaticOccupationController } from '@/modules/@core/occupations/controller/static/occupation.controller';
import { StaticPersonController } from '@/modules/@core/person/controller/static/person.controller';
import { IAssemblerFindDTO } from '../../DTO/gateway/find/index.dto';
import { IAssembledHeroDTO } from '../../DTO/service/assemble/hero.dto';
import { IAssembleOccupationDTO } from '../../DTO/service/assemble/occupation.dto';

@injectable()
export class StaticAssemblerService implements IAssemblerService {
  constructor(
    protected readonly _findTitle: FindStaticTitleUseCase,
    protected readonly _findText: FindStaticTextUseCase,
    protected readonly occupation: StaticOccupationController,
    protected readonly person: StaticPersonController,
  ) {}

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this._findTitle.execute(DTO);
  }

  async findText(DTO: IAssemblerFindDTO) {
    return await this._findText.execute(DTO);
  }
  assembleOccupation: () => Promise<IAssembleOccupationDTO>;
  assembleHero: () => Promise<IAssembledHeroDTO>;
}
