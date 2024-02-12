import Image from 'next/image';

export const TestimonyAvatar = () => {
  return (
    <div className="testimony-avatar">
      <Image src="/hero_avatar.jpg" alt="avatar" width={800} height={800} />
    </div>
  );
};
