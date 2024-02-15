import Image from 'next/image';
import './image.style.scss';

export const SimpleCardImage = (props: any) => (
  <div className="image-container">
    <Image src={props.image} alt="Card Image" width={80} height={80} />
  </div>
);
