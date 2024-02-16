import { SchemaTypeDefinition } from 'sanity';

export const HeroSchema: SchemaTypeDefinition = {
  name: 'home_hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'reference',
      to: [{ type: 'title' }],
    },
    {
      name: 'person',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'description',
      type: 'reference',
      to: [{ type: 'text' }],
    },
  ],
};
