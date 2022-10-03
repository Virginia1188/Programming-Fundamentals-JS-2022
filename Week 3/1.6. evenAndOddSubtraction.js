function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (i = 0; i <= arr.length - 1; i++) {
        let currentNumber = Number(arr[i]);
        if (currentNumber % 2 == 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    console.log(evenSum - oddSum);
}
solve([1, 2, 3, 4, 5, 6])