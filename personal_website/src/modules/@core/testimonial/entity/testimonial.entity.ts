import { Person } from '../../person/entity/person.entity';

export class Testimonial {
  constructor(
    private readonly _person: Person,
    private readonly _content: string,
    private readonly _portfolio: string,
  ) {}

  get person() {
    return this._person;
  }

  get content() {
    return this._content;
  }

  get portfolio() {
    return this._portfolio;
  }
}
