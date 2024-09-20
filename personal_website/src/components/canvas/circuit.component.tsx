'use client';

import { HTMLAttributes, useEffect, useRef } from 'react';
import { ISpace } from '@/@types/space';
import { IPosition } from '@/@types/position';
import { usePoints } from '@/hooks/canvas/circuit/points/generator.hook';
import { usePointRender } from '@/hooks/canvas/circuit/render/point.hook';
import { useCircuitFramer } from '@/hooks/canvas/circuit/framer.hook';
import { useInView } from 'framer-motion';

interface ICanvasCircuitProps extends HTMLAttributes<HTMLDivElement> {
  ignoreScreen?: boolean;
  big?: boolean;
  eletric?: boolean;
}

export const Circuit = ({
  className,
  ignoreScreen,
  big,
  eletric,
}: ICanvasCircuitProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(canvasRef);

  const { generate } = usePoints();
  const { render } = usePointRender();
  const { updateFrame } = useCircuitFramer();

  const mouse: IPosition = { x: 0, y: 0 };

  useEffect(() => {
    if (!isInView) return;

    if (canvasRef.current) {
      if (!ignoreScreen) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      } else {
        canvasRef.current.width = document.documentElement.scrollWidth;
        canvasRef.current.height = document.documentElement.scrollHeight;
      }
    }

    const context = canvasRef.current?.getContext('2d');

    const space: ISpace = {
      width: canvasRef.current?.width || 1,
      height: canvasRef.current?.height || 1,
    };

    const width = canvasRef.current?.width || 1;
    let height = canvasRef.current?.height || 1;

    const quantity = big ? ((height + width) / 200) * 8 : (width / 100) * 5;

    const radius = big ? Math.random() * 2 : undefined;
    const points = generate({ space, quantity, radius });

    canvasRef.current?.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
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
  }, [canvasRef, generate, render, updateFrame, isInView, ignoreScreen]);

  return (
    <canvas
      id="canvas-circuit"
      className={className}
      height={canvasRef.current?.height}
      ref={canvasRef}
    />
  );
};
