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
      title: await this.findTitle({ identifier: 'home_about_title' }),
      subtitle: await this.findTitle({ identifier: 'home_about_subtitle' }),
      paragraph: await this.findText({ identifier: 'home_about_paragraph' }),
      image: await this.findImage({ identifier: 'home_about_image' }),
      //      highlights: await this.occupation.findAllAsync(),
    };
  }
}
