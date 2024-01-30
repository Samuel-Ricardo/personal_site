import { AboutMeContentContainer } from './container/container.component';
import { AboutMeContentImage } from './image/image.component';
import { AbouteMeContentText } from './text/text.component';

export const AboutMeContent = () => {
  return (
    <AboutMeContentContainer>
      <AboutMeContentImage />
      <AbouteMeContentText />
    </AboutMeContentContainer>
  );
};
