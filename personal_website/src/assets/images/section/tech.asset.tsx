import Image from 'next/image';

export const TechsIlustration = () => {
  return (
    <Image
      id="techs-ilustration-img"
      src={'/techs-ilustration.jpg'}
      width={400}
      height={400}
      alt="techs section ilustration"
      className="min-w-fit min-h-fit object-contain"
    />
  );
};
