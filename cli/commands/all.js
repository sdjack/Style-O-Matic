module.exports = function(vorpal) {
  const cmd_create = require("./create.js").plugin;
  // ,cmd_status = require('./status.js').plugin

  vorpal
    .command(cmd_create.command)
    .description(cmd_create.description)
    .action(cmd_create.action);
};
