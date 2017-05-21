/* global test, expect */

const auth = require('../auth')
const {NO_PASSWORD_ERROR_MSG} = auth
Object.defineProperty(auth, 'password', { value: null })
const {fetchResults} = require('../client')

test('throws an auth error if no password in netrc', () => {
  expect(() => fetchResults()).toThrow(NO_PASSWORD_ERROR_MSG)
})
