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

  toDTO(): ITechDTO {
    return {
      identifier: this.identifier,
      name: this.name,
      icon: this.icon,
      preview: this.preview,
      description: this.description,
      context: this.context,
    };
  }

  static fromDTO(dto: ITechDTO) {
    return new Tech(
      dto.identifier,
      dto.name,
      dto.icon,
      dto.preview,
      dto.description,
      dto.context,
    );
  }
}
