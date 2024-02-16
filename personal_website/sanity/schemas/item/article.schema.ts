import { SchemaTypeDefinition } from 'sanity';

export const ArticleSchema = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'reference',
      to: [{ type: 'title' }],
    },
    {
      name: 'description',
      type: 'reference',
      to: [{ type: 'title' }],
    },
    {
      name: 'cover',
      type: 'image',
    },
    {
      name: 'content',
      type: 'reference',
      to: [{ type: 'tp_text' }],
    },
    {
      name: 'platforms',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
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
