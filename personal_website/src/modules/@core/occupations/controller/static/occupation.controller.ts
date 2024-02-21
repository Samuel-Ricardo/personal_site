import { injectable } from 'inversify';
import { IOccupationController } from '../controller.interface';

@injectable()
export class StaticOccupationController implements IOccupationController {
  findAllAsync(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
