export const TextSchema = {
  name: 'text',
  title: 'Text',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      type: 'string',
    },
    {
      name: 'lang',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lang' }] }],
    },
    {
      name: 'content',
      type: 'text',
    },
  ],
};
