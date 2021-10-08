const { expect } = require('chai');
const { lookupChar } = require('./03_charLookup');

describe('Gets the char at given index', () => {
    it('returns undefined if first param is not a string', () => {
        expect(lookupChar(5, 2)).to.be.undefined;
    });

    it('returns undefined if second param is not an integer', () => {
        expect(lookupChar('dogs', '5')).to.be.undefined;
    })

    it('returns "Incorrect index" if index is bigger than the string length', () => {
        expect(lookupChar('dogs', 6)).to.equal('Incorrect index');
    })

    it('returns the char at given index', () => {
        expect(lookupChar('dogs', 2)).to.equal('g');
    })

    //Test overloading
    it('returns undefined if both args are incorrect type', () => {
        expect(lookupChar(2, '3')).to.be.undefined;
    })

    it('returns undefined if index is floating point', () => {
        expect(lookupChar('dogs', 2.4)).to.be.undefined;
    })

    it('returns "Incorrect index" if index is negative number', () => {
        expect(lookupChar('dogs', -7)).to.equal('Incorrect index');
    })

})