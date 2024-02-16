import { SchemaTypeDefinition } from 'sanity';

export const LangSchema: SchemaTypeDefinition = {
  name: 'lang',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'code',
      type: 'string',
    },
  ],
};
