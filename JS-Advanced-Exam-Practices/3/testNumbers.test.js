const testNumbers = require('./testNumbers');
const { expect } = require('chai');


describe('Test Numbers', () => {
    describe("sumNumbers", () => {
        it('should return sum of nums when both parameters are numbers', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(-1, 2)).to.equal('1.00');
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(1.555, 0.333)).to.equal('1.89');
        }) 
        it('should return undefined when parameters are not numbers', () => {
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined;
        })
    })

    describe('numberChecker', () => {
        it('should return even when the input is even number', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        }) 

        it('should return odd when the input is odd number', () => {
            expect(testNumbers.numberChecker(3)).to.contain('odd');
        })
        it('should return odd when the input is odd string number', () => {
            expect(testNumbers.numberChecker('3')).to.contain('odd');
        })
        it('should return even when the input is even string number', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        })
        it('should return even when the input is empty string', () => {
            expect(testNumbers.numberChecker('')).to.contain('even');
        })

        it('should throw an error when the input is not a number', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        })
    })

    describe("averageSumArray", () => {
        it('should return the average sum of the array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([-1, 3, 4])).to.equal(2);
            expect(testNumbers.averageSumArray([2.5, 3.5, 6])).to.equal(4);
        })
    })
})

