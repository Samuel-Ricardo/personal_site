import { ISocialCardFooterProps } from '@/@types/props/card/social';
import './footer.style.scss';

export const SocialCardFooter = ({
  title,
  name,
  company,
}: ISocialCardFooterProps) => {
  return (
    <footer className="card-footer">
      <p className="name">{name}</p>
      <p className="role">
        | {title} • {company}
      </p>
    </footer>
  );
};
