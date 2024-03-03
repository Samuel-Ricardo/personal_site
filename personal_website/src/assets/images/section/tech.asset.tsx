import { MODULES } from '@/modules/app.factory';
import Image from 'next/image';

export const TechsIlustration = async () => {
  const src = await MODULES.ASSEMBLER.MAIN().findImage({
    identifier: 'home_techs',
  });

  return (
    <Image
      id="techs-ilustration-img"
      src={src || '/techs-ilustration.jpg'}
      width={400}
      height={400}
      alt="techs section ilustration"
      className="min-w-fit min-h-fit object-contain"
      placeholder="blur"
      blurDataURL="/techs-ilustration.jpg"
    />
  );
};
