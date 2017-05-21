#!/usr/bin/env node

const program = require('commander')
const pkg = require('./package.json')

program
  .version(`${pkg.version}`)
  .command('upcoming', 'next 10 upcoming meetups for your groups', {isDefault: true})
  .parse(process.argv)
