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
      type: 'url',
    },
    {
      name: 'lang',
      type: 'string',
    },
  ],
} as SchemaTypeDefinition;
