#!/usr/bin/env node

const program = require('commander')
const got = require('got')
const Netrc = require('netrc-parser')
const pkg = require('./package.json')

program
  .version(`${pkg.version}`)
  .parse(process.argv)

const displayResult = (result) => {
  console.log('-------------')
  console.log(result.name)
  console.log(result.group.name)
  console.log(result.link)
  console.log('')
}

const displayResults = (results) => {
  results
    .slice(0, 9)
    .map(result => displayResult(result))
}

if(!program.args.length) {
  program.help()
} else {
  const netrc = new Netrc()
  const password = netrc.machines['api.meetup.com'].password

  got('https://api.meetup.com/self/calendar',
      {
        'query': `key=${password}`
      }
     )
    .then(res => JSON.parse(res.body))
    .then(res => displayResults(res))
    .catch(err => console.log(err))
}
