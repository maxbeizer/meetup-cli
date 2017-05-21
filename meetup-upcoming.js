#!/usr/bin/env node

const program = require('commander')
const {fetchResults} = require('./client')
const {displayResults} = require('./results-displayer')

program
  .parse(process.argv)

fetchResults(program.args)
  .then(res => displayResults(res))
  .catch(err => console.log(err))
