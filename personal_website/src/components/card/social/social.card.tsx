import Image from 'next/image';
import './social.style.scss';
import { SocialCardCover } from './cover/cover.card';
import { SocialCardFooter } from './footer/footer.component';
import { ISocialCardProps } from '@/@types/props/card/social';

export const SocialCard = ({ data }: ISocialCardProps) => {
  return (
    <div className="social-card">
      <Image
        src={data.person.avatar}
        alt="testimony avatar"
        width={800}
        height={800}
        className="avatar"
      />
      <SocialCardCover data={data.person} />
      <SocialCardFooter
        name={data.person.name}
        title={data.person.title}
        company={data.person.company.name}
      />
    </div>
  );
};
