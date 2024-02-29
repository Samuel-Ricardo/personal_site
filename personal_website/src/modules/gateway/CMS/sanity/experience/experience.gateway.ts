import { IExperienceGateway } from '@/modules/@core/experience/gateway/experience.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Experience } from '@/modules/@core/experience/entity/experience.entity';
import { IFindExperienceByContextDTO } from '@/modules/@core/experience/DTO/find/by/context.dto';

@injectable()
export class SanityExperienceGateway
  extends SanitySupport
  implements IExperienceGateway
{
  async findAll(): Promise<Experience[]> {
    return Experience.fromDTOs(
      await this.client.fetch(
        `*[_type == "experience"]{ context, title, description, startDate, endDate, company -> {link,name,logo} }`,
      ),
    );
  }

  async findByContext({
    context,
  }: IFindExperienceByContextDTO): Promise<Experience[]> {
    return Experience.fromDTOs(
      await this.client.fetch(
        `*[_type == "experience" && context == "${context}" ]{ context, title, description, startDate, endDate, company -> {link,name,logo} }`,
      ),
    );
  }
}
