/* global test, expect, jest */

jest.mock('../client')
const {fetchResults} = require('../client')

test('fetches results from the meetup API and returns a promise', () => {
  return fetchResults()
    .then(res => expect(res[0].name).toEqual('Introduction to Command Line Tools with NodeJS with Max Beizer'))
})
