import { IProjectGateway } from '@/modules/@core/project/gateway/project.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Project } from '@/modules/@core/project/entity/project.entity';

@injectable()
export class SanityProjectGateway
  extends SanitySupport
  implements IProjectGateway
{
  async findAll() {
    const result = await this.client.fetch(`
      *[_type == "project"] {
        
        main,
        title,
        preview,
        description,
        repository,
        demo,
        link, 
        'techs': techs[]{identifier, star}

      }
    `);

    return Project.fromDTOs(result);
  }

  async findMainProjects() {
    const result = await this.client.fetch(`
      *[_type == "project" && main == true] {
        
        main,
        title,
        preview,
        description,
        repository,
        demo,
        link, 
        'techs': techs[]{identifier, star}
      }
    `);

    return Project.fromDTOs(result);
  }
}
