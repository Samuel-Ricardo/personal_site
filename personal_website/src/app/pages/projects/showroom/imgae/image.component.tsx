import Image from 'next/image';

import './image.style.scss';

export const ProjectShowRoomImage = ({
  image,
  alt,
}: {
  image: string;
  alt?: string;
}) => {
  return (
    <div className="project-showroom-image-container">
      <div className="project-showroom-image">
        <Image
          src={image}
          alt={alt ?? 'project showroom image'}
          width={1080}
          height={1920}
        />
      </div>
    </div>
  );
};
