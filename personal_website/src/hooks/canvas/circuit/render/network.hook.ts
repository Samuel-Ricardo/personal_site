import { INetworkRender } from '@/@types/hooks/canvas/render/circuit/network';
import { IDistance } from '@/@types/hooks/utils/distance';
import { useDistance } from '@/hooks/utils/distance.hook';
import { useCallback } from 'react';

export const useNetworkRender = () => {
  const { distanceOf } = useDistance();

  const connect = useCallback(
    (
      { positionI, positionII }: IDistance,
      context: CanvasRenderingContext2D,
      distance?: number = 120,
    ) => {
      distanceOf({ positionI, positionII }) < distance &&
        context.lineTo(positionII.x, positionII.y);
    },
    [distanceOf],
  );
};
