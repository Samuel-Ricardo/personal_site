export const ENV = {
  ...process.env,
  SANITY: {
    PROJECT: {
      ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    },
    DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
    TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN || '',
  },
  MAILER: {
    KEY: {
      PUBLIC: process.env.NEXT_PUBLIC_MAILER_PUBLIC_KEY || '',
    },
    SERVICE: {
      ID: process.env.NEXT_PUBLIC_MAILER_SERVICE_ID || '',
    },
    TEMPLATE: {
      ID: process.env.NEXT_PUBLIC_MAILER_TEMPLATE_ID || '',
    },
  },
};
