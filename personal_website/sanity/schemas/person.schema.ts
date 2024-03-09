import { SchemaTypeDefinition } from 'sanity';

export const PersonSchema: SchemaTypeDefinition = {
  name: 'person',
  title: 'Person',
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
          { title: 'Portuguese', value: 'pt-br' },
        ],
      },
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'avatar',
      type: 'image',
    },
    {
      name: 'company',
      type: 'reference',
      to: [{ type: 'company' }],
    },
    {
      name: 'contacts',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            { name: 'icon', type: 'string' },
            { name: 'link', type: 'string' },
          ],
        },
      ],
    },
  ],
};
