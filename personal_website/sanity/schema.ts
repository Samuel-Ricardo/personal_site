import { type SchemaTypeDefinition } from 'sanity';
import { PageSchema } from './schemas/page.schema';
import { LangSchema } from './schemas/lang.schema';
import { OccupationsSchema } from './schemas/sections/home/hero/occupations.schema';
import { TextSchema } from './schemas/typography/text.schema';
import { PersonSchema } from './schemas/person.schema';
import { TitleSchema } from './schemas/typography/title.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    PageSchema,
    LangSchema,
    OccupationsSchema,
    TextSchema,
    TitleSchema,
    PersonSchema,
  ],
};
