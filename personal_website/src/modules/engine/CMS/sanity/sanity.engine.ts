import { createClient } from 'next-sanity';

export const SANITY = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: 'tk1o3drt',
  useCdn: true,
});
