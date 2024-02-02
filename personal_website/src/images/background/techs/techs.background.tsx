import Image from 'next/image';

export const TechsBackground = () => {
  return (
    <Image
      src={
        'https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?w=900&t=st=1706905145~exp=1706905745~hmac=57c73c51e820250bfa4918b7b61a2fce3a57db1f40cc399193e54634515c5d6c'
      }
      width={1920}
      height={1080}
      quality={100}
      alt="techs section background"
      className=" min-w-fit min-h-fit w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0"
    />
  );
};
