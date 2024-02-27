import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';
import { IAssembleAboutDTO } from '../DTO/service/assemble/about.dto';
import { IAssembleArticleDTO } from '../DTO/service/assemble/articles.dto';
import { IAssembledHeroDTO } from '../DTO/service/assemble/hero.dto';
import { IAssembleOccupationDTO } from '../DTO/service/assemble/occupation.dto';
import { IAssembleProjectsDTO } from '../DTO/service/assemble/projects.dto';
import { IAssembleTechHomeSectionDTO } from '../DTO/service/assemble/techs.dto';

export interface IAssemblerService {
  findTitle: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
  findText: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
  assembleOccupation: () => Promise<IAssembleOccupationDTO>;
  assembleHero: () => Promise<IAssembledHeroDTO>;
  assembleAbout: () => Promise<IAssembleAboutDTO>;
  assembleTechs: () => Promise<IAssembleTechHomeSectionDTO>;
  assembleProjects: () => Promise<IAssembleProjectsDTO>;
  assembleArticles: () => Promise<IAssembleArticleDTO>;
}
