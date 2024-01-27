import Link from 'next/link';
import './logo.style.scss';
import { INCONSOLATA } from '@/app/style/fonts';

export const Logo = () => {
  return (
    <div id="logo" className={`${INCONSOLATA.className}`}>
      <Link href="/#hero">{'<Samuel/>'}</Link>
    </div>
  );
};
