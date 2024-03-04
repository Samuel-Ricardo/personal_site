'use client';

import { MODULES } from '@/modules/app.factory';
import { useMemo } from 'react';

export const useAppAnimation = () => {
  return { ...useMemo(() => MODULES.ANIMATION.FRAMER_MOTION, []) };
};
