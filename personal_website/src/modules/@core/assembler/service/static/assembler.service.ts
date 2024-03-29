import { inject, injectable } from 'inversify';
import { FindStaticTitleUseCase } from '../../use_case/static/find/title.use_case';
import { FindStaticTextUseCase } from '../../use_case/static/find/text.use_case';
import { IAssemblerService } from '../service.interface';
import { StaticOccupationController } from '@/modules/@core/occupations/controller/static/occupation.controller';
import { StaticPersonController } from '@/modules/@core/person/controller/static/person.controller';
import { IAssemblerFindDTO } from '../../DTO/gateway/find/index.dto';
import { IAssembledHeroDTO } from '../../DTO/service/assemble/hero.dto';
import { IAssembleOccupationDTO } from '../../DTO/service/assemble/occupation.dto';
import { MODULE } from '@/modules/app.registry';
import { IAssembleAboutDTO } from '../../DTO/service/assemble/about.dto';
import { IAssembleTechHomeSectionDTO } from '../../DTO/service/assemble/techs.dto';
import { IAssembleArticleDTO } from '../../DTO/service/assemble/articles.dto';
import { IAssembleProjectsDTO } from '../../DTO/service/assemble/projects.dto';
import { IAssembleExperienceDTO } from '../../DTO/service/assemble/experience.dto';
import { IAssembleTestimonials } from '../../DTO/service/assemble/testimonials.dto';
import { IAssembleContactDTO } from '../../DTO/service/assemble/contact.dto';

@injectable()
export class StaticAssemblerService implements IAssemblerService {
  constructor(
    @inject(MODULE.ASSEMBLER.USE_CASE.STATIC.FIND.TITLE)
    protected readonly _findTitle: FindStaticTitleUseCase,
    @inject(MODULE.ASSEMBLER.USE_CASE.STATIC.FIND.TEXT)
    protected readonly _findText: FindStaticTextUseCase,
    @inject(MODULE.OCCUPATION.STATIC)
    protected readonly occupation: StaticOccupationController,
    @inject(MODULE.PERSON.STATIC)
    protected readonly person: StaticPersonController,
  ) {}
  assembleContact: () => Promise<IAssembleContactDTO>;
  assembleTestimonials: () => Promise<IAssembleTestimonials>;
  assembleWorkExperience: () => Promise<IAssembleExperienceDTO>;
  assembleAcademicExperience: () => Promise<IAssembleExperienceDTO>;
  assembleProjects: () => Promise<IAssembleProjectsDTO>;
  assembleArticles: () => Promise<IAssembleArticleDTO>;
  assembleAbout: () => Promise<IAssembleAboutDTO>;
  assembleTechs: () => Promise<IAssembleTechHomeSectionDTO>;

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this._findTitle.execute(DTO);
  }

  async findText(DTO: IAssemblerFindDTO) {
    return await this._findText.execute(DTO);
  }

  async assembleOccupation() {
    return {
      title: await this.findTitle({ identifier: 'home_occupation_title' }),
      occupations: await this.occupation.findAllAsync(),
    } as IAssembleOccupationDTO;
  }

  async assembleHero() {
    return {
      person: await this.person.findOneAsync({ identifier: 'person_samuel' }),
      paragraph: await this.findText({ identifier: 'home_hero_paragraph' }),
      resume: await this.findTitle({ identifier: 'btn_resume' }),
      contact: await this.findTitle({ identifier: 'btn_contact_me' }),
    } as IAssembledHeroDTO;
  }
}
