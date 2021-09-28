function cityTaxes(name, population, treasury){
    let cityObj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function() {
            return Math.floor(this.treasury += this.population * this.taxRate);
        },
        applyGrowth: function(percentage){
            return Math.floor(this.population += this.population * (percentage / 100));
        },
        applyRecession: function(percentage) {
            return Math.floor(this.treasury -= this.treasury * (percentage / 100));
        }
    } 

    return cityObj;
}
const city = cityTaxes('Sofia', 2000000, 1000000);

//testing if all the properties are correct
console.log((city.name));
console.log((city.population))
console.log((city.treasury))
console.log((city.taxRate))

