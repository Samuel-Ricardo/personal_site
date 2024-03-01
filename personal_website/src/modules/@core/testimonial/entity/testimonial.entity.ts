import { Person } from '../../person/entity/person.entity';

export class Testimonial {
  constructor(
    private readonly _person: Person,
    private readonly _content: string,
    private readonly _portfolio: string,
  ) {}
}
