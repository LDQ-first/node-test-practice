// const assert = require('assert')
const { add, mul } = require('../src/math')
const { should, expect, assert} = require('chai')

/* if (add(2, 3) === 5) {
  console.log('add(2, 3) === 5, OK')
} else {
  console.log('add(2, 3) !== 5, Error')
} */

// assert.equal(add(2,3), 5)

should()

// add(2, 3).should.equal(5)
// expect(add(2, 3)).to.equal(5)
assert.equal(add(2, 3), 5)
