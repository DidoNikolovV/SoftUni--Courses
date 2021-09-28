function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;

    let result = firstNum - secondNum;

    let  resultArea = document.getElementById('result');
    resultArea.textContent = result;
}