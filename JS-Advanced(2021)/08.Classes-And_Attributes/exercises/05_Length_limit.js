class Stringer {
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(value) {
        return this.innerLength += value;
    }

    decrease(value){
        if(this.innerLength - value < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
        return this.innerLength;
    }

    toString(){
        if(this.innerString.length > this.innerLength) {
            this.innerString = this.innerString.slice(0, this.innerLength);
            this.innerString+= "...";
        } else if (this.innerLength == 0) {
            return '...';
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
