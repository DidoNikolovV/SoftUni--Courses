const numberOperations = require('./numberOperations');
const { expect } = require('chai');


describe("numberOperations", () => {
    describe("powNumber", () => {
        it("should return power of the given number", () => {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
     });

     describe("numberChecker", () => {
         it('should throw an error when input is not a number', () => {
             expect(() => numberOperations.numberChecker('a')).to.throw();
             expect(() => numberOperations.numberChecker([1, 2, 3])).to.throw();
         })
         it('should return a message when the number is lower than 100', () => {
             expect(numberOperations.numberChecker(50)).to.equal("The number is lower than 100!");
         })
         it('should return a message when the input is a string number and is lower than 100', () => {
             expect(numberOperations.numberChecker('50')).to.equal("The number is lower than 100!");
         })
         it('should return a message when the input is a float number and is lower than 100', () => {
             expect(numberOperations.numberChecker(50.2)).to.equal("The number is lower than 100!");
         })
         it('should return a message when the input is a float number and is lower than 100', () => {
             expect(numberOperations.numberChecker('50.2')).to.equal("The number is lower than 100!");
         })
         it('should return a message when the number is greater or equal to 100', () => {
             expect(numberOperations.numberChecker(110)).to.equal("The number is greater or equal to 100!");
         })
         it('should return a message when the input is floating point number and is greater or equal to 100', () => {
             expect(numberOperations.numberChecker(110.2)).to.equal("The number is greater or equal to 100!");
         })
         it('should return a message when the input is string number and is greater or equal to 100', () => {
             expect(numberOperations.numberChecker('110')).to.equal("The number is greater or equal to 100!");
         })
         it('should return a message when the input is string number and is greater or equal to 100', () => {
             expect(numberOperations.numberChecker('100')).to.equal("The number is greater or equal to 100!");
         })
         it('should return a message when the input is string number and is greater or equal to 100', () => {
             expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
         })
     });

     describe("sumArrays", () => {
         it('should return the sum of the two arrays by indexes', () => {
             expect(numberOperations.sumArrays([3, 2, 1], [6, 1])).to.eql([9, 3, 1]);  
         })

        //  it('should return the sum of the two arrays by indexes', () => {
        //     expect(numberOperations.sumArrays([3, 2, 1], [6, 1, 2])).to.deepEqual([9, 3, 3]);  
        // })
     })
});
