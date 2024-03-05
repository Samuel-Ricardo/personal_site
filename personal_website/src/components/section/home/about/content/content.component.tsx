import { IAboutContentProps } from '@/@types/props/section/about/content';
import { AboutMeContentContainer } from './container/container.component';
import { AboutMeContentImage } from './image/image.component';
import { AbouteMeContentText } from './text/text.component';

export const AboutMeContent = async ({
  data: { image, highlights, paragraph, subtitle },
}: IAboutContentProps) => {
  return (
    <AboutMeContentContainer>
      <AboutMeContentImage src={image} />
      <AbouteMeContentText
        title={subtitle}
        paragraph={paragraph}
        highlights={highlights}
      />
    </AboutMeContentContainer>
  );
};
