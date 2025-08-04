#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();

program
  .name('gendiff')
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'display help for command')
  .option('-f, --format', '<type>  output format')
  .action(() => {
    console.log(program.help())
  })

program.parse(process.argv)
