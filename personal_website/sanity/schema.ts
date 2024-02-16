import { type SchemaTypeDefinition } from 'sanity';
import { PageSchema } from './schemas/page.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [PageSchema],
};
