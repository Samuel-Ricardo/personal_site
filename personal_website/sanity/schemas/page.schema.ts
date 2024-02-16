import { SchemaTypeDefinition } from 'sanity';

export default {
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
