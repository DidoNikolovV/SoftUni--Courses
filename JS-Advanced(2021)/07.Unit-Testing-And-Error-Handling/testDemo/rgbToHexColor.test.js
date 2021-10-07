const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb'); 

describe('RGB Converter', () => {

    describe('Happy path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        })
    
        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        })
    
        it('converts SoftUni black blue', () => {
            expect(rgbToHexColor(6, 68, 101)).to.equal('#234465');
        })
    })

    describe('Invalid parameters', () => {
        it('returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255)).to.be.undefined;
        })

        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        })

        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        })

        it('returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
        })
    })
    
})