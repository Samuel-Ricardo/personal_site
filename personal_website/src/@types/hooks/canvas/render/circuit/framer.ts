import { IPoint } from '@/@types/props/circuit/point';
import { ISpace } from '@/@types/space';

export interface ICircuitFramer {
  points: IPoint[];
  FPS?: number;
  space: ISpace;
}
