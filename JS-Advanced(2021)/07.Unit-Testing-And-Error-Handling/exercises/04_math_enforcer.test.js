const { expect } = require('chai');
const { mathEnforcer } = require('./04_math_enforcer');


describe('mathEnforcer', () => {


    describe('addFive', () => {
        it('returns undefined if param is not a number'), () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
        }
    
        it('adds 5 if param is a number'), () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(5.2)).to.equal(10.2);
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        }
    })  

    describe('subtractTen', () => {
        it('returns undefined if param is not a number'), () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1, 2])).to.be.undefined;
        }
    
        it('subtracts 10 if param is a number'), () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(12.5)).to.equal(2.5);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        }
    })  

    describe('sum', () => {
        it('returns undefined if any of params are incorrect type'), () => {
            expect(mathEnforcer.sum('5', 3)).to.be.undefined;
            expect(mathEnforcer.sum(3, '2')).to.be.undefined;
            expect(mathEnforcer.sum([1, 2], '2')).to.be.undefined;
            expect(mathEnforcer.sum('2', [1, 2])).to.be.undefined;
        }
    
        it('returns the sum of both nums'), () => {
            expect(mathEnforcer.sum(5, 6)).to.equal(11);
            expect(mathEnforcer.sum(5, 6.5)).to.equal(11.5);
            expect(mathEnforcer.sum(-3, -2)).to.equal(-5);
        }
    })  
})
