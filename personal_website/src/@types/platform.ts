import { HTMLAttributes } from 'react';

export interface IPlatform {
  icon?: string;
  name: string;
  link: string;
}

export interface IPlatformProps {
  platform: IPlatform;
  html?: HTMLAttributes<HTMLAnchorElement>;
}
