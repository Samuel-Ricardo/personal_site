import Image from 'next/image';

const images = [
  'https://i.giphy.com/2jyrna0XVvp1C.webp',
  'https://i.giphy.com/1oKjCzdnatyyMxkdxF.webp',
  'https://i.giphy.com/2AF5KbIaGVA36ZkiAm.webp',
  'https://i.giphy.com/fVeAI9dyD5ssIFyOyM.webp',
  'https://i.giphy.com/687qS11pXwjCM.webp',
  'https://i.giphy.com/ES4Vcv8zWfIt2.webp',
];

export const UnderDevelopmentPage = async () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-10">
      <h1>Hi! :) This page is under development 🌱</h1>
      <Image
        src={images[Math.floor(Math.random() * images.length)]}
        alt="Loading"
        width={250}
        height={250}
        className="rounded-lg"
      />
    </div>
  );
};
