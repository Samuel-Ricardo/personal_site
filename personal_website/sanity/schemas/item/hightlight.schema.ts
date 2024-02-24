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
      name: 'positon',
      type: 'number',
    },
    {
      name: 'lang',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Portuguese', value: 'pt-br' },
        ],
      },
    },
    {
      name: 'title',
      type: 'string',
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
      type: 'string',
    },
  ],
};
