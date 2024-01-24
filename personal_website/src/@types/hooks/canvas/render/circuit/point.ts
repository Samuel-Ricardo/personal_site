import { IPosition } from '@/@types/position';
import { IPoint } from '@/@types/props/circuit/point';
import { ISpace } from '@/@types/space';

export interface IPointRender {
  points: IPoint[];
  color?: string;
  ghost?: boolean;
  context: CanvasRenderingContext2D;
  canvas?: HTMLCanvasElement;
  network?: boolean;
  space: ISpace;
  networkConfig?: {
    color?: string;
    width?: number;
    trackMouse?: boolean;
    mouse?: IPosition;
  };
}
