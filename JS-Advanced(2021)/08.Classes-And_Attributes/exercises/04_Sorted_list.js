class List {
    constructor(){
        this.data = [];
        this.size = 0;
    }

   

    add(element) {
        this.data.push(element);
        this.size++;
        this.data.sort((a, b) => a-b);
        return this.data;
        
    }

    remove(index){
        if(index < 0 || index >= this.data.length) {
            throw new Error("Index out of bounds");
        }
        this.data.splice(index, 1);
        this.size--;
        return this.data
    }

    get(index) {
        if(index < 0 || index >= this.data.length) {
            throw new Error("Index out of bounds");
        }
        return this.data[index];
    }

    // get size() {
    //     return this.size;
    // }
    
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
list.add(8);
list.add(6);
console.log(list.size);
