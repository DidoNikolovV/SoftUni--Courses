const { expect } = require('chai');
const isSymmetric = require('./symmetry');

describe('Type Test', () => {
    it('Correct type', () => {
        expect(isSymmetric(input)).to.equal(Array.isArray(input));
    })
})

