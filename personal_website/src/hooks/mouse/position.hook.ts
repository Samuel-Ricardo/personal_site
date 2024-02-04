import { IPosition } from '@/@types/position';
import { MutableRefObject, useCallback, useState } from 'react';

export const useMousePosition = (props?: {
  ref?: MutableRefObject<HTMLElement>;
}) => {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });
  const { ref } = props || {};

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      ref?.current
        ? setPosition({
            x: event.clientX - ref.current.offsetLeft,
            y: event.clientY - ref.current.offsetTop,
          })
        : setPosition({ x: event.clientX, y: event.clientY });
    },
    [ref],
  );

  window?.addEventListener('mousemove', handleMouseMove);

  return { position, handleMouseMove };
};
