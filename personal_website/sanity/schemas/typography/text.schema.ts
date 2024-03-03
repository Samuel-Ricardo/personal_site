import { SchemaTypeDefinition } from 'sanity';

export const TextSchema = {
  name: 'tp_text',
  title: 'Text',
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
      name: 'content',
      type: 'text',
    },
  ],
} as SchemaTypeDefinition;
