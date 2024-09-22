import Image from 'next/image';
import './image.style.scss';

interface IMainArticleCardImageProps {
  url?: string;
}

export const ArticleCardImage = async ({ url }: IMainArticleCardImageProps) => {
  return (
    <div className="main-article-card-image">
      <Image
        src={url || 'https://i.giphy.com/2jyrna0XVvp1C.webp'}
        alt="Main Article Cover Image"
        width={800}
        height={800}
      />
    </div>
  );
};
