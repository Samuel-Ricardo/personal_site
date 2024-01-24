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

  useEffect(() => {
    if (canvasRef.current) canvasRef.current.width = window.innerWidth;
    if (canvasRef.current) canvasRef.current.height = window.innerHeight;

    const context = canvasRef.current?.getContext('2d');

    const space: ISpace = {
      width: canvasRef.current?.width || 1,
      height: canvasRef.current?.height || 1,
    };

    const points =
      (canvasRef.current?.width || 1) < 720
        ? generate({ space, quantity: 20 })
        : (canvasRef.current?.width || 1) > 1100
          ? generate({ space, quantity: 60 })
          : generate({ space });

    canvasRef.current?.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY * 2;
    });

    function animate() {
      render({
        context,
        points,
        space,
        networkConfig: {
          mouse,
        },
      });

      updateFrame({ space, points });
      window.requestAnimationFrame(animate);
    }

    if (context) animate();
  }, [canvasRef, generate, render, updateFrame]);

  return (
    <canvas
      id="canvas-circuit"
      className="w-full h-full bg-black"
      ref={canvasRef}
    />
  );
};
