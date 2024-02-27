import { IPlatformDTO } from '../DTO/platform.dto';

export class Platform {
  constructor(
    private readonly _name: string,
    private readonly _icon: string,
    private readonly _link: string,
  ) {}

  toDTO(): IPlatformDTO {
    return {
      name: this._name,
      icon: this._icon,
      link: this._link,
    };
  }

  static fromDTO(dto: IPlatformDTO): Platform {
    return new Platform(dto.name, dto.icon, dto.link);
  }

  static fromDTOs(dtos: IPlatformDTO[]): Platform[] {
    return dtos.map(Platform.fromDTO);
  }

  get name() {
    return this._name;
  }

  get icon() {
    return this._icon;
  }

  get link() {
    return this._link;
  }
}
