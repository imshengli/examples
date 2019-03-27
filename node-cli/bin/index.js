#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const program = require('commander');
const init = require('../src/commands/init');

program
  .version('1.0.0','-v, --version');

program
  .command('init')
  .description('init')
  .action(init);

program.parse(process.argv);
