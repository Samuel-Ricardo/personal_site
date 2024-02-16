export const TechSchema = {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'icon',
      type: 'image',
    },
    {
      name: 'preview',
      type: 'image',
    },
    {
      name: 'description',
      type: 'reference',
      to: [{ type: 'tp_text' }],
    },
    {
      name: 'context',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
