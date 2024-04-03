'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const OnlyInViewWrapper = ({ children }: { children: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '0px -200px 0px 0px',
  });

  return <div ref={ref}>{isInView && children}</div>;
};
