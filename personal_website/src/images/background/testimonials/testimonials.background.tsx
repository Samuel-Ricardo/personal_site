import Image from 'next/image';

export const TestimonialsBackground = () => {
  return (
    <Image
      id="bg-testimonials"
      src={'/bg-techs.jpg'}
      width={1920}
      height={1080}
      alt="Articles Section Background"
      className=" min-w-fit min-h-fit w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0 -z-50"
    />
  );
};
