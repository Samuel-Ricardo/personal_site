import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';

export interface IAssemblerGateway {
  findTitle(DTO: IAssemblerFindDTO): Promise<string>;
  findText(DTO: IAssemblerFindDTO): Promise<string>;
}
