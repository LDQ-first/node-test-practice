const { add, mul } = require('../src/math')
const { should, expect, assert} = require('chai')

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3), 5)
    })
    it('should return -1 when 2 + -3', () => {
      expect(add(2, -3), -1)
    })
    /* it.only('should return -5 when -2 + -3', () => {
      expect(add(-2, -3), -5)
    }) */
    it.skip('should return 0 when 0 + -0', () => {
      expect(add(0, -0), 0)
    })
  })
  describe('mul', () => {
    it('should return 6 when 2 * 3', () => {
      expect(add(2, 3), 6)
    })
  })
})