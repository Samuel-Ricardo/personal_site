import { Company } from '../../company/entity/commpany.entity';
import { IExperienceDTO } from '../DTO/experience.dto';

export class Experience {
  constructor(
    private readonly _title: string,
    private readonly _description: Promise<string>,
    private readonly _startDate: Date,
    private readonly _endDate: Date,
    private readonly _context: 'work' | 'academic',
    private readonly _company: Promise<Company>,
  ) {}

  toDTO(): IExperienceDTO {
    return {
      title: this._title,
      description: this._description,
      startDate: this._startDate,
      endDate: this._endDate,
      context: this._context,
      company: this._company,
    };
  }

  static fromDTO(dto: IExperienceDTO): Experience {
    return new Experience(
      dto.title,
      dto.description,
      dto.startDate,
      dto.endDate,
      dto.context,
      dto.company,
    );
  }

  static fromDTOs(DTO: IExperienceDTO[]): Experience[] {
    return DTO.map(Experience.fromDTO);
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get startDate() {
    return this._startDate;
  }

  get endDate() {
    return this._endDate;
  }

  get context() {
    return this._context;
  }

  get company() {
    return this._company;
  }
}
