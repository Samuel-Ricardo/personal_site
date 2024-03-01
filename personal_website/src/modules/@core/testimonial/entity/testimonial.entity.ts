import { Person } from '../../person/entity/person.entity';
import { ITestimonialDTO } from '../DTO/testimonial.dto';

export class Testimonial {
  constructor(
    private readonly _person: Person,
    private readonly _content: string,
    private readonly _portfolio: string,
  ) {}

  toDTO(): ITestimonialDTO {
    return {
      person: this._person.toDTO(),
      content: this._content,
      portfolio: this._portfolio,
    };
  }

  static fromDTO(DTO: ITestimonialDTO): Testimonial {
    return new Testimonial(
      Person.fromDTO(DTO.person),
      DTO.content,
      DTO.portfolio,
    );
  }

  static fromDTOs(DTO: ITestimonialDTO[]): Testimonial[] {
    return DTO.map(Testimonial.fromDTO);
  }

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
