import { ITechDTO } from '../DTO/tech.dto';

export class Tech {
  constructor(
    private readonly _identifier: string,
    private readonly _name: string,
    private readonly _icon: string,
    private readonly _preview: string,
    private readonly _description: string,
    private readonly _context: string[],
  ) {}
}
