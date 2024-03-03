import { SchemaTypeDefinition } from 'sanity';

export const ExperienceSchema = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      type: 'reference',
      to: [{ type: 'company' }],
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'context',
      type: 'string',
      options: {
        list: [
          { title: 'Work', value: 'work' },
          { title: 'Academic', value: 'academic' },
        ],
      },
    },
  ],
} as SchemaTypeDefinition;
