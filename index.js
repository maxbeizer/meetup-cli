#!/usr/bin/env node

const program = require('commander')
const pkg = require('./package.json')
const {fetchResults} = require('./client')
const {displayResults} = require('./results-displayer')

program
  .version(`${pkg.version}`)
  .parse(process.argv)

if(!program.args.length) {
  program.help()
} else {
  fetchResults(program.args)
    .then(res => displayResults(res))
    .catch(err => console.log(err))
}
