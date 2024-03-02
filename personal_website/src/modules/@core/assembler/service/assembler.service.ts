import { inject, injectable } from 'inversify';
import { FindTitleUseCase } from '../use_case/find/title.use_case';
import { FindTextUseCase } from '../use_case/find/text.use_case';
import { MODULE } from '@/modules/app.registry';
import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';
import { OccupationController } from '../../occupations/controller/occupation.controller';
import { IAssembleOccupationDTO } from '../DTO/service/assemble/occupation.dto';
import { PersonController } from '../../person/controller/person.controller';
import { IAssembledHeroDTO } from '../DTO/service/assemble/hero.dto';
import { IAssemblerService } from './service.interface';
import { IAssembleAboutDTO } from '../DTO/service/assemble/about.dto';
import { HighlightController } from '../../highlight/controller/highlight.controller';
import { FindImageUseCase } from '../use_case/find/image.use_case';
import { IAssembleTechHomeSectionDTO } from '../DTO/service/assemble/techs.dto';
import { type ITechModule } from '../../tech/tech.interface';
import { IAssembleProjectsDTO } from '../DTO/service/assemble/projects.dto';
import { type IProjectModule } from '../../project/project.interface';
import { IAssembleArticleDTO } from '../DTO/service/assemble/articles.dto';
import { type IArticleModule } from '../../articles/articles.interface';
import { type IPlatformModule } from '../../platforms/platform.interace';
import { type IExperienceModule } from '../../experience/experience.interface';
import { IAssembleExperienceDTO } from '../DTO/service/assemble/experience.dto';
import { IAssembleTestimonials } from '../DTO/service/assemble/testimonials.dto';
import { type ITestimonialModule } from '../../testimonial/testimonial.interface';

@injectable()
export class AssemblerService implements IAssemblerService {
  constructor(
    @inject(MODULE.ASSEMBLER.USE_CASE.FIND.TITLE)
    private readonly _findTitle: FindTitleUseCase,
    @inject(MODULE.ASSEMBLER.USE_CASE.FIND.TEXT)
    private readonly _findText: FindTextUseCase,
    @inject(MODULE.ASSEMBLER.USE_CASE.FIND.IMAGE)
    private readonly _findImage: FindImageUseCase,
    @inject(MODULE.OCCUPATION.MAIN)
    private readonly occupation: OccupationController,
    @inject(MODULE.PERSON.MAIN)
    private readonly person: PersonController,
    @inject(MODULE.HIGHLIGHT.MAIN)
    private readonly highlight: HighlightController,
    @inject(MODULE.TECH.MAIN)
    private readonly techs: ITechModule,
    @inject(MODULE.PROJECT.MAIN)
    private readonly projects: IProjectModule,
    @inject(MODULE.ARTICLE.MAIN)
    private readonly article: IArticleModule,
    @inject(MODULE.PLATFORM.MAIN)
    private readonly platforms: IPlatformModule,
    @inject(MODULE.EXPERIENCE.MAIN)
    private readonly experience: IExperienceModule,
    @inject(MODULE.TESTIMONIAL.MAIN)
    private readonly testimonials: ITestimonialModule,
  ) {}

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this._findTitle.execute(DTO);
  }

  async findText(DTO: IAssemblerFindDTO) {
    return await this._findText.execute(DTO);
  }

  async findImage(DTO: IAssemblerFindDTO) {
    return await this._findImage.execute(DTO);
  }

  async assembleOccupation(): Promise<IAssembleOccupationDTO> {
    return {
      title:
        (await this.findTitle({ identifier: 'home_occupation_title' })) || '',
      occupations: await this.occupation.findAllAsync(),
    };
  }

  async assembleHero(): Promise<IAssembledHeroDTO> {
    return {
      person:
        (await this.person.findOneAsync({ identifier: 'person_samuel' })) ||
        ({} as any),
      paragraph:
        (await this.findText({ identifier: 'home_hero_paragraph' })) || '',
      contact: (await this.findTitle({ identifier: 'btn_contact_me' })) || '',
      resume: (await this.findTitle({ identifier: 'btn_resume' })) || '',
    };
  }

  async assembleAbout(): Promise<IAssembleAboutDTO> {
    return {
      title: this.findTitle({ identifier: 'home_about_title' }),
      subtitle: this.findTitle({ identifier: 'home_about_subtitle' }),
      paragraph: this.findText({ identifier: 'home_about_paragraph' }),
      image: this.findImage({ identifier: 'home_about' }),
      highlights: this.highlight.findAll(),
    };
  }

  async assembleTechs(): Promise<IAssembleTechHomeSectionDTO> {
    return {
      title: this.findTitle({ identifier: 'home_techs_title' }),
      subtitle: this.findTitle({ identifier: 'home_techs_subtitle' }),
      techs: {
        frontend: this.techs.findByContext({ context: 'frontend' }),
        backend: this.techs.findByContext({ context: 'backend' }),
        devops: this.techs.findByContext({ context: 'devops' }),
        database: this.techs.findByContext({ context: 'database' }),
        QA: this.techs.findByContext({ context: 'quality_assurance' }),
      },
      image: this.findImage({ identifier: 'home_techs' }),
    };
  }

  async assembleProjects(): Promise<IAssembleProjectsDTO> {
    return {
      title: this.findTitle({ identifier: 'home_project_title' }),
      projects: this.projects.findMainProjects(),
    };
  }

  async assembleArticles(): Promise<IAssembleArticleDTO> {
    return {
      title: this.findTitle({ identifier: 'home_articles_title' }),
      platforms_title: this.findTitle({
        identifier: 'home_articles_platforms_title',
      }),
      articles: this.article.findMainArticles(),
      platforms: this.platforms.findAll(),
    };
  }

  async assembleWorkExperience(): Promise<IAssembleExperienceDTO> {
    return {
      title: this.findTitle({ identifier: 'home__work_experience__title' }),
      experience: this.experience.findWorkExperience(),
    };
  }

  async assembleAcademicExperience(): Promise<IAssembleExperienceDTO> {
    return {
      title: this.findTitle({ identifier: 'home__academic_experience__title' }),
      experience: this.experience.findAcademicExperience(),
    };
  }

  async assembleTestimonials(): Promise<IAssembleTestimonials> {
    return {
      title: this.findTitle({ identifier: 'home_testimonials_title' }),
      testimonials: this.testimonials.findAll(),
    };
  }
}
