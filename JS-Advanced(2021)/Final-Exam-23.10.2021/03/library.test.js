const library = require("./library");
const {expect} = require("chai");

describe("Library", function() {
    describe("calcPriceOfBook", () => {
        it("should throw an error when book name is not a string", () =>{
            expect(() => library.calcPriceOfBook(10, 2014)).to.throw();
        });
        it("should throw an error when year  is not an integer", () =>{
            expect(() => library.calcPriceOfBook("Harry Potter", 2014.5)).to.throw();
        });
        it("should throw an error when year and book name are not valid ", () =>{
            expect(() => library.calcPriceOfBook(123, 2014.5)).to.throw();
        });

        it("should make 50% discount if year is less than 1980", () => {
            let startingPrice = 20;
            expect(library.calcPriceOfBook("Harry Potter", 1960)).to.equal(`Price of ${"Harry Potter"} is ${(startingPrice * 0.5).toFixed(2)}`);
        })
        it("should make 50% discount if year is equal to 1980", () => {
            let startingPrice = 20;
            expect(library.calcPriceOfBook("Harry Potter", 1980)).to.equal(`Price of ${"Harry Potter"} is ${(startingPrice * 0.5).toFixed(2)}`);
        })

        it("should return the original price when there is not a discount", () => {
            let startingPrice = 20;
            expect(library.calcPriceOfBook("Harry Potter", 1990)).to.equal(`Price of ${"Harry Potter"} is ${(startingPrice).toFixed(2)}`);
        })
     });

     describe("findBook", () => {
         it("should thrown an error when the books array's lenght is 0", () => {
            let booksArr = [];
            let desiredBook = "Harry Potter";
            expect(() => library.findBook(booksArr, desiredBook)).to.throw();
         })

         it("should return a message that the book is found when the book is in the array", () => {
            let booksArr = ["Troy", "Life Style", "Torronto", "Harry Potter"];
            let desiredBook = "Harry Potter";
            expect(library.findBook(booksArr, desiredBook)).to.equal("We found the book you want.");
         })

         it("should return a message that the book is not found when the book is not in the array", () => {
            let booksArr = ["Troy", "Life Style", "Torronto"];
            let desiredBook = "Harry Potter";
            expect(library.findBook(booksArr, desiredBook)).to.equal("The book you are looking for is not here!");
         })
     })

     
     describe("arrangeTheBooks", () => {
         it("should throw an error when the books count is not an integer", () => {
             expect(() => library.arrangeTheBooks(10.2)).to.throw();
         })
         it("should throw an error when the books count is a negative number", () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw();
         })

         it("should return a message that the books are arranged when there is enough space", () => {
             expect(library.arrangeTheBooks(30)).to.equal("Great job, the books are arranged.");
             expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
         })
         it("should return a message shelves are not enough when there is not enough space", () => {
            expect(library.arrangeTheBooks(45)).to.equal("Insufficient space, more shelves need to be purchased.");
           
        })


     })
         
    
});
