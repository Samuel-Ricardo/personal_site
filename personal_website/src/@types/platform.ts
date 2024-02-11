import { HTMLAttributes } from 'react';

export interface IPlatform {
  icon?: string;
  name: string;
  url: string;
}

export interface IPlatformProps {
  platform: IPlatform;
  html?: HTMLAttributes<HTMLDivElement>;
}
