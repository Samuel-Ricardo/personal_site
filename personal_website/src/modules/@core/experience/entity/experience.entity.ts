import { Company } from '../../company/entity/commpany.entity';
import { IExperienceDTO } from '../DTO/experience.dto';
import { IExperienceViewDTO } from '../DTO/view.dto';

export class Experience {
  constructor(
    private readonly _title: string,
    private readonly _description: string,
    private readonly _context: 'work' | 'academic',
    private readonly _company: Company,
    private readonly _startDate: Date,
    private readonly _endDate?: Date,
  ) {}

  toDTO(): IExperienceDTO {
    return {
      title: this._title,
      description: { content: this._description },
      startDate: this._startDate.toISOString(),
      endDate: this._endDate?.toISOString(),
      context: this._context,
      company: this._company,
    };
  }

  toViewDTO(): IExperienceViewDTO {
    return {
      title: this._title,
      company: {
        name: this._company.name,
        icon: this._company.logo,
      },
      description: this._description,
      start: this._startDate,
      finish: this._endDate,
    };
  }

  static toViewList(items: Experience[]): Promise<IExperienceViewDTO>[] {
    return items.map(async item => item.toViewDTO());
  }

  static fromDTO(dto: IExperienceDTO): Experience {
    const start = dto.startDate.split('-').map(Number);
    const end = dto.endDate?.split('-').map(Number);

    return new Experience(
      dto.title,
      dto.description.content,
      dto.context,
      dto.company,
      new Date(start[0], start[1], start[2]),
      end && new Date(end[0], end[1], end[2]),
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
