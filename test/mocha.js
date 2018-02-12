const { add, mul, cover } = require('../src/math')
const { expect } = require('chai')

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
  describe('#mul', () => {
    it('should return 6 when 2 * 3', () => {
      expect(mul(2, 3), 6)
    })
  })
  describe('#cover', () => {
    it('should return 1 when cover(2, 1)', () => {
      expect(cover(2, 1)).to.equal(1)
    })
    it('should return 3 when cover(1, 2)', () => {
      expect(cover(1, 2)).to.equal(3)
    })
    it('should return 4 when cover(2, 2)', () => {
      expect(cover(2, 2)).to.equal(4)
    })
  })
})
