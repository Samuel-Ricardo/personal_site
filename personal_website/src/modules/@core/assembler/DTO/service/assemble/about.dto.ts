import { Highlight } from '@/modules/@core/highlight/entity/highlight.entity';

export interface IAssembleAboutDTO {
  title: string | undefined;
  subtitle: string | undefined;
  image: string | undefined;
  paragraph: string | undefined;
  highlights: Highlight[] | undefined;
}
