import { IArticleItemProps } from '@/@types/props/section/articles/item';

import './item.style.scss';
import Image from 'next/image';
import { Platform } from '@/components/platform/item/item.component';
//import { useEffect, useMemo, useRef } from 'react';

export const ArticleItem = async ({
  key,
  html,
  article,
}: IArticleItemProps) => {
  //  const card = useRef<HTMLLIElement>(null);
  //  const a = useMemo(() => article, [article]);

  /*
  useEffect(() => {
    if (card.current)
      card.current.onmousemove = e => {
        const x = e.clientX - (card.current?.offsetLeft || 0);
        const y = e.clientY - (card.current?.offsetTop || 0);
        card.current?.style.setProperty('--x', `${x}px`);
        card.current?.style.setProperty('--y', `${y}px`);
      };
  }, [card]);
  */

  return (
    <li {...html} key={key} className="article-section-item">
      <h1 className="title">{article.title}</h1>

      {article.image && (
        <Image
          src={article.image || ''}
          alt="articles image"
          width={800}
          height={800}
          quality={100}
          className="article-cover"
        />
      )}
      <p className="description">{article.description}</p>
      <ul className="flex h-fit w-full flex-wrap">
        {article.platforms.map(p => (
          <li key={p.name} className="w-fit h-fit">
            <Platform platform={p} />
          </li>
        ))}
      </ul>
    </li>
  );
};
