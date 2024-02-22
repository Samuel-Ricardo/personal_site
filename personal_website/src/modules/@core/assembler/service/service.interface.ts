import { IAssemblerFindDTO } from '../DTO/gateway/find/index.dto';

export interface IAssemblerService {
  asyncFindTitle: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
  asyncFindText: (DTO: IAssemblerFindDTO) => Promise<string | undefined>;
}
