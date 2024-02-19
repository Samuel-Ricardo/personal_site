export class Person {
  constructor(
    protected readonly _name: string,
    protected readonly _title: string,
    protected readonly _avatar: string,
  ) {}

  get name() {
    return this._name;
  }

  get title() {
    return this._title;
  }

  get avatar() {
    return this._avatar;
  }
}
