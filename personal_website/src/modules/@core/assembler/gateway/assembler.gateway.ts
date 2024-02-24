import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';

export interface IAssemblerGateway {
  findTitle(DTO: IAssemblerFindDTO): Promise<string | undefined>;
  findText(DTO: IAssemblerFindDTO): Promise<string | undefined>;
  findImage(DTO: IAssemblerFindDTO): Promise<string | undefined>;
}
