import { IPointRender } from '@/@types/hooks/canvas/render/circuit/point';
import { useNetworkRender } from './network.hook';
import { useCallback } from 'react';

export const usePointRender = () => {
  const { render: networkRender } = useNetworkRender();

  const render = useCallback(
    ({
      points,
      color = 'cyan',
      ghost = true,
      context,
      network = true,
      networkConfig,
      space,
    }: IPointRender) => {
      context.clearRect(0, 0, space.width, space.height);
      context.globalCompositeOperation = 'lighter';

      ghost
        ? points.forEach(point => {
            context.beginPath();
            context.arc(point.position.x, point.position.y, 0, 0, Math.PI * 2);
          })
        : points.forEach(point => {
            context.fillStyle = color;
            context.strokeStyle = color;
            context.beginPath();
            context.arc(
              point.position.x,
              point.position.y,
              point.radius,
              0,
              Math.PI * 2,
            );
            context.fill();
            context.stroke();
          });

      network && networkRender({ points, context, ...networkConfig });
    },
    [networkRender],
  );

  return { render };
};
