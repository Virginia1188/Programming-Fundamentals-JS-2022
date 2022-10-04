function simpleCalculator(numOne, numTwo, operator) {

    function add(numOne, numTwo) {
        return numOne + numTwo;
    }
    function subtract(numOne, numTwo) {
        return numOne - numTwo;
    }
    function multiply(numOne, numTwo) {
        return numOne * numTwo;
    }
    function divide(numOne, numTwo) {
        return numOne / numTwo;
    }
    switch (operator) {
        case "add": console.log(add(numOne, numTwo)); break;
        case "subtract": console.log(subtract(numOne, numTwo)); break;
        case "multiply": console.log(multiply(numOne, numTwo)); break;
        case "divide": console.log(divide(numOne, numTwo)); break;
    }
}
simpleCalculator(40,
    8,
    'divide'

);