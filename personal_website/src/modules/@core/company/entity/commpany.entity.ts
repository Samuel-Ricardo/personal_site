import { ICompanyDTO } from '../DTO/company.dto';

export class Company {
  constructor(
    private readonly _name: string,
    private readonly _logo: string,
    private readonly _link: string,
  ) {}

  toDTO(): ICompanyDTO {
    return {
      name: this._name,
      logo: this._logo,
      link: this._link,
    };
  }

  static fromDTO(companyDTO: ICompanyDTO): Company {
    return new Company(companyDTO.name, companyDTO.logo, companyDTO.link);
  }

  static fromDTOs(companyDTOs: ICompanyDTO[]): Promise<Company>[] {
    return companyDTOs.map(async DTO => Company.fromDTO(DTO));
  }

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
