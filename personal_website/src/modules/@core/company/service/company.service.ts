import { injectable } from 'inversify';
import { ICompanyService } from './service.interface';
import { FindAllCompanyUseCase } from '../use_case/find/all.use_case';
import { FindOneCompanyUseCase } from '../use_case/find/one.use_case';

@injectable()
export class ComapnyService implements ICompanyService {
  constructor(
    private readonly findAllCompanyUseCase: FindAllCompanyUseCase,
    private readonly findOneCompanyUseCase: FindOneCompanyUseCase,
  ) {}
}
