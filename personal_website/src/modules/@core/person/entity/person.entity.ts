import { IPersonDTO } from '../DTO/person.dto';

export class Person {
  constructor(
    protected readonly _name: string,
    protected readonly _title: string,
    protected readonly _avatar: string,
  ) {}

  toDTO(): IPersonDTO {
    return {
      name: this._name,
      title: this._title,
      avatar: this._avatar,
    };
  }

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
