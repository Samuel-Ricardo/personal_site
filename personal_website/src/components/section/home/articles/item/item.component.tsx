import { IArticleItemProps } from '@/@types/props/section/articles/item';

import './item.style.scss';
import Image from 'next/image';
import { Platform } from '@/components/platform/item/item.component';
import { MODULES } from '@/modules/app.factory';
import { MotionLI } from '@/components/motion/li.component';
import { MouseBall } from '@/components/canvas/mouse/ball.component';
import React from 'react';

export const ArticleItem = async ({
  index,
  key,
  html,
  article,
}: IArticleItemProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP()({
    animate: 'inactive',
    transition: { delay: (index || 0) * 0.35 },
  });

  return (
    <MotionLI
      {...(html as any)}
      {...animation}
      key={key}
      className="article-section-item"
    >
      <MouseBall />
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
    </MotionLI>
  );
};
