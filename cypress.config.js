const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging-v2-thess.lavaleriane.fr/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
