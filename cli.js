#!/usr/bin/env node --harmony

var chalk = require('chalk'),
vorpal = require('vorpal')(),
commands = require('./cli/commands/all.js')(vorpal),
modes = require('./cli/modes/all.js')(vorpal),
ascii = require('./cli/helpers/ascii.js').plugin,
welcome = ascii.banner('Style-O-Matic','sky');
welcome += ascii.space(4);
welcome += chalk.bold.cyan('Greetings user, how can I be of assistance today?') + "\n";
welcome += chalk.cyan("Enter a command to begin, or type ") + chalk.bold.green("`exit`") + chalk.cyan(" to quit.") + "\n";
welcome += ascii.space(1);

const vhelp = vorpal.find('help');
if (vhelp) {
  vhelp.remove();
}

vorpal
  .command('help [command...]')
  .description('Provides help for a given command.')
  .action(function (args, cb) {
    const self = this;
    this.log(chalk.bold.cyan('Here are my interaction details...'));
    this.log(chalk.gray('-------------------------------'));
    this.log(ascii.space(1));
    this.log(chalk.yellow('Style-O-Matic: CLI Utility'));
    this.log(chalk.gray('2016') + " - Steven Jackson");
    this.log(chalk.gray('-------------------------------'));
    this.log(ascii.space(1));
    if (args.command) {
      args.command = args.command.join(' ');
      var name = _.find(this.parent.commands, {_name: String(args.command).toLowerCase().trim()});
      if (name && !name._hidden) {
        if (_.isFunction(name._help)) {
          name._help(args.command, function (str) {
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

const vexit = vorpal.find('exit');
if (vexit) {
  vexit.remove();
}

vorpal
  .command('exit')
  .alias('quit')
  .description('Exits Style-O-Matic Command Tools')
  .action(function (args) {
    args.options = args.options || {};
    args.options.sessionId = this.session.id;
    process.stdout.write('\033c\033E');
    this.log(chalk.magenta('-----') + chalk.magenta(' EXITING ') + chalk.magenta('-----'));
    this.log(chalk.magenta('-----') + chalk.bold.red('  END  OF  LINE  ') + chalk.magenta('-----'));
    process.stdout.write('\033E');
    this.parent.exit(args.options);
  });

ascii.animated_banner('Style-O-Matic', function () {
  process.stdout.write('\033c\033E');

  vorpal
      .log(welcome)
      .delimiter(chalk.bold.magenta('$som'))
      .show()
      .parse(process.argv);

  require('./cli/ai/all.js')(vorpal);
});
