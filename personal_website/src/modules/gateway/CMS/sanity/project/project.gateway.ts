import { IProjectGateway } from '@/modules/@core/project/gateway/project.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Project } from '@/modules/@core/project/entity/project.entity';
import { Tech } from '@/modules/@core/tech/entity/tech.entity';

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

    let projects = await result.map(async project => {
      project.description = this.client
        .fetch(
          `*[_type == "title" && identifier == "${project.title}"] {content}`,
        )
        .then(data => data[0].content);
      project.techs = project.techs.map(async tech =>
        this.client
          .fetch(
            `*[_type == "tech" && identifier == "${tech.identifier}"]{name, icon, description, preview, identifier, context}`,
          )
          .then(Tech.fromDTOs),
      );
      return project;
    });

    return Project.fromAsyncDTOs(projects);
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

    let projects = await result.map(async project => {
      project.description = this.client
        .fetch(
          `*[_type == "title" && identifier == "${project.title}"] {content}`,
        )
        .then(data => data[0].content);
      project.techs = project.techs.map(async tech =>
        this.client
          .fetch(
            `*[_type == "tech" && identifier == "${tech.identifier}"]{name, icon, description, preview, identifier, context}`,
          )
          .then(Tech.fromDTOs),
      );
      return project;
    });

    return Project.fromAsyncDTOs(projects);
  }
}
