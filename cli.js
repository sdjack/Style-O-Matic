#!/usr/bin/env node --harmony
import _ from "lodash";
/* eslint-disable */
import chalk from "chalk";
import vpl from "vorpal";

const vorpal = vpl();

// const commands = require("./cli/commands/all.js")(vorpal);
// const modes = require("./cli/modes/all.js")(vorpal);

const ascii = require("./cli/helpers/ascii.js").plugin;

let welcome = ascii.banner("Style-O-Matic", "sky");

welcome += ascii.space(4);
welcome += `${chalk.bold.cyan(
  "Greetings user, how can I be of assistance today?"
)}\n`;
welcome += `${chalk.cyan("Enter a command to begin, or type ") +
  chalk.bold.green("`exit`") +
  chalk.cyan(" to quit.")}\n`;
welcome += ascii.space(1);

const vhelp = vorpal.find("help");
if (vhelp) {
  vhelp.remove();
}

vorpal
  .command("help [command...]")
  .description("Provides help for a given command.")
  .action((param, cb) => {
    const self = this;
    this.log(chalk.bold.cyan("Here are my interaction details..."));
    this.log(chalk.gray("-------------------------------"));
    this.log(ascii.space(1));
    this.log(chalk.yellow("Style-O-Matic: CLI Utility"));
    this.log(`${chalk.gray("2016")} - Steven Jackson`);
    this.log(chalk.gray("-------------------------------"));
    this.log(ascii.space(1));
    const args = param;
    if (args.command) {
      args.command = args.command.join(" ");
      const name = _.find(this.parent.commands, {
        _name: String(args.command)
          .toLowerCase()
          .trim()
      });
      if (name && !name._hidden) {
        if (_.isFunction(name._help)) {
          name._help(args.command, str => {
            self.log(str);
            cb();
          });
          return;
        }
        this.log(name.helpInformation());
      } else {
        this.log(this.parent._commandHelp(args.command));
      }
    } else {
      this.log(this.parent._commandHelp(args.command));
    }
    cb();
  });

const vexit = vorpal.find("exit");
if (vexit) {
  vexit.remove();
}

vorpal
  .command("exit")
  .alias("quit")
  .description("Exits Style-O-Matic Command Tools")
  .action(function(args) {
    args.options = args.options || {};
    args.options.sessionId = this.session.id;
    // process.stdout.write('\033c\033E');
    this.log(
      chalk.magenta("-----") +
        chalk.magenta(" EXITING ") +
        chalk.magenta("-----")
    );
    this.log(
      chalk.magenta("-----") +
        chalk.bold.red("  END  OF  LINE  ") +
        chalk.magenta("-----")
    );
    // process.stdout.write('\033E');
    this.parent.exit(args.options);
  });

ascii.animated_banner("Style-O-Matic", () => {
  // process.stdout.write('\033c\033E');

  vorpal
    .log(welcome)
    .delimiter(chalk.bold.magenta("$som"))
    .show()
    .parse(process.argv);

  require("./cli/ai/all.js")(vorpal);
});
