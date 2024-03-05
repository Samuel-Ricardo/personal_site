import { HighlightCard } from '@/components/card/highlight/card.component';
import './text.style.scss';
import { SocialProof } from './social_proof/proof.component';
import { MODULES } from '@/modules/app.factory';
import { IAboutContentText } from '@/@types/props/section/about/content';

export const AbouteMeContentText = async ({
  title,
  paragraph,
  highlights,
}: IAboutContentText) => {
  return (
    <div className="text-container">
      <h2 className="text-title">{await title}</h2>
      <p className="text">{await paragraph} </p>

      <SocialProof>
        {
          (await highlights)?.map((highlight, i) => (
            <HighlightCard
              index={i}
              key={highlight.title}
              title={highlight.title}
              numbers={highlight.numbers}
              description={highlight.description}
              k={highlight.k}
            />
          )) as any[]
        }
      </SocialProof>
    </div>
  );
};
