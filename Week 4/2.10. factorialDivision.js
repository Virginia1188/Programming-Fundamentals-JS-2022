function factorialDivision(firstNumber, secondNumber) {
    let firstNumFactorial = 1;
    let secondNumFactorial = 1;

    for (let i = 1; i <= firstNumber; i++) {
        let currentNumber = i * firstNumFactorial;
        firstNumFactorial = currentNumber;
    }
    for (let j = 1; j <= secondNumber; j++) {
        let currentNumber = j * secondNumFactorial;
        secondNumFactorial = currentNumber;
    }
    let result = firstNumFactorial / secondNumFactorial;
    console.log(result.toFixed(2));
}
factorialDivision(6, 2);