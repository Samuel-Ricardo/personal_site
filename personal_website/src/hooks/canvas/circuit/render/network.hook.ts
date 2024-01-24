import { INetworkRender } from '@/@types/hooks/canvas/render/circuit/network';
import { useCanvasConnect } from '@/hooks/utils/canvas/connect.hook';
import { useCallback } from 'react';

export const useNetworkRender = () => {
  const { connect } = useCanvasConnect();

  const render = useCallback(
    ({
      points,
      context,
      mouse,
      trackMouse = true,
      color = 'cyan',
      width = 0.5,
    }: INetworkRender) => {
      context.beginPath();

      points.forEach(pointI => {
        context.moveTo(pointI.position.x, pointI.position.y);
        if (trackMouse && mouse)
          connect({
            positions: { positionI: pointI.position, positionII: mouse },
            context,
            distance: 150,
          });
        points.forEach(pointII => {
          connect({
            positions: {
              positionI: pointI.position,
              positionII: pointII.position,
            },
            context,
          });
        });
      });

      context.lineWidth = width;
      context.strokeStyle = color;
      context.stroke();
    },
    [connect],
  );

  return { render };
};
