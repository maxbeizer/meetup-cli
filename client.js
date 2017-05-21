const Netrc = require('netrc-parser')
const got = require('got')

const netrc = new Netrc()
const password = netrc.machines['api.meetup.com'].password

const fetchResults = (_args) => {
  return got('https://api.meetup.com/self/calendar',
      {
        'query': `key=${password}`
      }
    )
    .then(res => JSON.parse(res.body))
}

module.exports = {fetchResults}
