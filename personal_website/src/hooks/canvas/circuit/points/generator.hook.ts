import { IPoint } from '@/@types/props/circuit/point';
import { IPointsProps } from '@/@types/props/circuit/points';
import { useCallback } from 'react';

export const usePoints = () => {
  const generate = useCallback(({ space, quantity = 40 }: IPointsProps) => {
    const points: IPoint[] = [];
    for (let i = 0; i < quantity; i++) {
      points.push({
        position: {
          x: Math.random() * space.width,
          y: Math.random() * space.height,
        },
        radius: Math.random() * 1 + 1,
        velocity: {
          x: Math.floor(Math.random() * 50) - 25,
          y: Math.floor(Math.random() * 50) - 25,
        },
      });
    }
    return points;
  }, []);

  return { generate };
};
