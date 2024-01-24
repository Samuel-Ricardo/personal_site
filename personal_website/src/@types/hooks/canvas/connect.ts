import { IDistance } from '../utils/distance';

export interface ICanvasConnectProps {
  positions: IDistance;
  context: CanvasRenderingContext2D;
  distance?: number;
}
