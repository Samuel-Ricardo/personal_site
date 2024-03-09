import './cover.style.scss';
import { ISocialCardCoverProps } from '@/@types/props/card/social';
import Link from 'next/link';
import Image from 'next/image';

export const SocialCardCover = async ({
  data: { title, name, contacts, company },
}: ISocialCardCoverProps) => {
  return (
    <div className="cover">
      <div className="cover-container">
        <div className={'data '}>
          <h3 className="name">{name}</h3>
          <h4 className="role">
            {title} • {company.name}
          </h4>
        </div>
        <footer className="footer">
          <ul>
            {contacts.map(contact => (
              <li key={contact.link}>
                <Link href={contact.link} target="_blank">
                  <Image
                    src={contact.icon}
                    alt={'Testimony Contact'}
                    width={400}
                    height={400}
                    quality={100}
                    className="testimony-icon"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
};
