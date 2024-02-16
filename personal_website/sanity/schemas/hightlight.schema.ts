import { SchemaTypeDefinition } from 'sanity';

export const HightlightSchema: SchemaTypeDefinition = {
  name: 'hightlight',
  title: 'Hightlight',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      type: 'string',
    },
    {
      name: 'title',
      type: 'reference',
      to: [{ type: 'title' }],
    },
    {
      name: 'numbers',
      type: 'number',
    },
    {
      name: 'k',
      type: 'boolean',
    },
    {
      name: 'description',
      type: 'reference',
      to: [{ type: 'title' }],
    },
  ],
};
