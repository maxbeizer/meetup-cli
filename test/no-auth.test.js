/* global test, expect, jest */

jest.mock('../auth')
const {fetchResults} = require('../client')
const {NO_PASSWORD_ERROR_MSG} = require('../auth')

test('throws an auth error if no password in netrc', () => {
  expect(() => fetchResults()).toThrow(NO_PASSWORD_ERROR_MSG)
})
