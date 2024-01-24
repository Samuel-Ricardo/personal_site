import { ICircuitFramer } from '@/@types/hooks/canvas/render/circuit/framer';
import { useCallback } from 'react';

export const useCircuitFramer = () => ({
  updateFrame: useCallback(({ space, points, FPS = 45 }: ICircuitFramer) => {
    points.forEach(point => {
      point.position.x += point.velocity.x / FPS;
      point.position.y += point.velocity.y / FPS;

      if (point.position.x < 0 || point.position.x > space.width)
        point.velocity.x = -point.velocity.x;

      if (point.position.y < 0 || point.position.y > space.height)
        point.velocity.y = -point.velocity.y;
    });
  }, []),
});
