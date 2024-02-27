import { SchemaTypeDefinition } from 'sanity';

export const ArticleSchema = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'cover',
      type: 'image',
    },
    {
      name: 'content',
      type: 'string',
    },
    {
      name: 'platforms',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              title: 'Article URL',
              name: 'url',
              type: 'url',
            },
            {
              name: 'platform',
              type: 'reference',
              to: [{ type: 'platform' }],
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition;
