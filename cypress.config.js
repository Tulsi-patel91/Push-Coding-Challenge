const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl": "https://opensource-demo.orangehrmlive.com/web/index.php/auth",
    "env":{
      "userName": "Admin",
      "password": "admin123",
      "expectedText": "Dashboard"

    },



    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      this.screenshotOnRunFailure=true
    },
  },
});
