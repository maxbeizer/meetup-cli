const {meetups} = require('../test/fixtures/upcoming-meetups')

const fetchResults = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(
      resolve(meetups)
    )
  })
}

module.exports = {fetchResults}
