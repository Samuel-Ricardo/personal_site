import Image from 'next/image';

export const AboutMeContentImage = () => {
  return (
    <div className="image-container">
      <Image
        src="/image-2.png"
        alt="about me image"
        width={1920}
        height={1080}
      />
    </div>
  );
};
