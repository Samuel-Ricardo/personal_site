'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const OnlyInViewWrapper = ({ children }: { children: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return <div ref={ref}>{isInView && children}</div>;
};
