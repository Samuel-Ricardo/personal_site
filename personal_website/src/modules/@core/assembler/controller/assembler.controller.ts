import { inject, injectable } from 'inversify';
import { AssemblerService } from '../service/assembler.service';
import { MODULE } from '@/modules/app.registry';
import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';

@injectable()
export class AssemblerController {
  constructor(
    @inject(MODULE.ASSEMBLER.SERVICE.MAIN)
    private readonly service: AssemblerService,
  ) {}

  async assembleArticles() {
    return await this.service.assembleArticles();
  }

  async assembleProjects() {
    return await this.service.assembleProjects();
  }

  async assembleOccupation() {
    return await this.service.assembleOccupation();
  }

  async assembleHero() {
    return await this.service.assembleHero();
  }

  async assembleAbout() {
    return this.service.assembleAbout();
  }

  async assembleTechHomeSection() {
    return this.service.assembleTechs();
  }

  async assembleWorkExperience() {
    return this.service.assembleWorkExperience();
  }

  async findTitle(DTO: IAssemblerFindDTO) {
    return await this.service.findTitle(DTO);
  }

  async findText(DTO: IAssemblerFindDTO) {
    return await this.service.findText(DTO);
  }
  async findImage(DTO: IAssemblerFindDTO) {
    return await this.service.findImage(DTO);
  }
}
