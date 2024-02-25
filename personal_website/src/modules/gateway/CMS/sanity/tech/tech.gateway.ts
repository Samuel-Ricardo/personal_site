import { ItechGateway } from '@/modules/@core/tech/gateway/tech.gateway';
import { SanitySupport } from '../sanity.gateway';
import { Tech } from '@/modules/@core/tech/entity/tech.entity';
import { injectable } from 'inversify';

@injectable()
export class SanityTechGateway extends SanitySupport implements ItechGateway {}
