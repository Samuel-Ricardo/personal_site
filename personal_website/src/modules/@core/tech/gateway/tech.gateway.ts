import { Tech } from '../entity/tech.entity';

export interface ItechGateway {
  findAll(): Promise<Tech[]>;
}
