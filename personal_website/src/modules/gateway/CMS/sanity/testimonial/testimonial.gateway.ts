import { ITestimonialGateway } from '@/modules/@core/testimonial/gateway/testimonial.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';

@injectable()
export class SanityTestimonialGateway
  extends SanitySupport
  implements ITestimonialGateway {}
