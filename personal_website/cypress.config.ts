import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,

  video: true,
  videoCompression: true,
  screenshotOnRunFailure: true,

  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'cypress/component/**/*.{cy,spec}.{js,jsx,ts,tsx}',
  },
});
