const { defineConfig } = require('cypress')
module.exports = defineConfig({

e2e: {

    baseUrl : 'https://web-staging.rakamin.com/virtual-internship-experience/explore',

    specPattern : "cypress/support/e2e",

    supportFile : false,

},
})