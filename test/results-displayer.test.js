/* global test, expect, describe */

const {limitResults, displayResults} = require('../results-displayer')
const {meetups} = require('./fixtures/upcoming-meetups')

describe('limitResults', () => {
  test('limits the results from the API call to a specified number', () => {
    displayResults(meetups)
    const result = limitResults(meetups, 2)
    expect(result.length).toEqual(2)
  })
})

describe('displayResults', () => {
  test('calls displayResult on each result', () => {
    const twoMeetups = meetups.slice(0, 2)
    const result = displayResults(twoMeetups)
    expect(result[0]).toEqual(expect.stringContaining(meetups[0].name))
  })
})
