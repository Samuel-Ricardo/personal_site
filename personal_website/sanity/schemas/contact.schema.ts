import { SchemaTypeDefinition } from 'sanity';

export const ContactSchema = {
  type: 'document',
  name: 'contact',
  title: 'Contact',
  fields: [
    {
      type: 'string',
      name: 'name',
    },
    {
      type: 'string',
      name: 'icon',
    },
    {
      type: 'string',
      name: 'url',
    },
  ],
} as SchemaTypeDefinition;
