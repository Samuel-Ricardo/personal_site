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
}
