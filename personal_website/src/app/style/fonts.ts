import {
  Fraunces,
  Inconsolata,
  Libre_Baskerville,
  Neuton,
  Space_Mono,
  Xanh_Mono,
} from 'next/font/google';

export const FRAUNCES = Fraunces({ subsets: ['latin'], preload: true });
export const INCONSOLATA = Inconsolata({ subsets: ['latin'], preload: true });
export const NEUTON = Neuton({
  subsets: ['latin'],
  preload: true,
  weight: '400',
});
export const LIBRE_BASKERVILLE = Libre_Baskerville({
  subsets: ['latin'],
  preload: true,
  weight: '400',
});
