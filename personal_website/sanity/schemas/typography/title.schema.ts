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
      type: 'string',
    },
    {
      name: 'content',
      type: 'string',
    },
  ],
};
