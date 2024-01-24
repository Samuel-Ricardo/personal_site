import { IPosition } from '@/@types/position';
import { useCallback, useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY }),
    [],
  );

  useEffect(() => {
    window?.addEventListener('mousemove', handleMouseMove);
    return window?.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return { position, handleMouseMove };
};
