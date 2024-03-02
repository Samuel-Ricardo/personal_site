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
    const result = await this.client.fetch<any[]>(
      `*[_type == "testimonial" ]{content,portfolio,person ->{ title, name, avatar, contacts, company->{name,logo,link} }}`,
    );

    result.forEach(
      async r =>
        (r.person.avatar = this.imageBuilder.image(r.person.avatar).url()),
    );

    return Testimonial.fromDTOs(result);
  }
}
