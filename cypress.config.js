const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  baseUrlProduction: "https://rahulshettyacademy.com/seleniumPractise/#/",
  defaultCommandTimeout: 6000,
  urlTesting: "https://rahulshettyacademy.com/angularpractice/",

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    //specPattern: "cypress/integration/examples/BDD/*.feature"
    specPattern: "cypress/integration/examples/*.cy.js",
    //specPattern: "cypress/integration/examples/BDD/*.feature",
  },
});
