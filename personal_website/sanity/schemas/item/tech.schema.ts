import { SchemaTypeDefinition } from 'sanity';

export const TechSchema: SchemaTypeDefinition = {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      type: 'string',
    },
    {
      name: 'lang',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Português', value: 'pt-br' },
        ],
      },
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'icon',
      type: 'string',
    },
    {
      name: 'preview',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'context',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
