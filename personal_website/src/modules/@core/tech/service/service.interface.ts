import { Tech } from '../entity/tech.entity';

export interface ITechService {
  findAll(): Promise<Tech[]>;
}
