import { SchemaTypeDefinition } from 'sanity';

export const ProjectSchema: SchemaTypeDefinition = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'main',
      type: 'boolean',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'preview',
      type: 'image',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'techs',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            { name: 'identifier', type: 'string' },
            { name: 'star', type: 'boolean' },
          ],
        },
      ],
    },
    {
      name: 'repository',
      type: 'string',
    },
    {
      name: 'demo',
      type: 'string',
    },
    {
      name: 'link',
      type: 'string',
    },
  ],
};
