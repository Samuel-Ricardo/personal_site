import { IAssembleAboutDTO } from '@/modules/@core/assembler/DTO/service/assemble/about.dto';
import { Highlight } from '@/modules/@core/highlight/entity/highlight.entity';

export interface IAboutContentProps {
  data: Omit<IAssembleAboutDTO, 'title'>;
}

export interface IAboutContentText {
  title: Promise<string | undefined>;
  paragraph: Promise<string | undefined>;
  highlights: Promise<Highlight[] | undefined>;
}
