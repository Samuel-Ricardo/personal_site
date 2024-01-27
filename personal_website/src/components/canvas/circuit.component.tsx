'use client';

import { HTMLAttributes, useEffect, useRef } from 'react';
import { ISpace } from '@/@types/space';
import { IPosition } from '@/@types/position';
import { usePoints } from '@/hooks/canvas/circuit/points/generator.hook';
import { usePointRender } from '@/hooks/canvas/circuit/render/point.hook';
import { useCircuitFramer } from '@/hooks/canvas/circuit/framer.hook';
import { useInView } from 'framer-motion';

export const Circuit = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(canvasRef);

  const { generate } = usePoints();
  const { render } = usePointRender();
  const { updateFrame } = useCircuitFramer();

  const mouse: IPosition = { x: 0, y: 0 };

  useEffect(() => {
    if (!isInView) return;

    if (canvasRef.current) canvasRef.current.width = window.innerWidth;
    if (canvasRef.current) canvasRef.current.height = window.innerHeight;

    const context = canvasRef.current?.getContext('2d');

    const space: ISpace = {
      width: canvasRef.current?.width || 1,
      height: canvasRef.current?.height || 1,
    };

    const width = canvasRef.current?.width || 1;

    const points = generate({ space, quantity: (width / 100) * 6 });

    canvasRef.current?.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY * 1.545;
    });

    function animate() {
      if (!context) return;
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
  }, [canvasRef, generate, render, updateFrame, isInView]);

  return <canvas id="canvas-circuit" className={className} ref={canvasRef} />;
};
