#!/usr/bin/env node

import { program as cli } from 'commander';
import { transforms } from './utils/transforms.js';

cli.description('Process spec-conforming design tokens JSON');
cli.name('tokens');
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command('transform')
  .argument('<configFile>', 'The config file path')
  .action(transforms);

cli.parse(process.argv);