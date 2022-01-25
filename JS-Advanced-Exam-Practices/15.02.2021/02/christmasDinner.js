class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget(){
        return this.budget;
    }

    set budget(value) {
        if(value < 0) {
            throw new Error('The Budget cannot be a negative number');
        }

        this.budget = value;
    }

    shopping(product) {
        let [productName, productPrice] = product.split(", ");
        productPrice = Number(productPrice);

        if(this.budget < productPrice) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(productName);
        this.budget -= productPrice;
        return `You have successfully bought ${productName}!`;
    }

    recipes(recipe) {
        let recipeName = recipe['recipeName'];
        let productsList = recipe['productsList'];
        let matchedProducts = 0;
        for(let p of this.products) {
            for(let requiredP of requiredProducts) {
                if(requiredP == p) {
                    matchedProducts++;
                }
            }
        }

        if(matchedProducts == productsList.length) {
            this.dishes.push({recipeName, productsList})
            return `${recipeName} has been successfully cooked!`
        } else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish) {
        if(!this.dishes.some(dish)) {
            throw new Error('We do not have this dish');
        }

        if(this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let entries = Object.entries(this.guests);
        let result = ``;
        for(let k of entries) {
            result += `${k} will eat ${entries[k]}, which consists of ${this.dishs[entries[k]]}` 
        }
        return result;

    }


}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

