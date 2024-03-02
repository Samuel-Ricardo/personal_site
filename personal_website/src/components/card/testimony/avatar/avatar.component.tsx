import './avatar.style.scss';
import Image from 'next/image';

export const TestimonyAvatar = ({ src }: { src: string }) => {
  return (
    <div className="testimony-avatar">
      <Image src={src} alt="avatar" width={800} height={800} />
    </div>
  );
};
