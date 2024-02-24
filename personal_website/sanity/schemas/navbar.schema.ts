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
      name: 'title',
      type: 'string',
    },
    {
      name: 'link',
      type: 'string',
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
};
