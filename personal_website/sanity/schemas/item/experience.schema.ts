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
      type: 'reference',
      to: [{ type: 'tp_text' }],
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
    },
  ],
};
