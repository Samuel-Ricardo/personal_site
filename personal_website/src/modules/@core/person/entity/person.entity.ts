import { Company } from '../../company/entity/commpany.entity';
import { IContactDTO } from '../DTO/contact.dto';
import { IPersonDTO } from '../DTO/person.dto';

export class Person {
  constructor(
    protected readonly _name: string,
    protected readonly _title: string,
    protected readonly _avatar: string,
    protected readonly _contacts: IContactDTO[],
    protected readonly _company: Company,
  ) {}

  toDTO(): IPersonDTO {
    return {
      name: this._name,
      title: this._title,
      avatar: this._avatar,
      contacts: this._contacts,
      company: this._company.toDTO(),
    };
  }

  static fromDTO(dto: IPersonDTO) {
    return new Person(
      dto.name,
      dto.title,
      dto.avatar,
      dto.contacts,
      Company.fromDTO(dto.company),
    );
  }

  static fromDTOList(dtos: IPersonDTO[]) {
    return dtos.map(dto => Person.fromDTO(dto));
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
