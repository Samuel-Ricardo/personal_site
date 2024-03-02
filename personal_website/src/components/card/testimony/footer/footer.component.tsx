import './footer.style.scss';

import { NavigateButton } from '@/components/button/navigate/button.component';
import { GithubLogo } from '@/assets/icons/logo/github/icon.component';
import { ITestimonyCardFooterProps } from '@/@types/props/card/testimony';
import Image from 'next/image';
import Link from 'next/link';

export const TestimonyFooter = async ({
  contacts,
  portfolio,
}: ITestimonyCardFooterProps) => {
  return (
    <footer className="testimony-footer">
      <div className="wrapper">
        <NavigateButton link={{ href: portfolio }}>Portfolio</NavigateButton>

        {contacts.map(contact => (
          <Link key={contact.link} href={contact.link}>
            <Image
              src={contact.icon}
              alt={'Testimony Contact'}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};
