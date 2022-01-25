const cinema = require('./Cinema');
const {expect} = require('chai');

describe("Cinema …", function() {
    describe("showMovies", function() {
        it("should return message when array's length is 0", function() {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        });
        it('should return movies in the array, separated by comma', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        })
     });
     describe("ticketPrice", () => {
         it('should return the price according to the type when the projection type is in the schedule', () => {
             expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
             expect(cinema.ticketPrice('Normal')).to.equal(7.50);
             expect(cinema.ticketPrice('Discount')).to.equal(5.50);
         })
         it('should throw an error when projection type is not in the schedule', () => {
             expect(() => {cinema.ticketPrice('asd')}).to.throw();
         })
     })

     describe("swapSeatsInHall", () => {
         it("should return unsuccessful message when one of two nums doesn't exists", () => {
            expect(cinema.swapSeatsInHall(1)).to.equal("Unsuccessful change of seats in the hall.");
            // expect(cinema.swapSeatsInHall(undefined, 1)).to.equal("Unsuccessful change of seats in the hall.");
            // expect(cinema.swapSeatsInHall(2, undefined)).to.equal("Unsuccessful change of seats in the hall.");  
         })

         it('should return unsuccesful message when one of the numbers is greater than the capacity of the hall', () => {
             expect(cinema.swapSeatsInHall(21, 10)).to.equal("Unsuccessful change of seats in the hall.");
             expect(cinema.swapSeatsInHall(10, 21)).to.equal("Unsuccessful change of seats in the hall.");
            
         })

         it('should return unsuccessful message when seats are less or equal to 0', () => {
            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1, -2)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, -1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.");

         })

         it('should return unsuccessful message when seats are equals', () => {
            expect(cinema.swapSeatsInHall(10, 10)).to.equal("Unsuccessful change of seats in the hall.");
            
         })

         it('should return successful message when input numbers are right', () => {
            expect(cinema.swapSeatsInHall(10, 20)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(15, 12)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 12)).to.equal("Successful change of seats in the hall.");
         })

         it('should return unnsuccessful message if input is invalid', () => {
            expect(cinema.swapSeatsInHall("11", "asd")).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall([1, 2, 3], 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10.2, 12.3)).to.equal("Unsuccessful change of seats in the hall.");
         })

         
     })
});
