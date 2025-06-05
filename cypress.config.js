const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
  },
});
