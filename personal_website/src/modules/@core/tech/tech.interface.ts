import { Tech } from './entity/tech.entity';

export interface ITechModule {
  findAll(): Promise<Tech[]>;
  findByContext(context: string): Promise<Tech[]>;
}
