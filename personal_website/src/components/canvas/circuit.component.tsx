'use client';

import { useEffect, useRef } from 'react';
import { ISpace } from '@/@types/space';
import { IPosition } from '@/@types/position';
import { usePoints } from '@/hooks/canvas/circuit/points/generator.hook';
import { usePointRender } from '@/hooks/canvas/circuit/render/point.hook';
import { useCircuitFramer } from '@/hooks/canvas/circuit/framer.hook';

export const Circuit = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { generate } = usePoints();
  const { render } = usePointRender();
  const { updateFrame } = useCircuitFramer();

  const mouse: IPosition = { x: 0, y: 0 };

  return (
    <canvas
      id="canvas-circuit"
      className="w-full h-full bg-black"
      ref={canvasRef}
    />
  );
};
