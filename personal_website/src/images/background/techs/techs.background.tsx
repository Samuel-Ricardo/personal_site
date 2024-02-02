import Image from 'next/image';

export const TechsBackground = () => {
  return (
    <Image
      src={'/bg-techs.jpg'}
      width={1920}
      height={1080}
      alt="techs section background"
      className="-z-50 w-screen h-screen object-contain absolute left-0 right-0 top-0 bottom-0"
    />
  );
};
