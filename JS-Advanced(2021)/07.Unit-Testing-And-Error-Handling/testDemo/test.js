const { expect } = require('chai');
const { isSymmetric } = require('./symmetry');

describe('Symmetry Checker', () => {
    it('return true for symmatric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1,2,3])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    // Test overloading

    it('returns true for symmetric array with odd number of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns true for symmetric array with odd strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    
    it('returns false for non-symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('returns false for string parameter', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('returns false for type-different symmetric array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

    
})

