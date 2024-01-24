import { IPosition } from '@/@types/position';
import { IPoint } from '@/@types/props/circuit/point';

export interface INetworkRender {
  points: IPoint[];
  context: CanvasRenderingContext2D;
  color?: string;
  width?: number;
  trackMouse?: boolean;
  mouse?: IPosition;
}
