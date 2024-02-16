import { SchemaTypeDefinition } from 'sanity';

export const ImageSchema: SchemaTypeDefinition = {
  name: 'app_image',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
    },
  ],
};
