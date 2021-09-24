function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let sum = Number(num1) + Number(num2);
    console.log(sum);

    let sumElement = document.getElementById('sum');
    sumElement.value = sum;

}
