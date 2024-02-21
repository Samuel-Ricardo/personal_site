import { Occupation } from '@/modules/@core/occupations/entity/occupation.entity';
import { IOccupationGateway } from '@/modules/@core/occupations/gateway/occupation.gateway';
import { injectable } from 'inversify';

@injectable()
export class StaticOccupationGateway implements IOccupationGateway {
  findAll(): Promise<Occupation[]> {
    throw new Error('Method not implemented.');
  }
}
