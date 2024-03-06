import Image from 'next/image';

export const ContactBackground = async () => {
  return (
    <Image
      id="bg-contact"
      src={'/bg-art.jpg'}
      width={1920}
      height={1080}
      alt="Contact Section Background"
      className=" min-w-fit min-h-fit w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0 -z-50"
    />
  );
};
