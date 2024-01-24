import { useCallback } from 'react';
import { useDistance } from '../distance.hook';
import { ICanvasConnectProps } from '@/@types/hooks/canvas/connect';

export const useCanvasConnect = () => {
  const { distanceOf } = useDistance();

  return {
    connect: useCallback(
      ({
        positions: { positionI, positionII },
        context,
        distance = 120,
      }: ICanvasConnectProps) => {
        distanceOf({ positionI, positionII }) < distance &&
          context.lineTo(positionII.x, positionII.y);
      },
      [distanceOf],
    ),
  };
};
