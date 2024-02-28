export class Company {
  constructor(
    private readonly _name: string,
    private readonly _logo: string,
    private readonly _link: string,
  ) {}

  get name() {
    return this._name;
  }

  get logo() {
    return this._logo;
  }

  get link() {
    return this._link;
  }
}
