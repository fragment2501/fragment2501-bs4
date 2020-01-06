// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  const Axios = require("axios");
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task',{ 'percyHealthCheck'() {
    return Axios.get("http://localhost:5338/percy/healthcheck")
      .then(() => true)
      .catch(() => false);
    }
  });
}
