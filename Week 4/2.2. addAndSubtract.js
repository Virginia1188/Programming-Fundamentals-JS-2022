function solve(numOne, numTwo, numThree) {
    function sum(numOne, numTwo) {
        let result = numOne + numTwo;
        return result;
    }
    function subtract(result, numThree) {
        return result - numThree;
    }
    console.log(subtract(sum(numOne, numTwo), numThree));
}
solve(23,
    6,
    10
);