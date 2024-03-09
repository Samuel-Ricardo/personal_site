import Image from 'next/image';
import './social.style.scss';
import { SocialCardCover } from './cover/cover.card';
//import { SocialCardFooter } from './footer/footer.component';
import { ISocialCardProps } from '@/@types/props/card/social';
import { SelectTestimonialWrapper } from '@/components/wrapper/testimonial/select.wrapper';
import { MODULES } from '@/modules/app.factory';

export const SocialCard = async ({ data, index }: ISocialCardProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()({
    transition: { delay: (index || 0) * 0.25 },
  });
  return (
    <SelectTestimonialWrapper
      animation={animation}
      data={data}
      className="social-card"
    >
      <Image
        src={data.person.avatar}
        alt="testimony avatar"
        width={800}
        height={800}
        className="avatar"
      />
      <SocialCardCover data={data.person} />
      {/*      
      <SocialCardFooter
        name={data.person.name}
        title={data.person.title}
        company={data.person.company.name}
      />
      */}
    </SelectTestimonialWrapper>
  );
};
