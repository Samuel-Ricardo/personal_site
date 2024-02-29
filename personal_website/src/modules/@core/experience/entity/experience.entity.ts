import { Company } from '../../company/entity/commpany.entity';

export class Experience {
  constructor(
    private readonly _title: string,
    private readonly _description: Promise<string>,
    private readonly _startDate: Date,
    private readonly _endDate: Date,
    private readonly _context: 'work' | 'academic',
    private readonly _company: Promise<Company>,
  ) {}

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
