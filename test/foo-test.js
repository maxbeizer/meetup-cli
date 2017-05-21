const {it, describe} = require('mocha')
const {expect} = require('chai')

describe('foo', function () {
  it('does things', function * () {
    const foo = 'foo'
    expect(foo).to.equal('foo')
  })
})
