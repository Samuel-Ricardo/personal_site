import { IExperienceGateway } from '@/modules/@core/experience/gateway/experience.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';

@injectable()
export class SanityExperienceGateway
  extends SanitySupport
  implements IExperienceGateway {}
