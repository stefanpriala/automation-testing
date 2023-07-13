const { defineConfig } = require('cypress');
const { verifyDownloadTasks } = require('cy-verify-downloads');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://example.cypress.io/",
    envTag: "cypressQA",
    todoPage: "todo",
    actionsPage: "commands/actions",
    locationPage: "commands/location",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
})