import { Navbar } from '@/modules/@core/navbar/entity/navbar.entity';
import { INavbarGateway } from '@/modules/@core/navbar/gateway/navbar.gateway';
import { SanityClient } from 'sanity';

export class SanityNavbarGateway
  extends SanityClient
  implements INavbarGateway
{
  findAll(): Promise<Navbar[]> {
    throw new Error('Method not implemented.');
  }
}
