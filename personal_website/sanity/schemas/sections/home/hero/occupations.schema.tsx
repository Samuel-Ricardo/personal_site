export const OccupationsSchema = {
  name: 'occupations',
  title: 'Occupations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'lang',
      title: 'Language',
      type: 'string',
    },
  ],
};
