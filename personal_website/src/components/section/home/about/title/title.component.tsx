import { MODULES } from '@/modules/app.factory';
import './title.style.scss';
import { PropsWithChildren } from 'react';

export const AboutMeTitle = async ({ children }: PropsWithChildren) => (
  <h1 className={`${MODULES.FONTS.MONO.INCONSOLATA().className} title`}>
    {children}
  </h1>
);
