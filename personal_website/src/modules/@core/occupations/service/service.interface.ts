import { Occupation } from '../entity/occupation.entity';

export interface IOccupationService {
  findAll(): Promise<Occupation[]>;
}
