import { injectable } from 'inversify';
import { FindStaticTitleUseCase } from '../../use_case/static/find/title.use_case';
import { FindStaticTextUseCase } from '../../use_case/static/find/text.use_case';
import { IAssemblerService } from '../service.interface';
import { StaticOccupationController } from '@/modules/@core/occupations/controller/static/occupation.controller';
import { StaticPersonController } from '@/modules/@core/person/controller/static/person.controller';

@injectable()
export class StaticAssemblerService implements IAssemblerService {
  constructor(
    protected readonly _findTitle: FindStaticTitleUseCase,
    protected readonly _findText: FindStaticTextUseCase,
    protected readonly occupation: StaticOccupationController,
    protected readonly person: StaticPersonController,
  ) {}
}
