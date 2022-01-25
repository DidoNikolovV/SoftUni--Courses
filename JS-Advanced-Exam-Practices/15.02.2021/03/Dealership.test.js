const dealership = require('./Dealership');
const { expect } = require('chai');


describe("Tests" ,() => {
    describe("newCarCost",() => {
        it("should return discounted amount of money when you return old car", () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        });
        it("should return new car price when old car model is not in the discount old cars", () => {
            expect(dealership.newCarCost('BMW M3', 10000)).to.equal(10000);
        })
     });

     describe("carEquipment", () => {
         it("should return extras for your car based on the index of the second arr", () => {
            expect(dealership.carEquipment(['heated seat', 'sliding roof', 'sports rims', 'navigation'], [0, 3])).to.deep.equal(['heated seat', 'navigation'])
         })
     })

     describe("euroCategory", () => {
         it("should return the final price you have to pay based on your category", () => {
             expect(dealership.euroCategory(5)).to.contain(14250);
             expect(dealership.euroCategory(4)).to.contain(14250);
             expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
         })

     })
     
});
