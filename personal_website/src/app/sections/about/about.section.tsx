import Image from 'next/image';

import './about.style.scss';
import { MODULES } from '@/modules/app.factory';

export const AboutMe = () => {
  return (
    <section id="about-me" className="flex flex-col w-screen h-screen ">
      <h1 className={`${MODULES.FONTS.MONO.INCONSOLATA().className}`}>
        Bring the power of creativity to your business
      </h1>
      <div className="image-container">
        <Image
          src="/image-2.png"
          alt="about me image"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};
