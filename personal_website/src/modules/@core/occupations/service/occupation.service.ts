import { injectable } from 'inversify';
import { FindAllOccupationsUseCase } from '../use_case/find/all.use_case';

@injectable()
export class OccupationService {
  constructor(private readonly findAll: FindAllOccupationsUseCase) {}
}
