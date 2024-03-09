import { SchemaTypeDefinition } from 'sanity';

export const PlatformSchema: SchemaTypeDefinition = {
  name: 'platform',
  title: 'Platform',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'icon',
      type: 'string',
    },
    {
      name: 'link',
      type: 'url',
    },
  ],
};
