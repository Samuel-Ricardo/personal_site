import { SchemaTypeDefinition } from 'sanity';

export const PageSchema = {
  name: 'page',
  title: 'App Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'reference',
      to: [{ type: 'title' }],
    },
    {
      name: 'link',
      type: 'string',
    },
  ],
} as SchemaTypeDefinition;
