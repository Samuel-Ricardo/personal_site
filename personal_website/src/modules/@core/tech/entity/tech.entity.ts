import { ITechDTO } from '../DTO/tech.dto';
import { ITechViewDTO } from '../DTO/view.dto';

export class Tech {
  constructor(
    private readonly _name: string,
    private readonly _icon: string,
    private readonly _preview: string,
    private readonly _description: string,
    private readonly _identifier?: string,
    private readonly _context?: string[],
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

  static fromDTOs(dto: ITechDTO[]) {
    return dto.map(Tech.fromDTO);
  }

  toView(): ITechViewDTO {
    return {
      icon: this.icon,
      preview: {
        name: this.name,
        description: this.description,
        images: [this.preview],
      },
    };
  }

  get identifier() {
    return this._identifier;
  }

  get name() {
    return this._name;
  }

  get icon() {
    return this._icon;
  }

  get preview() {
    return this._preview;
  }

  get description() {
    return this._description;
  }

  get context() {
    return this._context;
  }
}
