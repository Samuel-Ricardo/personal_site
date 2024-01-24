import { IDistance } from '@/@types/hooks/utils/distance';
import { IPosition } from '@/@types/position';
import { useCallback } from 'react';

export const useDistance = () => {
  const distanceOf = useCallback(
    ({ positionI: pointI, positionII: pointII }: IDistance) => {
      const distance: IPosition = {
        x: pointII.x - pointI.x,
        y: pointII.y - pointI.y,
      };

      distance.x *= distance.x;
      distance.y *= distance.y;

      return Math.sqrt(distance.x + distance.y);
    },
    [],
  );

  return { distanceOf };
};
