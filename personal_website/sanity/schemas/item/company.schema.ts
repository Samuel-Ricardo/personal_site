import { SchemaTypeDefinition } from 'sanity';

export const CompanySchema = {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'logo',
      type: 'image',
    },
    {
      name: 'link',
      type: 'url',
    },
  ],
} as SchemaTypeDefinition;
