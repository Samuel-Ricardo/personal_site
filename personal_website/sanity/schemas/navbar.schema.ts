import { SchemaTypeDefinition } from 'sanity';

export const NavbarSchema: SchemaTypeDefinition = {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      type: 'string',
    },
    {
      name: 'lang',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Portuguese', value: 'pt-br' },
        ],
      },
    },
    {
      name: 'position',
      type: 'number',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'link',
      type: 'string',
    },
  ],
};
