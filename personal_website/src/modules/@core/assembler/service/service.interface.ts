import { IFindExperienceByContextDTO } from '../../experience/DTO/find/by/context.dto';
import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';
import { IAssembleAboutDTO } from '../DTO/service/assemble/about.dto';
import { IAssembleArticleDTO } from '../DTO/service/assemble/articles.dto';
import { IAssembleContactDTO } from '../DTO/service/assemble/contact.dto';
import { IAssembleExperienceDTO } from '../DTO/service/assemble/experience.dto';
import { IAssembledHeroDTO } from '../DTO/service/assemble/hero.dto';
import { IAssembleOccupationDTO } from '../DTO/service/assemble/occupation.dto';
import { IAssembleProjectsDTO } from '../DTO/service/assemble/projects.dto';
import { IAssembleTechHomeSectionDTO } from '../DTO/service/assemble/techs.dto';
import { IAssembleTestimonials } from '../DTO/service/assemble/testimonials.dto';

export interface IAssemblerService {
  findTitle: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
  findText: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
  assembleOccupation: () => Promise<IAssembleOccupationDTO>;
  assembleHero: () => Promise<IAssembledHeroDTO>;
  assembleAbout: () => Promise<IAssembleAboutDTO>;
  assembleTechs: () => Promise<IAssembleTechHomeSectionDTO>;
  assembleProjects: () => Promise<IAssembleProjectsDTO>;
  assembleArticles: () => Promise<IAssembleArticleDTO>;
  assembleWorkExperience: () => Promise<IAssembleExperienceDTO>;
  assembleAcademicExperience: () => Promise<IAssembleExperienceDTO>;
  assembleTestimonials: () => Promise<IAssembleTestimonials>;
  assembleContact: () => Promise<IAssembleContactDTO>;
}
