import { ITestimonialGateway } from '@/modules/@core/testimonial/gateway/testimonial.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Testimonial } from '@/modules/@core/testimonial/entity/testimonial.entity';

@injectable()
export class SanityTestimonialGateway
  extends SanitySupport
  implements ITestimonialGateway
{
  async findAll(): Promise<Testimonial[]> {
    return Testimonial.fromDTOs(
      await this.client.fetch(
        `*[_type == "testimonial" ]{content,portfolio,person ->{ title, name, avatar, contacts, company }}`,
      ),
    );
  }
}
