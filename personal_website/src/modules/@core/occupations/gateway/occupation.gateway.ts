import { Occupation } from '../entity/occupation.entity';

export interface IOccupationGateway {
  findAll(): Promise<Occupation[]>;
}
