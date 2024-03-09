import { PropsWithChildren } from 'react';
import { IHeroFooterProps } from './about';
import { IHeroHeaderProps } from './header';

export interface IHeroContentProps
  extends IHeroHeaderProps,
    IHeroFooterProps,
    PropsWithChildren {}
