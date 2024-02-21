import { injectable } from 'inversify';
import { IOccupationService } from '../service.interface';
import { Occupation } from '../../entity/occupation.entity';

@injectable()
export class StaticOccupationService implements IOccupationService {
  findAll(): Promise<Occupation[]> {
    throw new Error('Method not implemented.');
  }
}
