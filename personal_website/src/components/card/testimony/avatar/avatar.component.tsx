import './avatar.style.scss';
import Image from 'next/image';

export const TestimonyAvatar = async ({ src }: { src: string }) => {
  return (
    <div className="testimony-avatar">
      <Image src={src} alt="avatar" width={600} height={600} />
    </div>
  );
};
