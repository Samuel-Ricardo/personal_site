import Image from 'next/image';
import './image.style.scss';

export const AboutMeContentImage = async ({ src }: { src?: any }) => {
  const data = await src;

  return (
    <div className="image-container">
      <Image
        className="abm-image"
        src={data}
        alt="about me image"
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL="/image-2.png"
      />
    </div>
  );
};
