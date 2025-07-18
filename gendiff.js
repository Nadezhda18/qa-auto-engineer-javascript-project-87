#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'display help for command')
  .action(() => {
    console.log(program.help())
  })

program.parse(process.argv)
