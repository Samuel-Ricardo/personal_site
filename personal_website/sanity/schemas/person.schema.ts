import { SchemaTypeDefinition } from 'sanity';

export const PersonSchema: SchemaTypeDefinition = {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'reference',
      to: [{ type: 'title' }],
    },
    {
      name: 'role',
      type: 'reference',
      to: [{ type: 'title' }],
    },
    {
      name: 'avatar',
      type: 'image',
    },
  ],
};
