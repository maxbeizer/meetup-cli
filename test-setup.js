const nock = require('nock')
const {beforeEach, afterEach} = require('mocha')

beforeEach(function () {
  nock.disableNetConnect()
})

afterEach(function () {
  nock.cleanAll()
  nock.enableNetConnect()
})
