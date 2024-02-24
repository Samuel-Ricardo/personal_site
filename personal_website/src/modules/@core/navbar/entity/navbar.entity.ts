export class Navbar {
  constructor(
    protected readonly _identifier: string,
    protected readonly _title: string,
    protected readonly _link: string,
    protected readonly _position: number,
  ) {}

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
