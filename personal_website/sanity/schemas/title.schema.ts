import { SchemaTypeDefinition } from 'sanity';

export const TitleSchema: SchemaTypeDefinition = {
  name: 'title',
  title: 'Title',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      type: 'string',
    },
    {
      name: 'lang',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lang' }] }],
    },
    {
      name: 'content',
      type: 'string',
    },
  ],
};
