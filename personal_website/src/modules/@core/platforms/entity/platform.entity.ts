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
