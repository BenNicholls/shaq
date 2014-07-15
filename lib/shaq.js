#!/usr/bin/env node

// Useful things
var args = require('minimist')(process.argv.slice(2));
var colours = require('./colours');
var program = require('commander');

// These are the things shaq can do
var skillz = require('./skillz')(colours);

program
  .version(require('../package.json').version)
  .option('hello', 'Say hello')
  .option('rap', 'Make shaq rap')
  .option('recite', 'Shaq recites a poem')
  .option('joke', 'Shaq gets silly')
  .parse(process.argv);

var match = false;
for (var skill in skillz) {
  if (program[skill]) {
    skillz[skill]();
    match = true;
  }
}
if (!match) {
  program.help();
}


