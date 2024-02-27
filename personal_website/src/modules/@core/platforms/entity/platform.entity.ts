export class Platform {
  constructor(
    private readonly _name: string,
    private readonly _icon: string,
    private readonly _link: string,
  ) {}

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
