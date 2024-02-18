import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';

export interface IAssemblerGateway {
  findTitle(DTO: IAssemblerFindDTO): string;
  fintText(DTO: IAssemblerFindDTO): string;
}
