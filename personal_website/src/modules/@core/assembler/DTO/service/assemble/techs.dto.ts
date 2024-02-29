import { Tech } from '@/modules/@core/tech/entity/tech.entity';

export interface IAssembleTechHomeSectionDTO {
  title: Promise<string | undefined>;
  subtitle: Promise<string | undefined>;
  techs: {
    frontend: Promise<Tech[]>;
    backend: Promise<Tech[]>;
    devops: Promise<Tech[]>;
    database: Promise<Tech[]>;
    QA: Promise<Tech[]>;
  };
  image: Promise<string | undefined>;
}
