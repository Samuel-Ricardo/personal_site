export const TextSchema = {
  name: 'tp_text',
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
