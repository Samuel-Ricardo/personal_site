import { Highlight } from '@/modules/@core/highlight/entity/highlight.entity';

export interface IAssembleAboutDTO {
  title: Promise<string | undefined>;
  subtitle: Promise<string | undefined>;
  image: Promise<string | undefined>;
  paragraph: Promise<string | undefined>;
  highlights: Promise<Highlight[] | undefined>;
}
