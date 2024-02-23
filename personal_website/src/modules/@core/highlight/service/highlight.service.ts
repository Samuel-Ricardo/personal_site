import { inject, injectable } from 'inversify';
import { FindAllHighlightsUseCase } from '../use_case/find/all.use_case';
import { MODULE } from '@/modules/app.registry';

@injectable()
export class HighlightService {
  constructor(
    @inject(MODULE.HIGHLIGHT.USE_CASE.FIND.ALL)
    protected readonly _findAll: FindAllHighlightsUseCase,
  ) {}

  async findAll() {
    return await this._findAll.execute();
  }
}
