import { OCCUPATIONS } from '@/local/data/static/occupations.data';
import { Occupation } from '@/modules/@core/occupations/entity/occupation.entity';
import { IOccupationGateway } from '@/modules/@core/occupations/gateway/occupation.gateway';
import { injectable } from 'inversify';

@injectable()
export class StaticOccupationGateway implements IOccupationGateway {
  async findAll() {
    return Occupation.fromDTOList(OCCUPATIONS);
  }
}
