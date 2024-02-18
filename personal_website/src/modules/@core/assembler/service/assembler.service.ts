import { inject, injectable } from 'inversify';
import { FindTitleUseCase } from '../use_case/find/title.use_case';
import { FindTextUseCase } from '../use_case/find/text.use_case';
import { MODULE } from '@/modules/app.registry';
import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';

@injectable()
export class AssemblerService {
  constructor(
    @inject(MODULE.ASSEMBLER.USE_CASE.FIND.TITLE)
    private readonly _findTitle: FindTitleUseCase,
    @inject(MODULE.ASSEMBLER.USE_CASE.FIND.TEXT)
    private readonly _findText: FindTextUseCase,
  ) {}

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this._findTitle.execute(DTO);
  }
}
