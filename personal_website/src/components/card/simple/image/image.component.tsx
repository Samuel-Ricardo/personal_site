import Image from 'next/image';

export const SimpleCardImage = (props: any) => (
  <div className="image-container">
    <Image src={props.image} alt="Card Image" width={80} height={80} />
  </div>
);
