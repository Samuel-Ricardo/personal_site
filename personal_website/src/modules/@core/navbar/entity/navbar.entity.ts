import { INavbarDTO } from '../DTO/navbar.dto';

export class Navbar {
  constructor(
    protected readonly _identifier: string,
    protected readonly _title: string,
    protected readonly _link: string,
    protected readonly _position: number,
  ) {}

  toDTO(): INavbarDTO {
    return {
      identifier: this._identifier,
      title: this._title,
      link: this._link,
      position: this._position,
    };
  }

  static fromDTO(dto: INavbarDTO): Navbar {
    return new Navbar(dto.identifier, dto.title, dto.link, dto.position);
  }

  static fromDTOList(dtos: INavbarDTO[]): Navbar[] {
    return dtos.map(dto => Navbar.fromDTO(dto));
  }

  get identifier(): string {
    return this._identifier;
  }

  get title(): string {
    return this._title;
  }

  get link(): string {
    return this._link;
  }

  get position(): number {
    return this._position;
  }
}
