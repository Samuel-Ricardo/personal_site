import { IProjectGateway } from '@/modules/@core/project/gateway/project.gateway';
import { SanitySupport } from '../sanity.gateway';
import { injectable } from 'inversify';
import { Project } from '@/modules/@core/project/entity/project.entity';
import { Tech } from '@/modules/@core/tech/entity/tech.entity';
import { IFindProjectByTitleDTO } from '@/modules/@core/project/DTO/find/by/title.dto';

@injectable()
export class SanityProjectGateway
  extends SanitySupport
  implements IProjectGateway
{
  async findAll() {
    const result = await this.client.fetch(`
      *[_type == "project"] {
        body,  
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
      project.preview = this.imageBuilder.image(project.preview).url();

      project.description = this.client
        .fetch(
          `*[_type == "tp_text" && identifier == "${project.description}"] {content}`,
        )
        .then(data => data[0].content);
      project.techs = project.techs.map(async tech =>
        this.client
          .fetch(
            `*[_type == "tech" && identifier == "${tech.identifier}"]{name, icon, description, preview, identifier, context}`,
          )
          .then(DTO => Tech.fromDTO(DTO[0])),
      );
      return project;
    });

    return Project.fromAsyncDTOs(projects);
  }

  async findMainProjects() {
    const result = await this.client.fetch(`
      *[_type == "project" && main == true] {
        body,
        position,  
        main,
        title,
        preview,
        description,
        repository,
        demo,
        link, 
        'techs': techs[]{identifier, star}
      } | order(position asc)
`);

    let projects = await result.map(async project => {
      project.preview = this.imageBuilder.image(project.preview).url();

      project.description = this.client
        .fetch(
          `*[_type == "tp_text" && identifier == "${project.description}"] {content}`,
        )
        .then(data => data[0].content);
      project.techs = project.techs.map(async tech =>
        this.client
          .fetch(
            `*[_type == "tech" && identifier == "${tech.identifier}"]{name, icon, description, preview, identifier, context}`,
          )
          .then(DTO => Tech.fromDTO(DTO[0])),
      );
      return project;
    });

    return Project.fromAsyncDTOs(projects);
  }

  async findOneByTitle({ title }: IFindProjectByTitleDTO) {
    const result = await this.client.fetch(
      `*[_type == "project" && title == $title] {
      body,
      main,
      title,
      preview,
      description,
      repository,
      demo,
      link, 
      'techs': techs[]{identifier, star}
    }[0]`,
      { title },
    );

    if (!result) {
      return null;
    }

    result.preview = this.imageBuilder.image(result.preview).url();

    result.description = await this.client
      .fetch(
        `*[_type == "tp_text" && identifier == "${result.description}"] {content}`,
      )
      .then(data => data[0]?.content || '');

    result.techs = await Promise.all(
      result.techs.map(async tech => {
        const techDTO = await this.client.fetch(
          `*[_type == "tech" && identifier == "${tech.identifier}"]{
          name, icon, description, preview, identifier, context
        }`,
        );
        return Tech.fromDTO(techDTO[0]);
      }),
    );

    return Project.fromDTO(result);
  }
}
