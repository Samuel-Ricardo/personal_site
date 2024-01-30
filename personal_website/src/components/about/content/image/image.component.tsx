import Image from 'next/image';
import './image.style.scss';

export const AboutMeContentImage = () => {
  return (
    <div className="image-container">
      <Image
        className="abm-image"
        src="/image-2.png"
        alt="about me image"
        width={1920}
        height={1080}
      />
    </div>
  );
};
