const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'eztfrm',
  reporter: 'cypress-mochawesome-reporter',

  env:{
    url: 'https://www.cp.pt/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    specPattern:['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 'cypress/e2e/cucumber/feature/*.feature'],
    experimentalOriginDependencies: true,
  },
  chromeWebSecurity: false,
  
});
