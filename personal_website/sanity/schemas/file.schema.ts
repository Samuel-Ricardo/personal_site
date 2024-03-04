import { SchemaTypeDefinition } from 'sanity';

export const FileSchema = {
  type: 'document',
  name: 'app_file',
  title: 'File',
  fields: [
    {
      name: 'identifier',
      type: 'string',
      title: 'Identifier',
    },
    {
      name: 'data',
      type: 'file',
      title: 'URL',
    },
  ],
} as SchemaTypeDefinition;
