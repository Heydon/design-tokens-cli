#!/usr/bin/env node

import { program as cli } from 'commander';
import { transform } from './utils/transform.js';

cli.description('Process spec-conforming design tokens JSON');
cli.name('designTokens');
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command('transform')
  .argument('[configPath]', 'The config file path')
  .action(transform);

cli.parse(process.argv);