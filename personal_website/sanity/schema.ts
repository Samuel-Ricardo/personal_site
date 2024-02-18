import { type SchemaTypeDefinition } from 'sanity';
import { OccupationsSchema } from './schemas/sections/home/hero/occupations.schema';
import { TextSchema } from './schemas/typography/text.schema';
import { PersonSchema } from './schemas/person.schema';
import { TitleSchema } from './schemas/typography/title.schema';
import { HeroSchema } from './schemas/sections/home/hero.schema';
import { HightlightSchema } from './schemas/item/hightlight.schema';
import { ImageSchema } from './schemas/image.schema';
import { TechSchema } from './schemas/item/tech.schema';
import { ProjectSchema } from './schemas/item/project.schema';
import { PlatformSchema } from './schemas/item/platform.schema';
import { ArticleSchema } from './schemas/item/article.schema';
import { CompanySchema } from './schemas/item/company.schema';
import { ExperienceSchema } from './schemas/item/experience.schema';
import { TestimonialSchema } from './schemas/testimonial.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    OccupationsSchema,
    TextSchema,
    TitleSchema,
    PersonSchema,
    HeroSchema,
    HightlightSchema,
    ImageSchema,
    TechSchema,
    ProjectSchema,
    PlatformSchema,
    ArticleSchema,
    CompanySchema,
    ExperienceSchema,
    TestimonialSchema,
  ],
};
