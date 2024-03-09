export const TestimonialSchema = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'person',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'content',
      type: 'string',
    },
    {
      name: 'portfolio',
      type: 'url',
    },
  ],
};
