import './footer.style.scss';

import { NavigateButton } from '@/components/button/navigate/button.component';
import { ITestimonyCardFooterProps } from '@/@types/props/card/testimony';
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from '@/components/motion/div.component';
import { MODULES } from '@/modules/app.factory';

export const TestimonyFooter = ({
  contacts,
  portfolio,
}: ITestimonyCardFooterProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN();
  return (
    <footer className="testimony-footer">
      <div className="wrapper">
        <MotionDiv
          {...animation({ animate: 'inactive', transition: { delay: 0.1 } })}
        >
          <NavigateButton link={{ href: portfolio }}>Portfolio</NavigateButton>
        </MotionDiv>
        {contacts.map((contact, i) => (
          <MotionDiv
            {...animation({
              animate: 'inactive',
              transition: { delay: (i + 1) * 0.35 },
            })}
            key={contact.link}
            className="testimony-icon"
          >
            <Link href={contact.link}>
              <Image
                src={contact.icon}
                alt={'Testimony Contact'}
                width={150}
                height={150}
                quality={100}
              />
            </Link>
          </MotionDiv>
        ))}
      </div>
    </footer>
  );
};
