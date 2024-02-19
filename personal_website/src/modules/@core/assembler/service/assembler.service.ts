import { inject, injectable } from 'inversify';
import { FindTitleUseCase } from '../use_case/find/title.use_case';
import { FindTextUseCase } from '../use_case/find/text.use_case';
import { MODULE } from '@/modules/app.registry';
import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';
import { OccupationController } from '../../occupations/controller/occupation.controller';
import { IAssembleOccupationDTO } from '../DTO/service/assemble/occupation.dto';

@injectable()
export class AssemblerService {
  constructor(
    @inject(MODULE.ASSEMBLER.USE_CASE.FIND.TITLE)
    private readonly _findTitle: FindTitleUseCase,
    @inject(MODULE.ASSEMBLER.USE_CASE.FIND.TEXT)
    private readonly _findText: FindTextUseCase,
    @inject(MODULE.OCCUPATION.MAIN)
    private readonly occupation: OccupationController,
  ) {}

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this._findTitle.execute(DTO);
  }

  async findText(DTO: IAssemblerFindDTO) {
    return await this._findText.execute(DTO);
  }

  async assembleOccupation(): Promise<IAssembleOccupationDTO> {
    return {
      title: await this.findTitle({ identifier: 'home_occupation_title' }),
      occupations: await this.occupation.findAll(),
    };
  }
}
