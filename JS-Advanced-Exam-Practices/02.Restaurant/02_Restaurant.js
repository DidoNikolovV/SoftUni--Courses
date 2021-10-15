class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = {};
    }

    loadProducts(products) {
        let action = 0;
        for(let p of products) {
            let [productName, productQuantity, productTotalPrice] = p.split(" ");
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if(productTotalPrice <= this.budgetMoney) {
                if(this.stockProducts[productName] === undefined) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice; 
                this.history[action++] =  `Successfully loaded ${productQuantity} ${productName}`;

            } else {
                this.history[action++] = `There was not enough money to load ${productQuantity} ${productName}`;
            }
        }

        let values = Object.values(this.history).map(x => x);
        return values.join("\n");
    }

    addToMenu(meal, neededProducts, price) {
        if(this.menu[meal] !== undefined) {
            return `The ${meal} is already in the our menu, try something different.`
        }

        for(let p of neededProducts) {
            let [productName, productQuantity] = p.split(" ");
            productQuantity = Number(productQuantity);

            if(this.menu[meal] === undefined) {
                this.menu[meal] = {};
                this.menu[meal].price = price;
                this.menu[meal].products = [];
            }

            this.menu[meal].products.push(`${productName} ${productQuantity}`);
            // this.menu[meal].products += productQuantity;
        }

        let meals = Object.keys(this.menu);
        if(meals.length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else if(meals.length === 0 || meals.length >= 2) {
            return `Great idea! Now with the ${meal} we have 2 meals in the menu, other ideas?`;
        }
    }

    showTheMenu(){
        if(this.isEmpty(this.menu)) {
            return "Our menu is not ready yet, please come later..."
        }
        
        let entries = Object.entries(this.menu);
        let mealsArr = [];
        for(let [key, value] of entries){
            mealsArr.push(`${key} - $ ${value.price}`);
        }

        return mealsArr.join("\n");
    }


    makeTheOrder(m) {
        if(this.menu[m] === undefined) {
            return `There is not ${m} yet in our menu, do you want to order something else?`
        }
        let productCounter = 0;

        let neededProductsForMeal = Object.values(this.menu[m].products);
        let stockProductsEntries = Object.entries(this.stockProducts);
        for(let [pName, pQuantity] of stockProductsEntries) {
            pQuantity = Number(pQuantity);
            for(let p of neededProductsForMeal) {
                let [neededPName, neededPQuantity] = p.split(" ");
                neededPQuantity = Number(neededPQuantity);
                if(neededPName === pName) {
                   productCounter++;
                   pQuantity -= neededPQuantity;
                   this.stockProducts[pName] -= neededPQuantity;
                }
            }
            
        }

        if(productCounter === neededProductsForMeal.length) {
            this.budgetMoney += this.menu[m].price;
            return `Your order (${m}) will be completed in the next 30 minutes and will cost you ${this.menu[m].price}.`;
        } else {
            return `For the time being, we cannot complete your order (${m}), we are very sorry...`;
        }
        // console.log( this.stockProducts);
        // console.log(neededProductsForMeal); 
    }

    isEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
}


let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());

kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
