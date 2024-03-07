export const ENV = {
  ...process.env,
  SANITY: {
    PROJECT: {
      ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    },
    DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
    TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN || '',
  },
};
