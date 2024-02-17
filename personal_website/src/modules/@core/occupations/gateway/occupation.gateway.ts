import { IOccupationDTO } from '../DTO/occupation.dto';

export interface IOccupationGateway {
  findAll(): Promise<IOccupationDTO[]>;
}
