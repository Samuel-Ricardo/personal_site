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
      type: 'reference',
      to: [{ type: 'tp_text' }],
    },
  ],
};
