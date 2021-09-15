function aggregateElements(numbers){
    function sum(){
        let sum = 0;
        for (let num of numbers) {
            sum += num;
        }
        console.log(sum);
    }

    function sumOfInverseValues(){
        let sum = 0;
        for (let num of numbers) {
            sum += 1/num;
        }

        console.log(sum);
    }

    function concat(){
        let result = '';
        for (let num of numbers) {
            result += num;
        }

        console.log(result);
    }

    sum();
    sumOfInverseValues();
    concat();
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);