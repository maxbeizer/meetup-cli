const got = require('got')
const {password, NO_PASSWORD_ERROR_MSG} = require('./auth')

const fetchResults = (_args) => {
  if (!password) {
    throw new Error(NO_PASSWORD_ERROR_MSG)
  }

  return got('https://api.meetup.com/self/calendar',
    {
      'query': `key=${password}`
    }
    )
    .then(res => JSON.parse(res.body))
}

module.exports = {fetchResults}
