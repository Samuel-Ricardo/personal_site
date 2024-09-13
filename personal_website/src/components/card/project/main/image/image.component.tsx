import Image from 'next/image';
import './image.style.scss';
import { IMainProjectCardImageProps } from '@/@types/props/card/project/main/image.props';

export const MainProjectCardImage = ({ url }: IMainProjectCardImageProps) => {
  return (
    <div className="main-project-card-image">
      <Image
        src={url || 'https://i.giphy.com/2jyrna0XVvp1C.webp'}
        alt="Main Project Example Image"
        width={500}
        height={500}
      />
    </div>
  );
};
