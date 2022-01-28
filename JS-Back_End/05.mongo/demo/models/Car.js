const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    name: { type: String, required: [true, 'Car listing must have a name!'] },
    price: { 
        type: Number,
        default: 0,
        min: [0, 'Price cannot be negative. Attempted to set price {VALUE}.']  
    }
});
carSchema.methods.startEngine = function () {
    console.log(`${this.name} goes vroom!`);
};

carSchema.virtual('VAT').get(function () {
    return this.price * 0.2;
});


const Car = model('Car', carSchema);

module.exports = Car;