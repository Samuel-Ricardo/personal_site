import { Navbar } from '../entity/navbar.entity';

export interface INavbarGateway {
  findAll(): Promise<Navbar[]>;
}
