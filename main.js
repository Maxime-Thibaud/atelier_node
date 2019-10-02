const chalk = require('chalk')
module.exports = () => {
    const names = chalk.blue('Anthony ') + chalk.red('Christopher ') + chalk.green('Valentin ') + chalk.yellow('Maxime ');
    console.log(names);
  }