import { SchemaTypeDefinition } from 'sanity';

export const PageSchema = {
  name: 'page',
  title: 'App Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'link',
      type: 'string',
    },
    {
      name: 'lang',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lang' }] }],
    },
  ],
} as SchemaTypeDefinition;
