export const ProjectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
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
      type: 'reference',
      to: [{ type: 'tp_text' }],
    },
    {
      name: 'techs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tech' }] }],
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
