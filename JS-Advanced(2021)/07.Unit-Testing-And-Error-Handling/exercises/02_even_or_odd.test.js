const { expect } = require('chai');
const { isOddOrEven } = require('./02_even_or_odd');


describe('Even or Odd Checker', () => {
    it('returns undefined if param is not a string', () => {
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven([1,2])).to.be.undefined;
    })

    it('returns even if string length is even', () => {
        expect(isOddOrEven('dogs')).to.equal('even');
    })

    it('returns odd if string length is odd', () => {
        expect(isOddOrEven('dog')).to.equal('odd');
    })

    it('returns odd if multiple strings are passed and the first string is with odd length', () => {
        expect(isOddOrEven('dog', 'cat', 'bird')).to.equal('odd');
    })
    it('returns even if multiple strings are passed and the first string is with even length', () => {
        expect(isOddOrEven('bird', 'cat', 'dog')).to.equal('even');
    })
})