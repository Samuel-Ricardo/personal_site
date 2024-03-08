'use client';

import { useEffect, useRef } from 'react';

export const MouseBall = () => {
  const card = useRef(
    document.getElementsByClassName(
      `article-section-item`,
    ) as HTMLCollectionOf<HTMLLIElement>,
  );

  useEffect(() => {
    if (card.current)
      for (let i = 0; i < card.current.length; i++) {
        const item = card.current.item(i)!;
        item.onmousemove = e => {
          const x = e.clientX - (item.offsetLeft || 0);
          const y = e.clientY - (item.offsetTop || 0);
          item.style.setProperty('--x', `${x}px`);
          item.style.setProperty('--y', `${y}px`);
        };
      }
  }, [card]);

  return <></>;
};
